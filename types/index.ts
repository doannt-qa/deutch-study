export type Level = 'A1' | 'A2' | 'B1'

export interface VocabWord {
  id: string
  german: string
  article?: string
  plural?: string
  english: string
  example: string
  exampleTranslation: string
  topic: string
  level: Level
}

export interface CardSRState {
  interval: number
  easeFactor: number
  nextReview: string
  repetitions: number
}

export interface GrammarTable {
  headers: string[]
  rows: string[][]
}

export interface ExampleSentence {
  german: string
  english: string
  highlight?: string
}

export interface LessonSection {
  type: 'explanation' | 'table' | 'examples' | 'tip' | 'rule'
  title?: string
  content?: string
  table?: GrammarTable
  examples?: ExampleSentence[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface Lesson {
  slug: string
  title: string
  level: Level
  order: number
  description: string
  icon: string
  sections: LessonSection[]
  quiz: QuizQuestion[]
  xpReward: number
}

export interface ExerciseQuestion {
  id: string
  type: 'multiple-choice' | 'fill-blank' | 'matching'
  question: string
  options?: string[]
  correct?: number
  answer?: string
  pairs?: { german: string; english: string }[]
  hint?: string
}

export interface Exercise {
  id: string
  lessonSlug: string
  title: string
  level: Level
  questions: ExerciseQuestion[]
  xpReward: number
}

export interface VocabTopic {
  id: string
  title: string
  icon: string
  level: Level
  description: string
  words: VocabWord[]
}

export interface ChatOption {
  id: string
  text: string
  isCorrect: boolean
  feedback: string
}

export interface ChatMessage {
  id: string
  sender: 'partner' | 'user'
  text: string
  translation?: string
  vocabularyHints?: { word: string; meaning: string }[]
}

export interface ChatTurn {
  partnerMessage: ChatMessage
  options: ChatOption[]
  nextTurnId?: string
}

export interface ChatScenario {
  id: string
  title: string
  level: Level
  description: string
  icon: string
  setting: string
  turns: ChatTurn[]
}

export interface ProgressState {
  currentLevel: Level
  xp: number
  streak: { count: number; lastDate: string }
  completedLessons: string[]
  exerciseScores: Record<string, number>
  flashcardState: Record<string, CardSRState>
  chatScenarios: Record<string, boolean>
  completedExercises: string[]
  lastActivity: Record<string, number>
}
