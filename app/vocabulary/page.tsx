'use client'

import Link from 'next/link'
import { vocabTopics } from '@/data/vocabulary'
import { useProgressStore } from '@/store/progressStore'
import { useLanguage } from '@/contexts/LanguageContext'
import { isDueToday } from '@/hooks/useFlashcards'
import { Badge } from '@/components/ui/badge'
import { levelColors } from '@/data/curriculum'

export default function VocabularyPage() {
  const { flashcardState } = useProgressStore()
  const { t } = useLanguage()

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-zinc-900 mb-1">{t.vocabulary.title}</h1>
      <p className="text-zinc-500 text-sm mb-8">{t.vocabulary.subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {vocabTopics.map((topic) => {
          const due = topic.words.filter((w) => isDueToday(flashcardState[w.id])).length
          const colors = levelColors[topic.level]
          return (
            <Link
              key={topic.id}
              href={`/vocabulary/${topic.id}`}
              className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="text-3xl">{topic.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold text-zinc-900 text-sm leading-tight">{topic.title}</h2>
                  <Badge className={`${colors.badge} shrink-0 text-xs`}>{topic.level}</Badge>
                </div>
                <p className="text-xs text-zinc-500 mt-1 mb-2">{topic.description}</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-zinc-400">{topic.words.length} {t.vocabulary.words}</span>
                  {due > 0 ? (
                    <span className="text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded-full">
                      {due} {t.vocabulary.dueToday}
                    </span>
                  ) : (
                    <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {t.vocabulary.allReviewed}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
