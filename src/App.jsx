import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
      { threshold: 0.1 })
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <div className="bg-surface text-on-surface">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
