const contactLinks = [
  {
    label: 'Correo',
    href: 'mailto:duvanjavier159@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/duvne',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.67.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.5.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 bg-slate-950 px-4 py-8 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Duvan Hernandez Villarreal
        </p>
        <nav aria-label="Enlaces de contacto" className="flex items-center gap-3">
          {contactLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'GitHub' ? '_blank' : undefined}
              rel={label === 'GitHub' ? 'noreferrer' : undefined}
              aria-label={label}
              className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              <span className="h-5 w-5">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
