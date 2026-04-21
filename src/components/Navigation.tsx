'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-1 px-1.5 py-1.5 rounded-full transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'rgba(10, 10, 10, 0.4)',
          border: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)'}`,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.5), inset 0 0 0 0.5px rgba(255,255,255,0.05)'
            : '0 4px 16px rgba(0,0,0,0.2)',
        }}
      >
        <Link
          href="/"
          className="px-4 py-2 text-sm font-bold text-[#f5f5f5] hover:text-[#8b5cf6] transition-colors duration-200"
        >
          CR
        </Link>
        <div className="w-px h-4 bg-white/10" />
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm text-[#888] hover:text-[#f5f5f5] transition-all duration-200 rounded-full hover:bg-white/[0.05]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
