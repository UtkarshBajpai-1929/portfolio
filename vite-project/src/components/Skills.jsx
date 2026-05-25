import { motion } from 'framer-motion'
import { icons } from './icons'
import { Section } from './Section'

export function Skills({ skills }) {
  return (
    <Section
      id="skills"
      eyebrow="Technical toolkit"
      title="Skills"
      description="A practical stack for full stack applications, backend APIs, authentication systems, and scalable product thinking."
    >
      <div className="skills-grid">
        {skills.map((group, index) => {
          const Icon = icons[group.icon]
          return (
            <motion.article
              className="skill-card"
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
            >
              <div className="card-icon">{Icon && <Icon size={20} />}</div>
              <h3>{group.category}</h3>
              <div className="tag-list">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
