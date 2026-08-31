import { SKILLS } from '@/lib/content'
import { Bug, TestTube, Layers, GitBranch } from 'lucide-react'

const highlights = [
  {
    icon: Layers,
    title: 'Vue.js Mastery',
    text: 'Architecting scalable, maintainable Vue applications with clean, reusable components.',
  },
  {
    icon: Bug,
    title: 'Debug Hunter',
    text: 'Tracking down the hardest bugs with a methodical, reproducible approach.',
  },
  {
    icon: TestTube,
    title: 'Software Testing',
    text: 'Building trust through tests that document intent and catch real regressions.',
  },
  {
    icon: GitBranch,
    title: 'Design & Workflows',
    text: 'Thoughtful software design and disciplined Git workflows that keep teams shipping.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="About" title="A craftsman devoted to quality" />

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1fr]">
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Karangwa Djariru — a software engineer who treats building software as a
              craft. My work centers on <strong className="text-foreground">Vue.js</strong>, where
              I design front-end architectures that stay simple as they grow, backed by robust
              backend systems in Python, JavaScript, and MongoDB.
            </p>
            <p>
              I earned the reputation of a{' '}
              <strong className="text-foreground">debug hunter</strong> because I don&apos;t stop at
              symptoms — I trace problems to their root. As a{' '}
              <strong className="text-foreground">software tester</strong>, I believe reliability is
              a feature, and that great design and disciplined workflows are what let teams move fast
              without breaking things.
            </p>
            <p>
              From Firebase Hosting deployments to Git workflows and CI, I care about the whole
              lifecycle — and about mentoring the community along the way.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Technical Toolkit
          </h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {SKILLS.map((skill) => (
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
