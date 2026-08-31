import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            <Sparkles className="size-3.5 text-gold" />
            Software Studio &amp; Portfolio
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl">
            Karangwa Djariru
          </h1>

          <p className="mt-4 text-lg font-medium text-primary">
            Vue.js Master · Debug Hunter · Software Tester · Design Expert
          </p>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Vue.js Master — Building scalable software with purpose. I craft resilient
            interfaces, hunt down elusive bugs, and design systems that stand the test of
            real-world use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View portfolio
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-primary"
            >
              Get in touch
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { value: 'Vue.js', label: 'Core Specialty' },
              { value: 'Full Stack', label: 'End to End' },
              { value: 'QA First', label: 'Tested & Reliable' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-xl font-semibold text-primary">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Monogram medallion */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-sm md:block">
          <div className="absolute inset-0 rounded-3xl bg-primary" />
          <div className="absolute inset-3 rounded-2xl border border-gold/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-serif text-8xl font-semibold text-primary-foreground">KD</span>
            <span className="mt-4 h-px w-16 bg-gold" />
            <span className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">
              Est. Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
