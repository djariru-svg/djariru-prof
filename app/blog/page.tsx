import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PostCard } from '@/components/post-card'
import { POSTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog — Karangwa Djariru',
  description:
    'Insights on Vue.js, debugging, testing, productivity, and Islamic perspectives on technology and ethics.',
}

const categories = ['All', ...Array.from(new Set(POSTS.map((p) => p.category)))]

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            The Blog
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance md:text-5xl">
            Writing on craft, faith &amp; code
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Practical lessons on Vue.js, debugging, and testing — alongside reflections on
            productivity and Islamic perspectives on technology and ethics.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <li
                key={cat}
                className={
                  i === 0
                    ? 'rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground'
                    : 'rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground'
                }
              >
                {cat}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
