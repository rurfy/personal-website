'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'
import AnimatedSection from '@/components/AnimatedSection'
import type { Project } from '@/data/projects'

// Animated CO2 emission meter
function EmissionMeter() {
  return (
    <div className="rounded-xl p-6 mb-10 max-w-md"
      style={{ background: 'rgba(14,165,233,0.03)', border: '1px solid rgba(14,165,233,0.1)' }}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-medium text-[#f5f5f5]">Inference Carbon Footprint</p>
        <p className="text-[10px] font-mono text-[#555]">per 1K images</p>
      </div>
      <div className="flex gap-0.5 h-5 rounded-full overflow-hidden mb-3"
        style={{ background: 'rgba(14,165,233,0.06)' }}>
        {/* Gradient meter from green to amber to red */}
        <motion.div className="h-full rounded-l-full"
          style={{ background: 'linear-gradient(90deg, #22c55e, #84cc16, #f59e0b)' }}
          initial={{ width: 0 }}
          animate={{ width: '35%' }}
          transition={{ delay: 0.6, duration: 1.5, ease: [0.22, 1, 0.36, 1] }} />
      </div>
      <div className="flex justify-between text-[10px] text-[#555] font-mono">
        <span>0g CO&#8322;</span>
        <span style={{ color: '#f59e0b' }}>~2.3g CO&#8322;</span>
        <span>10g CO&#8322;</span>
      </div>
    </div>
  )
}

const findings = [
  { metric: '~2.3g', label: 'CO\u2082 per 1K inferences', note: 'YOLOv5s on consumer GPU' },
  { metric: '0.8 kWh', label: 'Energy per training run', note: 'Tracked via Carbontracker' },
  { metric: '73%', label: 'mAP accuracy', note: 'On accessibility dataset' },
]

export default function SustainabilityAI({ project }: { project: Project }) {
  const c = '#0ea5e9'
  const c2 = '#0284c7'
  const rgb = '14,165,233'

  return (
    <main className="min-h-screen">
      {/* ── Research Hero ───────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ borderBottom: `1px solid rgba(${rgb},0.1)` }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="aurora-blob aurora-1 w-[600px] h-[600px] -top-40 left-1/3 opacity-[0.06]"
            style={{ background: `radial-gradient(circle, ${c}, transparent 70%)` }} />
          <div className="aurora-blob aurora-3 w-[400px] h-[400px] bottom-0 -right-20 opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }} />
          {/* Horizontal scan lines */}
          <div className="absolute inset-0 opacity-25"
            style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(${rgb},0.04) 24px, rgba(${rgb},0.04) 25px)` }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#0ea5e9] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{ background: `rgba(${rgb},0.1)`, color: c, border: `1px solid rgba(${rgb},0.2)` }}>
              Research Project
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4"
            style={{ background: `linear-gradient(135deg, ${c}, #6366f1)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Sustainability AI
          </h1>

          {/* Research abstract style */}
          <div className="rounded-xl p-6 mb-10 max-w-2xl"
            style={{ background: `rgba(${rgb},0.03)`, border: `1px solid rgba(${rgb},0.08)`, borderLeft: `3px solid ${c}` }}>
            <p className="text-[10px] uppercase tracking-wider text-[#555] mb-2">Abstract</p>
            <p className="text-[#999] text-sm leading-relaxed italic">
              How much does it cost the planet to run a neural network? This project combines YOLOv5 object detection
              with Carbontracker to measure the real carbon footprint of ML inference — making the invisible environmental
              cost of AI visible and measurable.
            </p>
          </div>

          {/* CO2 Meter */}
          <EmissionMeter />

          {/* Key findings */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {findings.map((f, i) => (
              <motion.div key={f.label}
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.12 }}
                className="rounded-xl p-4"
                style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.08)` }}>
                <p className="text-xl font-bold font-mono" style={{ color: c }}>{f.metric}</p>
                <p className="text-xs text-[#f5f5f5] font-medium mt-1">{f.label}</p>
                <p className="text-[10px] text-[#555] mt-0.5">{f.note}</p>
              </motion.div>
            ))}
          </div>

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#050505] hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${c}, #6366f1)` }}>
              <GitHubIcon className="w-4 h-4" /> Source Code & Data
            </a>
          )}
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="beam-line h-px mb-16" style={{ background: `rgba(${rgb},0.12)`, '--beam-color': c } as React.CSSProperties} />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection>
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">Methodology</h2>
            <div className="space-y-4">
              {project.stack.map((g) => (
                <div key={g.category}>
                  <p className="text-[11px] text-[#444] tracking-wider uppercase mb-2">{g.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span key={item} className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: `rgba(${rgb},0.08)`, color: c, border: `1px solid rgba(${rgb},0.12)` }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">Background</h2>
            <div className="space-y-4 text-[#777] text-sm leading-relaxed">
              {project.longDescription.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">Research Takeaways</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.whatILearned.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-[#777] rounded-xl p-4"
                style={{ background: `rgba(${rgb},0.03)`, border: `1px solid rgba(${rgb},0.06)` }}>
                <span className="shrink-0 mt-0.5" style={{ color: c }}>&rarr;</span>
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
