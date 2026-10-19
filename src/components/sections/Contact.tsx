const contactMethods = [
  {
    label: 'Correo',
    value: 'duvanjavier159@gmail.com',
    href: 'mailto:duvanjavier159@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: 'Teléfono',
    value: '302434556',
    href: 'tel:302434556',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3a2 2 0 0 1-2.2 2A18 18 0 0 1 3 6.2 2 2 0 0 1 5 4Z"
        />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-300/20 bg-slate-900 px-6 py-10 text-center shadow-xl shadow-cyan-950/20 sm:px-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Hablemos</p>
        <h2 className="mb-4 text-3xl font-bold">Contacto</h2>
        <p className="mb-8 text-slate-300">
          Puedes comunicarte conmigo por correo electrónico o teléfono.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {contactMethods.map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-cyan-400/20 bg-slate-950 px-5 py-4 text-slate-200 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              <span className="h-5 w-5 text-cyan-300">{icon}</span>
              <span className="text-left">
                <span className="block text-xs text-slate-400">{label}</span>
                <span className="font-medium">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}