import type { Project } from '../../types/index.ts'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-cyan-300/20 bg-slate-900 p-6 text-left shadow-xl shadow-cyan-950/20">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Proyecto
          </p>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.status && (
            <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
              {project.status}
            </span>
          )}
        </div>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ver ${project.title} en GitHub`}
            className="shrink-0 rounded-lg border border-cyan-300/30 px-3 py-2 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/10"
          >
            GitHub
          </a>
        )}
      </div>

      <p className="mb-6 flex-grow leading-relaxed text-slate-300">{project.description}</p>

      <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-cyan-400/20 bg-slate-950 px-3 py-1.5 text-xs font-medium text-cyan-100"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  )
}