export type Project = {
  title: string
  description: string
  status?: 'En proceso' | 'Completado'
  image?: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
}

export type Skill = {
  name: string
  category: 'frontend' | 'backend' | 'tools'
}

export type ExperienceItem = {
  role: string
  organization: string
  period: string
  description: string
}
