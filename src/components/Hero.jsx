import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ArrowDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <polyline points="19 12 12 19 5 12"/>
  </svg>
)

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Done' },
  { value: '40+', label: 'Happy Clients' },
  { value: '12', label: 'Awards Won' },
]

const roles = ['Product Designer', 'Creative Developer', 'UX Strategist', 'Brand Architect']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1))
        }, 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 35)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="hero" id="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      {/* Grid lines */}
      <div className="hero__grid" />

      <div className="hero__inner container">
        <div className={`hero__content ${mounted ? 'mounted' : ''}`}>

          {/* Badge */}
          <div className="hero__badge" style={{ transitionDelay: '0.1s' }}>
            <span className="hero__badge-dot" />
            Available for freelance work
          </div>

          {/* Main Heading */}
          <h1 className="hero__title" style={{ transitionDelay: '0.2s' }}>
            <span className="hero__title-line">Crafting Digital</span>
            <span className="hero__title-line hero__title-line--accent">
              Experiences
              <svg className="hero__underline" viewBox="0 0 320 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14C50 4 100 2 160 6C220 10 270 8 316 4" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="hero__title-line">That Inspire.</span>
          </h1>

          {/* Typewriter */}
          <div className="hero__role-wrapper" style={{ transitionDelay: '0.35s' }}>
            <span className="hero__role-label">I am a</span>
            <span className="hero__role-text">
              {displayed}
              <span className="hero__cursor">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="hero__description" style={{ transitionDelay: '0.45s' }}>
            Hi, I'm <strong>Lewis Clark</strong> — a multidisciplinary designer and developer
            building beautiful, functional digital products for forward-thinking brands.
          </p>

          {/* CTA Buttons */}
          <div className="hero__ctas" style={{ transitionDelay: '0.55s' }}>
            <a href="#work" className="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">Let's Talk</a>
          </div>

          {/* Social Links */}
          <div className="hero__socials" style={{ transitionDelay: '0.65s' }}>
            {[
              { name: 'LinkedIn', href: '#', icon: 'in' },
              { name: 'Dribbble', href: '#', icon: 'dr' },
              { name: 'GitHub', href: '#', icon: 'gh' },
              { name: 'Twitter', href: '#', icon: 'tw' },
            ].map(s => (
              <a key={s.name} href={s.href} className="hero__social-link" aria-label={s.name}>
                <span>{s.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Visual Card */}
        <div className={`hero__visual ${mounted ? 'mounted' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <div className="hero__card">
            {/* Avatar placeholder */}
            <div className="hero__avatar">
              <div className="hero__avatar-inner">
                <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="50" r="28" fill="var(--accent)" opacity="0.15"/>
                  <circle cx="60" cy="50" r="22" fill="var(--accent)" opacity="0.25"/>
                  <path d="M20 130 C20 100 40 85 60 85 C80 85 100 100 100 130" fill="var(--accent)" opacity="0.15"/>
                  <circle cx="60" cy="48" r="16" fill="var(--accent)" opacity="0.6"/>
                  <path d="M24 128 C24 102 42 88 60 88 C78 88 96 102 96 128" fill="var(--accent)" opacity="0.5"/>
                </svg>
                <div className="hero__initials">LC</div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="hero__float-badge hero__float-badge--tl">
              <span>🎨</span>
              <span>Design</span>
            </div>
            <div className="hero__float-badge hero__float-badge--tr">
              <span>⚡</span>
              <span>Dev</span>
            </div>
            <div className="hero__float-badge hero__float-badge--br">
              <span>🏆</span>
              <span>Award Winner</span>
            </div>

            {/* Name card */}
            <div className="hero__name-card">
              <p className="hero__name">Lewis Clark</p>
              <p className="hero__name-sub">Product Designer & Developer</p>
              <div className="hero__name-location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Decorative rings */}
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
        </div>
      </div>

      {/* Stats Bar */}
      <div className={`hero__stats-bar ${mounted ? 'mounted' : ''}`} style={{ transitionDelay: '0.7s' }}>
        <div className="container">
          <div className="hero__stats">
            {stats.map((s, i) => (
              <div key={s.label} className="hero__stat" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="hero__scroll">
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
        <span>Scroll</span>
      </a>
    </section>
  )
}
