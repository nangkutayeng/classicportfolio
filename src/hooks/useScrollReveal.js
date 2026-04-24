import { useEffect, useRef } from 'react'

// Global reveal observer — observes any element with reveal classes
export function initGlobalReveal() {
  const CLASSES = ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale']

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  )

  const observe = () => {
    document.querySelectorAll(CLASSES.map(c => `.${c}:not(.visible)`).join(',')).forEach(el => {
      observer.observe(el)
    })
  }

  // Observe now + after small delay to catch dynamically rendered elements
  observe()
  setTimeout(observe, 300)
  setTimeout(observe, 800)

  return observer
}

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (options.once !== false) observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold || 0.08,
        rootMargin: options.rootMargin || '0px 0px -40px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

// Hook for individual elements with optional delay
export function useReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already in viewport (e.g. section is visible on load), reveal immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => el.classList.add('visible'), delay)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
