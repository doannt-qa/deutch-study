'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useProgressStore } from '@/store/progressStore'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Level } from '@/types'

export default function HomePage() {
  const [showAssessment, setShowAssessment] = useState(false)
  const { setLevel, updateStreak, logActivity } = useProgressStore()
  const { t } = useLanguage()
  const router = useRouter()

  function startLearning(level: Level) {
    setLevel(level)
    updateStreak()
    logActivity(new Date().toISOString().slice(0, 10))
    router.push('/lessons')
  }

  const featureItems = [
    { icon: 'book-open', title: t.landing.grammarTitle, desc: t.landing.grammarDesc },
    { icon: 'clone', title: t.landing.vocabTitle, desc: t.landing.vocabDesc },
    { icon: 'dumbbell', title: t.landing.exercisesTitle, desc: t.landing.exercisesDesc },
    { icon: 'comment', title: t.landing.chatTitle, desc: t.landing.chatDesc },
  ]

  const levelOptions: { level: Level; label: string; desc: string; color: string }[] = [
    { level: 'A1', label: t.landing.a1Label, desc: t.landing.a1Desc, color: 'border-emerald-400 bg-emerald-50 hover:bg-emerald-100' },
    { level: 'A2', label: t.landing.a2Label, desc: t.landing.a2Desc, color: 'border-blue-400 bg-blue-50 hover:bg-blue-100' },
    { level: 'B1', label: t.landing.b1Label, desc: t.landing.b1Desc, color: 'border-purple-400 bg-purple-50 hover:bg-purple-100' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
<div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
            <span>🇩🇪</span>
            <span>{t.landing.badge}</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            {t.landing.title}<br />
            <span className="text-yellow-400">{t.landing.titleHighlight}</span>
          </h1>
          <p className="text-lg text-zinc-300 mb-8 max-w-xl mx-auto">
            {t.landing.subtitle}
          </p>
          <button
            onClick={() => setShowAssessment(true)}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl text-lg transition-colors shadow-lg"
          >
            {t.landing.startLearning} <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
          <p className="mt-3 text-zinc-400 text-sm">{t.landing.noSignup}</p>
        </div>
        <div className="flex h-2">
          <div className="flex-1 bg-zinc-900" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-yellow-400" />
        </div>
      </section>

      {/* Assessment Modal */}
      {showAssessment && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <h2 className="text-2xl font-bold text-zinc-900 mb-1">{t.landing.assessmentTitle}</h2>
            <p className="text-zinc-500 mb-6 text-sm">{t.landing.assessmentSub}</p>
            <div className="flex flex-col gap-3">
              {levelOptions.map(({ level, label, desc, color }) => (
                <button
                  key={level}
                  onClick={() => startLearning(level)}
                  className={`text-left p-4 rounded-xl border-2 transition-colors ${color}`}
                >
                  <div className="font-bold text-zinc-900">{label}</div>
                  <div className="text-sm text-zinc-600 mt-0.5">{desc}</div>
                </button>
              ))}
            </div>
            <button onClick={() => setShowAssessment(false)} className="mt-4 w-full text-zinc-500 text-sm hover:text-zinc-700">
              {t.landing.cancel}
            </button>
          </div>
        </div>
      )}

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 text-center mb-2">{t.landing.featuresTitle}</h2>
        <p className="text-zinc-500 text-center mb-10">{t.landing.featuresSub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featureItems.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <i className={`fa-solid fa-${icon} text-red-600 text-lg`} aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{title}</h3>
              <p className="text-sm text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum preview */}
      <section className="bg-white border-t border-zinc-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-10">{t.landing.yourPath}</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { level: 'A1', topics: ['Articles der/die/das', 'Personal pronouns', 'Present tense', 'sein & haben', `+ 5 ${t.landing.moreTopics}`], color: 'bg-emerald-500' },
              { level: 'A2', topics: ['Accusative case', 'Dative case', 'Perfekt tense', 'Modal verbs', `+ 4 ${t.landing.moreTopics}`], color: 'bg-blue-500' },
              { level: 'B1', topics: ['Konjunktiv II', 'Passive voice', 'Relative clauses', 'Subordinating clauses', `+ 4 ${t.landing.moreTopics}`], color: 'bg-purple-500' },
            ].map(({ level, topics, color }) => (
              <div key={level} className="flex-1 border border-zinc-100 rounded-2xl overflow-hidden shadow-sm">
                <div className={`${color} text-white px-5 py-3 font-bold text-lg`}>{level}</div>
                <ul className="px-5 py-4 space-y-2">
                  {topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-zinc-600">
                      <i className="fa-solid fa-star fa-xs text-yellow-400 shrink-0" aria-hidden="true" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 text-white py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">{t.landing.ctaTitle}</h2>
          <p className="text-zinc-400 mb-8">{t.landing.ctaSub}</p>
          <button
            onClick={() => setShowAssessment(true)}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-bold px-8 py-3.5 rounded-xl text-lg transition-colors"
          >
            {t.landing.startFree} <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  )
}
