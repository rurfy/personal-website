'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Flame, Star, Target, TrendingUp } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'
import AnimatedSection from '@/components/AnimatedSection'
import type { Project } from '@/data/projects'

// Animated XP bar
function XPBar() {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
            style={{ background: 'rgba(132,204,22,0.15)', color: '#84cc16', border: '1px solid rgba(132,204,22,0.2)' }}>
            12
          </div>
          <div>
            <p className="text-xs font-semibold text-[#f5f5f5]">Level 12</p>
            <p className="text-[10px] text-[#555]">Habit Master</p>
          </div>
        </div>
        <p className="text-xs font-mono" style={{ color: '#84cc16' }}>2,450 / 3,000 XP</p>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(132,204,22,0.1)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #84cc16, #22c55e)' }}
          initial={{ width: 0 }}
          animate={{ width: '82%' }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

const playerStats = [
  { icon: Flame, label: 'Current Streak', value: '14 days', highlight: true },
  { icon: Star, label: 'Total XP', value: '24,500' },
  { icon: Target, label: 'Habits Active', value: '6' },
  { icon: TrendingUp, label: 'Completion Rate', value: '87%' },
]

const achievements = [
  { title: 'First Streak', desc: 'Complete 3 days in a row', unlocked: true },
  { title: 'Week Warrior', desc: 'Hit 7-day streak', unlocked: true },
  { title: 'XP Hoarder', desc: 'Earn 10,000 total XP', unlocked: true },
  { title: 'Perfectionist', desc: '100% completion for a week', unlocked: false },
]

export default function HabitTracker({ project }: { project: Project }) {
  const c = '#84cc16'
  const c2 = '#65a30d'
  const rgb = '132,204,22'

  return (
    <main className="min-h-screen">
      {/* ── Game UI Hero ────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ borderBottom: `1px solid rgba(${rgb},0.1)` }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="aurora-blob aurora-1 w-[500px] h-[500px] -top-32 -left-20 opacity-[0.07]"
            style={{ background: `radial-gradient(circle, ${c}, transparent 70%)` }} />
          <div className="aurora-blob aurora-2 w-[400px] h-[400px] bottom-0 right-1/4 opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #22c55e, transparent 70%)' }} />
          {/* Pixel grid */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `linear-gradient(rgba(${rgb},0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.06) 1px, transparent 1px)`, backgroundSize: '18px 18px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#84cc16] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{ background: `rgba(${rgb},0.1)`, color: c, border: `1px solid rgba(${rgb},0.2)` }}>
              Gamified App
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4"
            style={{ background: `linear-gradient(135deg, ${c}, #22c55e)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Habit Tracker
          </h1>
          <p className="text-[#777] text-lg max-w-2xl mb-10">
            Turn your daily routines into an RPG. Earn XP, build streaks, level up — making habit formation feel like a game you actually want to play.
          </p>

          {/* XP Bar */}
          <XPBar />

          {/* Player stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {playerStats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="rounded-xl p-4"
                style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},${stat.highlight ? '0.15' : '0.08'})` }}>
                <stat.icon className="w-4 h-4 mb-2" style={{ color: stat.highlight ? c : '#555' }} />
                <p className="text-lg font-bold font-display" style={{ color: stat.highlight ? c : '#f5f5f5' }}>{stat.value}</p>
                <p className="text-[10px] text-[#555]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#050505] hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${c}, #22c55e)` }}>
                <GitHubIcon className="w-4 h-4" /> Source Code
              </a>
            )}
            <a href="https://rurfy.github.io/habit-tracker/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#f5f5f5] hover:opacity-80 transition-opacity"
              style={{ border: `1px solid rgba(${rgb},0.3)` }}>
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* ── Achievements ────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <AnimatedSection>
          <h2 className="text-sm font-medium tracking-[0.3em] uppercase mb-6" style={{ color: c }}>Achievements</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {achievements.map((a) => (
              <div key={a.title} className="rounded-xl p-4 text-center"
                style={{
                  background: a.unlocked ? `rgba(${rgb},0.04)` : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${a.unlocked ? `rgba(${rgb},0.12)` : 'rgba(255,255,255,0.04)'}`,
                  opacity: a.unlocked ? 1 : 0.5,
                }}>
                <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-sm"
                  style={{ background: a.unlocked ? `rgba(${rgb},0.15)` : 'rgba(255,255,255,0.05)' }}>
                  {a.unlocked ? <Star className="w-4 h-4" style={{ color: c }} /> : <span className="text-[#333]">?</span>}
                </div>
                <p className="text-xs font-semibold text-[#f5f5f5]">{a.title}</p>
                <p className="text-[10px] text-[#555] mt-0.5">{a.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
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
            <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">About</h2>
            <div className="space-y-4 text-[#777] text-sm leading-relaxed">
              {project.longDescription.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h2 className="text-lg font-display font-bold text-[#f5f5f5] mb-5">Skills Unlocked</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.whatILearned.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-[#777] rounded-xl p-4"
                style={{ background: `rgba(${rgb},0.03)`, border: `1px solid rgba(${rgb},0.06)` }}>
                <Star className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: c }} />
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
