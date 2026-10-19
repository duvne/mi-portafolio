import profileImage from '../../assets/image.png'

const technologies = [
    'Java',
    'Python',
    'SQL',
    'PostgreSQL',
    'TypeScript',
    'Node.js',
    'HTML',
    'CSS',
    'Frameworks web',
    'Desarrollo de aplicaciones móviles',
]

const methodologiesAndTools = ['RUP', 'Scrum', 'Modelado de datos', 'Git', 'GitHub']

export function Hero() { 
    return (
        <section id="hero" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-2xl border border-cyan-400/20 bg-slate-900/70 px-6 py-16 text-center shadow-2xl shadow-cyan-950/20 sm:px-10">
                <img src={profileImage} alt="Duvan junto a su madre" className="mx-auto mb-8 h-32 w-32 rounded-full border-4 border-cyan-400/30 shadow-lg shadow-cyan-950/50" />
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Portafolio personal</p>
                <div className="mx-auto max-w-3xl">
                    <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Bienvenido a mi portafolio</h1>
                    <p className="mb-8 text-lg text-slate-300">mi nombre es duban hernandez villarreal Soy un desarrollador full-stack apasionado por crear soluciones innovadoras.</p>
                    <a href="#projects" className="inline-block rounded-lg border border-cyan-300/50 bg-cyan-400/10 px-5 py-3 font-bold text-cyan-100 transition-colors hover:bg-cyan-300/20">
                        Ver proyectos
                    </a>
                </div>
            </div>
            <div className="mx-auto mt-12 max-w-7xl rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-12 text-center shadow-xl sm:px-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Conóceme</p>
                <h2 className="mb-4 text-3xl font-bold text-white">Sobre mí</h2>
                <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">Soy un desarrollador con experiencia en tecnologías web y móviles, siempre buscando aprender y mejorar mis habilidades.</p>
                <a href="/about" className="inline-block rounded-lg border border-cyan-300/50 bg-cyan-400/10 px-5 py-3 font-bold text-cyan-100 transition-colors hover:bg-cyan-300/20">
                    Todo sobre mí
                </a>
            </div>
            <div id="skills" className="mx-auto mt-12 max-w-7xl rounded-2xl border border-cyan-300/30 bg-slate-900 px-6 py-12 text-center shadow-2xl shadow-cyan-950/30 sm:px-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Stack tecnológico</p>
                <h2 className="mb-4 text-3xl font-bold text-white">Habilidades</h2>
                <p className="mb-8 text-lg text-slate-300">Tecnologías, metodologías y herramientas que utilizo o estudio.</p>
                <h3 className="mb-4 text-left text-lg font-semibold text-cyan-200">Tecnologías</h3>
                <ul className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {technologies.map((skill) => (
                        <li
                            key={skill}
                            className="flex min-h-20 items-center justify-center rounded-lg border border-cyan-400/20 bg-slate-900/80 p-4 text-sm font-medium text-slate-100 shadow-md shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-slate-800 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-950/50"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
                <h3 className="mb-4 text-left text-lg font-semibold text-cyan-200">Metodologías y herramientas</h3>
                <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {methodologiesAndTools.map((skill) => (
                        <li
                            key={skill}
                            className="flex min-h-20 items-center justify-center rounded-lg border border-cyan-400/20 bg-slate-900/80 p-4 text-sm font-medium text-slate-100 shadow-md shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-slate-800 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-950/50"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
                <p className="mx-auto mt-4 max-w-4xl text-left text-sm text-slate-400">
                    RUP, Scrum y modelado de datos forman parte de mi formación universitaria.
                </p>
            </div>
        </section>
    )
}
