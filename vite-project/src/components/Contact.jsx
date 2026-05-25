import { useState } from 'react'
import { icons } from './icons'
import { Section } from './Section'

export function Contact({ data }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(data.socials.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Section
      id="contact"
      eyebrow="Next step"
      title="Contact"
      description="For internship conversations, project discussions, or software engineering opportunities."
    >
      <div className="contact-card">
        <div>
          <h3>Let’s build useful software.</h3>
          <p>{data.socials.email}</p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${data.socials.email}`}>
            Email <icons.Mail size={16} />
          </a>
          <button className="button secondary" type="button" onClick={copyEmail}>
            {copied ? 'Copied' : 'Copy Email'} <icons.Copy size={16} />
          </button>
          <a className="button ghost" href={data.socials.github} target="_blank" rel="noreferrer">
            GitHub <icons.Github size={16} />
          </a>
          <a className={`button ghost ${data.socials.linkedin ? '' : 'disabled'}`} href={data.socials.linkedin || '#contact'}>
            LinkedIn <icons.Linkedin size={16} />
          </a>
          <a className="button ghost" href={data.resume} download>
            Resume <icons.Download size={16} />
          </a>
        </div>
      </div>
    </Section>
  )
}
