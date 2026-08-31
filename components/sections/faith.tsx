import { Moon, HeartHandshake, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Discipline',
    text: 'Consistent habits and focused deep work, in code and in worship.',
  },
  {
    icon: Moon,
    title: 'Integrity',
    text: 'Honesty and accountability in every commit, conversation, and commitment.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Service',
    text: 'Giving back through mentorship, knowledge sharing, and helping others grow.',
  },
]

const QURAN_PROGRESS = 33

export function Faith() {
  return (
    <section className="border-y border-border bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Faith &amp; Values
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Building with intention and Islamic values
            </h2>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
              My faith shapes how I work. Islam teaches discipline, integrity, and service to
              others — principles I carry into engineering, testing, and mentoring. I strive to
              build technology that is honest, useful, and ethical.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border border-primary-foreground/10 p-4">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-3 font-serif text-base font-semibold">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/70">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Qur'an progress card */}
          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Moon className="size-5" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold">Qur&apos;an Memorization</h3>
                <p className="text-sm text-primary-foreground/70">Continuous spiritual growth</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-primary-foreground/70">Progress</span>
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
                aria-label="Qur'an completion progress"
              >
                <div
                  className="h-full rounded-full bg-gold transition-all"
                  style={{ width: `${QURAN_PROGRESS}%` }}
                />
              </div>
              <p className="mt-5 text-pretty text-sm leading-relaxed text-primary-foreground/75">
                I have completed <strong className="text-gold">33% of the Qur&apos;an</strong> — a
                journey of dedication, patience, and steady progress that mirrors the discipline I
                bring to my craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
