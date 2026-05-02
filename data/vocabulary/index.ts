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
]

export { greetings, food, travel, family, numbers, work, hobbies, weather, house, shopping, body, colors }
