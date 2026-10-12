import { useCallback } from 'react'
import './App.css'

import Nav            from './components/Nav/Nav'
import Hero           from './components/Hero/Hero'
import TaglineStrip   from './components/TaglineStrip/TaglineStrip'
import ContentSection from './components/ContentSection/ContentSection'
import Manifesto      from './components/Manifesto/Manifesto'
import About          from './components/About/About'
import Subscribe      from './components/Subscribe/Subscribe'
import Footer         from './components/Footer/Footer'

export default function App() {
  /** Smooth-scroll helper shared between Nav and Hero buttons */
  const scrollTo = useCallback((href: string) => {
    const target = document.querySelector(href)
    if (target) {
      const top =
        (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero           onScrollTo={scrollTo} />
        <TaglineStrip />
        <ContentSection />
        <Manifesto />
        <About />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
