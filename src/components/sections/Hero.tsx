'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'

function AnimatedCharacters({
  text,
  className = '',
  delay = 0,
  disabled = false,
}: {
  text: string
  className?: string
  delay?: number
  disabled?: boolean
}) {
  if (disabled) return <span className={className}>{text}</span>

  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 50, filter: 'blur(12px)', rotateX: -90 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={char === ' ' ? { width: '0.3em' } : undefined}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-blob aurora-1 w-[800px] h-[800px] -top-48 -left-48 opacity-[0.15]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="aurora-blob aurora-2 w-[600px] h-[600px] -bottom-32 -right-32 opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }}
        />
        <div
          className="aurora-blob aurora-3 w-[700px] h-[700px] top-1/3 left-1/2 -translate-x-1/2 opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
        />
        <div
          className="aurora-blob aurora-4 w-[500px] h-[500px] top-1/4 -right-16 opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #f43f5e 0%, transparent 70%)' }}
        />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none dot-grid opacity-30" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #050505 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8b5cf6] text-sm font-medium tracking-[0.3em] uppercase mb-8"
        >
          Software Engineer
        </motion.p>

        <h1 className="text-6xl sm:text-7xl md:text-[8rem] font-display font-bold leading-[0.9] tracking-tighter mb-8">
          <AnimatedCharacters
            text="Christopher"
            className="block text-[#f5f5f5]"
            delay={0.4}
            disabled={!!prefersReducedMotion}
          />
          <AnimatedCharacters
            text="Richter"
            className="block bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent"
            delay={0.85}
            disabled={!!prefersReducedMotion}
          />
        </h1>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg sm:text-xl text-[#666] max-w-lg mx-auto mb-12 leading-relaxed"
        >
          I build data-driven apps
          <br />
          for games and communities.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="flex items-center justify-center gap-5 flex-wrap"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-full text-sm font-semibold text-[#050505] overflow-hidden transition-all duration-300 inline-block"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              }}
            >
              <span className="relative z-10">View my work</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa, #818cf8)',
                }}
              />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full text-sm font-semibold text-[#f5f5f5] transition-all duration-300 hover:bg-white/[0.05] inline-block"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              Get in touch
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-[#444] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#444]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
