import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import { slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/animations'

const stats = [
  { label: 'Based in', value: 'Germany' },
  { label: 'Working at', value: 'ADCELL GmbH' },
  { label: 'Focus', value: 'Full-Stack' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-[#8b5cf6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            About
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#f5f5f5] leading-tight">
            I build software
            <br />
            <span className="text-[#444]">people actually enjoy.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Bio card */}
          <AnimatedSection variants={slideInLeft} className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 h-full">
              <div className="space-y-5 text-[#999] text-[15px] leading-relaxed">
                <p>
                  I&apos;m Christopher — a Junior Software Developer at{' '}
                  <span className="text-[#f5f5f5] font-medium">ADCELL GmbH</span>, based
                  in Germany. I got into coding because I wanted to build my own Minecraft
                  mod after getting hooked on Feed the Beast. That rabbit hole never ended.
                </p>
                <p>
                  Right now I&apos;m building{' '}
                  <span className="text-[#f5f5f5] font-medium">Beerpong App</span> — a
                  Flutter + Firebase app with real-time multiplayer and live leaderboards.
                  I&apos;m also deep into the One Piece TCG — built an{' '}
                  <span className="text-[#f5f5f5] font-medium">inventory tracker</span> and
                  a <span className="text-[#f5f5f5] font-medium">physical card sorter</span>{' '}
                  that uses computer vision to identify and sort cards automatically.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me playing League of Legends,
                  grinding roguelikes, conquering maps in Paradox grand strategy games,
                  watching anime, or reading fantasy books.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo card */}
          <AnimatedSection variants={slideInRight} className="lg:col-span-2">
            <div className="glass rounded-2xl p-2.5 h-full">
              <div className="relative h-full min-h-[340px] rounded-xl overflow-hidden">
                <Image
                  src="/photo.jpeg"
                  alt="Christopher Richter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-[#f5f5f5] backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(99,102,241,0.6))',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    Open to opportunities
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stat cards */}
        <AnimatedSection variants={staggerContainer} className="mt-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <AnimatedSection key={stat.label} variants={staggerItem}>
                <div className="glass rounded-xl px-6 py-5 text-center">
                  <p className="text-[10px] text-[#555] tracking-[0.2em] uppercase mb-1.5">
                    {stat.label}
                  </p>
                  <p className="text-sm font-semibold text-[#f5f5f5]">{stat.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
