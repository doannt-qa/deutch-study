'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Sidebar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: '/dashboard', label: t.nav.dashboard, icon: 'gauge' },
    { href: '/lessons', label: t.nav.lessons, icon: 'book-open' },
    { href: '/vocabulary', label: t.nav.vocabulary, icon: 'clone' },
    { href: '/exercises', label: t.nav.exercises, icon: 'dumbbell' },
    { href: '/chat', label: t.nav.chat, icon: 'comment' },
  ]

  return (
    <aside className="hidden md:flex flex-col w-56 border-r border-zinc-200 bg-white min-h-screen py-6 px-3 shrink-0">
      <Link href="/" className="flex items-center gap-2 px-3 mb-6">
        <span className="text-2xl">🇩🇪</span>
        <span className="font-bold text-zinc-900 text-lg leading-tight">Deutsch<br /><span className="text-red-600 text-sm font-semibold">Lernen</span></span>
      </Link>

      <div className="px-3 mb-5">
        <LanguageSwitcher />
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ href, label, icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'bg-red-50 text-red-700'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              )}
            >
              <i className={`fa-solid fa-${icon} w-4 text-center shrink-0`} aria-hidden="true" />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto px-3">
        <div className="rounded-xl bg-gradient-to-br from-red-600 to-red-800 p-4 text-white text-xs">
          <div className="font-bold text-sm mb-1">🇩🇪 German Flag</div>
          <div className="text-red-100">Black · Red · Gold</div>
          <div className="mt-2 flex gap-1">
            <div className="h-2 flex-1 rounded bg-zinc-900" />
            <div className="h-2 flex-1 rounded bg-red-500" />
            <div className="h-2 flex-1 rounded bg-yellow-400" />
          </div>
        </div>
      </div>
    </aside>
  )
}
