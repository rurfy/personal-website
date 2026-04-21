'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'
import AnimatedSection from '@/components/AnimatedSection'
import type { Project } from '@/data/projects'

// Process flow steps
const pipeline = [
  { label: 'Feed', desc: 'Card enters chute', icon: '01' },
  { label: 'Capture', desc: 'Camera snapshot', icon: '02' },
  { label: 'Identify', desc: 'dhash + OCR match', icon: '03' },
  { label: 'Route', desc: 'Arduino serial cmd', icon: '04' },
  { label: 'Sort', desc: 'Bin placement', icon: '05' },
]

const specs = [
  { label: 'Sort Algorithm', value: 'LSD Radix Sort (6-pass)' },
  { label: 'Bins', value: '11 rotating carousel' },
  { label: 'Matching', value: 'Perceptual hash (dhash)' },
  { label: 'Controller', value: 'Arduino / ESP32' },
  { label: 'Accuracy', value: 'Near-perfect with OCR fallback' },
  { label: 'Key Format', value: '6-digit canonical (band.set.num)' },
]

export default function ProjectO({ project }: { project: Project }) {
  const c = '#06b6d4'
  const c2 = '#0891b2'
  const rgb = '6,182,212'

  return (
    <main className="min-h-screen">
      {/* ── Blueprint Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ borderBottom: `1px solid rgba(${rgb},0.1)` }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="aurora-blob aurora-1 w-[500px] h-[500px] -top-32 left-1/4 opacity-[0.07]"
            style={{ background: `radial-gradient(circle, ${c}, transparent 70%)` }} />
          <div className="aurora-blob aurora-3 w-[400px] h-[400px] bottom-0 -right-20 opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #2563eb, transparent 70%)' }} />
          {/* Circuit-board grid */}
          <div className="absolute inset-0 opacity-25"
            style={{ backgroundImage: `linear-gradient(rgba(${rgb},0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.07) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#06b6d4] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase font-mono"
              style={{ background: `rgba(${rgb},0.1)`, color: c, border: `1px solid rgba(${rgb},0.2)` }}>
              Hardware + Software
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4"
            style={{ background: `linear-gradient(135deg, ${c}, #2563eb)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Project-O
          </h1>
          <p className="text-[#777] text-lg max-w-2xl mb-12">{project.description}</p>

          {/* ── Process Pipeline ─────────────────────────────────────────── */}
          <div className="mb-10">
            <p className="text-[10px] text-[#444] tracking-wider uppercase mb-4 font-mono">Processing Pipeline</p>
            <div className="flex flex-wrap items-center gap-2">
              {pipeline.map((step, i) => (
                <motion.div key={step.label} className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}>
                  <div className="rounded-lg px-4 py-3 min-w-[100px]"
                    style={{ background: `rgba(${rgb},0.05)`, border: `1px solid rgba(${rgb},0.1)` }}>
                    <p className="text-[10px] font-mono mb-1" style={{ color: c }}>{step.icon}</p>
                    <p className="text-sm font-semibold text-[#f5f5f5]">{step.label}</p>
                    <p className="text-[10px] text-[#555]">{step.desc}</p>
                  </div>
                  {i < pipeline.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#333] shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specs table */}
          <div className="rounded-xl overflow-hidden mb-10" style={{ border: `1px solid rgba(${rgb},0.1)` }}>
            <div className="px-5 py-3 text-[10px] font-mono uppercase tracking-wider"
              style={{ color: c, background: `rgba(${rgb},0.03)` }}>
              System Specifications
            </div>
            {specs.map((spec, i) => (
              <motion.div key={spec.label}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.07 }}
                className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] px-5 py-2.5 text-sm"
                style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <span className="text-[#555] font-mono text-xs">{spec.label}</span>
                <span className="text-[#ccc] font-mono text-xs">{spec.value}</span>
              </motion.div>
            ))}
          </div>

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#050505] hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${c}, #2563eb)` }}>
              <GitHubIcon className="w-4 h-4" /> Source Code & Build Guide
            </a>
          )}
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="beam-line h-px mb-16" style={{ background: `rgba(${rgb},0.12)`, '--beam-color': c } as React.CSSProperties} />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Hardware + Software split */}
          <AnimatedSection>
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">Stack</h2>
            <div className="space-y-4">
              {project.stack.map((g) => (
                <div key={g.category} className="rounded-lg p-4"
                  style={{ background: `rgba(${rgb},0.02)`, border: `1px solid rgba(${rgb},0.06)` }}>
                  <p className="text-[10px] font-mono tracking-wider uppercase mb-2" style={{ color: c }}>{g.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span key={item} className="text-[11px] font-mono px-2.5 py-1 rounded"
                        style={{ background: `rgba(${rgb},0.08)`, color: '#ccc', border: `1px solid rgba(${rgb},0.1)` }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">How It Works</h2>
            <div className="space-y-4 text-[#777] text-sm leading-relaxed">
              {project.longDescription.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">Engineering Takeaways</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.whatILearned.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-[#777] rounded-lg p-4 font-mono"
                style={{ background: `rgba(${rgb},0.02)`, border: `1px solid rgba(${rgb},0.06)` }}>
                <span className="shrink-0 mt-0.5" style={{ color: c }}>&gt;</span>
                <span className="font-sans">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
