import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The 5-Minute Manager',
    template: '%s | The 5-Minute Manager',
  },
  description:
    'A thinking portfolio on organizational execution, leadership systems, and strategy delivery. Written by Don Long.',
  keywords: ['leadership', 'strategy execution', 'organizational execution', 'accountability', 'operational excellence', 'program leadership', 'transformation', 'Don Long'],
  authors: [{ name: 'Don Long' }],
  creator: 'Don Long',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://donlong.co',
    siteName: 'The 5-Minute Manager',
    title: 'The 5-Minute Manager — Don Long',
    description: 'A thinking portfolio on organizational execution, leadership systems, and strategy delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 5-Minute Manager — Don Long',
    description: 'A thinking portfolio on organizational execution, leadership systems, and strategy delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50 antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
