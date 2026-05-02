'use client'

import { useCallback } from 'react'
import { useProgressStore } from '@/store/progressStore'
import type { CardSRState, VocabWord } from '@/types'

const DEFAULT_EASE = 2.5
const MIN_EASE = 1.3

function getNextReview(interval: number): string {
  const d = new Date()
  d.setDate(d.getDate() + interval)
  return d.toISOString().slice(0, 10)
}

export function sm2(state: CardSRState, rating: 0 | 1 | 2 | 3): CardSRState {
  let { interval, easeFactor, repetitions } = state

  if (rating === 0) {
    interval = 1
    repetitions = 0
  } else if (rating === 1) {
    interval = Math.max(1, Math.round(interval * 1.2))
    easeFactor = Math.max(MIN_EASE, easeFactor - 0.15)
  } else if (rating === 2) {
    interval = repetitions === 0 ? 1 : repetitions === 1 ? 3 : Math.round(interval * easeFactor)
    repetitions = repetitions + 1
  } else {
    interval = repetitions === 0 ? 1 : repetitions === 1 ? 4 : Math.round(interval * easeFactor * 1.3)
    easeFactor = Math.min(easeFactor + 0.15, 3.0)
    repetitions = repetitions + 1
  }

  return { interval, easeFactor, repetitions, nextReview: getNextReview(interval) }
}

export function isDueToday(state: CardSRState | undefined): boolean {
  if (!state) return true
  const today = new Date().toISOString().slice(0, 10)
  return state.nextReview <= today
}

export function useFlashcards(words: VocabWord[]) {
  const { flashcardState, updateFlashcard, addXP } = useProgressStore()

  const dueWords = words.filter((w) => isDueToday(flashcardState[w.id]))

  const rateCard = useCallback(
    (wordId: string, rating: 0 | 1 | 2 | 3) => {
      const current: CardSRState = flashcardState[wordId] ?? {
        interval: 1,
        easeFactor: DEFAULT_EASE,
        repetitions: 0,
        nextReview: new Date().toISOString().slice(0, 10),
      }
      const next = sm2(current, rating)
      updateFlashcard(wordId, next)
    },
    [flashcardState, updateFlashcard]
  )

  const finishSession = useCallback(
    (reviewed: number) => {
      const xp = Math.floor((reviewed / 10) * 30)
      if (xp > 0) addXP(xp)
    },
    [addXP]
  )

  return { dueWords, rateCard, finishSession, flashcardState }
}
