import { ProjectCard } from '../common/ProjectCard.tsx'
import { projects } from '../../data/projects.ts'

export function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Lo que he creado
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Proyectos</h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-slate-300">
            Algunos proyectos en los que he aplicado y sigo desarrollando mis conocimientos.
          </p>
        </header>

        <div className="mx-auto grid max-w-4xl gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}