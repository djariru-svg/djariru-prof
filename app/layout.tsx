import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { AppProviders } from '@/components/providers'
import './globals.css'

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}var l=localStorage.getItem('lang');if(l){document.documentElement.setAttribute('lang',l);}}catch(e){}})();`

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Karangwa Djariru — Vue.js Master & Software Craftsman',
  description:
    'Personal studio of Karangwa Djariru — Vue.js master, debugger hunter, software tester, and software design expert. Building scalable software with purpose.',
  generator: 'v0.app',
  keywords: [
    'Karangwa Djariru',
    'Vue.js',
    'software testing',
    'debugging',
    'JavaScript',
    'Python',
    'Firebase',
    'MongoDB',
    'software design',
  ],
  authors: [{ name: 'Karangwa Djariru' }],
  openGraph: {
    title: 'Karangwa Djariru — Vue.js Master & Software Craftsman',
    description:
      'Building scalable software with purpose. Portfolio, tutorials, and community leadership.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fb' },
    { media: '(prefers-color-scheme: dark)', color: '#13224a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <AppProviders>{children}</AppProviders>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
