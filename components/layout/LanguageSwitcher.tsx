'use client'

import { useLanguage, type Language } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

const options: { lang: Language; flag: string; label: string }[] = [
  { lang: 'en', flag: '🇬🇧', label: 'EN' },
  { lang: 'vi', flag: '🇻🇳', label: 'VI' },
]

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-1 bg-zinc-100 rounded-lg p-0.5">
      {options.map(({ lang, flag, label }) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={cn(
            'flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold transition-colors',
            language === lang
              ? 'bg-white text-zinc-900 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-700'
          )}
        >
          <span>{flag}</span>
          {!compact && <span>{label}</span>}
        </button>
      ))}
    </div>
  )
}
