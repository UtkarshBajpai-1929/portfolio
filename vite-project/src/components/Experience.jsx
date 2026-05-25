import { icons } from './icons'
import { Section } from './Section'

export function Experience({ experience, beyondTech }) {
  return (
    <Section id="experience" eyebrow="Leadership" title="Experience & Leadership">
      <div className="experience-grid">
        <article className="experience-card">
          <div className="card-icon">
            <icons.BriefcaseBusiness size={20} />
          </div>
          <span>{experience.title}</span>
          <p>{experience.description}</p>
        </article>

        <article className="beyond-card">
          <span>Beyond Tech</span>
          <div>
            {beyondTech.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </article>
      </div>
    </Section>
  )
}
