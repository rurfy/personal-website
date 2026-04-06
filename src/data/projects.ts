export interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  live?: string
  highlight?: boolean
}

export const projects: Project[] = [
  {
    name: 'Beerpong App',
    description:
      'A mobile app for tracking beer pong games, scores, and stats with friends. Built with Flutter and Firebase, featuring real-time game syncing, player profiles, and leaderboards.',
    tags: ['Flutter', 'Firebase', 'Dart', 'iOS', 'Android'],
    github: 'https://github.com/rurfy',
    highlight: true,
  },
]
