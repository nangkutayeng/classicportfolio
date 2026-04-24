import React from 'react'
import { useReveal } from '../hooks/useScrollReveal'
import './About.css'

const highlights = [
  { icon: '🎨', title: 'Design First', desc: 'Every pixel is intentional. I craft interfaces that balance beauty with usability.' },
  { icon: '💻', title: 'Full-Stack Dev', desc: 'From concept to deployment — I build the things I design, end to end.' },
  { icon: '🔍', title: 'Research Driven', desc: 'User research and data inform every creative decision I make.' },
  { icon: '🚀', title: 'Outcome Focused', desc: 'Beautiful products that also move the needle on business metrics.' },
]

export default function About() {
  const sectionRef = useReveal(0)
  const tagRef = useReveal(100)
  const h2Ref = useReveal(200)
  const textRef = useReveal(300)
  const cardsRef = useReveal(400)
  const imgRef = useReveal(100)

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left: Visual */}
          <div ref={imgRef} className="about__visual reveal-left">
            <div className="about__img-wrapper">
              <div className="about__img-placeholder">
                <div className="about__img-circles">
                  <div className="about__circle about__circle--1" />
                  <div className="about__circle about__circle--2" />
                  <div className="about__circle about__circle--3" />
                </div>
                <div className="about__monogram">LC</div>
              </div>
              <div className="about__exp-badge">
                <span className="about__exp-num">8+</span>
                <span className="about__exp-text">Years of<br/>Excellence</span>
              </div>
              <div className="about__img-deco" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="about__content">
            <div ref={tagRef} className="reveal">
              <span className="tag">About Me</span>
            </div>

            <h2 ref={h2Ref} className="about__title reveal">
              Turning Vision into<br/>
              <span className="accent-text">Digital Reality</span>
            </h2>

            <div ref={textRef} className="reveal">
              <p className="about__lead">
                I'm Lewis Clark, a San Francisco-based designer and developer with 8+ years of experience
                crafting exceptional digital products for startups, agencies, and Fortune 500 companies.
              </p>
              <p className="about__body">
                My approach blends strategic thinking with aesthetic precision. I believe great design isn't
                just about how things look — it's about how they work, how they feel, and the impact they
                create for the people who use them.
              </p>
              <p className="about__body">
                When I'm not pushing pixels or writing code, you'll find me hiking the Marin Headlands,
                obsessing over typography, or mentoring emerging designers in my local community.
              </p>

              <div className="about__ctas">
                <a href="#contact" className="btn-primary">Work With Me</a>
                <a href="#" className="btn-outline" download>
                  Download CV
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Highlights Grid */}
            <div ref={cardsRef} className="about__highlights reveal">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="about__highlight-card"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="about__highlight-icon">{h.icon}</div>
                  <h4 className="about__highlight-title">{h.title}</h4>
                  <p className="about__highlight-desc">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
