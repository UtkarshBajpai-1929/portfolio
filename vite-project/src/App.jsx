import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { portfolio } from './data/portfolio'

function App() {
  return (
    <>
      <Navbar navItems={portfolio.navItems} initials={portfolio.initials} />
      <main>
        <Hero data={portfolio} />
        <About about={portfolio.about} />
        <Education education={portfolio.education} />
        <Skills skills={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <Experience experience={portfolio.experience} beyondTech={portfolio.beyondTech} />
        <Contact data={portfolio} />
      </main>
      <footer>
        <span>{portfolio.name}</span>
        <span>Built for software engineering internship recruiters.</span>
      </footer>
    </>
  )
}

export default App
