import React from 'react'
import { useReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const skillGroups = [
  {
    category: 'Design',
    icon: '🎨',
    skills: [
      { name: 'UI Design', level: 95 },
      { name: 'UX Research', level: 90 },
      { name: 'Figma', level: 98 },
      { name: 'Motion Design', level: 82 },
      { name: 'Brand Identity', level: 88 },
    ],
  },
  {
    category: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'CSS / Tailwind', level: 95 },
      { name: 'GSAP / Animation', level: 80 },
      { name: 'Three.js / WebGL', level: 70 },
    ],
  },
  {
    category: 'Backend & Tools',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'PostgreSQL', level: 72 },
      { name: 'Git & CI/CD', level: 88 },
      { name: 'AWS / Vercel', level: 80 },
      { name: 'Webflow', level: 90 },
    ],
  },
]

const tools = [
  'Figma', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'GSAP', 'Framer Motion', 'Three.js', 'Node.js', 'PostgreSQL',
  'Vercel', 'AWS', 'Webflow', 'After Effects', 'Illustrator',
  'Notion', 'Linear', 'Hotjar', 'Mixpanel', 'Lottie',
]

export default function Skills() {
  const tagRef = useReveal(0)
  const headRef = useReveal(100)

  return (
    <section className="skills section" id="skills">
      {/* Background decoration */}
      <div className="skills__bg-deco" />

      <div className="container">
        {/* Header */}
        <div className="skills__header">
          <div ref={tagRef} className="reveal">
            <span className="tag">Expertise</span>
          </div>
          <h2 ref={headRef} className="skills__title reveal">
            Tools & <span className="accent-text">Superpowers</span>
          </h2>
          <p className="skills__subtitle reveal">
            A breadth of skills refined over 8 years — from pixel-perfect design to production-ready code.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="skills__groups">
          {skillGroups.map((group, gi) => (
            <SkillGroup key={group.category} group={group} index={gi} />
          ))}
        </div>

        {/* Tools Marquee */}
        <div className="skills__tools-section reveal">
          <p className="skills__tools-label">Tools I Work With</p>
          <div className="skills__marquee">
            <div className="skills__marquee-track">
              {[...tools, ...tools].map((tool, i) => (
                <span key={`${tool}-${i}`} className="skills__tool-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group, index }) {
  const ref = useReveal(index * 120)

  return (
    <div ref={ref} className="skill-group reveal">
      <div className="skill-group__header">
        <span className="skill-group__icon">{group.icon}</span>
        <h3 className="skill-group__title">{group.category}</h3>
      </div>

      <div className="skill-group__skills">
        {group.skills.map((skill, si) => (
          <SkillBar key={skill.name} skill={skill} delay={si * 80} />
        ))}
      </div>
    </div>
  )
}

function SkillBar({ skill, delay }) {
  const ref = useReveal(delay)

  return (
    <div ref={ref} className="skill-bar reveal">
      <div className="skill-bar__meta">
        <span className="skill-bar__name">{skill.name}</span>
        <span className="skill-bar__level">{skill.level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            '--skill-level': `${skill.level}%`,
            transitionDelay: `${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  )
}
