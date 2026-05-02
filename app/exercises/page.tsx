'use client'

import Link from 'next/link'
import { exercises } from '@/data/exercises'
import { useProgressStore } from '@/store/progressStore'
import { useLanguage } from '@/contexts/LanguageContext'
import { levelColors } from '@/data/curriculum'
import { Badge } from '@/components/ui/badge'

export default function ExercisesPage() {
  const { completedExercises, exerciseScores } = useProgressStore()
  const { t } = useLanguage()

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-zinc-900 mb-1">{t.exercises.title}</h1>
      <p className="text-zinc-500 text-sm mb-8">{t.exercises.subtitle}</p>

      <div className="flex flex-col gap-3">
        {exercises.map((ex) => {
          const done = completedExercises.includes(ex.id)
          const score = exerciseScores[ex.id]
          const colors = levelColors[ex.level]

          return (
            <Link
              key={ex.id}
              href={`/exercises/${ex.id}`}
              className="bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl ${done ? colors.bg : 'bg-zinc-100'} flex items-center justify-center shrink-0`}>
                {done
                  ? <i className={`fa-solid fa-circle-check text-xl ${colors.text}`} aria-hidden="true" />
                  : <i className="fa-solid fa-star text-xl text-zinc-400" aria-hidden="true" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h2 className="font-semibold text-zinc-900 text-sm">{ex.title}</h2>
                  <Badge className={`${colors.badge} text-xs`}>{ex.level}</Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span>{ex.questions.length} {t.exercises.questions}</span>
                  <span>+{ex.xpReward} {t.common.xp}</span>
                  {score !== undefined && (
                    <span className={`font-semibold ${score >= 80 ? 'text-emerald-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {t.exercises.best}: {score}%
                    </span>
                  )}
                </div>
              </div>
              <i className="fa-solid fa-chevron-right text-zinc-400 shrink-0" aria-hidden="true" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
