'use client'

import AnimatedSection from '@/components/AnimatedSection'
import SpotlightCard from '@/components/SpotlightCard'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { Mail, ArrowUpRight } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'

const links = [
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/rurfy',
    handle: '@rurfy',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:chrissy.richter2710@gmail.com',
    handle: 'chrissy.richter2710',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#8b5cf6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#f5f5f5] leading-tight mb-6">
            Let&apos;s build
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">
              something great
            </span>
          </h2>
          <p className="text-[#555] text-lg max-w-md mx-auto">
            Always open to new projects, ideas, or just a good conversation.
          </p>
        </AnimatedSection>

        <AnimatedSection variants={staggerContainer}>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            {links.map(({ icon: Icon, label, href, handle }) => (
              <AnimatedSection key={label} variants={staggerItem} className="flex-1">
                <SpotlightCard className="rounded-2xl">
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(139,92,246,0.1)' }}
                    >
                      <Icon className="w-4 h-4 text-[#8b5cf6]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm text-[#f5f5f5]">{label}</p>
                      <p className="text-[#555] text-xs truncate">{handle}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#333] group-hover:text-[#8b5cf6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                  </a>
                </SpotlightCard>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 beam-line">
        <p className="text-center text-[#333] text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Christopher Richter
        </p>
      </div>
    </section>
  )
}
