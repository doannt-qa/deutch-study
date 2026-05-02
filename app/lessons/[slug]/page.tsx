'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { getLessonBySlug } from '@/data/lessons'
import { useProgressStore } from '@/store/progressStore'
import { useLanguage } from '@/contexts/LanguageContext'
import { levelColors } from '@/data/curriculum'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

export default function LessonPage() {
  const { slug } = useParams<{ slug: string }>()
  const lesson = getLessonBySlug(slug)
  const { completeLesson, addXP, updateStreak, logActivity } = useProgressStore()
  const { t } = useLanguage()

  const [phase, setPhase] = useState<'lesson' | 'quiz'>('lesson')
  const [sectionIdx, setSectionIdx] = useState(0)
  const [quizIdx, setQuizIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [done, setDone] = useState(false)

  if (!lesson) return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-4">🔍</div>
      <h1 className="text-xl font-bold text-zinc-900 mb-2">{t.lessons.notFound}</h1>
      <Link href="/lessons" className="text-red-600 hover:underline">{t.lessons.backToLessons}</Link>
    </div>
  )

  const ls = lesson
  const colors = levelColors[ls.level]
  const section = ls.sections[sectionIdx]
  const question = ls.quiz[quizIdx]

  function handleAnswer(idx: number) {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === question.correct) setCorrectCount((c) => c + 1)
  }

  function nextQuestion() {
    if (quizIdx + 1 < ls.quiz.length) {
      setQuizIdx((i) => i + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      const isPerfect = correctCount + (selected === question.correct ? 1 : 0) === ls.quiz.length
      completeLesson(ls.slug)
      addXP(ls.xpReward + (isPerfect ? 10 : 0))
      updateStreak()
      logActivity(new Date().toISOString().slice(0, 10))
      setDone(true)
    }
  }

  if (done) {
    const finalScore = correctCount + (selected === question?.correct ? 1 : 0)
    const pct = Math.round((finalScore / ls.quiz.length) * 100)
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">{pct === 100 ? '🏆' : pct >= 60 ? '🎉' : '💪'}</div>
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">{t.lessons.lessonComplete}</h1>
        <p className="text-zinc-500 mb-2">{finalScore}/{ls.quiz.length} {t.lessons.correct}</p>
        <div className="text-3xl font-bold text-yellow-500 mb-6">+{ls.xpReward + (pct === 100 ? 10 : 0)} {t.common.xp}</div>
        <div className="flex gap-3 justify-center">
          <Link href="/lessons" className="px-5 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50">
            {t.lessons.allLessons}
          </Link>
          <Link href="/exercises" className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700">
            {t.lessons.practiceNow}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/lessons" className="text-zinc-400 hover:text-zinc-700">
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <Badge className={colors.badge}>{ls.level}</Badge>
            <span className="text-xs text-zinc-500">{t.lessons.lesson} {ls.order}</span>
          </div>
          <h1 className="font-bold text-zinc-900 text-lg truncate">{ls.title}</h1>
        </div>
      </div>

      {phase === 'lesson' ? (
        <>
          <Progress value={((sectionIdx + 1) / ls.sections.length) * 100} className="mb-6 h-2" />
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 min-h-64">
            {section.type === 'explanation' && (
              <div>
                {section.title && <h2 className="text-lg font-bold text-zinc-900 mb-3">{section.title}</h2>}
                <p className="text-zinc-600 leading-relaxed">{section.content}</p>
              </div>
            )}
            {section.type === 'table' && section.table && (
              <div>
                {section.title && <h2 className="text-lg font-bold text-zinc-900 mb-3">{section.title}</h2>}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className={colors.bg}>
                        {section.table.headers.map((h) => (
                          <th key={h} className={`text-left p-3 font-semibold ${colors.text}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                          {row.map((cell, j) => (
                            <td key={j} className="p-3 text-zinc-700 border-b border-zinc-100">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {section.type === 'examples' && section.examples && (
              <div>
                {section.title && <h2 className="text-lg font-bold text-zinc-900 mb-3">{section.title}</h2>}
                <div className="space-y-3">
                  {section.examples.map((ex, i) => (
                    <div key={i} className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                      <p className={`font-medium ${colors.text}`}>
                        {ex.highlight
                          ? ex.german.split(ex.highlight).map((part, pi, arr) => (
                              <span key={pi}>{part}{pi < arr.length - 1 && <strong className="underline decoration-2">{ex.highlight}</strong>}</span>
                            ))
                          : ex.german}
                      </p>
                      <p className="text-zinc-500 text-sm mt-0.5 italic">{ex.english}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {section.type === 'tip' && (
              <div className="flex gap-3 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                <i className="fa-solid fa-lightbulb text-yellow-500 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-zinc-700 text-sm leading-relaxed">{section.content}</p>
              </div>
            )}
            {section.type === 'rule' && (
              <div className="flex gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                <i className="fa-solid fa-circle-exclamation text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-zinc-700 text-sm leading-relaxed font-medium">{section.content}</p>
              </div>
            )}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setSectionIdx((i) => Math.max(0, i - 1))}
              disabled={sectionIdx === 0}
              className="px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium disabled:opacity-40 hover:bg-zinc-50"
            >
              <i className="fa-solid fa-chevron-left" aria-hidden="true" />
            </button>
            {sectionIdx < ls.sections.length - 1 ? (
              <button
                onClick={() => setSectionIdx((i) => i + 1)}
                className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-700 flex items-center gap-2"
              >
                {t.lessons.nextSection} <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </button>
            ) : (
              <button
                onClick={() => setPhase('quiz')}
                className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 flex items-center gap-2"
              >
                <i className="fa-solid fa-book-open" aria-hidden="true" /> {t.lessons.takeQuiz}
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between text-sm text-zinc-500 mb-2">
            <span>{t.lessons.lesson} {quizIdx + 1} {t.lessons.of} {ls.quiz.length}</span>
            <span>{correctCount} {t.lessons.correct}</span>
          </div>
          <Progress value={(quizIdx / ls.quiz.length) * 100} className="mb-6 h-2" />
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6">
            <p className="font-semibold text-zinc-900 text-lg mb-5">{question.question}</p>
            <div className="flex flex-col gap-2.5">
              {question.options.map((opt, i) => {
                const isSelected = selected === i
                const isCorrect = i === question.correct
                let cls = 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
                if (answered) {
                  if (isCorrect) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800'
                  else if (isSelected && !isCorrect) cls = 'border-red-400 bg-red-50 text-red-800'
                  else cls = 'border-zinc-100 bg-zinc-50 text-zinc-400'
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-colors font-medium text-sm ${cls}`}
                  >
                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-xs ${answered && isCorrect ? 'border-emerald-400 bg-emerald-400 text-white' : answered && isSelected ? 'border-red-400 bg-red-400 text-white' : 'border-current'}`}>
                      {answered && isCorrect ? '✓' : answered && isSelected ? '✗' : String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>
            {answered && (
              <div className={`mt-4 p-3 rounded-xl flex gap-2 text-sm ${selected === question.correct ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                <i className={`fa-solid ${selected === question.correct ? 'fa-circle-check' : 'fa-circle-xmark'} shrink-0 mt-0.5`} aria-hidden="true" />
                {question.explanation}
              </div>
            )}
          </div>
          {answered && (
            <button
              onClick={nextQuestion}
              className="mt-5 w-full py-3 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-zinc-700 flex items-center justify-center gap-2"
            >
              {quizIdx + 1 < ls.quiz.length ? t.lessons.nextQuestion : t.lessons.finishLesson} <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            </button>
          )}
        </>
      )}
    </div>
  )
}
