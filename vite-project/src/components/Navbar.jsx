import { useEffect, useState } from 'react'
import { icons } from './icons'

export function Navbar({ navItems, initials }) {
  const [active, setActive] = useState(navItems[0].id)
  const [open, setOpen] = useState(false)
  const MenuIcon = open ? icons.X : icons.Menu

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActive(visible.target.id)
        }
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: [0.1, 0.25, 0.5, 0.75] },
    )

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [navItems])

  return (
    <header className="nav-shell">
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Go to home">
          <span>{initials}</span>
        </a>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className={active === item.id ? 'active' : ''}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="icon-button menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          <MenuIcon size={18} />
        </button>
      </nav>
    </header>
  )
}
