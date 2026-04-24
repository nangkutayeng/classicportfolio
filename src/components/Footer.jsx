import React from 'react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span>LC</span>
              <span className="footer__logo-dot" />
            </div>
            <p className="footer__tagline">
              Designing digital experiences<br />
              that inspire and perform.
            </p>
            <div className="footer__socials">
              {['LinkedIn', 'Dribbble', 'GitHub', 'Twitter', 'Behance'].map(s => (
                <a key={s} href="#" className="footer__social" aria-label={s}>
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer__nav">
            <div className="footer__nav-group">
              <h4 className="footer__nav-title">Navigation</h4>
              <ul>
                {['About', 'Work', 'Skills', 'Testimonials', 'Contact'].map(l => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="footer__nav-link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__nav-group">
              <h4 className="footer__nav-title">Services</h4>
              <ul>
                {['Product Design', 'Brand Identity', 'Web Development', 'UX Research', 'Design Systems', 'Motion Design'].map(s => (
                  <li key={s}>
                    <a href="#contact" className="footer__nav-link">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__nav-group">
              <h4 className="footer__nav-title">Contact</h4>
              <ul>
                <li className="footer__contact-item">
                  <span className="footer__contact-icon">📧</span>
                  hello@lewisclark.design
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-icon">📍</span>
                  San Francisco, CA
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-icon">🕐</span>
                  PST (UTC -8)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Lewis Clark. Crafted with care & coffee.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Use</a>
          </div>
          <p className="footer__made-with">
            Made with <span className="footer__heart">♥</span> in San Francisco
          </p>
        </div>
      </div>
    </footer>
  )
}
