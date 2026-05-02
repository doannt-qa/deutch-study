'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { getExerciseById } from '@/data/exercises'
import { useProgressStore } from '@/store/progressStore'
import { useLanguage } from '@/contexts/LanguageContext'
import { levelColors } from '@/data/curriculum'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import type { ExerciseQuestion } from '@/types'

export default function ExercisePage() {
  const { id } = useParams<{ id: string }>()
  const exercise = getExerciseById(id)
  const { setExerciseScore, completeExercise, addXP, updateStreak, logActivity } = useProgressStore()
  const { t } = useLanguage()

  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [textInput, setTextInput] = useState('')
  const [matchSelected, setMatchSelected] = useState<string | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set())
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  if (!exercise) return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <p className="text-zinc-500 mb-4">{t.exercises.notFound}</p>
      <Link href="/exercises" className="text-red-600 hover:underline">{t.exercises.allExercises}</Link>
    </div>
  )

  const ex = exercise
  const colors = levelColors[ex.level]
  const q: ExerciseQuestion = ex.questions[qIdx]

  function checkAnswer() {
    if (q.type === 'multiple-choice') {
      const isCorrect = selected === q.correct
      setCorrect(isCorrect)
      setAnswered(true)
      if (isCorrect) setScore((s) => s + 1)
    } else if (q.type === 'fill-blank') {
      const isCorrect = textInput.trim().toLowerCase() === q.answer?.toLowerCase()
      setCorrect(isCorrect)
      setAnswered(true)
      if (isCorrect) setScore((s) => s + 1)
    }
  }

  function handleMatchClick(item: string, isGerman: boolean) {
    if (!matchSelected) { setMatchSelected(item); return }
    const german = isGerman ? item : matchSelected
    const english = isGerman ? matchSelected : item
    const pair = q.pairs?.find((p) => p.german === german && p.english === english)
    if (pair) {
      const newMatched = new Set(matchedPairs).add(german)
      setMatchedPairs(newMatched)
      if (newMatched.size === q.pairs!.length) {
        setScore((s) => s + 1)
        setAnswered(true)
        setCorrect(true)
      }
    }
    setMatchSelected(null)
  }

  function nextQuestion() {
    const next = qIdx + 1
    if (next >= ex.questions.length) {
      const finalPct = Math.round(score / ex.questions.length * 100)
      setExerciseScore(ex.id, finalPct)
      completeExercise(ex.id)
      addXP(ex.xpReward)
      updateStreak()
      logActivity(new Date().toISOString().slice(0, 10))
      setDone(true)
    } else {
      setQIdx(next)
      setSelected(null)
      setTextInput('')
      setMatchSelected(null)
      setMatchedPairs(new Set())
      setAnswered(false)
      setCorrect(false)
    }
  }

  if (done) {
    const pct = Math.round((score / ex.questions.length) * 100)
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">{pct === 100 ? '🏆' : pct >= 60 ? '🎉' : '💪'}</div>
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">{t.exercises.exerciseComplete}</h1>
        <p className="text-zinc-500 mb-1">{score}/{ex.questions.length} {t.lessons.correct}</p>
        <p className="text-4xl font-bold text-zinc-900 mb-1">{pct}%</p>
        <div className="text-2xl font-bold text-yellow-500 mb-6">+{ex.xpReward} {t.common.xp}</div>
        <div className="flex gap-3 justify-center">
          <Link href="/exercises" className="px-5 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium">
            {t.exercises.allExercises}
          </Link>
          <Link href="/lessons" className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium">
            {t.exercises.backToLessons}
          </Link>
        </div>
      </div>
    )
  }

  const qTypeLabel = q.type === 'multiple-choice'
    ? t.exercises.multipleChoice
    : q.type === 'fill-blank'
    ? t.exercises.fillBlank
    : t.exercises.matching

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/exercises" className="text-zinc-400 hover:text-zinc-700">
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="font-bold text-zinc-900">{ex.title}</h1>
            <Badge className={colors.badge}>{ex.level}</Badge>
          </div>
          <Progress value={(qIdx / ex.questions.length) * 100} className="h-1.5" />
        </div>
        <span className="text-sm text-zinc-500 shrink-0">{qIdx + 1}/{ex.questions.length}</span>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6">
        <div className="text-xs text-zinc-400 uppercase tracking-wide mb-3 font-semibold">{qTypeLabel}</div>
        <p className="font-semibold text-zinc-900 text-base mb-5">{q.question}</p>

        {/* Multiple Choice */}
        {q.type === 'multiple-choice' && q.options && (
          <div className="flex flex-col gap-2">
            {q.options.map((opt, i) => {
              let cls = 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
              if (answered) {
                if (i === q.correct) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800'
                else if (i === selected) cls = 'border-red-400 bg-red-50 text-red-800'
                else cls = 'border-zinc-100 bg-zinc-50 text-zinc-400'
              } else if (selected === i) {
                cls = 'border-zinc-900 bg-zinc-50 text-zinc-900'
              }
              return (
                <button
                  key={i}
                  onClick={() => !answered && setSelected(i)}
                  className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${cls}`}
                >
                  <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-xs border-current">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>
        )}

        {/* Fill in the Blank */}
        {q.type === 'fill-blank' && (
          <div>
            <Input
              value={textInput}
              onChange={(e) => !answered && setTextInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !answered && textInput && checkAnswer()}
              placeholder={t.exercises.typeAnswer}
              className={`text-base ${answered ? correct ? 'border-emerald-400 bg-emerald-50' : 'border-red-400 bg-red-50' : ''}`}
              disabled={answered}
            />
            {q.hint && !answered && <p className="text-xs text-zinc-400 mt-1.5">💡 {q.hint}</p>}
            {answered && !correct && (
              <p className="text-sm text-emerald-700 mt-2">{t.exercises.correctAnswer}: <strong>{q.answer}</strong></p>
            )}
          </div>
        )}

        {/* Matching */}
        {q.type === 'matching' && q.pairs && (
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <div className="text-xs text-zinc-400 text-center font-semibold mb-1">{t.exercises.german}</div>
              {q.pairs.map((pair) => {
                const isMatched = matchedPairs.has(pair.german)
                const isSel = matchSelected === pair.german
                return (
                  <button
                    key={pair.german}
                    onClick={() => !isMatched && handleMatchClick(pair.german, true)}
                    className={`w-full p-2.5 rounded-xl border-2 text-sm font-medium transition-colors text-center ${isMatched ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : isSel ? 'border-zinc-900 bg-zinc-100 text-zinc-900' : 'border-zinc-200 hover:border-zinc-400 text-zinc-700'}`}
                  >
                    {pair.german}
                  </button>
                )
              })}
            </div>
            <div className="space-y-2">
              <div className="text-xs text-zinc-400 text-center font-semibold mb-1">{t.exercises.english}</div>
              {q.pairs.map((pair) => {
                const isMatched = matchedPairs.has(pair.german)
                const isSel = matchSelected === pair.english
                return (
                  <button
                    key={pair.english}
                    onClick={() => !isMatched && handleMatchClick(pair.english, false)}
                    className={`w-full p-2.5 rounded-xl border-2 text-sm font-medium transition-colors text-center ${isMatched ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : isSel ? 'border-zinc-900 bg-zinc-100 text-zinc-900' : 'border-zinc-200 hover:border-zinc-400 text-zinc-700'}`}
                  >
                    {pair.english}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {answered && q.type !== 'matching' && (
          <div className={`mt-4 p-3 rounded-xl flex gap-2 text-sm ${correct ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
            <i className={`fa-solid ${correct ? 'fa-circle-check' : 'fa-circle-xmark'} shrink-0 mt-0.5`} aria-hidden="true" />
            {correct ? t.exercises.correctFeedback : t.exercises.incorrectFeedback}
          </div>
        )}
      </div>

      <div className="mt-5">
        {!answered && q.type !== 'matching' ? (
          <button
            onClick={checkAnswer}
            disabled={q.type === 'multiple-choice' ? selected === null : !textInput.trim()}
            className="w-full py-3 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {t.exercises.checkAnswer}
          </button>
        ) : (answered || (q.type === 'matching' && matchedPairs.size === q.pairs?.length)) ? (
          <button
            onClick={nextQuestion}
            className="w-full py-3 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-zinc-700 flex items-center justify-center gap-2"
          >
            {qIdx + 1 < ex.questions.length ? t.exercises.nextQuestion : t.exercises.seeResults} <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>
  )
}
