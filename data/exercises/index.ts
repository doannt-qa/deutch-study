import type { Exercise } from '@/types'

export const exercises: Exercise[] = [
  {
    id: 'ex-articles',
    lessonSlug: 'articles',
    title: 'Articles Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'ea-1', type: 'multiple-choice', question: 'What is the correct article for "Stuhl" (chair)?', options: ['der', 'die', 'das', 'ein'], correct: 0, hint: 'Think: "der Stuhl"' },
      { id: 'ea-2', type: 'multiple-choice', question: 'What is the correct article for "Lampe" (lamp)?', options: ['der', 'die', 'das', 'ein'], correct: 1, hint: '"die Lampe" — feminine' },
      { id: 'ea-3', type: 'fill-blank', question: '___ Hund ist groß. (the dog)', answer: 'Der', hint: '"Hund" is masculine' },
      { id: 'ea-4', type: 'fill-blank', question: 'Ich habe ___ Katze. (a cat)', answer: 'eine', hint: '"Katze" is feminine → eine' },
      { id: 'ea-5', type: 'matching', question: 'Match each noun with its article.', pairs: [{ german: 'Tisch', english: 'der' }, { german: 'Stadt', english: 'die' }, { german: 'Kind', english: 'das' }, { german: 'Bücher', english: 'die (pl)' }] },
    ],
  },
  {
    id: 'ex-pronouns',
    lessonSlug: 'pronouns',
    title: 'Pronouns Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'ep-1', type: 'multiple-choice', question: 'Which pronoun means "we"?', options: ['ich', 'wir', 'ihr', 'sie'], correct: 1 },
      { id: 'ep-2', type: 'multiple-choice', question: 'Which is the formal "you"?', options: ['du', 'ihr', 'Sie', 'er'], correct: 2 },
      { id: 'ep-3', type: 'fill-blank', question: '___ kommt aus Deutschland. (He)', answer: 'Er', hint: 'He = er' },
      { id: 'ep-4', type: 'fill-blank', question: '___ lernen Deutsch. (We)', answer: 'Wir' },
      { id: 'ep-5', type: 'matching', question: 'Match German pronouns to English.', pairs: [{ german: 'ich', english: 'I' }, { german: 'du', english: 'you (inf.)' }, { german: 'er', english: 'he' }, { german: 'wir', english: 'we' }] },
    ],
  },
  {
    id: 'ex-present-tense',
    lessonSlug: 'present-tense',
    title: 'Present Tense Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'ept-1', type: 'multiple-choice', question: 'Complete: "Ich ___ Deutsch." (lernen)', options: ['lernst', 'lerne', 'lernt', 'lernen'], correct: 1 },
      { id: 'ept-2', type: 'multiple-choice', question: 'Complete: "Du ___ in Berlin." (wohnen)', options: ['wohne', 'wohnst', 'wohnt', 'wohnen'], correct: 1 },
      { id: 'ept-3', type: 'fill-blank', question: 'Er ___ (spielen) Fußball.', answer: 'spielt' },
      { id: 'ept-4', type: 'fill-blank', question: 'Wir ___ (arbeiten) morgen.', answer: 'arbeiten' },
      { id: 'ept-5', type: 'multiple-choice', question: 'Which is correct? "Ihr ___ sehr gut Deutsch."', options: ['spreche', 'spricht', 'sprecht', 'sprechen'], correct: 2 },
    ],
  },
  {
    id: 'ex-sein-haben',
    lessonSlug: 'sein-haben',
    title: 'sein & haben Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'esh-1', type: 'multiple-choice', question: 'Complete: "Ich ___ Hunger."', options: ['bin', 'bist', 'habe', 'hat'], correct: 2 },
      { id: 'esh-2', type: 'multiple-choice', question: 'Complete: "Er ___ müde."', options: ['bin', 'ist', 'hat', 'habe'], correct: 1 },
      { id: 'esh-3', type: 'fill-blank', question: 'Du ___ (sein) sehr nett.', answer: 'bist' },
      { id: 'esh-4', type: 'fill-blank', question: 'Sie (plural) ___ (haben) ein Auto.', answer: 'haben' },
      { id: 'esh-5', type: 'matching', question: 'Match pronoun to correct "sein" form.', pairs: [{ german: 'ich', english: 'bin' }, { german: 'du', english: 'bist' }, { german: 'er/sie/es', english: 'ist' }, { german: 'wir', english: 'sind' }] },
    ],
  },
  {
    id: 'ex-accusative',
    lessonSlug: 'accusative',
    title: 'Accusative Case Practice',
    level: 'A2',
    xpReward: 20,
    questions: [
      { id: 'eac-1', type: 'multiple-choice', question: 'Complete: "Ich kaufe ___ Tisch." (der Tisch)', options: ['der', 'die', 'den', 'dem'], correct: 2 },
      { id: 'eac-2', type: 'multiple-choice', question: 'Complete: "Er liest ___ Zeitung." (die Zeitung)', options: ['der', 'die', 'den', 'das'], correct: 1 },
      { id: 'eac-3', type: 'fill-blank', question: 'Ich brauche ___ (ein) Stift. (der Stift)', answer: 'einen', hint: 'Masculine + accusative: einen' },
      { id: 'eac-4', type: 'fill-blank', question: 'Sie kauft ___ (die) Jacke.', answer: 'die', hint: 'Feminine stays the same in accusative' },
      { id: 'eac-5', type: 'multiple-choice', question: 'Which article changes in the accusative?', options: ['der → den', 'die → den', 'das → den', 'die (pl) → den'], correct: 0 },
    ],
  },
  {
    id: 'ex-perfekt',
    lessonSlug: 'perfekt',
    title: 'Perfekt Tense Practice',
    level: 'A2',
    xpReward: 20,
    questions: [
      { id: 'epf-1', type: 'multiple-choice', question: 'What is the Partizip II of "machen"?', options: ['gemacht', 'gemachet', 'macht', 'gemaken'], correct: 0 },
      { id: 'epf-2', type: 'multiple-choice', question: '"fahren" uses which auxiliary in Perfekt?', options: ['haben', 'sein', 'werden', 'bleiben'], correct: 1 },
      { id: 'epf-3', type: 'fill-blank', question: 'Ich ___ (haben) das Buch gelesen.', answer: 'habe' },
      { id: 'epf-4', type: 'fill-blank', question: 'Er ___ (sein) nach Berlin gefahren.', answer: 'ist' },
      { id: 'epf-5', type: 'multiple-choice', question: 'What is Partizip II of "studieren"?', options: ['gestudiert', 'studiert', 'estudiert', 'gestudieret'], correct: 1 },
    ],
  },
  {
    id: 'ex-konjunktiv-ii',
    lessonSlug: 'konjunktiv-ii',
    title: 'Konjunktiv II Practice',
    level: 'B1',
    xpReward: 25,
    questions: [
      { id: 'ekk-1', type: 'multiple-choice', question: 'How do you say "I would travel"?', options: ['Ich reise.', 'Ich würde reisen.', 'Ich bin gereist.', 'Ich kann reisen.'], correct: 1 },
      { id: 'ekk-2', type: 'multiple-choice', question: 'Konjunktiv II of "sein" for "ich" is:', options: ['sei', 'wäre', 'würde', 'bin'], correct: 1 },
      { id: 'ekk-3', type: 'fill-blank', question: 'Wenn ich Zeit ___ (haben), würde ich reisen.', answer: 'hätte' },
      { id: 'ekk-4', type: 'fill-blank', question: '___ (können, polite) Sie mir helfen?', answer: 'Könnten' },
      { id: 'ekk-5', type: 'matching', question: 'Match verbs to their Konjunktiv II (ich) forms.', pairs: [{ german: 'sein', english: 'wäre' }, { german: 'haben', english: 'hätte' }, { german: 'können', english: 'könnte' }, { german: 'werden', english: 'würde' }] },
    ],
  },
  {
    id: 'ex-passive',
    lessonSlug: 'passive',
    title: 'Passive Voice Practice',
    level: 'B1',
    xpReward: 25,
    questions: [
      { id: 'eps-1', type: 'multiple-choice', question: 'Passiv is formed with:', options: ['haben + Infinitiv', 'sein + Infinitiv', 'werden + Partizip II', 'würde + Partizip II'], correct: 2 },
      { id: 'eps-2', type: 'fill-blank', question: 'Das Haus ___ (werden) gebaut.', answer: 'wird' },
      { id: 'eps-3', type: 'multiple-choice', question: 'Transform: "Man liest das Buch." (Passiv)', options: ['Das Buch liest man.', 'Das Buch wird gelesen.', 'Das Buch hat gelesen.', 'Das Buch ist gelesen.'], correct: 1 },
      { id: 'eps-4', type: 'fill-blank', question: 'The agent is expressed with ___ + Dative.', answer: 'von' },
      { id: 'eps-5', type: 'multiple-choice', question: 'Past Passive of "bauen": Das Haus ___', options: ['hat gebaut', 'wurde gebaut', 'ist gebaut', 'war gebaut'], correct: 1 },
    ],
  },
]

export function getExercisesByLesson(slug: string): Exercise | undefined {
  return exercises.find((e) => e.lessonSlug === slug)
}

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((e) => e.id === id)
}
