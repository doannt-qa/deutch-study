import type { VocabTopic } from '@/types'
import { greetings } from './greetings'
import { food } from './food'
import { travel } from './travel'
import { family } from './family'
import { numbers } from './numbers'
import { work } from './work'
import { hobbies } from './hobbies'
import { weather } from './weather'
import { house } from './house'
import { shopping } from './shopping'
import { body } from './body'
import { colors } from './colors'
import { wortlisteA1 } from './wortliste_a1'
import { wortlisteA2 } from './wortliste_a2'
import { wortlisteB1 } from './wortliste_b1'

export const vocabTopics: VocabTopic[] = [
  { id: 'greetings', title: 'Greetings & Introductions', icon: '👋', level: 'A1', description: 'Essential phrases for meeting people and basic conversations.', words: greetings },
  { id: 'numbers', title: 'Numbers & Time', icon: '🔢', level: 'A1', description: 'Count, tell the time, and talk about dates.', words: numbers },
  { id: 'family', title: 'Family & Relationships', icon: '👨‍👩‍👧', level: 'A1', description: 'Vocabulary for family members and personal relationships.', words: family },
  { id: 'food', title: 'Food & Drinks', icon: '🍽️', level: 'A1', description: 'Everything you need at a restaurant or supermarket.', words: food },
  { id: 'colors', title: 'Colors & Clothes', icon: '🎨', level: 'A1', description: 'Colors and clothing vocabulary for shopping and describing.', words: colors },
  { id: 'body', title: 'Body & Health', icon: '🏥', level: 'A1', description: 'Body parts, health conditions, and medical vocabulary.', words: body },
  { id: 'weather', title: 'Weather & Seasons', icon: '🌤️', level: 'A1', description: 'Talk about the weather and describe the seasons.', words: weather },
  { id: 'house', title: 'House & Home', icon: '🏠', level: 'A1', description: 'Rooms, furniture, and household vocabulary.', words: house },
  { id: 'hobbies', title: 'Hobbies & Free Time', icon: '⚽', level: 'A1', description: 'Activities and hobbies for talking about free time.', words: hobbies },
  { id: 'travel', title: 'Travel & Transport', icon: '✈️', level: 'A1', description: 'Getting around, directions, and travel essentials.', words: travel },
  { id: 'work', title: 'Work & School', icon: '💼', level: 'A2', description: 'Professional and academic vocabulary for work and study.', words: work },
  { id: 'shopping', title: 'Shopping & Money', icon: '🛍️', level: 'A1', description: 'Buying things, prices, and shopping phrases.', words: shopping },
  { id: 'wortliste-a1', title: 'Goethe A1 Wortliste', icon: '📋', level: 'A1', description: 'Official Goethe-Institut A1 word list — complete vocabulary for the Start Deutsch 1 exam.', words: wortlisteA1 },
  { id: 'wortliste-a2', title: 'Goethe A2 Wortliste', icon: '📋', level: 'A2', description: 'Official Goethe-Institut A2 word list — complete vocabulary for the Goethe-Zertifikat A2 exam.', words: wortlisteA2 },
  { id: 'wortliste-b1', title: 'Goethe B1 Wortliste', icon: '📋', level: 'B1', description: 'Official Goethe-Institut B1 word list — complete vocabulary for the Goethe-Zertifikat B1 exam.', words: wortlisteB1 },
]

export { greetings, food, travel, family, numbers, work, hobbies, weather, house, shopping, body, colors, wortlisteA1, wortlisteA2, wortlisteB1 }
