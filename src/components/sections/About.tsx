import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import { slideInLeft, slideInRight } from '@/lib/animations'

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedSection variants={slideInLeft}>
            <p className="text-[#a78bfa] text-sm font-medium tracking-widest uppercase mb-4">
              About me
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#fafafa] leading-tight mb-6">
              I build software
              <br />
              <span className="text-[#71717a]">people actually enjoy.</span>
            </h2>
            <div className="space-y-4 text-[#71717a] text-lg leading-relaxed">
              <p>
                I&apos;m Christopher — a Junior Software Developer at{' '}
                <span className="text-[#fafafa] font-medium">ADCELL GmbH</span>, based
                in Germany. I got into coding because I wanted to build my own Minecraft
                mod after getting hooked on Feed the Beast. That rabbit hole never ended.
              </p>
              <p>
                Right now I&apos;m building{' '}
                <span className="text-[#fafafa] font-medium">Beerpong App</span> — a
                Flutter + Firebase app with real-time multiplayer and live leaderboards.
                I&apos;m also deep into the One Piece TCG — built an{' '}
                <span className="text-[#fafafa] font-medium">inventory tracker</span> and
                a <span className="text-[#fafafa] font-medium">physical card sorter</span>{' '}
                that uses computer vision to identify and sort cards automatically.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me playing League of Legends,
                grinding roguelikes, conquering maps in Paradox grand strategy games,
                watching anime, or reading fantasy books.
              </p>
            </div>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection variants={slideInRight}>
            <div className="relative">
              <Image
                src="/photo.jpeg"
                alt="Christopher Richter"
                width={384}
                height={384}
                className="w-full aspect-square max-w-sm mx-auto rounded-3xl object-cover"
              />

              {/* Floating tag */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full text-sm font-medium text-[#fafafa] shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                }}
              >
                Open to opportunities
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
