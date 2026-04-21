'use client'

import AnimatedSection from '@/components/AnimatedSection'
import SpotlightCard from '@/components/SpotlightCard'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { projects } from '@/data/projects'
import { ExternalLink, ArrowRight } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-[#8b5cf6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#f5f5f5] leading-tight">
            Things I&apos;ve built
          </h2>
        </AnimatedSection>

        {/* Beam divider */}
        <div className="beam-line h-px bg-[#1a1a1a] mb-12" />

        <AnimatedSection variants={staggerContainer}>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((project) => (
              <AnimatedSection key={project.name} variants={staggerItem}>
                <SpotlightCard className="rounded-2xl h-full">
                  <div
                    className="group relative rounded-2xl p-8 h-full flex flex-col transition-all duration-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-[#f5f5f5] group-hover:text-[#8b5cf6] transition-colors duration-300">
                        {project.name}
                      </h3>
                      {project.highlight && (
                        <span
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wider uppercase shrink-0 ml-3"
                          style={{
                            background: 'rgba(139,92,246,0.1)',
                            color: '#8b5cf6',
                            border: '1px solid rgba(139,92,246,0.15)',
                          }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-[#666] text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full text-[#888]"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs text-[#555] hover:text-[#f5f5f5] transition-colors duration-200"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs text-[#555] hover:text-[#f5f5f5] transition-colors duration-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live
                        </a>
                      )}
                      {project.slug && (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex items-center gap-2 text-xs text-[#8b5cf6] hover:text-[#a78bfa] transition-colors duration-200 ml-auto group/link"
                        >
                          Details
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                        </Link>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            ))}

            {/* Coming Soon */}
            <AnimatedSection variants={staggerItem}>
              <div
                className="rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center min-h-[280px]"
                style={{
                  border: '1px dashed rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <span className="text-[#333] text-lg font-light">+</span>
                </div>
                <p className="text-[#444] text-sm font-medium">More coming soon</p>
                <p className="text-[#2a2a2a] text-xs mt-1">Always building something new</p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
