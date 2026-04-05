'use client'
import { useReveal } from '../hooks/useReveal'
import Navbar          from '../components/Navbar'
import Hero            from '../components/Hero'
import Marquee         from '../components/Marquee'
import About           from '../components/About'
import Projects        from '../components/Projects'
import Services        from '../components/Services'
import InstagramReels  from '../components/InstagramReels'
import Process         from '../components/Process'
import Testimonial     from '../components/Testimonial'
import Contact         from '../components/Contact'
import Footer          from '../components/Footer'

export default function HomePage() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Services />
        <InstagramReels />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
