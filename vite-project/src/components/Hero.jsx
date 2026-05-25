import { motion } from 'framer-motion'
import { icons } from './icons'

export function Hero({ data }) {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="status-pill">
          <icons.Sparkles size={15} />
          Open to software engineering internships
        </span>
        <h1>{data.name}</h1>
        <p className="hero-title">{data.role}</p>
        <p className="hero-subtitle">{data.subtitle}</p>
        <p className="hero-description">{data.description}</p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects <icons.ArrowUpRight size={17} />
          </a>
          <a className="button secondary" href="#contact">
            Contact Me <icons.Send size={16} />
          </a>
          <a className="button ghost" href={data.resume} download>
            Download Resume <icons.Download size={16} />
          </a>
        </div>

        <div className="social-row">
          <a href={data.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <icons.Github size={18} />
          </a>
          <a className={data.socials.linkedin ? '' : 'disabled'} href={data.socials.linkedin || '#contact'} aria-label="LinkedIn">
            <icons.Linkedin size={18} />
          </a>
          <a href={`mailto:${data.socials.email}`} aria-label="Email">
            <icons.Mail size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="profile-card">
          <img src={data.profileImage} alt={`${data.name} profile`} />
          <div className="profile-meta">
            <span>IIT Dhanbad</span>
            <strong>Full Stack Developer</strong>
          </div>
        </div>
        <div className="signal-card">
          <span>Recruiter signals</span>
          {data.recruiterSignals.map((signal) => (
            <strong key={signal}>{signal}</strong>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
