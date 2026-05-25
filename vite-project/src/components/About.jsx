import { Section } from './Section'

export function About({ about }) {
  return (
    <Section id="about" eyebrow="Profile" title="About Me">
      <div className="about-grid">
        <div className="about-copy">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="principles">
          {['Learn by building', 'Think in systems', 'Ship useful work'].map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
