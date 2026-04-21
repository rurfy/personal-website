'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Smartphone, Users, Zap, Trophy } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'
import AnimatedSection from '@/components/AnimatedSection'
import type { Project } from '@/data/projects'

// Floating cup/ball circles for the party vibe
function PartyBubbles() {
  const bubbles = [
    { x: '8%', y: '15%', size: 60, delay: 0 },
    { x: '80%', y: '10%', size: 40, delay: 0.2 },
    { x: '90%', y: '50%', size: 50, delay: 0.5 },
    { x: '3%', y: '65%', size: 35, delay: 0.3 },
    { x: '70%', y: '75%', size: 45, delay: 0.4 },
    { x: '40%', y: '80%', size: 30, delay: 0.6 },
    { x: '25%', y: '10%', size: 25, delay: 0.1 },
  ]
  return (
    <>
      {bubbles.map((b, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: b.x, top: b.y, width: b.size, height: b.size, background: `radial-gradient(circle, rgba(244,63,94,0.12), rgba(244,63,94,0.03))`, border: '1px solid rgba(244,63,94,0.08)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + b.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
      ))}
    </>
  )
}

const features = [
  { icon: Users, title: 'Multiplayer', desc: 'Real-time game sync across all devices' },
  { icon: Trophy, title: 'Leaderboards', desc: 'Track who really is the best' },
  { icon: Zap, title: 'Instant Sync', desc: 'Firestore listeners — zero lag' },
  { icon: Smartphone, title: 'Cross-Platform', desc: 'iOS & Android from one codebase' },
]

const scoreboard = [
  { team: 'Team Chris', cups: 8, color: '#f43f5e' },
  { team: 'Team Thoribus', cups: 6, color: '#f97316' },
]

export default function BeerpongApp({ project }: { project: Project }) {
  const c = '#f43f5e'
  const c2 = '#e11d48'
  const rgb = '244,63,94'

  return (
    <main className="min-h-screen">
      {/* ── Party Hero ──────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ borderBottom: `1px solid rgba(${rgb},0.1)` }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="aurora-blob aurora-1 w-[600px] h-[600px] -top-32 left-1/3 opacity-[0.1]"
            style={{ background: `radial-gradient(circle, ${c}, transparent 70%)` }} />
          <div className="aurora-blob aurora-2 w-[400px] h-[400px] bottom-0 -left-20 opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `radial-gradient(rgba(${rgb},0.08) 2.5px, transparent 2.5px)`, backgroundSize: '48px 48px' }} />
          <PartyBubbles />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#f43f5e] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{ background: `rgba(${rgb},0.1)`, color: c, border: `1px solid rgba(${rgb},0.2)` }}>
              Mobile App
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{ background: 'rgba(249,115,22,0.1)', color: '#f97316', border: '1px solid rgba(249,115,22,0.2)' }}>
              Live &amp; Active
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4"
            style={{ background: `linear-gradient(135deg, ${c}, #f97316)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Beerpong App
          </h1>
          <p className="text-[#777] text-lg max-w-2xl mb-10">
            No more arguing about the score. Real-time game tracking, player stats, and leaderboards — built for actual game nights with friends.
          </p>

          {/* Mock scoreboard */}
          <div className="rounded-xl overflow-hidden mb-10 max-w-sm"
            style={{ border: `1px solid rgba(${rgb},0.12)`, background: `rgba(${rgb},0.03)` }}>
            <div className="px-5 py-3 text-[10px] uppercase tracking-wider text-[#555]"
              style={{ borderBottom: `1px solid rgba(${rgb},0.08)` }}>
              Live Game
            </div>
            {scoreboard.map((team) => (
              <div key={team.team} className="flex items-center justify-between px-5 py-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                <span className="text-sm font-medium text-[#f5f5f5]">{team.team}</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="w-2.5 h-2.5 rounded-full transition-all"
                        style={{
                          background: i < team.cups ? team.color : 'rgba(255,255,255,0.06)',
                          boxShadow: i < team.cups ? `0 0 6px ${team.color}40` : 'none',
                        }} />
                    ))}
                  </div>
                  <span className="text-sm font-bold font-mono ml-2" style={{ color: team.color }}>{team.cups}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Feature pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {features.map((feat, i) => (
              <motion.div key={feat.title}
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-xl p-4 text-center"
                style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.08)` }}>
                <feat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: c }} />
                <p className="text-xs font-semibold text-[#f5f5f5]">{feat.title}</p>
                <p className="text-[10px] text-[#555] mt-0.5">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#050505] hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${c}, #f97316)` }}>
              <GitHubIcon className="w-4 h-4" /> Source Code
            </a>
          )}
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
