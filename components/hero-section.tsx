import Image from "next/image"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <p className="kicker">AI systems · product engineering · field deployment</p>
        <h1>
          I build the system.
          <em>Then make it useful.</em>
        </h1>
        <p className="hero-intro">
          I&apos;m Vrishn Viswa — a computer science student, AI builder, and operator
          working between Penn State and IIT Madras.
        </p>
        <div className="hero-actions">
          <a href="#portfolio"><span aria-hidden="true" /> See selected work <ArrowDownRight size={16} /></a>
          <a href="/VVS%20resume.pdf" download><span aria-hidden="true" /> Read my résumé <ArrowUpRight size={16} /></a>
        </div>
        <nav className="hero-socials" aria-label="Contact and social links">
          <a href="mailto:vms5663@psu.edu">Email <ArrowUpRight size={13} /></a>
          <a href="https://www.linkedin.com/in/vrishn-viswa-sathyamoorthy-5bb930281" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          <a href="https://github.com/KingReaper6940" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
          <a href="https://x.com/vrishnviswa" target="_blank" rel="noreferrer">X <ArrowUpRight size={13} /></a>
        </nav>
      </div>

      <aside className="hero-field-note" aria-label="Current field note">
        <div className="field-note-head">
          <span>FIELD NOTE / 001</span>
          <span className="signal"><i aria-hidden="true" /> SELECTED</span>
        </div>
        <div className="field-note-image">
          <Image src="/images/vrishn-hero.jpg" alt="Vrishn Viswa" fill priority sizes="(max-width: 800px) 100vw, 42vw" className="object-cover grayscale" />
          <span>UNIVERSITY PARK / PA</span>
        </div>
        <div className="fellowship-note">
          <div className="fellowship-mark" aria-hidden="true">
            <Image src="/logos/perplexity-symbol-color-dark.svg" alt="" width={54} height={54} />
          </div>
          <div>
            <p>Perplexity AI · Inaugural pilot cohort</p>
            <h2>AI Expert Advisor Fellow</h2>
            <p className="fellowship-description">
              Selected to deploy Perplexity Computer with real small businesses — turning operational pain points into durable AI workflows, then teaching owners to run them independently.
            </p>
            <a href="https://fellows.pplx.app/" target="_blank" rel="noreferrer">View the fellowship <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="field-stats">
          <div><strong>06</strong><span>WEEKS / FIELD</span></div>
          <div><strong>1–3</strong><span>BUSINESSES</span></div>
          <div><strong>2026</strong><span>PILOT COHORT</span></div>
        </div>
      </aside>
    </section>
  )
}
