import React, { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useScrollReveal'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CPO at Luminary Finance',
    avatar: 'SC',
    color: '#c9a96e',
    quote: "Lewis transformed our entire product experience. His design thinking goes beyond aesthetics — he deeply understood our users and delivered solutions that increased conversion by 62%. He's the rarest kind of talent: visionary and execution-focused.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'Founder & CEO, Verdant',
    avatar: 'MW',
    color: '#6db87a',
    quote: "Working with Lewis was a masterclass in what great branding looks like. He didn't just create a logo — he built a complete visual identity that captures exactly who we are. Our investors said the brand was a key factor in their decision to fund us.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Nair',
    role: 'Head of Design, Orion SaaS',
    avatar: 'PN',
    color: '#6aa8e0',
    quote: "Exceptional craft and even better communication. Lewis delivered a complex analytics dashboard in 8 weeks without compromising quality. He's become our go-to for any high-stakes design or development work. Couldn't recommend more highly.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Tom Richter',
    role: 'CTO, Studio Parallax',
    avatar: 'TR',
    color: '#e08d6a',
    quote: "Lewis built us the most beautiful website I've ever seen. The 3D effects and animations are flawless, and the performance is outstanding. Our award wins directly contributed to a 200% increase in qualified leads.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const tagRef = useReveal(0)
  const headRef = useReveal(100)
  const intervalRef = useRef(null)

  const go = (idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 300)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      go((active + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [active])

  const t = testimonials[active]

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        {/* Header */}
        <div className="testimonials__header">
          <div ref={tagRef} className="reveal">
            <span className="tag">Testimonials</span>
          </div>
          <h2 ref={headRef} className="testimonials__title reveal">
            What Clients <span className="accent-text">Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className={`testimonial-card ${animating ? 'animating' : ''}`} style={{ '--t-color': t.color }}>
          {/* Quote */}
          <div className="testimonial-card__quote-mark">"</div>
          <p className="testimonial-card__text">{t.quote}</p>

          {/* Author */}
          <div className="testimonial-card__author">
            <div className="testimonial-card__avatar" style={{ background: t.color }}>
              {t.avatar}
            </div>
            <div className="testimonial-card__info">
              <p className="testimonial-card__name">{t.name}</p>
              <p className="testimonial-card__role">{t.role}</p>
            </div>
            <div className="testimonial-card__stars">
              {'★'.repeat(t.rating)}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="testimonials__nav reveal">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              className={`testimonials__dot ${i === active ? 'active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Row */}
        <div className="testimonials__thumbs reveal">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              className={`testimonials__thumb ${i === active ? 'active' : ''}`}
              onClick={() => go(i)}
            >
              <div className="testimonials__thumb-avatar" style={{ background: t.color }}>
                {t.avatar}
              </div>
              <div>
                <p className="testimonials__thumb-name">{t.name}</p>
                <p className="testimonials__thumb-role">{t.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
