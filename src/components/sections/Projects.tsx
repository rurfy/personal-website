'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { projects } from '@/data/projects'
import { ExternalLink, GitBranch } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-[#a78bfa] text-sm font-medium tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#fafafa] leading-tight">
            Things I&apos;ve built
          </h2>
        </AnimatedSection>

        <AnimatedSection variants={staggerContainer}>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <AnimatedSection
                key={project.name}
                variants={staggerItem}
              >
                <div
                  className="group relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] cursor-default"
                  style={{
                    background: 'linear-gradient(135deg, #18181b, #18181b)',
                    border: '1px solid #27272a',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#a78bfa44'
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(167,139,250,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#27272a'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {project.highlight && (
                    <div className="absolute top-4 right-4">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #7c3aed22, #4f46e522)',
                          color: '#a78bfa',
                          border: '1px solid #a78bfa33',
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-[#fafafa] mb-3">
                    {project.name}
                  </h3>

                  <p className="text-[#71717a] leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full text-[#a78bfa]"
                        style={{
                          background: '#a78bfa11',
                          border: '1px solid #a78bfa22',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
                      >
                        <GitBranch className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Coming Soon card */}
            <AnimatedSection variants={staggerItem}>
              <div
                className="rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center min-h-[280px]"
                style={{
                  background: 'transparent',
                  border: '1px dashed #27272a',
                }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <p className="text-[#71717a] font-medium">More coming soon</p>
                <p className="text-[#3f3f46] text-sm mt-2">
                  Always building something new
                </p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
