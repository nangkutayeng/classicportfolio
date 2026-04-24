import React, { useState } from 'react'
import { useReveal } from '../hooks/useScrollReveal'
import './Work.css'

const projects = [
  {
    id: 1,
    title: 'Luminary Finance',
    category: 'Product Design',
    tags: ['Figma', 'React', 'Fintech'],
    year: '2024',
    desc: 'End-to-end redesign of a fintech platform serving 200k+ users. Reduced onboarding drop-off by 62% through research-driven UX improvements.',
    color: '#c9a96e',
    emoji: '💳',
    featured: true,
  },
  {
    id: 2,
    title: 'Verdant Brand System',
    category: 'Branding & Identity',
    tags: ['Brand', 'Motion', 'UI'],
    year: '2024',
    desc: 'Comprehensive brand identity for a sustainability startup — from logo system and color palette to full component library.',
    color: '#6db87a',
    emoji: '🌿',
    featured: true,
  },
  {
    id: 3,
    title: 'Orion Dashboard',
    category: 'UI Design + Dev',
    tags: ['React', 'TypeScript', 'D3'],
    year: '2023',
    desc: 'Real-time analytics dashboard with custom data visualizations for an enterprise SaaS platform. Zero-to-launch in 8 weeks.',
    color: '#6aa8e0',
    emoji: '📊',
    featured: true,
  },
  {
    id: 4,
    title: 'Nomad Travel App',
    category: 'Mobile Design',
    tags: ['iOS', 'Android', 'Figma'],
    year: '2023',
    desc: 'AI-powered travel planning app with personalized itinerary generation and offline-first architecture.',
    color: '#c97eb5',
    emoji: '✈️',
    featured: false,
  },
  {
    id: 5,
    title: 'Studio Parallax',
    category: 'Web Development',
    tags: ['Next.js', 'GSAP', '3D'],
    year: '2022',
    desc: 'Award-winning creative agency website featuring parallax scrolling, 3D WebGL effects, and micro-animations.',
    color: '#e08d6a',
    emoji: '🎬',
    featured: false,
  },
  {
    id: 6,
    title: 'Pulse Health',
    category: 'Product Design',
    tags: ['Health', 'Research', 'UX'],
    year: '2022',
    desc: 'Wellness tracking platform with behavioural science-driven UX. 4.8★ App Store rating with 50k+ downloads.',
    color: '#e06a6a',
    emoji: '❤️',
    featured: false,
  },
]

const filters = ['All', 'Product Design', 'Branding & Identity', 'UI Design + Dev', 'Mobile Design', 'Web Development']

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const tagRef = useReveal(0)
  const headRef = useReveal(100)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="work section" id="work">
      <div className="container">
        {/* Header */}
        <div className="work__header">
          <div ref={tagRef} className="reveal">
            <span className="tag">Selected Work</span>
          </div>
          <div className="work__title-row">
            <h2 ref={headRef} className="work__title reveal">
              Projects That<br/>
              <span className="accent-text">Define Me</span>
            </h2>
            <p className="work__subtitle reveal">
              A curated selection of work spanning product design,<br/>
              development, and creative direction.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="work__filters reveal">
          {filters.map(f => (
            <button
              key={f}
              className={`work__filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="work__grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="work__footer reveal">
          <a href="#" className="btn-outline">
            View All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const ref = useReveal(index * 100)

  return (
    <div
      ref={ref}
      className={`project-card reveal ${project.featured ? 'project-card--featured' : ''}`}
      style={{ '--card-accent': project.color }}
    >
      <div className="project-card__img">
        <div className="project-card__emoji">{project.emoji}</div>
        <div className="project-card__overlay">
          <a href="#" className="project-card__link">
            View Case Study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__year">{project.year}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>

        <div className="project-card__tags">
          {project.tags.map(t => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
