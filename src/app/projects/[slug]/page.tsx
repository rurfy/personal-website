import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'
import AnimatedSection from '@/components/AnimatedSection'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import GitHubIcon from '@/components/GitHubIcon'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.name} — Christopher Richter`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen px-6 py-24" style={{ background: '#09090b' }}>
      <div className="max-w-3xl mx-auto">

        {/* Back nav */}
        <AnimatedSection className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection className="mb-16">
          <p className="text-[#a78bfa] text-sm font-medium tracking-widest uppercase mb-4">
            Project
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#fafafa] leading-tight mb-4">
            {project.name}
          </h1>
          <p className="text-[#71717a] text-lg leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#fafafa] transition-all duration-200 hover:opacity-80"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
              >
                <GitHubIcon className="w-4 h-4" />
                View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
                style={{ border: '1px solid #27272a' }}
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection className="mb-16">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6">Tech Stack</h2>
          <div className="space-y-4">
            {project.stack.map((group) => (
              <div key={group.category} className="flex flex-wrap items-start gap-3">
                <span className="text-sm text-[#52525b] w-32 shrink-0 pt-1">{group.category}</span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 rounded-full text-[#a78bfa]"
                      style={{ background: '#a78bfa11', border: '1px solid #a78bfa22' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* About the Project */}
        <AnimatedSection className="mb-16">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6">About the Project</h2>
          <div className="space-y-4 text-[#71717a] leading-relaxed">
            {project.longDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </AnimatedSection>

        {/* What I Learned */}
        <AnimatedSection className="mb-16">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6">What I Learned</h2>
          <ul className="space-y-3">
            {project.whatILearned.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#71717a]">
                <span className="text-[#a78bfa] mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Screenshots */}
        <AnimatedSection className="mb-16">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6">Screenshots</h2>
          {project.images && project.images.length > 0 ? (
            <div className="grid sm:grid-cols-3 gap-4">
              {project.images.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt={project.name} className="rounded-xl w-full object-cover" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-[9/16] rounded-xl flex items-center justify-center text-[#3f3f46] text-sm"
                  style={{ border: '1px dashed #27272a', background: '#18181b' }}
                >
                  [Screenshot]
                </div>
              ))}
            </div>
          )}
        </AnimatedSection>

        {/* CTA */}
        {project.github && (
          <AnimatedSection>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-[#fafafa] transition-all duration-200 hover:opacity-80"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
            >
              <GitHubIcon className="w-4 h-4" />
              View on GitHub
            </a>
          </AnimatedSection>
        )}

      </div>
    </main>
  )
}
