import Image from "next/image"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <h1>Vrishn Viswa</h1>
        <p className="hero-intro">
          I&apos;m an AI builder and dual-degree student based in State College. I work
          across agent infrastructure, developer tools, and the last mile between a
          capable model and a product people can actually use.
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

      <aside className="hero-now" aria-label="What I am doing now">
        <div className="hero-now-head">
          <h2>Now</h2>
          <span>STATE COLLEGE, PA</span>
        </div>
        <div className="hero-now-body">
          <div className="fellowship-mark" aria-hidden="true">
            <Image src="/logos/perplexity-symbol-color-dark.svg" alt="" width={54} height={54} />
          </div>
          <div>
            <h3>AI Expert Advisor Fellow</h3>
            <p>
              Deploying Perplexity Computer with local businesses and turning real
              operational bottlenecks into durable AI workflows.
            </p>
            <a href="https://fellows.pplx.app/" target="_blank" rel="noreferrer">View the fellowship <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </aside>
    </section>
  )
}
