'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function BottomNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: '/dashboard', label: t.nav.home, icon: 'gauge' },
    { href: '/lessons', label: t.nav.lessons, icon: 'book-open' },
    { href: '/vocabulary', label: t.nav.words, icon: 'clone' },
    { href: '/exercises', label: t.nav.practice, icon: 'dumbbell' },
    { href: '/chat', label: t.nav.chat_short, icon: 'comment' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200">
      {/* Language switcher strip */}
      <div className="flex justify-center py-1.5 border-b border-zinc-100">
        <LanguageSwitcher />
      </div>
      <div className="flex">
        {navItems.map(({ href, label, icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex-1 flex flex-col items-center gap-0.5 py-2 text-xs font-medium transition-colors',
                active ? 'text-red-600' : 'text-zinc-500'
              )}
            >
              <i className={`fa-solid fa-${icon} text-lg`} aria-hidden="true" />
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
