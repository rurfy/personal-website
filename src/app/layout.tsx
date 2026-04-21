import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import Grain from '@/components/Grain'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Christopher Richter — Building data-driven apps for games and communities',
  description:
    'Next.js, Flutter, and the data layer underneath. BeerpongApp on iOS/Android, esports analytics for Infinity Esports.',
  keywords: ['Christopher Richter', 'software engineer', 'Flutter', 'React', 'Next.js'],
  authors: [{ name: 'Christopher Richter' }],
  openGraph: {
    title: 'Christopher Richter — Building data-driven apps for games and communities',
    description: 'Next.js, Flutter, and the data layer underneath. BeerpongApp on iOS/Android, esports analytics for Infinity Esports.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        {children}
        <Grain />
      </body>
    </html>
  )
}
