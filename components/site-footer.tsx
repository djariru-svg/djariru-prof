import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/brand-icons'
import { SOCIALS } from '@/lib/content'

const socialLinks = [
  { label: 'GitHub', href: SOCIALS.github, icon: GithubIcon },
  { label: 'LinkedIn', href: SOCIALS.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: SOCIALS.email, icon: Mail },
  { label: 'Instagram', href: SOCIALS.instagram, icon: InstagramIcon },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 font-serif text-sm font-semibold text-gold ring-1 ring-gold/40">
                KD
              </span>
              <span className="font-serif text-lg">Karangwa Djariru</span>
            </div>
            <p className="mt-4 font-serif text-xl italic text-gold text-balance">
              &ldquo;Knowledge is light, and action is faith.&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
              Connect
            </span>
            <ul className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground transition-colors hover:border-gold hover:bg-primary-foreground/10 hover:text-gold"
                  >
                    <Icon className="size-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Karangwa Djariru. All rights reserved.</p>
          <p>Vue.js Master — Building scalable software with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
