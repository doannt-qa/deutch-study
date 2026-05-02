'use client'

import { useState } from 'react'
import { chatScenarios } from '@/data/chat/scenarios'
import { useProgressStore } from '@/store/progressStore'
import { useLanguage } from '@/contexts/LanguageContext'
import { levelColors } from '@/data/curriculum'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import type { ChatScenario, ChatTurn } from '@/types'

function ScenarioList({ onStart }: { onStart: (s: ChatScenario) => void }) {
  const { chatScenarios: completed } = useProgressStore()
  const { t } = useLanguage()

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-zinc-900 mb-1">{t.chat.title}</h1>
      <p className="text-zinc-500 text-sm mb-8">{t.chat.subtitle}</p>
      <div className="flex flex-col gap-3">
        {chatScenarios.map((scenario) => {
          const done = completed[scenario.id]
          const colors = levelColors[scenario.level]
          return (
            <button
              key={scenario.id}
              onClick={() => onStart(scenario)}
              className="bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 text-left w-full"
            >
              <div className={`w-12 h-12 rounded-xl ${done ? colors.bg : 'bg-zinc-100'} flex items-center justify-center shrink-0 text-2xl`}>
                {scenario.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-zinc-900 text-sm">{scenario.title}</span>
                  <Badge className={`${colors.badge} text-xs`}>{scenario.level}</Badge>
                  {done && <i className={`fa-solid fa-circle-check ${colors.text}`} aria-hidden="true" />}
                </div>
                <p className="text-xs text-zinc-500">{scenario.description}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ChatRunner({ scenario, onBack }: { scenario: ChatScenario; onBack: () => void }) {
  const { completeChat, addXP, updateStreak, logActivity } = useProgressStore()
  const { t } = useLanguage()
  const colors = levelColors[scenario.level]

  const [turnIdx, setTurnIdx] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [history, setHistory] = useState<{ partner: string; user: string; correct: boolean }[]>([])

  const turn: ChatTurn = scenario.turns[turnIdx]
  const selectedOption = turn.options.find((o) => o.id === selected)

  function handleSelect(optionId: string) {
    if (showFeedback) return
    setSelected(optionId)
    const opt = turn.options.find((o) => o.id === optionId)!
    if (opt.isCorrect) setScore((s) => s + 1)
    setShowFeedback(true)
    setHistory((h) => [...h, { partner: turn.partnerMessage.text, user: opt.text, correct: opt.isCorrect }])
  }

  function handleNext() {
    const next = turnIdx + 1
    if (next >= scenario.turns.length) {
      completeChat(scenario.id)
      addXP(30)
      updateStreak()
      logActivity(new Date().toISOString().slice(0, 10))
      setDone(true)
    } else {
      setTurnIdx(next)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  if (done) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">{score >= scenario.turns.length * 0.8 ? '🗣️' : '💬'}</div>
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">{t.chat.conversationComplete}</h1>
        <p className="text-zinc-500 mb-1">{score}/{scenario.turns.length} {t.chat.correctResponses}</p>
        <div className="text-2xl font-bold text-yellow-500 mb-8">+30 {t.common.xp}</div>

        <div className="text-left bg-zinc-50 rounded-2xl p-4 mb-6 space-y-4">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="text-xs text-zinc-400">{t.chat.turnLabel} {i + 1}</div>
              <div className="bg-zinc-200 rounded-xl rounded-tl-none p-3 text-sm text-zinc-700 inline-block max-w-xs">{h.partner}</div>
              <div className="flex justify-end">
                <div className={`rounded-xl rounded-tr-none p-3 text-sm inline-block max-w-xs ${h.correct ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>{h.user}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={onBack} className="px-5 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium">
            {t.chat.allScenarios}
          </button>
          <button
            onClick={() => { setTurnIdx(0); setSelected(null); setShowFeedback(false); setScore(0); setDone(false); setHistory([]) }}
            className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium"
          >
            {t.chat.tryAgain}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-2">
        <button onClick={onBack} className="text-zinc-400 hover:text-zinc-700">
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xl">{scenario.icon}</span>
          <h1 className="font-bold text-zinc-900">{scenario.title}</h1>
          <Badge className={colors.badge}>{scenario.level}</Badge>
        </div>
      </div>
      <p className="text-xs text-zinc-400 mb-4 ml-8">{scenario.setting}</p>

      {history.map((h, i) => (
        <div key={i} className="mb-4 space-y-2">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 text-sm">🤖</div>
            <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-sm text-zinc-700 max-w-xs">{h.partner}</div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className={`rounded-2xl rounded-tr-none p-3 text-sm max-w-xs ${h.correct ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'}`}>{h.user}</div>
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center shrink-0 text-sm">👤</div>
          </div>
        </div>
      ))}

      <div className="flex gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 text-sm">🤖</div>
        <div>
          <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-sm text-zinc-700 max-w-xs">{turn.partnerMessage.text}</div>
          <div className="text-xs text-zinc-400 mt-1 ml-1 italic">{turn.partnerMessage.translation}</div>
          {turn.partnerMessage.vocabularyHints && (
            <div className="flex flex-wrap gap-1 mt-1.5 ml-1">
              {turn.partnerMessage.vocabularyHints.map((h) => (
                <span key={h.word} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                  {h.word} = {h.meaning}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        {turn.options.map((opt) => {
          let cls = 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
          if (showFeedback) {
            if (opt.id === selected) cls = opt.isCorrect ? 'border-emerald-400 bg-emerald-50 text-emerald-800' : 'border-red-400 bg-red-50 text-red-800'
            else if (opt.isCorrect) cls = 'border-emerald-200 bg-emerald-50 text-emerald-700'
            else cls = 'border-zinc-100 bg-zinc-50 text-zinc-400'
          }
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`text-left p-3 rounded-xl border-2 text-sm font-medium transition-colors ${cls}`}
            >
              {opt.text}
            </button>
          )
        })}
      </div>

      {showFeedback && selectedOption && (
        <div className={`p-3 rounded-xl text-sm flex gap-2 mb-4 ${selectedOption.isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
          <i className={`fa-solid ${selectedOption.isCorrect ? 'fa-circle-check' : 'fa-comment'} shrink-0 mt-0.5`} aria-hidden="true" />
          {selectedOption.feedback}
        </div>
      )}

      {showFeedback && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-zinc-700"
        >
          {turnIdx + 1 < scenario.turns.length ? t.chat.continueCta : t.chat.finishConversation}
        </button>
      )}
    </div>
  )
}

export default function ChatPage() {
  const [active, setActive] = useState<ChatScenario | null>(null)
  if (active) return <ChatRunner scenario={active} onBack={() => setActive(null)} />
  return <ScenarioList onStart={setActive} />
}
