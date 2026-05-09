#!/usr/bin/env python3
"""
Goethe-Institut Wortlisten crawler.

Downloads the official Goethe-Zertifikat A1/A2/B1 word-list PDFs, parses
them, looks up English translations via the free DWDS API, and writes
TypeScript files that match the VocabWord interface used by this project.

Usage
-----
    pip install requests pdfplumber
    python scripts/crawl_wortliste.py              # all three levels
    python scripts/crawl_wortliste.py --level A1   # single level
    python scripts/crawl_wortliste.py --dry-run    # parse only, no TS output

Output
------
    data/vocabulary/wortliste_a1.ts
    data/vocabulary/wortliste_a2.ts
    data/vocabulary/wortliste_b1.ts
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import textwrap
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterator

try:
    import requests
except ImportError:
    sys.exit("Missing dependency: pip install requests pdfplumber")

try:
    import pdfplumber
except ImportError:
    sys.exit("Missing dependency: pip install pdfplumber")


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

# Official Goethe-Institut PDF URLs.
# These paths change every few years.  If the primary URL returns 404, the
# script will try each fallback in order.
# To find the current URL: https://www.goethe.de/de/spr/kup/prf.html
#   -> select the certificate level -> look for "Wortliste" PDF download.
PDF_URLS: dict[str, list[str]] = {
    "A1": [
        "https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf",
        "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A1_Wortliste.pdf",
        "https://www.goethe.de/dam/jcr:8f17c3e5-6e38-4a59-bd8e-a5c8cce5e0a6/Goethe-Zertifikat_A1_Wortliste.pdf",
        "https://www.goethe.de/dam/jcr:3ed69b71-db47-4b7b-b54d-92df4e17dab1/A1_SD1_Wortliste_02.pdf",
    ],
    "A2": [
        "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf",
        "https://www.goethe.de/pro/relaunch/prf/sr/Goethe-Zertifikat_A2_Wortliste.pdf",
        "https://www.goethe.de/dam/jcr:f567d0bd-7078-40b3-b49f-1e4ef498d2d7/Goethe-Zertifikat_A2_Wortliste.pdf",
    ],
    "B1": [
        "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf",
        "https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_B1_Wortliste.pdf",
        "https://www.goethe.de/dam/jcr:7a24e2e0-26dc-4c6b-abbe-af8b1e7cacc7/Goethe-Zertifikat_B1_Wortliste.pdf",
    ],
}

# DWDS (Digitales Wörterbuch der deutschen Sprache) public JSON endpoint.
# Rate limit: ~1 req/s is safe.
DWDS_API = "https://www.dwds.de/api/wb/snippet/?q={word}"

# Where to write output TypeScript files (relative to repo root).
OUTPUT_DIR = Path(__file__).parent.parent / "data" / "vocabulary"

# Regex patterns for the Goethe Wortliste PDF layout.
# The PDFs use a consistent two-column structure:
#   <headword>   [article]   [plural]   [grammar note]
# Columns are separated by two or more spaces after extraction.
ARTICLE_RE = re.compile(r"^(der|die|das)\b", re.IGNORECASE)

# German umlauts / special chars to keep IDs ASCII-safe.
_UMLAUT_MAP = str.maketrans("äöüÄÖÜß", "aouAOUs")


# ---------------------------------------------------------------------------
# Data model
# ---------------------------------------------------------------------------

@dataclass
class VocabWord:
    id: str
    german: str
    article: str | None
    plural: str | None
    english: str
    example: str
    example_translation: str
    topic: str
    level: str  # A1 | A2 | B1

    def as_ts_object(self) -> str:
        """Render as a single-line TypeScript object literal."""
        parts: list[str] = [
            f"id: '{self.id}'",
            f"german: '{_esc(self.german)}'",
        ]
        if self.article:
            parts.append(f"article: '{self.article}'")
        if self.plural:
            parts.append(f"plural: '{_esc(self.plural)}'")
        parts += [
            f"english: '{_esc(self.english)}'",
            f"example: '{_esc(self.example)}'",
            f"exampleTranslation: '{_esc(self.example_translation)}'",
            f"topic: '{self.topic}'",
            f"level: '{self.level}'",
        ]
        return "{ " + ", ".join(parts) + " }"


def _esc(s: str) -> str:
    """Escape single quotes for TypeScript string literals."""
    return s.replace("'", "\\'")


# ---------------------------------------------------------------------------
# PDF download
# ---------------------------------------------------------------------------

def download_pdf(urls: list[str], cache_dir: Path, level: str) -> Path:
    """Try each URL in *urls* in order; return path to the first that downloads.

    Results are cached by level so repeated runs skip the network entirely.
    """
    cache_dir.mkdir(parents=True, exist_ok=True)
    cached = cache_dir / f"wortliste_{level.lower()}.pdf"
    if cached.exists():
        print(f"  [cache] {cached.name}")
        return cached

    last_err: Exception | None = None
    for url in urls:
        print(f"  [try]  {url}")
        try:
            resp = requests.get(url, timeout=30)
            resp.raise_for_status()
            cached.write_bytes(resp.content)
            print(f"  [saved] {cached} ({len(resp.content) // 1024} KB)")
            return cached
        except Exception as exc:
            print(f"  [fail] {exc}")
            last_err = exc

    raise RuntimeError(
        f"Could not download the {level} Wortliste PDF. "
        "All known URLs returned errors (see above).\n"
        "To fix: download the PDF manually from "
        "https://www.goethe.de/de/spr/kup/prf.html "
        f"and pass it with: --pdf-{level.lower()} /path/to/file.pdf"
    ) from last_err


# ---------------------------------------------------------------------------
# PDF parsing
# ---------------------------------------------------------------------------

# Signals the start of actual vocabulary content.
# Anchored to line start so mid-sentence mentions ("...die Wortgruppen...") don't match.
_VOCAB_START_RE = re.compile(r"^(wortgruppen|alphabetisch)", re.IGNORECASE)
# Single uppercase letter used as alphabetical section divider (A, B, C …).
_LETTER_SECTION_RE = re.compile(r"^[A-ZÄÖÜ]$")
# Plural suffix after comma: "-n", "-e", "-s", "-en", etc.
_PLURAL_SUFFIX_RE = re.compile(r"^(-[äöüÄÖÜßa-zA-Z\-]+)")


def parse_pdf(pdf_path: Path, level: str) -> list[tuple[str, str, str | None, str | None]]:
    """
    Parse a Goethe Wortliste PDF.

    Returns a list of (headword, topic, article_or_None, plural_or_None).
    The *topic* is the current letter section (a, b, c …) or "general".

    The Goethe A1/A2/B1 PDFs have a consistent format once the word-list begins:
      [article] headword[, -plural_suffix] Example sentence.
    Entry lines start with a lowercase letter (article or first letter of the word).
    Continuation/example-only lines start with an uppercase letter and are skipped.
    """
    results: list[tuple[str, str, str | None, str | None]] = []
    current_topic = "general"
    in_vocabulary = False

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text(x_tolerance=2, y_tolerance=2) or ""
            for raw_line in text.splitlines():
                line = raw_line.strip()
                if not line:
                    continue

                # Detect start of vocabulary section; ignore if line contains digits
                # (those are TOC lines like "9 Alphabetische Wortliste").
                if _VOCAB_START_RE.search(line) and not re.search(r"\d", line):
                    in_vocabulary = True
                    # "Alphabetische A" → extract trailing letter as initial topic
                    tokens = line.split()
                    last = tokens[-1] if tokens else ""
                    if len(last) == 1 and last.isupper() and last.isalpha():
                        current_topic = last.lower()
                    continue

                if not in_vocabulary:
                    continue

                # Alphabetical section dividers set the topic slug.
                if _LETTER_SECTION_RE.match(line):
                    current_topic = line.lower()
                    continue

                word, article, plural = _parse_entry_line(line)
                if word:
                    results.append((word, current_topic, article, plural))

    return results


def _parse_entry_line(line: str) -> tuple[str | None, str | None, str | None]:
    """
    Extract (headword, article, plural) from one Goethe Wortliste PDF line.

    Actual format in the PDF (discovered by inspection):
      [article] headword[, -plural_suffix] Example sentence.

    Entry lines start with a lowercase letter (either the article or the word).
    Lines starting with uppercase are continuation/example lines — skipped.
    """
    if not line or len(line) < 2:
        return None, None, None
    if re.match(r"^\d", line):
        return None, None, None

    article: str | None = None
    rest = line

    # Extract leading article if present (always lowercase in entry lines).
    art_m = ARTICLE_RE.match(line)
    if art_m:
        article = art_m.group(1).lower()
        rest = line[art_m.end():]
    elif line[0].isupper():
        # Uppercase-starting line with no article → continuation/example sentence.
        return None, None, None

    # Split on first comma: left part = headword (possibly + extra words from example),
    # right part = plural suffix + example.
    comma_parts = re.split(r",\s*", rest, maxsplit=1)
    tokens = comma_parts[0].split()
    if not tokens:
        return None, None, None

    headword = tokens[0].rstrip(".")  # strip stray trailing period
    if len(headword) < 2:
        return None, None, None
    if re.search(r"\d", headword):
        return None, None, None
    if not re.search(r"[a-zA-ZäöüÄÖÜß]", headword):
        return None, None, None
    if "/" in headword:  # merged two-column wortgruppenliste cells (e.g. "Samstag/Sonnabend")
        return None, None, None
    if headword.lower() in ("wortliste", "wortgruppenliste", "alphabetische", "usw"):
        return None, None, None

    plural: str | None = None
    if len(comma_parts) > 1:
        suffix_m = _PLURAL_SUFFIX_RE.match(comma_parts[1].strip())
        if suffix_m:
            suffix = suffix_m.group(1)  # e.g. "-n", "-e", "-s"
            plural = f"die {headword}{suffix[1:]}"  # e.g. "die Ansagen"

    return headword, article, plural


# ---------------------------------------------------------------------------
# English translation via DWDS API
# ---------------------------------------------------------------------------

def fetch_english(word: str, *, retries: int = 2, delay: float = 1.0) -> str:
    """
    Look up *word* in DWDS and return the first English gloss found.
    Falls back to an empty string if nothing is found.
    """
    url = DWDS_API.format(word=requests.utils.quote(word))
    for attempt in range(retries + 1):
        try:
            resp = requests.get(url, timeout=10)
            if resp.status_code == 200:
                data = resp.json()
                return _extract_gloss(data)
            if resp.status_code == 404:
                return ""
        except Exception:
            pass
        if attempt < retries:
            time.sleep(delay)
    return ""


def _extract_gloss(data: dict) -> str:  # type: ignore[type-arg]
    """Pull the first English definition from a DWDS snippet payload."""
    # DWDS returns HTML snippets; look for <abbr title="englisch"> or similar.
    # The JSON has a 'wb' key with rendered HTML.
    html: str = data.get("wb", "") or ""

    # Simple heuristic: find text inside <span lang="en"> or after "engl."
    en_match = re.search(r'lang=["\']en["\'][^>]*>(.*?)<', html)
    if en_match:
        return re.sub(r"<[^>]+>", "", en_match.group(1)).strip()

    eng_match = re.search(r"engl\.\s+([^<;,]+)", html)
    if eng_match:
        return eng_match.group(1).strip()

    return ""


# ---------------------------------------------------------------------------
# Example sentence generation (template-based fallback)
# ---------------------------------------------------------------------------

_EXAMPLE_TEMPLATES: dict[str, tuple[str, str]] = {
    # article -> (german_template, english_template)
    "der": (
        "Der {word} ist wichtig.",
        "The {word_en} is important.",
    ),
    "die": (
        "Die {word} ist interessant.",
        "The {word_en} is interesting.",
    ),
    "das": (
        "Das {word} ist schön.",
        "The {word_en} is nice.",
    ),
    None: (
        'Ich lerne das Wort "{word}".',
        'I am learning the word "{word_en}".',
    ),
}


def make_example(headword: str, article: str | None, english: str) -> tuple[str, str]:
    """Return a (german_sentence, english_sentence) example pair."""
    template_de, template_en = _EXAMPLE_TEMPLATES.get(article, _EXAMPLE_TEMPLATES[None])
    en_word = english if english else headword
    return (
        template_de.format(word=headword),
        template_en.format(word_en=en_word),
    )


# ---------------------------------------------------------------------------
# TypeScript output
# ---------------------------------------------------------------------------

_TS_HEADER = """\
// Auto-generated by scripts/crawl_wortliste.py
// Source: Goethe-Institut Wortliste {level}
// DO NOT EDIT — re-run the crawler to refresh
import type {{ VocabWord }} from '@/types'

