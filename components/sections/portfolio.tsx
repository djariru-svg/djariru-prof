'use client'

import { ArrowUpRight } from 'lucide-react'
import { useApp } from '@/components/providers'
import { SectionHeading } from './about'

export function Portfolio() {
  const { t } = useApp()

  return (
    <section id="portfolio" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} />
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {t.portfolio.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.portfolio.projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-gold/50 hover:shadow-[0_1px_0_0_var(--gold)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-widest text-gold">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-gold group-hover:bg-accent">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
