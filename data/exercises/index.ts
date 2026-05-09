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
    id: 'ex-negation',
    lessonSlug: 'negation',
    title: 'Negation Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'en-1', type: 'multiple-choice', question: 'Complete: "Ich habe ___ Auto."', options: ['nicht', 'kein', 'keine', 'nein'], correct: 1, hint: '"Auto" (das Auto) → kein for neuter nouns' },
      { id: 'en-2', type: 'multiple-choice', question: 'Complete: "Er spielt ___ Fußball."', options: ['kein', 'keine', 'nicht', 'nein'], correct: 2, hint: 'Negating a verb uses "nicht"' },
      { id: 'en-3', type: 'fill-blank', question: 'Ich habe ___ Zeit. (I have no time — die Zeit)', answer: 'keine', hint: '"Zeit" is feminine → keine' },
      { id: 'en-4', type: 'fill-blank', question: 'Das ist ___ gut. (That is not good)', answer: 'nicht', hint: 'Negating an adjective → nicht' },
      { id: 'en-5', type: 'matching', question: 'Match each sentence to the correct negation word.', pairs: [{ german: 'Ich bin ___ Arzt.', english: 'kein' }, { german: 'Sie kommt ___ heute.', english: 'nicht' }, { german: 'Wir haben ___ Kinder.', english: 'keine' }, { german: 'Er trinkt ___ Kaffee.', english: 'keinen' }] },
    ],
  },
  {
    id: 'ex-modal-intro',
    lessonSlug: 'modal-intro',
    title: 'Modal Verbs Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'em-1', type: 'multiple-choice', question: 'Complete: "Ich ___ schwimmen." (can)', options: ['kann', 'kannst', 'könnt', 'können'], correct: 0 },
      { id: 'em-2', type: 'multiple-choice', question: 'Where does the infinitive go with a modal verb?', options: ['Position 1', 'Position 2 (with modal)', 'At the end', 'After the subject'], correct: 2 },
      { id: 'em-3', type: 'fill-blank', question: 'Er ___ (möchten) einen Kaffee bestellen.', answer: 'möchte', hint: 'er/sie/es form of möchten → möchte' },
      { id: 'em-4', type: 'fill-blank', question: '___ du mir helfen? (Can you help me?)', answer: 'Kannst', hint: 'du form of können = kannst' },
      { id: 'em-5', type: 'multiple-choice', question: 'Which sentence has correct word order?', options: ['Ich möchte essen etwas.', 'Ich möchte etwas essen.', 'Ich etwas möchte essen.', 'Etwas ich möchte essen.'], correct: 1, hint: 'Infinitive always goes to the end' },
    ],
  },
  {
    id: 'ex-numbers',
    lessonSlug: 'numbers',
    title: 'Numbers & Time Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'enb-1', type: 'multiple-choice', question: 'What is 15 in German?', options: ['fünfzehn', 'fünfzig', 'fünfundzwanzig', 'dreizehn'], correct: 0 },
      { id: 'enb-2', type: 'multiple-choice', question: '"Es ist halb acht." means:', options: ['It is 8:00.', 'It is 8:30.', 'It is 7:30.', 'It is 7:15.'], correct: 2 },
      { id: 'enb-3', type: 'fill-blank', question: 'Write 21 in German words:', answer: 'einundzwanzig', hint: 'unit + und + ten, all one word' },
      { id: 'enb-4', type: 'fill-blank', question: '"Quarter past three" → Viertel ___ drei', answer: 'nach', hint: 'Viertel nach = quarter past' },
      { id: 'enb-5', type: 'matching', question: 'Match numbers to German words.', pairs: [{ german: '7', english: 'sieben' }, { german: '12', english: 'zwölf' }, { german: '50', english: 'fünfzig' }, { german: '100', english: 'hundert' }] },
    ],
  },
  {
    id: 'ex-sentence-order',
    lessonSlug: 'sentence-order',
    title: 'Sentence Structure Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'eso-1', type: 'multiple-choice', question: 'Which position does the finite verb always occupy in a main clause?', options: ['Position 1', 'Position 2', 'Position 3', 'Last'], correct: 1 },
      { id: 'eso-2', type: 'multiple-choice', question: 'Starting with "Heute": Heute ___ ich müde.', options: ['bin — Heute bin ich müde.', 'ich bin — Heute ich bin müde.', 'ist — Heute ist ich müde.', 'ich ist — Heute ich ist müde.'], correct: 0, hint: 'V2 rule: verb comes right after Heute' },
      { id: 'eso-3', type: 'fill-blank', question: 'Morgen ___ wir nach Berlin. (fahren)', answer: 'fahren', hint: 'Morgen = pos. 1, verb = pos. 2' },
      { id: 'eso-4', type: 'multiple-choice', question: 'Which adverb order is correct (TeKaMoLo)?', options: ['Ich fahre nach Berlin morgen schnell.', 'Ich fahre morgen schnell nach Berlin.', 'Ich fahre schnell morgen nach Berlin.', 'Ich fahre schnell nach Berlin morgen.'], correct: 1, hint: 'Time → Manner → Place' },
      { id: 'eso-5', type: 'multiple-choice', question: 'Which sentence is grammatically correct?', options: ['Jeden Tag ich lerne Deutsch.', 'Jeden Tag lerne ich Deutsch.', 'Jeden Tag Deutsch ich lerne.', 'Deutsch jeden Tag ich lerne.'], correct: 1 },
    ],
  },
  {
    id: 'ex-w-questions',
    lessonSlug: 'w-questions',
    title: 'W-Questions Practice',
    level: 'A1',
    xpReward: 20,
    questions: [
      { id: 'ewq-1', type: 'multiple-choice', question: 'How do you ask "Where are you from?"', options: ['Wo kommst du?', 'Woher kommst du?', 'Wohin kommst du?', 'Wie kommst du?'], correct: 1 },
      { id: 'ewq-2', type: 'multiple-choice', question: 'Which word means "why"?', options: ['wie', 'wann', 'warum', 'wer'], correct: 2 },
      { id: 'ewq-3', type: 'fill-blank', question: '___ heißt du? (What is your name?)', answer: 'Wie', hint: 'Wie heißen Sie? / Wie heißt du?' },
      { id: 'ewq-4', type: 'fill-blank', question: '___ alt bist du? (How old are you?)', answer: 'Wie', hint: 'wie alt = how old' },
      { id: 'ewq-5', type: 'matching', question: 'Match question words to their meanings.', pairs: [{ german: 'wer', english: 'who' }, { german: 'was', english: 'what' }, { german: 'wann', english: 'when' }, { german: 'wohin', english: 'where to' }] },
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
