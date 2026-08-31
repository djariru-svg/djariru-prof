'use client'

import { Users, GraduationCap, Mic } from 'lucide-react'
import { useApp } from '@/components/providers'
import { SectionHeading } from './about'

const ACTIVITY_ICONS = [GraduationCap, Mic, Users]

export function Community() {
  const { t } = useApp()

  return (
    <section className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow={t.community.eyebrow} title={t.community.title} />
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {t.community.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.community.activities.map((activity, i) => {
            const Icon = ACTIVITY_ICONS[i] ?? Users
            return (
              <div
                key={activity.title}
                className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-gold/50"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activity.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
