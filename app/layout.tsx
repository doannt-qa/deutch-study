import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'
import { BottomNav } from '@/components/layout/BottomNav'
import { LanguageProvider } from '@/contexts/LanguageContext'

const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', display: 'swap' })

export const metadata: Metadata = {
  title: 'Deutsch Lernen — German A1 to B1',
  description: 'An interactive platform to learn German from beginner to B1 through structured lessons, vocabulary, exercises, and chat practice.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${quicksand.variable} h-full`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full bg-zinc-50 font-sans antialiased">
        <LanguageProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 min-w-0 pb-16 md:pb-0">
              {children}
            </main>
          </div>
          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  )
}
