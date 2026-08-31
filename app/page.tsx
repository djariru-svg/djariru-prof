import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Portfolio } from '@/components/sections/portfolio'
import { Faith } from '@/components/sections/faith'
import { Community } from '@/components/sections/community'
import { BlogPreview } from '@/components/sections/blog-preview'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Faith />
        <Community />
        <BlogPreview />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
