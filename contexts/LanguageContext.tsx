'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { en } from '@/data/translations/en'
import type { Translations } from '@/data/translations/en'

interface LanguageContextValue {
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({ t: en })

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ t: en }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
