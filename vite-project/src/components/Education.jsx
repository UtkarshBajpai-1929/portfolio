import { icons } from './icons'
import { Section } from './Section'

export function Education({ education }) {
  const facts = [
    ['Degree', education.degree],
    ['Branch', education.branch],
    ['CGPA', education.cgpa],
    ['Status', education.status],
    ['Goal', education.goal],
  ]

  return (
    <Section id="education" eyebrow="Academic foundation" title="Education">
      <div className="education-card">
        <div className="education-icon">
          <icons.GraduationCap size={26} />
        </div>
        <div>
          <h3>{education.institution}</h3>
          <p>Engineering foundation paired with a focused software development track.</p>
        </div>
        <div className="education-facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
