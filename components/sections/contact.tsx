import Link from 'next/link'
import { SOCIALS } from '@/lib/content'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/brand-icons'

const channels = [
  { label: 'GitHub', value: '@djariru1', href: SOCIALS.github, icon: GithubIcon },
  { label: 'LinkedIn', value: 'Karangwa Djariru', href: SOCIALS.linkedin, icon: LinkedinIcon },
  { label: 'Email', value: 'Send a message', href: SOCIALS.email, icon: Mail },
  { label: 'Instagram', value: '@djariru1', href: SOCIALS.instagram, icon: InstagramIcon },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Contact
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
              Let&apos;s build something with purpose
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Have a project, a collaboration, or a question about Vue.js and software quality?
              I&apos;d love to hear from you. Reach out through any of these channels.
            </p>

            <Link
              href={SOCIALS.email}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="size-4" />
              Email me directly
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-start justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{label}</div>
                    <div className="text-sm text-muted-foreground">{value}</div>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
