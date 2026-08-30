"use client"

import React from "react"

export function Navigation() {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={(event) => scrollToSection(event, "top")}>
          vrishn<span>viswa</span>
        </a>
        <div className="nav-links">
          <a href="#experience" onClick={(event) => scrollToSection(event, "experience")}>
            01 / Experience
          </a>
          <a href="#portfolio" onClick={(event) => scrollToSection(event, "portfolio")}>
            02 / Work
          </a>
          <a href="#contact" onClick={(event) => scrollToSection(event, "contact")}>
            03 / Contact
          </a>
        </div>
        <a className="availability" href="mailto:Vms5663@psu.edu">
          <span aria-hidden="true" /> Open to build
        </a>
      </nav>
    </header>
  )
}
