import type { Level } from '@/types'

export interface CurriculumTopic {
  slug: string
  title: string
  level: Level
  order: number
  icon: string
  description: string
}

export const curriculum: CurriculumTopic[] = [
  // A1
  { slug: 'articles', title: 'Articles: der, die, das', level: 'A1', order: 1, icon: '📰', description: 'Learn the three German articles and grammatical gender.' },
  { slug: 'pronouns', title: 'Personal Pronouns', level: 'A1', order: 2, icon: '👤', description: 'Master ich, du, er, sie, es and all German personal pronouns.' },
  { slug: 'present-tense', title: 'Present Tense (Präsens)', level: 'A1', order: 3, icon: '⏰', description: 'Conjugate regular German verbs in the present tense.' },
  { slug: 'sein-haben', title: 'sein & haben', level: 'A1', order: 4, icon: '🔑', description: 'The two most essential German verbs: to be and to have.' },
  { slug: 'negation', title: 'Negation (nicht/kein)', level: 'A1', order: 5, icon: '🚫', description: 'Learn how to say "no" and negate sentences correctly.' },
  { slug: 'modal-intro', title: 'Modal Verbs: können & möchten', level: 'A1', order: 6, icon: '💪', description: 'Express ability and wishes with your first modal verbs.' },
  { slug: 'numbers', title: 'Numbers & Telling Time', level: 'A1', order: 7, icon: '🔢', description: 'Count to 1000 and tell the time in German.' },
  { slug: 'sentence-order', title: 'Sentence Structure', level: 'A1', order: 8, icon: '🏗️', description: 'Understand the verb-second rule in German sentences.' },
  { slug: 'w-questions', title: 'W-Questions', level: 'A1', order: 9, icon: '❓', description: 'Ask who, what, where, when, how and why in German.' },
  // A2
  { slug: 'accusative', title: 'The Accusative Case', level: 'A2', order: 1, icon: '🎯', description: 'Learn how articles and pronouns change for direct objects.' },
  { slug: 'dative', title: 'The Dative Case', level: 'A2', order: 2, icon: '📬', description: 'Master indirect objects and the dative case in German.' },
  { slug: 'perfekt', title: 'Past Tense (Perfekt)', level: 'A2', order: 3, icon: '📅', description: 'Talk about the past using haben/sein + past participle.' },
  { slug: 'modal-verbs', title: 'All 6 Modal Verbs', level: 'A2', order: 4, icon: '🎭', description: 'Master müssen, dürfen, sollen, wollen, können, and mögen.' },
  { slug: 'separable-verbs', title: 'Separable Verbs', level: 'A2', order: 5, icon: '✂️', description: 'Understand how prefixes split off in main clauses.' },
  { slug: 'adjective-endings', title: 'Adjective Endings', level: 'A2', order: 6, icon: '🎨', description: 'Decline adjectives correctly after articles.' },
  { slug: 'prepositions', title: 'Prepositions with Cases', level: 'A2', order: 7, icon: '📍', description: 'Learn which prepositions take accusative or dative.' },
  { slug: 'comparatives', title: 'Comparatives & Superlatives', level: 'A2', order: 8, icon: '📊', description: 'Compare things using -er and am -sten forms.' },
  // B1
  { slug: 'genitive', title: 'The Genitive Case', level: 'B1', order: 1, icon: '🏷️', description: 'Express possession and relationships with the genitive.' },
  { slug: 'konjunktiv-ii', title: 'Konjunktiv II', level: 'B1', order: 2, icon: '💭', description: 'Express wishes, hypotheticals, and polite requests.' },
  { slug: 'passive', title: 'Passive Voice (Passiv)', level: 'B1', order: 3, icon: '🔄', description: 'Shift focus from actor to action with werden + Partizip II.' },
  { slug: 'relative-clauses', title: 'Relative Clauses', level: 'B1', order: 4, icon: '🔗', description: 'Expand sentences with relative pronouns and clauses.' },
  { slug: 'two-way-prepositions', title: 'Two-Way Prepositions', level: 'B1', order: 5, icon: '⚖️', description: 'Master an, auf, in, etc. with accusative vs. dative.' },
  { slug: 'infinitive-clauses', title: 'Infinitive Clauses (zu)', level: 'B1', order: 6, icon: '∞', description: 'Link clauses with zu + infinitive and um...zu.' },
  { slug: 'subordinating', title: 'Subordinating Conjunctions', level: 'B1', order: 7, icon: '🔀', description: 'Use weil, dass, ob, wenn, obwohl for complex sentences.' },
  { slug: 'advanced-word-order', title: 'Advanced Word Order', level: 'B1', order: 8, icon: '📐', description: 'Master verb position in complex and compound sentences.' },
]

export function getLessonsByLevel(level: Level) {
  return curriculum.filter((t) => t.level === level).sort((a, b) => a.order - b.order)
}

export function getLevelProgress(completedLessons: string[], level: Level): number {
  const total = curriculum.filter((t) => t.level === level).length
  const done = completedLessons.filter((slug) =>
    curriculum.some((t) => t.slug === slug && t.level === level)
  ).length
  return total === 0 ? 0 : Math.round((done / total) * 100)
}

export const levelColors: Record<Level, { bg: string; text: string; border: string; badge: string }> = {
  A1: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  A2: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  B1: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
}
