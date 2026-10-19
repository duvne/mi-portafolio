import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo-pequeño.jpg'

const links = [
  { label: 'Mi perfil', href: '/#hero' },
  { label: 'Proyectos', href: '/#projects' },
  { label: 'Habilidades', href: '/#skills' },
  { label: 'Contacto', href: '/#contact' },
  { label: 'Experiencia', href: '/#experience' },
  { label: 'Sobre mí', href: '/about' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <nav id="top" className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="navbar-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img className="h-8 w-auto" src={logo} alt="" />
              <span className="text-xl font-bold text-gray-800">Mi portafolio</span>
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {isMenuOpen && (
              <div
                id="navbar-menu"
                className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
              >
                {links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
