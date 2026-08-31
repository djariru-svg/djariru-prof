export type Project = {
  title: string
  description: string
  tags: string[]
  category: string
  year: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingTime: string
}

export const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
] as const

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: 'Frontend',
    items: ['Vue.js', 'JavaScript', 'TypeScript', 'Component Design', 'State Management'],
  },
  {
    group: 'Backend',
    items: ['Python', 'Node.js', 'REST APIs', 'MongoDB', 'Firebase Hosting'],
  },
  {
    group: 'Quality & Tooling',
    items: ['Debugging', 'Software Testing', 'Git Workflows', 'CI/CD', 'Software Design'],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'Vue Component Library',
    description:
      'A production-grade, accessible Vue.js component system with theming, unit tests, and full documentation used across multiple internal products.',
    tags: ['Vue.js', 'TypeScript', 'Testing'],
    category: 'Frontend Architecture',
    year: '2025',
  },
  {
    title: 'Realtime Analytics Dashboard',
    description:
      'Data-heavy dashboard backed by MongoDB and Firebase, streaming live metrics with optimized queries and a resilient caching layer.',
    tags: ['Vue.js', 'MongoDB', 'Firebase'],
    category: 'Full Stack',
    year: '2024',
  },
  {
    title: 'Bug Hunter Toolkit',
    description:
      'A debugging companion that traces state mutations, surfaces race conditions, and generates reproducible test cases for complex Vue apps.',
    tags: ['Debugging', 'JavaScript', 'DX'],
    category: 'Developer Tooling',
    year: '2024',
  },
  {
    title: 'Python Automation Suite',
    description:
      'Backend services automating data pipelines and QA reports, with a rigorous test harness ensuring reliability at scale.',
    tags: ['Python', 'Testing', 'Automation'],
    category: 'Backend Systems',
    year: '2023',
  },
]

export const POSTS: Post[] = [
  {
    slug: 'scalable-vue-architecture',
    title: 'Designing Scalable Vue.js Architecture',
    excerpt:
      'How to structure large Vue applications with composables, clear boundaries, and a testing strategy that scales with your team.',
    category: 'Vue.js',
    date: 'Aug 2026',
    readingTime: '8 min read',
  },
  {
    slug: 'the-art-of-debugging',
    title: 'The Art of Debugging: Hunting Bugs Methodically',
    excerpt:
      'A repeatable framework for isolating, reproducing, and eliminating the hardest bugs without guesswork.',
    category: 'Debugging',
    date: 'Jul 2026',
    readingTime: '6 min read',
  },
  {
    slug: 'testing-that-earns-trust',
    title: 'Writing Tests That Actually Earn Trust',
    excerpt:
      'Moving beyond coverage numbers to tests that document intent and catch real regressions.',
    category: 'Testing',
    date: 'Jun 2026',
    readingTime: '7 min read',
  },
  {
    slug: 'discipline-and-deep-work',
    title: 'Discipline, Deep Work, and Faith',
    excerpt:
      'An Islamic perspective on focus, integrity, and building technology with intention and ethics.',
    category: 'Islam & Ethics',
    date: 'May 2026',
    readingTime: '5 min read',
  },
  {
    slug: 'git-workflows-for-teams',
    title: 'Git Workflows That Keep Teams Sane',
    excerpt:
      'Branching strategies, review culture, and commit hygiene that reduce friction and merge conflicts.',
    category: 'Productivity',
    date: 'Apr 2026',
    readingTime: '6 min read',
  },
  {
    slug: 'firebase-hosting-guide',
    title: 'Shipping Vue Apps with Firebase Hosting',
    excerpt:
      'A practical guide to fast, reliable deployments with previews, caching, and rollbacks.',
    category: 'Vue.js',
    date: 'Mar 2026',
    readingTime: '5 min read',
  },
]

export const SOCIALS = {
  github: 'https://github.com/djariru1',
  linkedin: 'https://www.linkedin.com/in/karangwa-djariru',
  email: 'mailto:karangwadjariru@gmail.com',
  instagram: 'https://Instagram.com/djariru1',
}
