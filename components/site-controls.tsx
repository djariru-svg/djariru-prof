'use client'

import { Sun, Moon, Globe } from 'lucide-react'
import { useApp } from '@/components/providers'
import { LANGS } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted, t } = useApp()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.controls.theme}
      title={t.controls.theme}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold',
        className,
      )}
    >
      {mounted && isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useApp()

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-full border border-border p-0.5',
        className,
      )}
      role="group"
      aria-label={t.controls.language}
    >
      <Globe className="ml-1.5 size-3.5 text-muted-foreground" aria-hidden="true" />
      {LANGS.map((option) => {
        const active = option.code === lang
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={active}
            className={cn(
              'rounded-full px-2 py-1 text-xs font-semibold transition-colors',
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {option.short}
          </button>
        )
      })}
    </div>
  )
}
