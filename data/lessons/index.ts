import type { Lesson } from '@/types'

export const lessons: Lesson[] = [
  // ─── A1 ────────────────────────────────────────────────────────────────────
  {
    slug: 'articles',
    title: 'Articles: der, die, das',
    level: 'A1',
    order: 1,
    description: 'Learn the three German articles and grammatical gender.',
    icon: '📰',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'What are articles?',
        content: 'In German, every noun has a grammatical gender: masculine (der), feminine (die), or neuter (das). Unlike English, German has three definite articles that must match the noun\'s gender. The indefinite articles are ein (a/an) for masculine and neuter, and eine for feminine.',
      },
      {
        type: 'table',
        title: 'Definite Articles (Nominative)',
        table: {
          headers: ['Gender', 'Article', 'Example'],
          rows: [
            ['Masculine', 'der', 'der Mann (the man)'],
            ['Feminine', 'die', 'die Frau (the woman)'],
            ['Neuter', 'das', 'das Kind (the child)'],
            ['Plural (all)', 'die', 'die Kinder (the children)'],
          ],
        },
      },
      {
        type: 'table',
        title: 'Indefinite Articles (Nominative)',
        table: {
          headers: ['Gender', 'Article', 'Example'],
          rows: [
            ['Masculine', 'ein', 'ein Mann (a man)'],
            ['Feminine', 'eine', 'eine Frau (a woman)'],
            ['Neuter', 'ein', 'ein Kind (a child)'],
          ],
        },
      },
      {
        type: 'tip',
        content: 'There is no guaranteed rule for gender — you must learn each noun with its article. A helpful trick: words ending in -ung, -heit, -keit, -schaft are almost always feminine (die).',
      },
      {
        type: 'examples',
        title: 'Examples in sentences',
        examples: [
          { german: 'Der Hund ist groß.', english: 'The dog is big.', highlight: 'Der' },
          { german: 'Die Katze schläft.', english: 'The cat is sleeping.', highlight: 'Die' },
          { german: 'Das Buch ist interessant.', english: 'The book is interesting.', highlight: 'Das' },
          { german: 'Ich habe einen Hund.', english: 'I have a dog.', highlight: 'einen' },
        ],
      },
    ],
    quiz: [
      { id: 'art-q1', question: 'What is the article for "Tisch" (table)?', options: ['der', 'die', 'das', 'ein'], correct: 0, explanation: '"der Tisch" — Tisch is masculine.' },
      { id: 'art-q2', question: 'What is the article for "Stadt" (city)?', options: ['der', 'die', 'das', 'eine'], correct: 1, explanation: '"die Stadt" — Stadt is feminine.' },
      { id: 'art-q3', question: 'What is the article for "Buch" (book)?', options: ['der', 'die', 'das', 'ein'], correct: 2, explanation: '"das Buch" — Buch is neuter.' },
      { id: 'art-q4', question: 'Which article is used for ALL plural nouns?', options: ['der', 'die', 'das', 'ein'], correct: 1, explanation: 'All plural nouns use "die" regardless of their singular gender.' },
      { id: 'art-q5', question: 'What is the indefinite article for a feminine noun?', options: ['ein', 'eine', 'einen', 'einer'], correct: 1, explanation: 'Feminine nouns use "eine" as the indefinite article in nominative.' },
    ],
  },
  {
    slug: 'pronouns',
    title: 'Personal Pronouns',
    level: 'A1',
    order: 2,
    description: 'Master ich, du, er, sie, es and all German personal pronouns.',
    icon: '👤',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'Personal Pronouns in German',
        content: 'German has formal and informal ways to address people. "du" is informal (for friends, family, children), while "Sie" (always capitalized) is formal (for strangers, business contacts, older people).',
      },
      {
        type: 'table',
        title: 'Personal Pronouns',
        table: {
          headers: ['German', 'English', 'Usage'],
          rows: [
            ['ich', 'I', 'First person singular'],
            ['du', 'you (informal)', 'Second person singular, informal'],
            ['er', 'he / it (m)', 'Third person singular, masculine'],
            ['sie', 'she / it (f)', 'Third person singular, feminine'],
            ['es', 'it (n)', 'Third person singular, neuter'],
            ['wir', 'we', 'First person plural'],
            ['ihr', 'you (plural, informal)', 'Second person plural, informal'],
            ['sie', 'they', 'Third person plural'],
            ['Sie', 'you (formal)', 'Second/third person formal (sing. & pl.)'],
          ],
        },
      },
      {
        type: 'rule',
        content: 'In German, "er" replaces masculine nouns, "sie" replaces feminine nouns, and "es" replaces neuter nouns — even for objects! So "der Tisch" → er; "die Lampe" → sie; "das Auto" → es.',
      },
      {
        type: 'examples',
        examples: [
          { german: 'Ich bin Student.', english: 'I am a student.' },
          { german: 'Du bist sehr nett.', english: 'You are very nice.' },
          { german: 'Er kommt aus Berlin.', english: 'He comes from Berlin.' },
          { german: 'Wir lernen Deutsch.', english: 'We are learning German.' },
          { german: 'Sie sprechen sehr gut Deutsch.', english: 'You speak German very well. (formal)', highlight: 'Sie' },
        ],
      },
    ],
    quiz: [
      { id: 'pro-q1', question: 'How do you say "we" in German?', options: ['ich', 'wir', 'ihr', 'sie'], correct: 1, explanation: '"wir" = we.' },
      { id: 'pro-q2', question: 'Which pronoun is used for formal "you"?', options: ['du', 'ihr', 'Sie', 'er'], correct: 2, explanation: '"Sie" (capitalized) is the formal "you" in German.' },
      { id: 'pro-q3', question: 'What pronoun replaces "die Lampe" (feminine noun)?', options: ['er', 'sie', 'es', 'wir'], correct: 1, explanation: 'Feminine nouns are replaced by "sie".' },
      { id: 'pro-q4', question: 'What is the informal "you" plural?', options: ['du', 'Sie', 'ihr', 'wir'], correct: 2, explanation: '"ihr" is the informal plural "you" (talking to multiple friends).' },
      { id: 'pro-q5', question: 'Which pronoun replaces "das Auto"?', options: ['er', 'sie', 'es', 'ein'], correct: 2, explanation: '"das Auto" is neuter, so it\'s replaced by "es".' },
    ],
  },
  {
    slug: 'present-tense',
    title: 'Present Tense (Präsens)',
    level: 'A1',
    order: 3,
    description: 'Conjugate regular German verbs in the present tense.',
    icon: '⏰',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'How to conjugate regular verbs',
        content: 'To conjugate a regular German verb, take the infinitive (e.g., "spielen"), remove the -en ending to get the stem (spiel-), and add the appropriate ending for each pronoun.',
      },
      {
        type: 'table',
        title: 'Conjugation of "spielen" (to play)',
        table: {
          headers: ['Pronoun', 'Ending', 'Form', 'English'],
          rows: [
            ['ich', '-e', 'spiele', 'I play'],
            ['du', '-st', 'spielst', 'you play'],
            ['er/sie/es', '-t', 'spielt', 'he/she/it plays'],
            ['wir', '-en', 'spielen', 'we play'],
            ['ihr', '-t', 'spielt', 'you (pl.) play'],
            ['sie/Sie', '-en', 'spielen', 'they/you (formal) play'],
          ],
        },
      },
      {
        type: 'tip',
        content: 'Stem-changing verbs (e→ie, e→i, a→ä) change in the du and er/sie/es forms only. For example: "lesen" → du liest, er liest.',
      },
      {
        type: 'examples',
        examples: [
          { german: 'Ich spiele Gitarre.', english: 'I play guitar.', highlight: 'spiele' },
          { german: 'Du lernst Deutsch.', english: 'You are learning German.', highlight: 'lernst' },
          { german: 'Er wohnt in München.', english: 'He lives in Munich.', highlight: 'wohnt' },
          { german: 'Wir trinken Kaffee.', english: 'We are drinking coffee.', highlight: 'trinken' },
        ],
      },
    ],
    quiz: [
      { id: 'pres-q1', question: 'What is the correct form of "arbeiten" for "ich"?', options: ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten'], correct: 0, explanation: '"Ich" takes the -e ending: ich arbeite.' },
      { id: 'pres-q2', question: 'What is "du" form of "lernen"?', options: ['lerne', 'lernst', 'lernt', 'lernen'], correct: 1, explanation: '"Du" takes the -st ending: du lernst.' },
      { id: 'pres-q3', question: 'What is "er" form of "spielen"?', options: ['spiele', 'spielst', 'spielt', 'spielen'], correct: 2, explanation: '"Er/sie/es" takes the -t ending: er spielt.' },
      { id: 'pres-q4', question: 'How do you say "we work" in German?', options: ['ich arbeite', 'wir arbeiten', 'ihr arbeitet', 'sie arbeitet'], correct: 1, explanation: '"Wir" takes the -en ending: wir arbeiten.' },
      { id: 'pres-q5', question: 'Which pronoun uses the same form as "wir"?', options: ['du', 'er', 'ihr', 'sie/Sie'], correct: 3, explanation: '"sie" (they) and "Sie" (formal you) use the same -en ending as "wir".' },
    ],
  },
  {
    slug: 'sein-haben',
    title: 'sein & haben',
    level: 'A1',
    order: 4,
    description: 'The two most essential German verbs: to be and to have.',
    icon: '🔑',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'The most important verbs',
        content: '"sein" (to be) and "haben" (to have) are the most important verbs in German. They are irregular and must be memorized. They are also used as auxiliary verbs to form past tenses.',
      },
      {
        type: 'table',
        title: 'sein (to be)',
        table: {
          headers: ['Pronoun', 'sein', 'English'],
          rows: [
            ['ich', 'bin', 'I am'],
            ['du', 'bist', 'you are'],
            ['er/sie/es', 'ist', 'he/she/it is'],
            ['wir', 'sind', 'we are'],
            ['ihr', 'seid', 'you (pl.) are'],
            ['sie/Sie', 'sind', 'they/you are'],
          ],
        },
      },
      {
        type: 'table',
        title: 'haben (to have)',
        table: {
          headers: ['Pronoun', 'haben', 'English'],
          rows: [
            ['ich', 'habe', 'I have'],
            ['du', 'hast', 'you have'],
            ['er/sie/es', 'hat', 'he/she/it has'],
            ['wir', 'haben', 'we have'],
            ['ihr', 'habt', 'you (pl.) have'],
            ['sie/Sie', 'haben', 'they/you have'],
          ],
        },
      },
      {
        type: 'examples',
        examples: [
          { german: 'Ich bin Lehrer.', english: 'I am a teacher.', highlight: 'bin' },
          { german: 'Sie ist müde.', english: 'She is tired.', highlight: 'ist' },
          { german: 'Wir sind in Berlin.', english: 'We are in Berlin.', highlight: 'sind' },
          { german: 'Er hat drei Kinder.', english: 'He has three children.', highlight: 'hat' },
          { german: 'Ich habe Hunger.', english: 'I am hungry. (lit: I have hunger)', highlight: 'habe' },
        ],
      },
    ],
    quiz: [
      { id: 'sh-q1', question: 'What is the correct form: "Ich ___ Student."', options: ['bin', 'bist', 'ist', 'sind'], correct: 0, explanation: '"Ich bin" = I am.' },
      { id: 'sh-q2', question: 'Complete: "Er ___ einen Hund."', options: ['habe', 'hast', 'hat', 'haben'], correct: 2, explanation: '"Er hat" = he has.' },
      { id: 'sh-q3', question: 'How do you say "We are hungry" (lit. we have hunger)?', options: ['Wir sind Hunger', 'Wir haben Hunger', 'Wir habt Hunger', 'Wir ist Hunger'], correct: 1, explanation: 'In German you "have" hunger: "Wir haben Hunger".' },
      { id: 'sh-q4', question: 'What is the "du" form of "sein"?', options: ['bin', 'bist', 'ist', 'seid'], correct: 1, explanation: '"Du bist" = you are.' },
      { id: 'sh-q5', question: 'Complete: "Ihr ___ sehr nett."', options: ['bin', 'bist', 'ist', 'seid'], correct: 3, explanation: '"Ihr seid" = you (plural) are.' },
    ],
  },
  {
    slug: 'negation',
    title: 'Negation (nicht & kein)',
    level: 'A1',
    order: 5,
    description: 'Learn how to say "no" and negate sentences correctly.',
    icon: '🚫',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'Two ways to negate',
        content: 'German has two main negation words: "nicht" (not) and "kein/keine" (no / not a). The choice depends on what you\'re negating: "kein" negates nouns with indefinite articles or no article; "nicht" negates everything else.',
      },
      {
        type: 'rule',
        content: 'Use KEIN when negating a noun that would use ein/eine or no article. Use NICHT for verbs, adjectives, adverbs, and nouns with definite articles.',
      },
      {
        type: 'table',
        title: 'kein/keine/kein (no / not a)',
        table: {
          headers: ['Gender', 'Form', 'Example'],
          rows: [
            ['Masculine', 'kein', 'Ich habe kein Hund. → Ich habe keinen Hund.'],
            ['Feminine', 'keine', 'Ich habe keine Zeit.'],
            ['Neuter', 'kein', 'Er hat kein Auto.'],
            ['Plural', 'keine', 'Wir haben keine Kinder.'],
          ],
        },
      },
      {
        type: 'examples',
        title: 'nicht vs. kein examples',
        examples: [
          { german: 'Ich arbeite nicht.', english: 'I am not working.', highlight: 'nicht' },
          { german: 'Das ist nicht gut.', english: 'That is not good.', highlight: 'nicht' },
          { german: 'Ich habe kein Geld.', english: 'I have no money.', highlight: 'kein' },
          { german: 'Er hat keine Zeit.', english: 'He has no time.', highlight: 'keine' },
        ],
      },
    ],
    quiz: [
      { id: 'neg-q1', question: 'How do you negate: "Ich habe ___ Auto."', options: ['nicht', 'kein', 'keine', 'nein'], correct: 1, explanation: '"Auto" is neuter and takes no article here, so use "kein": Ich habe kein Auto.' },
      { id: 'neg-q2', question: 'Complete: "Sie kommt ___ heute."', options: ['kein', 'keine', 'nicht', 'nein'], correct: 2, explanation: 'Negating a verb: use "nicht". Sie kommt nicht heute.' },
      { id: 'neg-q3', question: 'Which is correct: "Er hat ___ Geschwister."', options: ['nicht', 'kein', 'keine', 'keinen'], correct: 2, explanation: '"Geschwister" is plural, so use "keine".' },
      { id: 'neg-q4', question: 'How do you say "The coffee is not good"?', options: ['Der Kaffee ist kein gut.', 'Der Kaffee ist nicht gut.', 'Der Kaffee hat nicht gut.', 'Kein Kaffee ist gut.'], correct: 1, explanation: 'Negating an adjective requires "nicht": nicht gut.' },
      { id: 'neg-q5', question: '"Ich bin ___ Arzt." — which word fits?', options: ['nicht', 'kein', 'keine', 'keinen'], correct: 1, explanation: '"Arzt" is a masculine noun after "sein" without an article → "kein": Ich bin kein Arzt.' },
    ],
  },
  {
    slug: 'modal-intro',
    title: 'Modal Verbs: können & möchten',
    level: 'A1',
    order: 6,
    description: 'Express ability and wishes with your first modal verbs.',
    icon: '💪',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'What are modal verbs?',
        content: 'Modal verbs modify the meaning of the main verb. "können" expresses ability (can), and "möchten" expresses wishes (would like). The main verb goes to the END of the sentence as an infinitive.',
      },
      {
        type: 'table',
        title: 'können (can / to be able to)',
        table: {
          headers: ['Pronoun', 'können', 'Example'],
          rows: [
            ['ich', 'kann', 'Ich kann schwimmen.'],
            ['du', 'kannst', 'Kannst du Deutsch?'],
            ['er/sie/es', 'kann', 'Er kann gut kochen.'],
            ['wir', 'können', 'Wir können helfen.'],
            ['ihr', 'könnt', 'Ihr könnt gehen.'],
            ['sie/Sie', 'können', 'Sie können kommen.'],
          ],
        },
      },
      {
        type: 'table',
        title: 'möchten (would like to)',
        table: {
          headers: ['Pronoun', 'möchten'],
          rows: [
            ['ich', 'möchte'],
            ['du', 'möchtest'],
            ['er/sie/es', 'möchte'],
            ['wir', 'möchten'],
            ['ihr', 'möchtet'],
            ['sie/Sie', 'möchten'],
          ],
        },
      },
      {
        type: 'rule',
        content: 'WORD ORDER: Modal verb takes position 2; the infinitive goes to the END. "Ich kann gut Deutsch sprechen." NOT "Ich kann sprechen gut Deutsch."',
      },
      {
        type: 'examples',
        examples: [
          { german: 'Ich kann Klavier spielen.', english: 'I can play piano.', highlight: 'kann ... spielen' },
          { german: 'Möchtest du etwas essen?', english: 'Would you like to eat something?', highlight: 'Möchtest ... essen' },
          { german: 'Wir können morgen kommen.', english: 'We can come tomorrow.', highlight: 'können ... kommen' },
        ],
      },
    ],
    quiz: [
      { id: 'mod-q1', question: 'What is the "ich" form of "können"?', options: ['kann', 'kannst', 'können', 'könnt'], correct: 0, explanation: '"Ich kann" = I can.' },
      { id: 'mod-q2', question: 'Where does the infinitive go in a modal sentence?', options: ['Position 1', 'Position 2', 'At the end', 'After the subject'], correct: 2, explanation: 'The infinitive always goes to the end of the sentence with modal verbs.' },
      { id: 'mod-q3', question: 'Which is correct: "Ich möchte ___ Tee trinken."', options: ['einen', 'ein', 'eine', 'kein'], correct: 0, explanation: '"Tee" (tea) is masculine: "einen Tee trinken" (accusative).' },
      { id: 'mod-q4', question: 'How do you say "Can you speak German?"', options: ['Du kannst Deutsch sprechen?', 'Kannst du Deutsch sprechen?', 'Du sprichst Deutsch können?', 'Können du Deutsch sprechen?'], correct: 1, explanation: 'In questions, the modal verb comes first: "Kannst du...?"' },
      { id: 'mod-q5', question: '"She would like to travel." → ?', options: ['Sie möchte reisen.', 'Sie möchten reisen.', 'Sie kann reisen.', 'Sie reise möchte.'], correct: 0, explanation: '"möchte" for er/sie/es + infinitive at end.' },
    ],
  },
  {
    slug: 'numbers',
    title: 'Numbers & Telling Time',
    level: 'A1',
    order: 7,
    description: 'Count to 1000 and tell the time in German.',
    icon: '🔢',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'Numbers in German',
        content: 'German numbers follow regular patterns. Numbers 1–12 are unique words; 13–19 follow the pattern [unit]zehn; the tens (20–90) end in -zig or -ßig; compound numbers above 20 put the unit BEFORE the ten with "und": 21 = einundzwanzig.',
      },
      {
        type: 'table',
        title: 'Numbers 1–10',
        table: {
          headers: ['Number', 'German', 'Number', 'German'],
          rows: [
            ['1', 'eins / ein-', '6', 'sechs'],
            ['2', 'zwei', '7', 'sieben'],
            ['3', 'drei', '8', 'acht'],
            ['4', 'vier', '9', 'neun'],
            ['5', 'fünf', '10', 'zehn'],
          ],
        },
      },
      {
        type: 'table',
        title: 'Numbers 11–19 & Tens',
        table: {
          headers: ['Number', 'German', 'Number', 'German'],
          rows: [
            ['11', 'elf', '20', 'zwanzig'],
            ['12', 'zwölf', '30', 'dreißig'],
            ['13', 'dreizehn', '40', 'vierzig'],
            ['14', 'vierzehn', '50', 'fünfzig'],
            ['15', 'fünfzehn', '60', 'sechzig'],
            ['16', 'sechzehn', '70', 'siebzig'],
            ['17', 'siebzehn', '80', 'achtzig'],
            ['18', 'achtzehn', '90', 'neunzig'],
            ['19', 'neunzehn', '100', 'hundert'],
          ],
        },
      },
      {
        type: 'tip',
        content: 'Compound numbers (21–99): unit + und + ten, written as one word. 21 = einundzwanzig, 35 = fünfunddreißig, 99 = neunundneunzig. Note: "eins" shortens to "ein-" in compounds.',
      },
      {
        type: 'table',
        title: 'Telling the Time',
        table: {
          headers: ['Time', 'German', 'Meaning'],
          rows: [
            ['3:00', 'Es ist drei Uhr.', 'It is three o\'clock.'],
            ['3:15', 'Es ist Viertel nach drei.', 'It is quarter past three.'],
            ['3:30', 'Es ist halb vier.', 'It is half past three. (lit: half four)'],
            ['3:45', 'Es ist Viertel vor vier.', 'It is quarter to four.'],
            ['?:??', 'Wie viel Uhr ist es?', 'What time is it?'],
          ],
        },
      },
      {
        type: 'examples',
        examples: [
          { german: 'Wie viel Uhr ist es? — Es ist halb acht.', english: 'What time is it? — It is half past seven.', highlight: 'halb acht' },
          { german: 'Das kostet einundzwanzig Euro.', english: 'That costs twenty-one euros.', highlight: 'einundzwanzig' },
          { german: 'Meine Oma ist zweiundachtzig Jahre alt.', english: 'My grandma is eighty-two years old.', highlight: 'zweiundachtzig' },
          { german: 'Der Kurs beginnt um Viertel nach neun.', english: 'The course starts at quarter past nine.', highlight: 'Viertel nach neun' },
        ],
      },
    ],
    quiz: [
      { id: 'num-q1', question: 'What is 15 in German?', options: ['fünfzehn', 'fünfzig', 'fünf', 'dreizehn'], correct: 0, explanation: '15 = fünfzehn (fünf + zehn).' },
      { id: 'num-q2', question: 'How do you say 21 in German?', options: ['zwanzigein', 'einzwanzig', 'einundzwanzig', 'zwanzigeins'], correct: 2, explanation: 'Compound numbers: unit + und + ten = einundzwanzig.' },
      { id: 'num-q3', question: '"Es ist halb vier." means:', options: ['It is four o\'clock.', 'It is half past four.', 'It is half past three.', 'It is quarter past four.'], correct: 2, explanation: '"Halb vier" = half past three (halfway to four).' },
      { id: 'num-q4', question: 'What is "quarter past two" in German?', options: ['Viertel vor zwei', 'Viertel nach zwei', 'halb zwei', 'halb drei'], correct: 1, explanation: '"Viertel nach" = quarter past: Viertel nach zwei.' },
      { id: 'num-q5', question: 'How do you ask "What time is it?"', options: ['Wann ist es?', 'Wie viel Uhr ist es?', 'Wie viel Zeit ist es?', 'Welche Zeit ist es?'], correct: 1, explanation: '"Wie viel Uhr ist es?" and "Wie spät ist es?" are both correct.' },
    ],
  },
  {
    slug: 'sentence-order',
    title: 'Sentence Structure',
    level: 'A1',
    order: 8,
    description: 'Understand the verb-second rule in German sentences.',
    icon: '🏗️',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'The Verb-Second Rule (V2)',
        content: 'German is a verb-second (V2) language: the finite (conjugated) verb ALWAYS occupies the second position in a main clause, regardless of what comes first. When a time expression or place starts the sentence, the subject moves after the verb.',
      },
      {
        type: 'table',
        title: 'Normal vs. Inverted Word Order',
        table: {
          headers: ['Position 1', 'Position 2 (Verb)', 'Rest'],
          rows: [
            ['Ich', 'lerne', 'jeden Tag Deutsch.'],
            ['Jeden Tag', 'lerne', 'ich Deutsch. ← inversion'],
            ['Deutsch', 'lerne', 'ich jeden Tag. ← inversion'],
            ['Heute', 'arbeite', 'er nicht.'],
            ['Morgen', 'fahren', 'wir nach Wien.'],
          ],
        },
      },
      {
        type: 'rule',
        content: 'TIME → MANNER → PLACE (TeKaMoLo): When multiple adverbs appear, order them: when (time) → how (manner) → where (place). Example: "Ich fahre morgen (time) schnell (manner) nach Berlin (place)."',
      },
      {
        type: 'tip',
        content: 'The verb only ever moves between positions — the subject either comes before or directly after it. They always stay close together.',
      },
      {
        type: 'examples',
        examples: [
          { german: 'Ich trinke jeden Morgen Kaffee.', english: 'I drink coffee every morning.', highlight: 'trinke' },
          { german: 'Jeden Morgen trinke ich Kaffee.', english: 'Every morning I drink coffee.', highlight: 'trinke' },
          { german: 'Heute bin ich müde.', english: 'Today I am tired.', highlight: 'bin' },
          { german: 'In Berlin wohne ich seit zwei Jahren.', english: 'I have been living in Berlin for two years.', highlight: 'wohne' },
        ],
      },
    ],
    quiz: [
      { id: 'so-q1', question: 'Which position does the verb always occupy in a main clause?', options: ['Position 1', 'Position 2', 'Position 3', 'At the end'], correct: 1, explanation: 'The V2 rule: the finite verb is always in second position.' },
      { id: 'so-q2', question: 'Rearrange starting with "Heute": Heute / bin / ich / müde', options: ['Heute bin ich müde.', 'Heute ich bin müde.', 'Heute müde bin ich.', 'Heute ich müde bin.'], correct: 0, explanation: '"Heute" at pos. 1, verb "bin" at pos. 2, subject "ich" at pos. 3.' },
      { id: 'so-q3', question: 'What is the correct order of adverbs (TeKaMoLo)?', options: ['Place → Time → Manner', 'Manner → Place → Time', 'Time → Manner → Place', 'Time → Place → Manner'], correct: 2, explanation: 'TeKaMoLo: Time → Cause → Manner → Place.' },
      { id: 'so-q4', question: 'Which sentence has correct word order?', options: ['Ich fahre nach Berlin morgen.', 'Morgen ich fahre nach Berlin.', 'Morgen fahre ich nach Berlin.', 'Morgen nach Berlin fahre ich.'], correct: 2, explanation: '"Morgen" pos. 1, verb "fahre" pos. 2, subject "ich" pos. 3.' },
      { id: 'so-q5', question: 'What happens to the subject when something else occupies position 1?', options: ['It disappears', 'It moves to position 3 (after the verb)', 'It stays at position 1', 'It goes to the end'], correct: 1, explanation: 'The subject shifts to position 3 (directly after the verb) in inverted word order.' },
    ],
  },
  {
    slug: 'w-questions',
    title: 'W-Questions',
    level: 'A1',
    order: 9,
    description: 'Ask who, what, where, when, how and why in German.',
    icon: '❓',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'Question Words (Fragewörter)',
        content: 'German question words are called "W-Fragen" because most start with W. The structure mirrors the V2 rule: Question word (pos. 1) → Verb (pos. 2) → Subject (pos. 3) → Rest. The verb always stays in second position.',
      },
      {
        type: 'table',
        title: 'The Essential W-Question Words',
        table: {
          headers: ['German', 'English', 'Example'],
          rows: [
            ['wer', 'who', 'Wer ist das? — Das ist Maria.'],
            ['was', 'what', 'Was machst du? — Ich lerne Deutsch.'],
            ['wo', 'where (location)', 'Wo wohnst du? — In Berlin.'],
            ['woher', 'where from', 'Woher kommst du? — Aus Vietnam.'],
            ['wohin', 'where to', 'Wohin fährst du? — Nach Wien.'],
            ['wann', 'when', 'Wann beginnt der Kurs? — Um neun Uhr.'],
            ['wie', 'how', 'Wie heißt du? — Ich heiße Lena.'],
            ['warum', 'why', 'Warum lernst du Deutsch? — Für die Arbeit.'],
            ['wie viele', 'how many', 'Wie viele Kinder hast du? — Zwei.'],
            ['wie alt', 'how old', 'Wie alt bist du? — Ich bin 25.'],
          ],
        },
      },
      {
        type: 'rule',
        content: 'WORD ORDER: Question word (pos. 1) → Verb (pos. 2) → Subject (pos. 3) → Rest. When "wer" is itself the subject, no separate subject is needed: "Wer spricht Deutsch?" (verb follows directly).',
      },
      {
        type: 'tip',
        content: 'Distinguish wo / woher / wohin: "Wo" = static location (Wo ist er?). "Woher" = origin (Woher kommt er?). "Wohin" = destination (Wohin geht er?). Motion verbs go with woher/wohin; state verbs go with wo.',
      },
      {
        type: 'examples',
        examples: [
          { german: 'Wie heißen Sie?', english: 'What is your name? (formal)', highlight: 'Wie' },
          { german: 'Woher kommen Sie?', english: 'Where are you from? (formal)', highlight: 'Woher' },
          { german: 'Wann fährt der Zug ab?', english: 'When does the train leave?', highlight: 'Wann' },
          { german: 'Warum lernst du Deutsch?', english: 'Why are you learning German?', highlight: 'Warum' },
          { german: 'Wie viele Sprachen sprichst du?', english: 'How many languages do you speak?', highlight: 'Wie viele' },
        ],
      },
    ],
    quiz: [
      { id: 'wq-q1', question: 'How do you ask "Where are you from?"', options: ['Wo kommst du?', 'Woher kommst du?', 'Wohin kommst du?', 'Wann kommst du?'], correct: 1, explanation: '"Woher" asks about origin. "Woher kommst du?" = Where are you from?' },
      { id: 'wq-q2', question: 'Which question word means "why"?', options: ['wie', 'wann', 'warum', 'wer'], correct: 2, explanation: '"Warum" = why.' },
      { id: 'wq-q3', question: 'What position does the verb take in a W-question?', options: ['Position 1', 'Position 2', 'Position 3', 'At the end'], correct: 1, explanation: 'W-questions follow V2: question word at pos. 1, verb at pos. 2.' },
      { id: 'wq-q4', question: 'Which word asks about destination?', options: ['wo', 'woher', 'wohin', 'wann'], correct: 2, explanation: '"Wohin" asks about destination: "Wohin fährst du?" = Where are you going?' },
      { id: 'wq-q5', question: '"___ alt bist du?" — what fills the blank?', options: ['Was', 'Wie', 'Wann', 'Wer'], correct: 1, explanation: '"Wie alt" = how old. "Wie alt bist du?" = How old are you?' },
    ],
  },
  // ─── A2 ────────────────────────────────────────────────────────────────────
  {
    slug: 'accusative',
    title: 'The Accusative Case',
    level: 'A2',
    order: 1,
    description: 'Learn how articles and pronouns change for direct objects.',
    icon: '🎯',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'What is the Accusative case?',
        content: 'The accusative case marks the direct object of a sentence — the thing that is directly affected by the action. Most articles and pronouns change in the accusative.',
      },
      {
        type: 'table',
        title: 'Articles in Accusative',
        table: {
          headers: ['Gender', 'Definite (the)', 'Indefinite (a/an)', 'Change?'],
          rows: [
            ['Masculine', 'den', 'einen', 'YES — n is added'],
            ['Feminine', 'die', 'eine', 'No change'],
            ['Neuter', 'das', 'ein', 'No change'],
            ['Plural', 'die', '—', 'No change'],
          ],
        },
      },
      {
        type: 'rule',
        content: 'Only masculine articles change in the accusative: der → den, ein → einen. Feminine, neuter, and plural articles stay the same.',
      },
      {
        type: 'examples',
        examples: [
          { german: 'Ich sehe den Mann.', english: 'I see the man. (masc. → den)', highlight: 'den Mann' },
          { german: 'Ich kaufe eine Jacke.', english: 'I buy a jacket. (fem. — no change)', highlight: 'eine Jacke' },
          { german: 'Er liest das Buch.', english: 'He reads the book. (neut. — no change)', highlight: 'das Buch' },
          { german: 'Ich brauche einen Stift.', english: 'I need a pen. (masc. → einen)', highlight: 'einen Stift' },
        ],
      },
    ],
    quiz: [
      { id: 'acc-q1', question: 'Complete: "Ich kaufe ___ Hund." (der Hund)', options: ['der', 'den', 'dem', 'des'], correct: 1, explanation: 'Masculine nouns change to "den" in the accusative.' },
      { id: 'acc-q2', question: 'Complete: "Er liest ___ Zeitung." (die Zeitung)', options: ['der', 'den', 'die', 'das'], correct: 2, explanation: 'Feminine nouns stay "die" in the accusative.' },
      { id: 'acc-q3', question: 'What happens to "ein" before masculine nouns in accusative?', options: ['Stays "ein"', 'Becomes "einen"', 'Becomes "einem"', 'Becomes "eines"'], correct: 1, explanation: '"ein" becomes "einen" for masculine nouns in the accusative.' },
      { id: 'acc-q4', question: '"Sie kauft ___ Buch." (das Buch)', options: ['des', 'dem', 'den', 'das'], correct: 3, explanation: 'Neuter nouns stay "das" in the accusative.' },
      { id: 'acc-q5', question: 'Which sentence is correct?', options: ['Ich sehe der Mann.', 'Ich sehe den Mann.', 'Ich sehe dem Mann.', 'Ich sehe des Mann.'], correct: 1, explanation: '"Mann" is masculine. In accusative: "den Mann".' },
    ],
  },
  {
    slug: 'perfekt',
    title: 'Past Tense (Perfekt)',
    level: 'A2',
    order: 3,
    description: 'Talk about the past using haben/sein + past participle.',
    icon: '📅',
    xpReward: 50,
    sections: [
      {
        type: 'explanation',
        title: 'The Perfekt tense',
        content: 'The Perfekt is the most common past tense in spoken German. It is formed with: haben OR sein + Partizip II (past participle). Most verbs use "haben"; verbs of motion or change of state use "sein".',
      },
      {
        type: 'rule',
        content: 'PARTIZIP II formation: Regular verbs → ge- + stem + -t (gemacht, gespielt, gekauft). Irregular verbs have their own forms (gegessen, gefahren, geschlafen). Verbs ending in -ieren: no ge- prefix (studiert, telefoniert).',
      },
      {
        type: 'table',
        title: 'haben vs. sein as auxiliary',
        table: {
          headers: ['Use "haben"', 'Use "sein"'],
          rows: [
            ['Most transitive verbs', 'Verbs of motion (gehen, fahren, fliegen)'],
            ['arbeiten, essen, schlafen', 'Verbs of change (aufwachen, sterben, werden)'],
            ['machen, kaufen, sehen', 'bleiben, sein, passieren'],
          ],
        },
      },
      {
        type: 'examples',
        examples: [
          { german: 'Ich habe gegessen.', english: 'I have eaten / I ate.', highlight: 'habe gegessen' },
          { german: 'Er hat gearbeitet.', english: 'He has worked / He worked.', highlight: 'hat gearbeitet' },
          { german: 'Wir sind nach Berlin gefahren.', english: 'We went to Berlin.', highlight: 'sind gefahren' },
          { german: 'Sie ist früh aufgewacht.', english: 'She woke up early.', highlight: 'ist aufgewacht' },
        ],
      },
    ],
    quiz: [
      { id: 'perf-q1', question: 'What auxiliary verb does "essen" use in Perfekt?', options: ['sein', 'haben', 'werden', 'können'], correct: 1, explanation: '"Essen" uses "haben": ich habe gegessen.' },
      { id: 'perf-q2', question: 'What is the Partizip II of "machen"?', options: ['gemacht', 'gemachen', 'macht', 'gemachet'], correct: 0, explanation: 'Regular verbs: ge- + stem + -t → gemacht.' },
      { id: 'perf-q3', question: 'Which auxiliary does "fahren" (to drive/go) use?', options: ['haben', 'sein', 'werden', 'können'], correct: 1, explanation: '"Fahren" is a verb of motion → uses "sein".' },
      { id: 'perf-q4', question: '"Ich ___ gut geschlafen." — which auxiliary?', options: ['bin', 'habe', 'hat', 'sind'], correct: 1, explanation: '"Schlafen" uses haben: Ich habe gut geschlafen.' },
      { id: 'perf-q5', question: 'What is the Partizip II of "studieren"?', options: ['gestudiert', 'studiert', 'estudiert', 'stuiert'], correct: 1, explanation: 'Verbs ending in -ieren do NOT get ge- prefix: studiert.' },
    ],
  },
  // ─── B1 ────────────────────────────────────────────────────────────────────
  {
    slug: 'konjunktiv-ii',
    title: 'Konjunktiv II',
    level: 'B1',
    order: 2,
    description: 'Express wishes, hypotheticals, and polite requests.',
    icon: '💭',
    xpReward: 60,
    sections: [
      {
        type: 'explanation',
        title: 'What is Konjunktiv II?',
        content: 'The Konjunktiv II (Subjunctive II) is used for: hypothetical situations ("If I had money..."), polite requests ("Could you help me?"), and wishes ("I wish I were there"). It is equivalent to English "would/could/should".',
      },
      {
        type: 'rule',
        content: 'The most common form uses "würde" + infinitive: "Ich würde gerne reisen." For common verbs, use their own Konjunktiv II forms: sein→wäre, haben→hätte, können→könnte, müssen→müsste, dürfen→dürfte.',
      },
      {
        type: 'table',
        title: 'Key Konjunktiv II forms',
        table: {
          headers: ['Infinitive', 'ich', 'du', 'er/sie/es', 'wir'],
          rows: [
            ['sein', 'wäre', 'wärst', 'wäre', 'wären'],
            ['haben', 'hätte', 'hättest', 'hätte', 'hätten'],
            ['können', 'könnte', 'könntest', 'könnte', 'könnten'],
            ['würden', 'würde', 'würdest', 'würde', 'würden'],
          ],
        },
      },
      {
        type: 'examples',
        examples: [
          { german: 'Ich würde gerne nach Deutschland reisen.', english: 'I would love to travel to Germany.', highlight: 'würde ... reisen' },
          { german: 'Wenn ich Zeit hätte, würde ich mehr lesen.', english: 'If I had time, I would read more.', highlight: 'hätte ... würde' },
          { german: 'Könnten Sie mir helfen?', english: 'Could you help me? (polite)', highlight: 'Könnten' },
          { german: 'Das wäre schön!', english: 'That would be nice!', highlight: 'wäre' },
        ],
      },
    ],
    quiz: [
      { id: 'konj-q1', question: 'How do you say "I would like to travel" in German?', options: ['Ich reise gerne.', 'Ich würde gerne reisen.', 'Ich wäre reisen.', 'Ich hätte gerne reisen.'], correct: 1, explanation: '"würde + infinitive" is the standard Konjunktiv II for "would".' },
      { id: 'konj-q2', question: 'What is the Konjunktiv II form of "sein" for "ich"?', options: ['wäre', 'würde', 'hätte', 'sei'], correct: 0, explanation: '"Ich wäre" = I would be.' },
      { id: 'konj-q3', question: 'Complete: "Wenn ich Geld ___, würde ich ein Haus kaufen."', options: ['habe', 'hatte', 'hätte', 'hätten'], correct: 2, explanation: '"Hätte" is the Konjunktiv II of "haben": if I had money.' },
      { id: 'konj-q4', question: 'Which sentence is the most polite request?', options: ['Helfen Sie mir!', 'Können Sie mir helfen?', 'Könnten Sie mir helfen?', 'Du hilfst mir.'], correct: 2, explanation: 'Konjunktiv II "Könnten Sie...?" is the most polite form of asking.' },
      { id: 'konj-q5', question: '"That would be wonderful!" = ?', options: ['Das ist wunderbar!', 'Das wäre wunderbar!', 'Das würde wunderbar!', 'Das hätte wunderbar!'], correct: 1, explanation: '"Das wäre wunderbar!" uses wäre (Konjunktiv II of sein).' },
    ],
  },
  {
    slug: 'passive',
    title: 'Passive Voice (Passiv)',
    level: 'B1',
    order: 3,
    description: 'Shift focus from actor to action with werden + Partizip II.',
    icon: '🔄',
    xpReward: 60,
    sections: [
      {
        type: 'explanation',
        title: 'The Passive Voice',
        content: 'The passive voice (Passiv) shifts the focus from who does something to what is being done. It is formed with: werden (conjugated) + Partizip II. The agent (person doing the action) can be added with "von + dative".',
      },
      {
        type: 'table',
        title: 'Present Passive with "werden"',
        table: {
          headers: ['Pronoun', 'werden', 'Example'],
          rows: [
            ['ich', 'werde', 'Ich werde informiert.'],
            ['du', 'wirst', 'Du wirst eingeladen.'],
            ['er/sie/es', 'wird', 'Das Auto wird repariert.'],
            ['wir', 'werden', 'Wir werden gefragt.'],
            ['ihr', 'werdet', 'Ihr werdet informiert.'],
            ['sie/Sie', 'werden', 'Die Bücher werden gelesen.'],
          ],
        },
      },
      {
        type: 'examples',
        examples: [
          { german: 'Das Haus wird gebaut.', english: 'The house is being built.', highlight: 'wird gebaut' },
          { german: 'Das Buch wird von vielen Menschen gelesen.', english: 'The book is read by many people.', highlight: 'wird ... gelesen' },
          { german: 'Die E-Mail wurde gestern geschickt.', english: 'The email was sent yesterday. (past passive)', highlight: 'wurde geschickt' },
        ],
      },
    ],
    quiz: [
      { id: 'pass-q1', question: 'How is the Passiv formed?', options: ['haben + Partizip II', 'sein + Partizip II', 'werden + Partizip II', 'würde + Infinitiv'], correct: 2, explanation: 'Passiv = werden (conjugated) + Partizip II.' },
      { id: 'pass-q2', question: 'Transform to passive: "Man repariert das Auto." (das Auto wird...)', options: ['Das Auto wird reparieren.', 'Das Auto wird repariert.', 'Das Auto ist repariert.', 'Das Auto hat repariert.'], correct: 1, explanation: '"wird" + Partizip II: "Das Auto wird repariert."' },
      { id: 'pass-q3', question: 'How do you express the agent in a passive sentence?', options: ['mit + Akkusativ', 'von + Dativ', 'durch + Nominativ', 'für + Akkusativ'], correct: 1, explanation: 'The agent is expressed with "von + Dativ": "von dem Arzt" = by the doctor.' },
      { id: 'pass-q4', question: 'Past Passiv of "schreiben": "Der Brief ___ gestern ___"', options: ['hat ... geschrieben', 'wurde ... geschrieben', 'ist ... geschrieben', 'war ... geschrieben'], correct: 1, explanation: 'Past Passiv uses "wurde": "wurde geschrieben".' },
      { id: 'pass-q5', question: '"Many books are sold." = ?', options: ['Viele Bücher sind verkauft.', 'Viele Bücher haben verkauft.', 'Viele Bücher werden verkauft.', 'Viele Bücher wurden verkauft.'], correct: 2, explanation: '"werden + Partizip II": "werden verkauft" = are sold (present).' },
    ],
  },
]

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug)
}
