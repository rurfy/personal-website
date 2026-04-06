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
                I&apos;m a software engineer based in Germany, passionate about building
                mobile and web applications that solve real problems and feel genuinely
                great to use.
              </p>
              <p>
                Right now I&apos;m working on{' '}
                <span className="text-[#fafafa] font-medium">Beerpong App</span> — a
                Flutter app that brings the chaos of beer pong night into a clean,
                real-time experience. No spreadsheets, no arguments about the score.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably either at the table myself or
                thinking about the next thing to build.
              </p>
            </div>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection variants={slideInRight}>
            <div className="relative">
              {/* Avatar placeholder */}
              <div
                className="w-full aspect-square max-w-sm mx-auto rounded-3xl flex items-center justify-center text-8xl font-bold relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
                  border: '1px solid #27272a',
                }}
              >
                {/* Gradient accent */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background:
                      'radial-gradient(circle at top right, #a78bfa, transparent 60%)',
                  }}
                />
                <span
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa, #818cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  CR
                </span>
              </div>

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
