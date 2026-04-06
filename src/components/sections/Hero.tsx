'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { staggerContainer, staggerItem, noMotion } from '@/lib/animations'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const containerVariants = prefersReducedMotion ? noMotion : staggerContainer
  const itemVariants = prefersReducedMotion ? noMotion : staggerItem

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb orb-1 w-[600px] h-[600px] -top-32 -left-32 opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        />
        <div
          className="orb orb-2 w-[500px] h-[500px] -bottom-16 -right-16 opacity-15"
          style={{ background: 'radial-gradient(circle, #4f46e5, transparent 70%)' }}
        />
        <div
          className="orb orb-3 w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent 70%)' }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#a78bfa] text-sm font-medium tracking-widest uppercase mb-6"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#fafafa] leading-[1.05] tracking-tight mb-6"
        >
          Christopher
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Richter
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-[#71717a] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Software engineer who builds things that feel good to use.
          Turning ideas into polished products.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#09090b] transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #a78bfa, #818cf8)',
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#fafafa] border border-[#27272a] hover:border-[#a78bfa] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#71717a]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