export const wortliste{level}: VocabWord[] = [
"""

_TS_FOOTER = "]\n"


def write_typescript(words: list[VocabWord], level: str, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    lines = [_TS_HEADER.format(level=level)]
    for w in words:
        lines.append(f"  {w.as_ts_object()},\n")
    lines.append(_TS_FOOTER)
    out_path.write_text("".join(lines), encoding="utf-8")
    print(f"  [wrote] {out_path} ({len(words)} words)")


# ---------------------------------------------------------------------------
# ID generation
# ---------------------------------------------------------------------------

def make_id(level: str, index: int, topic: str) -> str:
    prefix = (level + topic[:2]).lower().translate(_UMLAUT_MAP)
    prefix = re.sub(r"[^a-z0-9]", "", prefix)[:4]
    return f"{prefix}-{index:03d}"


# ---------------------------------------------------------------------------
# Main pipeline
# ---------------------------------------------------------------------------

def process_level(
    level: str,
    *,
    cache_dir: Path,
    dry_run: bool,
    translate: bool,
    limit: int | None,
    local_pdf: Path | None = None,
) -> list[VocabWord]:
    print(f"\n{'='*60}")
    print(f"  Level {level}")
    print(f"{'='*60}")

    if local_pdf:
        if not local_pdf.exists():
            sys.exit(f"Error: --pdf-{level.lower()} path not found: {local_pdf}")
        pdf_path = local_pdf
        print(f"  [local] {pdf_path}")
    else:
        pdf_path = download_pdf(PDF_URLS[level], cache_dir, level)
    raw_entries = parse_pdf(pdf_path, level)
    print(f"  [parsed] {len(raw_entries)} raw entries")

    if limit:
        raw_entries = raw_entries[:limit]

    words: list[VocabWord] = []
    seen: set[str] = set()

    for idx, (headword, topic, article, plural) in enumerate(raw_entries, start=1):
        # Deduplicate
        key = headword.lower()
        if key in seen:
            continue
        seen.add(key)

        # Build full German form with article
        german = f"{article} {headword}" if article else headword
        if article:
            german = f"{article.capitalize()} {headword}"

        # English translation
        english = ""
        if translate:
            english = fetch_english(headword)
            time.sleep(0.8)  # polite rate limiting

        example_de, example_en = make_example(headword, article, english)

        words.append(VocabWord(
            id=make_id(level, idx, topic),
            german=german,
            article=article,
            plural=plural,
            english=english,
            example=example_de,
            example_translation=example_en,
            topic=topic,
            level=level,
        ))

    print(f"  [deduped] {len(words)} unique entries")

    if not dry_run:
        slug = f"wortliste_{level.lower()}.ts"
        write_typescript(words, level, OUTPUT_DIR / slug)

    return words


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Crawl Goethe-Institut Wortlisten -> TypeScript VocabWord files",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=textwrap.dedent("""\
            Examples
            --------
              python scripts/crawl_wortliste.py
              python scripts/crawl_wortliste.py --level A1
              python scripts/crawl_wortliste.py --dry-run --limit 20
              python scripts/crawl_wortliste.py --no-translate
        """),
    )
    parser.add_argument("--level", choices=["A1", "A2", "B1"], help="Process a single level only")
    parser.add_argument("--dry-run", action="store_true", help="Parse only; do not write TS files")
    parser.add_argument("--no-translate", dest="translate", action="store_false", default=True,
                        help="Skip DWDS translation lookups (faster, English fields left blank)")
    parser.add_argument("--limit", type=int, metavar="N", help="Cap entries per level (useful for testing)")
    parser.add_argument("--cache-dir", type=Path, default=Path(".cache/pdfs"),
                        help="Directory to cache downloaded PDFs (default: .cache/pdfs)")
    # Manual PDF overrides for when the download URLs have changed
    parser.add_argument("--pdf-a1", type=Path, metavar="FILE", help="Use a locally downloaded A1 PDF")
    parser.add_argument("--pdf-a2", type=Path, metavar="FILE", help="Use a locally downloaded A2 PDF")
    parser.add_argument("--pdf-b1", type=Path, metavar="FILE", help="Use a locally downloaded B1 PDF")
    args = parser.parse_args()

    local_pdfs: dict[str, Path | None] = {
        "A1": args.pdf_a1,
        "A2": args.pdf_a2,
        "B1": args.pdf_b1,
    }

    levels = [args.level] if args.level else list(PDF_URLS)

    all_words: dict[str, list[VocabWord]] = {}
    for level in levels:
        all_words[level] = process_level(
            level,
            cache_dir=args.cache_dir,
            dry_run=args.dry_run,
            translate=args.translate,
            limit=args.limit,
            local_pdf=local_pdfs[level],
        )

    print(f"\n{'='*60}")
    total = sum(len(v) for v in all_words.values())
    print(f"  Done. {total} words across {len(levels)} level(s).")
    if args.dry_run:
        print("  (dry-run: no files written)")
    print(f"{'='*60}\n")

    if args.dry_run:
        for level, words in all_words.items():
            print(f"\n-- {level} sample (first 5) --")
            for w in words[:5]:
                print(f"  {w.as_ts_object()}")


if __name__ == "__main__":
    main()
