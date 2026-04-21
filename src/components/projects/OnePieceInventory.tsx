'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Layers, TrendingUp, Search } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'
import AnimatedSection from '@/components/AnimatedSection'
import type { Project } from '@/data/projects'

const features = [
  { icon: Layers, title: 'Collection Tracking', desc: 'Every card cataloged with real-time sync across devices' },
  { icon: Search, title: 'Deck Builder', desc: 'Build decks, check completion, find missing cards instantly' },
  { icon: TrendingUp, title: 'Price Watch', desc: 'Live CardMarket scraping to track your collection value' },
]

// Floating card silhouettes for the hero
function FloatingCards() {
  const cards = [
    { x: '10%', y: '20%', rotate: -15, delay: 0, scale: 0.8 },
    { x: '75%', y: '15%', rotate: 12, delay: 0.3, scale: 0.7 },
    { x: '85%', y: '55%', rotate: -8, delay: 0.6, scale: 0.9 },
    { x: '5%', y: '60%', rotate: 20, delay: 0.2, scale: 0.65 },
    { x: '55%', y: '70%', rotate: -5, delay: 0.4, scale: 0.75 },
  ]

  return (
    <>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: card.x, top: card.y }}
          initial={{ opacity: 0, scale: 0, rotate: card.rotate - 10 }}
          animate={{ opacity: 0.08, scale: card.scale, rotate: card.rotate }}
          transition={{ delay: 0.4 + card.delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-20 h-28 rounded-lg border border-[#f59e0b]/20"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(217,119,6,0.04))' }} />
        </motion.div>
      ))}
    </>
  )
}

export default function OnePieceInventory({ project }: { project: Project }) {
  const c = '#f59e0b'
  const c2 = '#d97706'
  const rgb = '245,158,11'

  return (
    <main className="min-h-screen">
      {/* ── Warm Collector's Hero ────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ borderBottom: `1px solid rgba(${rgb},0.1)` }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="aurora-blob aurora-1 w-[700px] h-[700px] -top-48 left-1/4 opacity-[0.08]"
            style={{ background: `radial-gradient(circle, ${c}, transparent 70%)` }} />
          <div className="aurora-blob aurora-2 w-[400px] h-[400px] bottom-0 -right-20 opacity-[0.06]"
            style={{ background: `radial-gradient(circle, ${c2}, transparent 70%)` }} />
          {/* Diagonal card texture */}
          <div className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(${rgb},0.04) 14px, rgba(${rgb},0.04) 15px)` }} />
          <FloatingCards />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#f59e0b] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{ background: `rgba(${rgb},0.1)`, color: c, border: `1px solid rgba(${rgb},0.2)` }}>
              Collection Manager
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4"
            style={{ background: `linear-gradient(135deg, ${c}, ${c2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            One Piece Inventory
          </h1>
          <p className="text-[#777] text-lg max-w-2xl mb-10">{project.description}</p>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {features.map((feat, i) => (
              <motion.div key={feat.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="rounded-xl p-5"
                style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.08)` }}>
                <feat.icon className="w-5 h-5 mb-3" style={{ color: c }} />
                <p className="text-sm font-semibold text-[#f5f5f5] mb-1">{feat.title}</p>
                <p className="text-xs text-[#666] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#050505] hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${c}, ${c2})` }}>
                <GitHubIcon className="w-4 h-4" /> Source Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#f5f5f5] hover:opacity-80 transition-opacity"
                style={{ border: `1px solid rgba(${rgb},0.3)` }}>
                <ExternalLink className="w-4 h-4" /> Open App
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="beam-line h-px mb-16" style={{ background: `rgba(${rgb},0.12)`, '--beam-color': c } as React.CSSProperties} />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection>
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">Stack</h2>
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
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">The Story</h2>
            <div className="space-y-4 text-[#777] text-sm leading-relaxed">
              {project.longDescription.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">What I Learned</h2>
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
