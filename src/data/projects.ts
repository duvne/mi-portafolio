import type { Project } from '../types/index.ts'

export const projects: Project[] = [
  {
    title: 'VOLT — Marketplace de patinetas eléctricas',
    status: 'En proceso',
    description:
      'Prototipo web para explorar, alquilar y publicar patinetas eléctricas. El catálogo y la publicación básica se conectan a una API Java; los flujos de reservas, pagos y administración son demostrativos y aún no cuentan con persistencia.',
    technologies: ['Java 17', 'Jakarta Servlet 6', 'Maven', 'JavaScript', 'HTML', 'CSS', 'Gson'],
    repoUrl: 'https://github.com/duvne/volt-netbeans',
  },
]