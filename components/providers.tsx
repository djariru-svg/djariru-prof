'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { translations, type Lang } from '@/lib/i18n'

type Theme = 'light' | 'dark'

type AppContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof translations)['en']
  theme: Theme
  toggleTheme: () => void
  mounted: boolean
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Reconcile client state with whatever the pre-hydration script applied.
  useEffect(() => {
    const storedLang = localStorage.getItem('lang') as Lang | null
    if (storedLang && translations[storedLang]) {
      setLangState(storedLang)
    }
    setThemeState(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    setMounted(true)
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute('lang', next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* ignore */
      }
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }, [])

  const value: AppContextValue = {
    lang,
    setLang,
    t: translations[lang],
    theme,
    toggleTheme,
    mounted,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) {
    throw new Error('useApp must be used within AppProviders')
  }
  return ctx
}
