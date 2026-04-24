import React, { useState, useEffect, useRef } from 'react'
import './Contact.css'

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@lewisclark.design', href: 'mailto:hello@lewisclark.design' },
  { icon: '📍', label: 'Location', value: 'San Francisco, CA', href: '#' },
  { icon: '🕐', label: 'Response Time', value: 'Within 24 hours', href: '#' },
]

const services = [
  'Product Design', 'Brand Identity', 'Web Development',
  'UX Research', 'Design System', 'Motion Design',
]

function useInView(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle')

  const tagRef    = useInView(0)
  const titleRef  = useInView(100)
  const subRef    = useInView(180)
  const infoRef   = useInView(100)
  const formRef   = useInView(200)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__bg-deco" />

      <div className="container">
        {/* Header */}
        <div className="contact__header">
          <div ref={tagRef} className="reveal">
            <span className="tag">Get In Touch</span>
          </div>
          <h2 ref={titleRef} className="contact__title reveal">
            Let's Build Something<br/>
            <span className="accent-text">Remarkable</span>
          </h2>
          <p ref={subRef} className="contact__subtitle reveal">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something extraordinary together.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left: Info */}
          <div ref={infoRef} className="contact__info-card reveal-left">
            <h3 className="contact__info-title">Let's Talk</h3>
            <p className="contact__info-body">
              Whether you need a full product redesign, a new brand identity,
              or just want to chat about design — I'm all ears. Available for
              freelance, consulting, and full-time opportunities.
            </p>

            <div className="contact__details">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="contact__detail-item">
                  <div className="contact__detail-icon">{item.icon}</div>
                  <div>
                    <p className="contact__detail-label">{item.label}</p>
                    <p className="contact__detail-value">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__socials">
              <p className="contact__socials-label">Find me on</p>
              <div className="contact__socials-row">
                {['LinkedIn', 'Dribbble', 'GitHub', 'Twitter'].map(s => (
                  <a key={s} href="#" className="contact__social-btn">{s}</a>
                ))}
              </div>
            </div>

            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <span>Open to new projects — <strong>Q2 2025</strong></span>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={formRef} className="contact__form-wrapper reveal-right">
            {status === 'success' ? (
              <div className="contact__success">
                <div className="contact__success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out, {form.name}! I'll get back to you within 24 hours.</p>
                <button
                  className="btn-outline"
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', service: '', message: '' }) }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__label">Your Name *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} placeholder="John Smith"
                      className="contact__input" required
                    />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label">Email Address *</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="john@company.com"
                      className="contact__input" required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__label">Service Needed</label>
                  <div className="contact__service-chips">
                    {services.map(s => (
                      <button
                        key={s} type="button"
                        className={`contact__service-chip ${form.service === s ? 'active' : ''}`}
                        onClick={() => setForm(f => ({ ...f, service: f.service === s ? '' : s }))}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__label">Tell Me About Your Project *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Describe your project, goals, timeline, and budget..."
                    className="contact__textarea" rows={5} required
                  />
                </div>

                <button
                  type="submit"
                  className={`contact__submit btn-primary ${status === 'sending' ? 'sending' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><span className="contact__spinner" />Sending...</>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
