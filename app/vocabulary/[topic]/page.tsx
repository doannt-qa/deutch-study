'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { vocabTopics } from '@/data/vocabulary'
import { useFlashcards } from '@/hooks/useFlashcards'
import { useProgressStore } from '@/store/progressStore'
import { useLanguage } from '@/contexts/LanguageContext'
import { levelColors } from '@/data/curriculum'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

export default function FlashcardPage() {
  const { topic } = useParams<{ topic: string }>()
  const topicData = vocabTopics.find((t) => t.id === topic)
  const { updateStreak, logActivity, addXP } = useProgressStore()
  const { t } = useLanguage()

  const { dueWords, rateCard } = useFlashcards(topicData?.words ?? [])
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)
  const [reviewed, setReviewed] = useState(0)

  if (!topicData) return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <h1 className="text-xl font-bold text-zinc-900">{t.vocabulary.notFound}</h1>
      <Link href="/vocabulary" className="text-red-600 hover:underline">{t.vocabulary.allTopics}</Link>
    </div>
  )

  const colors = levelColors[topicData.level]
  const words = dueWords.length > 0 ? dueWords : topicData.words

  if (done || (dueWords.length === 0 && reviewed === 0)) {
    const xpEarned = Math.floor((reviewed / 10) * 30)
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🎴</div>
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">
          {reviewed > 0 ? t.vocabulary.sessionComplete : t.vocabulary.allCaughtUp}
        </h1>
        <p className="text-zinc-500 mb-2">
          {reviewed > 0 ? `${reviewed} ${t.vocabulary.cardsReviewed}` : t.vocabulary.comeBack}
        </p>
        {xpEarned > 0 && <div className="text-3xl font-bold text-yellow-500 mb-6">+{xpEarned} {t.common.xp}</div>}
        <div className="flex gap-3 justify-center">
          <Link href="/vocabulary" className="px-5 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50">
            {t.vocabulary.allTopics}
          </Link>
          <button
            onClick={() => { setIdx(0); setFlipped(false); setDone(false); setReviewed(0) }}
            className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 flex items-center gap-2"
          >
            <i className="fa-solid fa-rotate-left" aria-hidden="true" /> {t.vocabulary.practiceAll}
          </button>
        </div>
      </div>
    )
  }

  const word = words[idx]

  function handleRate(rating: 0 | 1 | 2 | 3) {
    rateCard(word.id, rating)
    setReviewed((r) => r + 1)
    const next = idx + 1
    if (next >= words.length) {
      addXP(Math.floor((reviewed + 1) / 10) * 30)
      updateStreak()
      logActivity(new Date().toISOString().slice(0, 10))
      setDone(true)
    } else {
      setIdx(next)
      setFlipped(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/vocabulary" className="text-zinc-400 hover:text-zinc-700">
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-lg">{topicData.icon}</span>
            <h1 className="font-bold text-zinc-900">{topicData.title}</h1>
            <Badge className={colors.badge}>{topicData.level}</Badge>
          </div>
          <Progress value={((idx) / words.length) * 100} className="h-1.5" />
        </div>
        <span className="text-sm text-zinc-500 shrink-0">{idx + 1}/{words.length}</span>
      </div>

      {/* Flashcard with flip animation */}
      <div className="cursor-pointer" style={{ perspective: 1000 }} onClick={() => setFlipped((f) => !f)}>
        <div
          className="relative w-full transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', height: 280 }}
        >
          {/* Front */}
          <div
            className={`absolute inset-0 rounded-2xl border-2 ${colors.border} ${colors.bg} shadow-lg flex flex-col items-center justify-center p-8`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-4xl font-bold text-zinc-900 text-center mb-3">
              {word.article && <span className={`text-2xl font-semibold mr-2 ${colors.text}`}>{word.article}</span>}
              {word.german.replace(/^(der|die|das)\s/, '')}
            </div>
            {word.plural && <div className="text-sm text-zinc-500">{t.vocabulary.pl}: {word.plural}</div>}
            <div className="text-zinc-400 text-sm mt-6">{t.vocabulary.tapToReveal}</div>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 rounded-2xl border-2 border-zinc-200 bg-white shadow-lg flex flex-col items-center justify-center p-8"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="text-3xl font-bold text-zinc-900 mb-2">{word.english}</div>
            <div className="text-sm text-zinc-500 text-center mb-4 italic">&quot;{word.example}&quot;</div>
            <div className="text-xs text-zinc-400 text-center italic">{word.exampleTranslation}</div>
          </div>
        </div>
      </div>

      {flipped ? (
        <div className="mt-6">
          <p className="text-center text-sm text-zinc-500 mb-3">{t.vocabulary.howWell}</p>
          <div className="grid grid-cols-4 gap-2">
            {([
              { label: t.vocabulary.again, rating: 0, cls: 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200' },
              { label: t.vocabulary.hard, rating: 1, cls: 'bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200' },
              { label: t.vocabulary.good, rating: 2, cls: 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200' },
              { label: t.vocabulary.easy, rating: 3, cls: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200' },
            ] as const).map(({ label, rating, cls }) => (
              <button
                key={rating}
                onClick={() => handleRate(rating)}
                className={`py-2.5 rounded-xl border font-semibold text-sm transition-colors ${cls}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 text-center text-zinc-400 text-sm">{t.vocabulary.tapCard}</div>
      )}
    </div>
  )
}
