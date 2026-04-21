import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

import TheGrind from '@/components/projects/TheGrind'
import OnePieceInventory from '@/components/projects/OnePieceInventory'
import ProjectO from '@/components/projects/ProjectO'
import BeerpongApp from '@/components/projects/BeerpongApp'
import HabitTracker from '@/components/projects/HabitTracker'
import SustainabilityAI from '@/components/projects/SustainabilityAI'

// Each project gets its own unique page component
const pageComponents: Record<string, React.ComponentType<{ project: typeof projects[number] }>> = {
  'the-grind': TheGrind,
  'onepiece-inventory': OnePieceInventory,
  'project-o': ProjectO,
  'beerpong-app': BeerpongApp,
  'habit-tracker': HabitTracker,
  'sustainability-ai': SustainabilityAI,
}

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

  const PageComponent = pageComponents[slug]
  if (!PageComponent) notFound()

  return <PageComponent project={project} />
}
