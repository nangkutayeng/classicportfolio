import React, { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { initGlobalReveal } from './hooks/useScrollReveal'

import Cursor from './components/Cursor'
import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import './styles/globals.css'
import './App.css'

export default function App() {
  const { theme, toggle } = useTheme()
  const [loaded, setLoaded] = useState(false)

  // Once page loader completes, init the global reveal observer
  useEffect(() => {
    if (!loaded) return
    const observer = initGlobalReveal()
    return () => observer.disconnect()
  }, [loaded])

  return (
    <>
      <Cursor />
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      <div className={`site ${loaded ? 'site--visible' : ''}`}>
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main>
          <Hero />
          <About />
          <Work />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}
