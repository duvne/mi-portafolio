const interests = [
  'Desarrollo de páginas web y aplicaciones móviles',
  'Diseño y gestión de bases de datos',
  'Optimización y automatización de procesos',
  'Inteligencia artificial y algoritmos',
  'Aprendizaje de lenguajes y tecnologías modernas',
]

const strengths = [
  'Comunicación',
  'Resolución de problemas',
  'Adaptabilidad',
  'Disposición para aprender',
  'Organización',
  'Responsabilidad',
  'Trabajo en equipo',
  'Aprendizaje autodidacta',
]

export function About() {
  return (
    <section className="bg-slate-950 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
      <header className="mx-auto mb-12 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Conóceme</p>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Sobre mí</h1>
        <p className="text-lg leading-relaxed text-slate-300">
          Soy estudiante de Ingeniería de Sistemas en la Universidad Autónoma del Caribe. Me interesa
          crear soluciones tecnológicas útiles y seguir creciendo como profesional.
        </p>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 text-left md:grid-cols-2">
        <article className="rounded-2xl border border-cyan-300/20 bg-slate-900 px-6 py-8 shadow-xl shadow-cyan-950/20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Lo que me interesa</p>
          <h2 className="mb-5 text-2xl font-bold">Crear y aprender</h2>
          <ul className="space-y-3 text-slate-300">
            {interests.map((interest) => (
              <li key={interest} className="flex gap-3">
                <span className="text-cyan-300" aria-hidden="true">›</span>
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-cyan-300/20 bg-slate-900 px-6 py-8 shadow-xl shadow-cyan-950/20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Mis objetivos</p>
          <h2 className="mb-5 text-2xl font-bold">Crecer y aportar</h2>
          <p className="leading-relaxed text-slate-300">
            Mi objetivo es ejercer mi carrera y llevar mis capacidades al siguiente nivel. También
            me gustaría participar en proyectos de investigación que desarrollen soluciones para
            problemáticas reales.
          </p>
        </article>

        <article className="rounded-2xl border border-cyan-300/20 bg-slate-900 px-6 py-8 shadow-xl shadow-cyan-950/20 md:col-span-2">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Cómo trabajo</p>
              <h2 className="mb-5 text-2xl font-bold">Fortalezas</h2>
              <ul className="flex flex-wrap justify-center gap-3 md:justify-start">
                {strengths.map((strength) => (
                  <li
                    key={strength}
                    className="rounded-lg border border-cyan-400/20 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-cyan-300/20 pt-6 text-center md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Idiomas</p>
              <h2 className="mb-2 text-xl font-bold">Inglés básico</h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Reconozco vocabulario y oraciones sencillas, y continúo mejorando mi comprensión.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}