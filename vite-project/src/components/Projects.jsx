import { motion } from 'framer-motion'
import { icons } from './icons'
import { Section } from './Section'

export function Projects({ projects }) {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      description="Projects ordered for recruiter scanning: product thinking, full stack execution, domain depth, and backend architecture."
    >
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <div className="project-visual" aria-hidden="true">
              <div className="visual-top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="visual-body">
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <p>{project.tagline}</p>
              </div>
            </div>
            <div className="project-content">
              <span className="project-kicker">{project.highlight}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="feature-grid">
                {project.features.map((feature) => (
                  <span key={feature}>
                    <icons.CheckCircle2 size={15} /> {feature}
                  </span>
                ))}
              </div>
              <div className="tag-list">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a className="button secondary" href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub <icons.Github size={16} />
                </a>
                <a className="button ghost" href={project.links.live} target="_blank" rel="noreferrer">
                  Live Demo <icons.ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
