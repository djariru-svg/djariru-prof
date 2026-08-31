'use client'

import { Moon, HeartHandshake, ShieldCheck } from 'lucide-react'
import { useApp } from '@/components/providers'

const VALUE_ICONS = [ShieldCheck, Moon, HeartHandshake]
const QURAN_PROGRESS = 33

export function Faith() {
  const { t } = useApp()

  return (
    <section className="border-y border-border bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.faith.eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              {t.faith.title}
            </h2>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
              {t.faith.intro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {t.faith.values.map((value, i) => {
                const Icon = VALUE_ICONS[i] ?? Moon
                return (
                  <div key={value.title} className="rounded-xl border border-primary-foreground/10 p-4">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-3 font-serif text-base font-semibold">{value.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/70">
                      {value.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Qur'an progress card */}
          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Moon className="size-5" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold">{t.faith.cardTitle}</h3>
                <p className="text-sm text-primary-foreground/70">{t.faith.cardSubtitle}</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-primary-foreground/70">{t.faith.progressLabel}</span>
                <span className="font-serif text-3xl font-semibold text-gold">
                  {QURAN_PROGRESS}%
                </span>
              </div>
              <div
                className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-primary-foreground/15"
                role="progressbar"
                aria-valuenow={QURAN_PROGRESS}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={t.faith.cardTitle}
              >
                <div
                  className="h-full rounded-full bg-gold transition-all"
                  style={{ width: `${QURAN_PROGRESS}%` }}
                />
              </div>
              <p className="mt-5 text-pretty text-sm leading-relaxed text-primary-foreground/75">
                {t.faith.bodyBefore}
                <strong className="text-gold">{t.faith.bodyHighlight}</strong>
                {t.faith.bodyAfter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
