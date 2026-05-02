'use client'

import Link from 'next/link'
import { useProgressStore, xpToLevel } from '@/store/progressStore'
import { useLanguage } from '@/contexts/LanguageContext'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { getLevelProgress, levelColors } from '@/data/curriculum'

export default function DashboardPage() {
  const { xp, streak, completedLessons, exerciseScores, chatScenarios, currentLevel } = useProgressStore()
  const { t } = useLanguage()

  const levelInfo = xpToLevel(xp)
  const today = new Date().toISOString().slice(0, 10)

  const a1Progress = getLevelProgress(completedLessons, 'A1')
  const a2Progress = getLevelProgress(completedLessons, 'A2')
  const b1Progress = getLevelProgress(completedLessons, 'B1')

  const exercisesDone = Object.keys(exerciseScores).length
  const chatsDone = Object.values(chatScenarios).filter(Boolean).length

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    return d.toISOString().slice(0, 10)
  })

  const quickActions = [
    { href: '/lessons', icon: 'book-open', label: t.dashboard.continueLessons, sub: `${completedLessons.length} ${t.dashboard.completed}`, color: 'bg-emerald-500' },
    { href: '/vocabulary', icon: 'clone', label: t.dashboard.reviewVocab, sub: t.dashboard.spacedRep, color: 'bg-blue-500' },
    { href: '/exercises', icon: 'dumbbell', label: t.dashboard.practiceExercises, sub: `${exercisesDone} ${t.dashboard.completed}`, color: 'bg-orange-500' },
    { href: '/chat', icon: 'comment', label: t.dashboard.chatPractice, sub: `${chatsDone}/6 ${t.dashboard.scenarios}`, color: 'bg-purple-500' },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-bold text-zinc-900">{t.dashboard.title}</h1>
          <Badge className={levelColors[currentLevel].badge}>{currentLevel}</Badge>
        </div>
        <p className="text-zinc-500 text-sm">{t.dashboard.subtitle}</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1.5 text-orange-500 mb-1">
            <i className="fa-solid fa-fire text-xl" aria-hidden="true" />
            <span className="text-2xl font-bold">{streak.count}</span>
          </div>
          <div className="text-xs text-zinc-500">{t.dashboard.dayStreak}</div>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1.5 text-yellow-500 mb-1">
            <i className="fa-solid fa-bolt text-xl" aria-hidden="true" />
            <span className="text-2xl font-bold">{xp}</span>
          </div>
          <div className="text-xs text-zinc-500">{t.dashboard.totalXP}</div>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1.5 text-purple-500 mb-1">
            <i className="fa-solid fa-trophy text-xl" aria-hidden="true" />
            <span className="text-2xl font-bold">{completedLessons.length}</span>
          </div>
          <div className="text-xs text-zinc-500">{t.dashboard.lessonsDone}</div>
        </div>
      </div>

      {/* XP Level */}
      <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-zinc-900">{levelInfo.label}</span>
          <span className="text-sm text-zinc-500">{xp - levelInfo.current} / {levelInfo.next - levelInfo.current} {t.common.xp}</span>
        </div>
        <Progress value={levelInfo.percent} className="h-3" />
        <p className="text-xs text-zinc-400 mt-1.5">{levelInfo.percent}% {t.dashboard.toNextRank}</p>
      </div>

      {/* Weekly Activity */}
      <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm mb-6">
        <h2 className="font-semibold text-zinc-900 mb-3">{t.dashboard.weeklyActivity}</h2>
        <div className="flex gap-2">
          {last7Days.map((d) => {
            const isActive = d === streak.lastDate || d === today
            return (
              <div key={d} className="flex-1 flex flex-col items-center gap-1">
                <div className={`w-full aspect-square rounded-lg ${isActive ? 'bg-red-500' : 'bg-zinc-100'}`} />
                <span className="text-xs text-zinc-400">{new Date(d + 'T00:00:00').toLocaleDateString('en', { weekday: 'narrow' })}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Level Progress */}
      <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm mb-6">
        <h2 className="font-semibold text-zinc-900 mb-4">{t.dashboard.levelProgress}</h2>
        <div className="space-y-4">
          {([['A1', a1Progress, 'emerald'], ['A2', a2Progress, 'blue'], ['B1', b1Progress, 'purple']] as const).map(([lvl, pct, color]) => (
            <div key={lvl}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-zinc-700">{lvl}</span>
                <span className="text-zinc-500">{pct}%</span>
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all ${color === 'emerald' ? 'bg-emerald-500' : color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="font-semibold text-zinc-900 mb-3">{t.dashboard.quickActions}</h2>
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map(({ href, icon, label, sub, color }) => (
          <Link
            key={href}
            href={href}
            className="bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3"
          >
            <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center shrink-0`}>
              <i className={`fa-solid fa-${icon} text-white`} aria-hidden="true" />
            </div>
            <div>
              <div className="font-medium text-zinc-900 text-sm">{label}</div>
              <div className="text-xs text-zinc-500">{sub}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
