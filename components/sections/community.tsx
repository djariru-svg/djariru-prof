import { SectionHeading } from './about'
import { Users, GraduationCap, Mic } from 'lucide-react'

const activities = [
  {
    icon: GraduationCap,
    title: 'Mentorship',
    text: 'Guiding aspiring developers through Vue.js, testing, and clean software design fundamentals.',
  },
  {
    icon: Mic,
    title: 'Tech Talks & Tutorials',
    text: 'Sharing practical tutorials on debugging, testing, and productivity with the developer community.',
  },
  {
    icon: Users,
    title: 'Community Building',
    text: 'Fostering local and online developer circles rooted in collaboration, ethics, and generosity.',
  },
]

export function Community() {
  return (
    <section className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Community" title="Leadership & giving back" />
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Beyond code, I invest in people — mentoring, teaching, and building communities where
          developers learn, grow, and support one another.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {activities.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-gold/50"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
