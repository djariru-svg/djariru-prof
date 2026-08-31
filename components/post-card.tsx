import type { Post } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/50">
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-accent-foreground">
          {post.category}
        </span>
        <span className="text-muted-foreground">{post.readingTime}</span>
      </div>

      <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-foreground text-balance">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-muted-foreground">{post.date}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-gold">
          Read
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </article>
  )
}
