'use client'

import Link from 'next/link'
import { useProgressStore } from '@/store/progressStore'
import { curriculum, levelColors } from '@/data/curriculum'
import { useLanguage } from '@/contexts/LanguageContext'
import { Badge } from '@/components/ui/badge'
import type { Level } from '@/types'

const levelOrder: Level[] = ['A1', 'A2', 'B1']

export default function LessonsPage() {
  const { completedLessons } = useProgressStore()
  const { t } = useLanguage()

  const levelLabels: Record<Level, string> = {
    A1: t.lessons.beginner,
    A2: t.lessons.elementary,
    B1: t.lessons.intermediate,
  }

  const unlockedLevels: Level[] = ['A1']
  if (completedLessons.filter((s) => curriculum.find((topic) => topic.slug === s && topic.level === 'A1')).length >= 3) unlockedLevels.push('A2')
  if (completedLessons.filter((s) => curriculum.find((topic) => topic.slug === s && topic.level === 'A2')).length >= 3) unlockedLevels.push('B1')

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-zinc-900 mb-1">{t.lessons.title}</h1>
      <p className="text-zinc-500 text-sm mb-8">{t.lessons.subtitle}</p>

      {levelOrder.map((level) => {
        const topics = curriculum.filter((topic) => topic.level === level).sort((a, b) => a.order - b.order)
        const colors = levelColors[level]
        const locked = !unlockedLevels.includes(level)
        const done = topics.filter((topic) => completedLessons.includes(topic.slug)).length

        return (
          <section key={level} className="mb-10">
            <div className={`flex items-center gap-3 mb-4 p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
              <Badge className={colors.badge}>{level}</Badge>
              <span className={`font-semibold ${colors.text}`}>{levelLabels[level]}</span>
              <span className={`text-sm ml-auto ${colors.text} opacity-70`}>{done}/{topics.length} {t.lessons.complete}</span>
              {locked && <i className="fa-solid fa-lock text-zinc-400" aria-hidden="true" />}
            </div>

            <div className="flex flex-col gap-2">
              {topics.map((topic, idx) => {
                const isCompleted = completedLessons.includes(topic.slug)
                const prevDone = idx === 0 || completedLessons.includes(topics[idx - 1].slug)
                const isLocked = locked || (!isCompleted && !prevDone && idx > 0)

                return (
                  <Link
                    key={topic.slug}
                    href={isLocked ? '#' : `/lessons/${topic.slug}`}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      isLocked
                        ? 'bg-zinc-50 border-zinc-100 opacity-50 cursor-not-allowed'
                        : isCompleted
                        ? `${colors.bg} border-current ${colors.border} hover:shadow-sm`
                        : 'bg-white border-zinc-200 hover:border-red-200 hover:shadow-sm'
                    }`}
                    onClick={(e) => isLocked && e.preventDefault()}
                  >
                    <div className="text-2xl w-9 text-center">{topic.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium text-sm ${isCompleted ? colors.text : 'text-zinc-900'}`}>{topic.title}</div>
                      <div className="text-xs text-zinc-500 mt-0.5 truncate">{topic.description}</div>
                    </div>
                    {isCompleted ? (
                      <i className={`fa-solid fa-circle-check shrink-0 ${colors.text}`} aria-hidden="true" />
                    ) : isLocked ? (
                      <i className="fa-solid fa-lock shrink-0 text-zinc-400" aria-hidden="true" />
                    ) : (
                      <i className="fa-solid fa-chevron-right shrink-0 text-zinc-400" aria-hidden="true" />
                    )}
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
