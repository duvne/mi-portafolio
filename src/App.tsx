import './styles/globals.css'
import { Container } from './components/layout/Container.tsx'
import { Footer } from './components/layout/Footer.tsx'
import { Navbar } from './components/layout/Navbar.tsx'
import { About } from './components/sections/About.tsx'
import { Contact } from './components/sections/Contact.tsx'
import { Experience } from './components/sections/Experience.tsx'
import { Hero } from './components/sections/Hero.tsx'
import { Projects } from './components/sections/Projects.tsx'

function App() {
  const isAboutPage = window.location.pathname === '/about'

  return (
    <Container>
      <Navbar />
      <main className="flex-grow">
        {isAboutPage ? <About /> : (
          <>
            <Hero />
            <Projects />
            <Experience />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </Container>
  )
}

export default App
