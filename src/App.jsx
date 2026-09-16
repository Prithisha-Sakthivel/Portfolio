import { useState, useEffect } from 'react'
import { portfolioData } from './portfolioData'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements & Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ personal }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-initials">PS</span>
          <span className="logo-name">{personal.name}</span>
        </a>
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={menuOpen}
        >
          <span className="toggle-bar" />
          <span className="toggle-bar" />
          <span className="toggle-bar" />
        </button>
        <nav className={`navbar-nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Hero({ personal }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Student & Aspiring Technologist</span>
          </div>
          <h1 className="hero-title">
            Hello, I'm
            <br />
            <span className="hero-name">{personal.name}</span>
          </h1>
          <p className="hero-tagline">Computer Science and Design Student</p>
          <p className="hero-description">
            Currently pursuing {personal.course} at {personal.college}, from {personal.hometown}. Enthusiastic about
            building clean, accessible web interfaces and learning modern technologies.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">
              About Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
          <div className="hero-quick-meta">
            <div className="meta-item">
              <span className="meta-label">College</span>
              <span className="meta-value">{personal.college}</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">
                {personal.hometown}, India
              </span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img src={personal.profilePhoto} alt={`${personal.name}'s Profile Photo`} className="profile-img" />
            </div>
            {personal.isPlaceholderPhoto && (
              <div className="placeholder-helper">
                <span className="helper-icon">💡</span>
                <span className="helper-text">
                  Add your photo in <code>public/</code> and update <code>profilePhoto</code> in{' '}
                  <code>portfolioData.js</code>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function About({ about, personal }) {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Background & Interests</h2>
          <p className="section-subtitle">A little bit about who I am, what I study, and what inspires me.</p>
        </div>
        <div className="about-grid">
          <div className="about-story-card card">
            <h3 className="about-card-title">Hello there!</h3>
            <p className="about-bio-text">{about.description}</p>
          </div>
          <div className="about-info-card card">
            <h3 className="about-card-title">Quick Information</h3>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-label">Name</span>
                <span className="info-val">{personal.name}</span>
              </li>
              <li className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-val">{personal.course}</span>
              </li>
              <li className="info-item">
                <span className="info-label">Institution</span>
                <span className="info-val">{personal.college}</span>
              </li>
              <li className="info-item">
                <span className="info-label">Hometown</span>
                <span className="info-val">{personal.hometown}</span>
              </li>
            </ul>
            <div className="about-interests-box">
              <span className="interests-label">Areas of Interest</span>
              <div className="interests-tags">
                <span className="interest-pill">Frontend Dev</span>
                <span className="interest-pill">Web Development</span>
                <span className="interest-pill">Cloud Computing</span>
                <span className="interest-pill">AI</span>
                <span className="interest-pill">AR / VR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills({ skills }) {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Foundational programming languages and web technologies I am working with.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card card">
              <div className="skill-icon-wrap">
                <span className="skill-icon-text">{skill.name.slice(0, 2)}</span>
              </div>
              <div className="skill-info">
                <h3 className="skill-title">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education({ education }) {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My educational qualifications and institutional learning journey.</p>
        </div>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card card">
              <div className="edu-badge-row">
                <span className="edu-type-tag">{edu.type}</span>
                {edu.current && <span className="edu-status-tag">Currently Pursuing</span>}
              </div>
              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              {edu.score && <span className="edu-score">{edu.score}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience({ achievements, experienceAndActivities }) {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Milestones & Involvement</span>
          <h2 className="section-title">Achievements & Experience</h2>
          <p className="section-subtitle">
            A summary of academic milestones, hands-on internships, and leadership activities.
          </p>
        </div>
        <div className="dual-column-layout">
          <div className="column-block">
            <div className="column-header">
              <span className="column-icon">🏆</span>
              <h3 className="column-title">Achievements</h3>
            </div>
            <div className="cards-stack">
              {achievements.map((item, index) => (
                <div key={index} className="item-card card">
                  <div className="item-header-row">
                    <h4 className="item-title">{item.title}</h4>
                  </div>
                  <p className="item-desc">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="column-block">
            <div className="column-header">
              <span className="column-icon">💼</span>
              <h3 className="column-title">Experience & Activities</h3>
            </div>
            <div className="cards-stack">
              {experienceAndActivities.map((item, index) => (
                <div key={index} className="item-card card">
                  <div className="item-badge-row">
                    <span className="activity-type-tag">{item.type}</span>
                  </div>
                  <h4 className="item-title">{item.role}</h4>
                  <p className="item-org">{item.organization}</p>
                  <p className="item-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact({ contact }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Feel free to connect for learning opportunities, student collaborations, or inquiries.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card card">
            <h3 className="contact-card-title">Let's Connect</h3>
            <p className="contact-message">{contact.message}</p>
            <div className="contact-links-list">
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Email Address</span>
                  <a href={contact.emailLink} className="method-value">
                    {contact.emailPlaceholder}
                  </a>
                </div>
              </div>
              {contact.socialLinks.map((link) => (
                <div key={link.name} className="contact-method-item">
                  <div className="method-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div className="method-details">
                    <span className="method-label">{link.name}</span>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="method-value">
                      {link.placeholder}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ personal }) {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-title">{personal.name}</span>
          <p className="footer-subtitle">{personal.tagline}</p>
          <p className="footer-affiliation">
            {personal.college} • {personal.hometown}
          </p>
        </div>
        <div className="footer-nav">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#education" className="footer-link">Education</a>
          <a href="#experience" className="footer-link">Achievements</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} {personal.name}.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const { personal, about, skills, education, achievements, experienceAndActivities, contact } = portfolioData
  return (
    <div className="portfolio-app">
      <Navbar personal={personal} />
      <main>
        <Hero personal={personal} />
        <About about={about} personal={personal} />
        <Skills skills={skills} />
        <Education education={education} />
        <Experience achievements={achievements} experienceAndActivities={experienceAndActivities} />
        <Contact contact={contact} />
      </main>
      <Footer personal={personal} />
    </div>
  )
}