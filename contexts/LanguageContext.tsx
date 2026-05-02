'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { en } from '@/data/translations/en'
import { vi } from '@/data/translations/vi'
import type { Translations } from '@/data/translations/en'

export type Language = 'en' | 'vi'

const translations: Record<Language, Translations> = { en, vi }

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
  t: en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('app-language') as Language | null
    if (saved && (saved === 'en' || saved === 'vi')) setLanguageState(saved)
  }, [])

  function setLanguage(lang: Language) {
    setLanguageState(lang)
    localStorage.setItem('app-language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
