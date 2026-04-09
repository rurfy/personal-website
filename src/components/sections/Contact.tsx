'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { Mail } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'

const links = [
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/rurfy',
    description: 'See what I\'m building',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:chrissy.richter2710@gmail.com',
    description: 'chrissy.richter2710@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection className="mb-16">
          <p className="text-[#a78bfa] text-sm font-medium tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#fafafa] leading-tight mb-6">
            Let&apos;s talk
          </h2>
          <p className="text-[#71717a] text-lg max-w-md mx-auto">
            I&apos;m always up for a chat about new projects, ideas, or just
            to connect.
          </p>
        </AnimatedSection>

        <AnimatedSection variants={staggerContainer}>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {links.map(({ icon: Icon, label, href, description }) => (
              <AnimatedSection key={label} variants={staggerItem}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-200 hover:scale-105 group"
                  style={{
                    background: '#18181b',
                    border: '1px solid #27272a',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#a78bfa44'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#27272a'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: '#27272a' }}
                  >
                    <Icon className="w-5 h-5 text-[#a78bfa]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#fafafa] text-sm">{label}</p>
                    <p className="text-[#71717a] text-xs mt-0.5 truncate max-w-[140px]">
                      {description}
                    </p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="mt-32 text-center border-t border-[#18181b] pt-10">
        <p className="text-[#3f3f46] text-sm">
          © {new Date().getFullYear()} Christopher Richter. Built with Next.js & Framer Motion.
        </p>
      </div>
    </section>
  )
}
