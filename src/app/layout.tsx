import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Christopher Richter — Software Engineer',
  description:
    'Software engineer building mobile and web applications. Creator of Beerpong App.',
  keywords: ['Christopher Richter', 'software engineer', 'Flutter', 'React', 'Next.js'],
  authors: [{ name: 'Christopher Richter' }],
  openGraph: {
    title: 'Christopher Richter — Software Engineer',
    description: 'Software engineer building mobile and web applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
