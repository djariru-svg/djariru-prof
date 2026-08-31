'use client'

import { Bug, TestTube, Layers, GitBranch } from 'lucide-react'
import { useApp } from '@/components/providers'

const HIGHLIGHT_ICONS = [Layers, Bug, TestTube, GitBranch]

export function About() {
  const { t } = useApp()

  return (
    <section id="about" className="scroll-mt-16 border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1fr]">
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.highlights.map((highlight, i) => {
              const Icon = HIGHLIGHT_ICONS[i] ?? Layers
              return (
                <div
                  key={highlight.title}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {highlight.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.about.toolkitTitle}
          </h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {t.about.skills.map((skill) => (
              <div key={skill.group}>
                <h4 className="flex items-center gap-2 font-serif text-base font-semibold text-primary">
                  <span className="h-px w-6 bg-gold" />
                  {skill.group}
                </h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
