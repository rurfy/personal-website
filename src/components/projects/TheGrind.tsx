'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'
import AnimatedSection from '@/components/AnimatedSection'
import type { Project } from '@/data/projects'

const leaderboard = [
  { rank: 1, name: 'miseerx', lp: 847, tier: 'Diamond', change: '+24' },
  { rank: 2, name: 'IN Thoribus', lp: 721, tier: 'Emerald', change: '+15' },
  { rank: 3, name: 'lennkey', lp: 654, tier: 'Emerald', change: '-8' },
  { rank: 4, name: 'rurfy', lp: 512, tier: 'Platinum', change: '+31' },
]

const barData = [40, 65, 35, 80, 55, 90, 45, 70, 85, 60, 75, 50, 95, 40, 68, 82, 55, 73]

export default function TheGrind({ project }: { project: Project }) {
  const c = '#10b981'
  const rgb = '16,185,129'

  return (
    <main className="min-h-screen">
      {/* ── Dashboard Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ borderBottom: `1px solid rgba(${rgb},0.1)` }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="aurora-blob aurora-1 w-[600px] h-[600px] -top-32 -right-32 opacity-[0.08]"
            style={{ background: `radial-gradient(circle, ${c}, transparent 70%)` }} />
          <div className="aurora-blob aurora-2 w-[400px] h-[400px] bottom-0 -left-32 opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #059669, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `radial-gradient(rgba(${rgb},0.15) 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#10b981] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{ background: `rgba(${rgb},0.1)`, color: c, border: `1px solid rgba(${rgb},0.2)` }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              Live Analytics
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4"
            style={{ background: `linear-gradient(135deg, ${c}, #059669)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            The Grind
          </h1>
          <p className="text-[#777] text-lg max-w-2xl mb-10">{project.description}</p>

          {/* Stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { label: 'Players Tracked', value: '5' },
              { label: 'Matches Analyzed', value: '500+' },
              { label: 'Rank Snapshots', value: '2K+' },
              { label: 'Bot Uptime', value: '24/7' },
            ].map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl p-4"
                style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.08)` }}>
                <p className="text-xl sm:text-2xl font-bold font-display" style={{ color: c }}>{stat.value}</p>
                <p className="text-[11px] text-[#555] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* LP history bar chart */}
          <div className="mb-3">
            <p className="text-[10px] text-[#444] tracking-wider uppercase mb-2">LP History</p>
          </div>
          <div className="flex items-end gap-[3px] h-20 mb-10">
            {barData.map((h, i) => (
              <motion.div key={i}
                initial={{ height: 0 }} animate={{ height: `${h}%` }}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 rounded-t-sm min-w-0"
                style={{ background: `rgba(${rgb},${0.2 + (h / 100) * 0.5})` }} />
            ))}
          </div>

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#050505] hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${c}, #059669)` }}>
              <GitHubIcon className="w-4 h-4" /> Source Code
            </a>
          )}
        </div>
      </div>

      {/* ── Leaderboard ─────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <AnimatedSection>
          <h2 className="text-sm font-medium tracking-[0.3em] uppercase mb-6" style={{ color: c }}>Leaderboard Preview</h2>
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid rgba(${rgb},0.1)` }}>
            <div className="grid grid-cols-[40px_1fr_80px_80px_60px] text-[11px] text-[#555] uppercase tracking-wider px-5 py-3"
              style={{ background: `rgba(${rgb},0.03)` }}>
              <span>#</span><span>Summoner</span><span>Tier</span><span>LP</span><span>&Delta;</span>
            </div>
            {leaderboard.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="grid grid-cols-[40px_1fr_80px_80px_60px] items-center px-5 py-3.5 text-sm"
                style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <span className="text-[#555] font-mono text-xs">{p.rank}</span>
                <span className="text-[#f5f5f5] font-medium">{p.name}</span>
                <span className="text-[#666] text-xs">{p.tier}</span>
                <span className="font-mono" style={{ color: c }}>{p.lp}</span>
                <span className={`text-xs font-mono ${p.change.startsWith('+') ? 'text-[#10b981]' : 'text-[#f43f5e]'}`}>
                  {p.change}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="beam-line h-px mb-16" style={{ background: `rgba(${rgb},0.12)`, '--beam-color': c } as React.CSSProperties} />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection>
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">System Stack</h2>
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
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">About</h2>
            <div className="space-y-4 text-[#777] text-sm leading-relaxed">
              {project.longDescription.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">Key Learnings</h2>
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
