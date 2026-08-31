import Link from 'next/link'
import { POSTS } from '@/lib/content'
import { SectionHeading } from './about'
import { ArrowRight } from 'lucide-react'
import { PostCard } from '@/components/post-card'

export function BlogPreview() {
  const featured = POSTS.slice(0, 3)

  return (
    <section className="scroll-mt-16 border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Blog" title="Insights & writing" />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-gold"
          >
            View all posts
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Thoughts on Vue.js, debugging, testing, productivity, and Islamic perspectives on
          technology and ethics.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
