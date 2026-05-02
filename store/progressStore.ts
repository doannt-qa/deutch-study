'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Level, CardSRState, ProgressState } from '@/types'

interface ProgressStore extends ProgressState {
  setLevel: (level: Level) => void
  addXP: (amount: number) => void
  completeLesson: (slug: string) => void
  setExerciseScore: (id: string, score: number) => void
  completeExercise: (id: string) => void
  updateFlashcard: (cardId: string, state: CardSRState) => void
  completeChat: (scenarioId: string) => void
  updateStreak: () => void
  logActivity: (date: string) => void
  reset: () => void
}

const initialState: ProgressState = {
  currentLevel: 'A1',
  xp: 0,
  streak: { count: 0, lastDate: '' },
  completedLessons: [],
  exerciseScores: {},
  flashcardState: {},
  chatScenarios: {},
  completedExercises: [],
  lastActivity: {},
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setLevel: (level) => set({ currentLevel: level }),

      addXP: (amount) => set((s) => ({ xp: s.xp + amount })),

      completeLesson: (slug) =>
        set((s) => ({
          completedLessons: s.completedLessons.includes(slug)
            ? s.completedLessons
            : [...s.completedLessons, slug],
        })),

      setExerciseScore: (id, score) =>
        set((s) => ({
          exerciseScores: {
            ...s.exerciseScores,
            [id]: Math.max(s.exerciseScores[id] ?? 0, score),
          },
        })),

      completeExercise: (id) =>
        set((s) => ({
          completedExercises: s.completedExercises.includes(id)
            ? s.completedExercises
            : [...s.completedExercises, id],
        })),

      updateFlashcard: (cardId, state) =>
        set((s) => ({
          flashcardState: { ...s.flashcardState, [cardId]: state },
        })),

      completeChat: (scenarioId) =>
        set((s) => ({
          chatScenarios: { ...s.chatScenarios, [scenarioId]: true },
        })),

      updateStreak: () => {
        const today = new Date().toISOString().slice(0, 10)
        const { streak } = get()
        if (streak.lastDate === today) return
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
        const newCount = streak.lastDate === yesterday ? streak.count + 1 : 1
        set({ streak: { count: newCount, lastDate: today } })
      },

      logActivity: (date) =>
        set((s) => ({
          lastActivity: { ...s.lastActivity, [date]: (s.lastActivity[date] ?? 0) + 1 },
        })),

      reset: () => set(initialState),
    }),
    { name: 'deutch-progress' }
  )
)

export function xpToLevel(xp: number): { label: string; current: number; next: number; percent: number } {
  const thresholds = [0, 100, 250, 500, 900, 1400, 2000, 2800, 3800, 5000]
  const labels = ['Beginner', 'Novice', 'Student', 'Learner', 'Intermediate', 'Advanced', 'Proficient', 'Expert', 'Master', 'Legend']
  let idx = thresholds.findLastIndex((t) => xp >= t)
  idx = Math.min(idx, thresholds.length - 2)
  const current = thresholds[idx]
  const next = thresholds[idx + 1]
  return {
    label: labels[idx],
    current,
    next,
    percent: Math.round(((xp - current) / (next - current)) * 100),
  }
}
