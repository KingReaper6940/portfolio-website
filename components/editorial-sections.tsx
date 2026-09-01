import Link from "next/link"
import { ArrowRight, ArrowUpRight, Github } from "lucide-react"

const experiences = [
  {
    index: "00",
    period: "AUG 2026 — PRESENT · INAUGURAL PILOT",
    title: "AI Expert Advisor Fellow",
    company: "Perplexity AI",
    description:
      "Deploying Perplexity Computer with local businesses: finding operational bottlenecks, connecting tools and data, automating recurring work, and training owners to run the workflows independently.",
    featured: true,
    href: "https://fellows.pplx.app/",
  },
  {
    index: "01",
    period: "AUG 2025 — DEC 2025",
    title: "Campus Ambassador",
    company: "Perplexity AI",
    description:
      "Led demos, workshops, and campus outreach for 500+ Penn State students, translating Perplexity into practical coursework, coding, and research workflows with 20%+ attendee activation.",
  },
  {
    index: "02",
    period: "JUN 2026 — AUG 2026",
    title: "AI/ML Engineer Intern",
    company: "KreupAI Technologies LLC",
    description:
      "Built on DaftarAI, an LLM copilot for accounting workflows—tracing request flow across the codebase and improving prompts, tool execution, integration reliability, and failure handling.",
  },
  {
    index: "03",
    period: "2024 — PRESENT",
    title: "Founder & Operator",
    company: "Independent E-commerce Venture",
    description:
      "Built an independent operation past $30K in revenue while managing sourcing, supplier relationships, pricing, fulfillment, and 35%+ profit margins.",
  },
]

const projects = [
  {
    index: "01",
    title: "MandatePass",
    subtitle: "Runtime authorization for AI agents",
    description:
      "A protocol for scoped user mandates, bound tokens, service metadata, and signed execution receipts—designed against impersonation, replay, excessive permissions, spoofing, and payment escalation.",
    tags: ["NEXT.JS", "FASTAPI", "POSTGRESQL", "MCP"],
    note: "AGENT AUTHORIZATION PROTOCOL",
    links: [],
  },
  {
    index: "02",
    title: "Cursor Prompt Enhancer + Speech",
    subtitle: "Better prompts and voice inside the editor",
    description:
      "Published extensions for structured prompt rewriting and Whisper-powered speech-to-text across VS Code and Cursor. Verified marketplace activity: 1,258 Prompt Enhancer downloads, 1,093 Speech downloads on Open VSX, and 1,496 Speech installs on VS Marketplace.",
    tags: ["TYPESCRIPT", "VS CODE API", "OPENAI", "WHISPER"],
    note: "3,847 VERIFIED DOWNLOADS / INSTALLS",
    links: [
      { label: "Prompt Enhancer", href: "https://open-vsx.org/extension/VrishnViswaSathyamoorthy/cursor-prompt-enhancer" },
      { label: "Speech / Open VSX", href: "https://open-vsx.org/extension/KingReaper96420/cursorforspeech" },
      { label: "Speech / VS Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=VrishnViswaSathyamoorthy.cursorforspeech" },
      { label: "Prompt code", href: "https://github.com/KingReaper6940/CursorEnhancer", icon: true },
      { label: "Speech code", href: "https://github.com/KingReaper96420/cursorforspeech", icon: true },
    ],
  },
  {
    index: "03",
    title: "Helios.ai",
    subtitle: "Extreme-weather early warning",
    description:
      "A multi-model AI dashboard that turns live weather signals into severity-ranked, source-linked alerts across Pennsylvania cities.",
    tags: ["GEMINI", "LEAFLET", "WEATHER DATA", "VERCEL"],
    note: "GOOGLE DEVELOPER HACKATHON",
    links: [
      { label: "Open project", href: "https://helios-ai-nine.vercel.app" },
      { label: "Source", href: "https://github.com/KingReaper6940/Helios.ai", icon: true },
    ],
  },
  {
    index: "04",
    title: "MoEscope",
    subtitle: "Making mixture-of-experts routing inspectable",
    description:
      "An inspectable MoE routing pipeline with invariant validation and deterministic expert histograms, including a real OLMoE routing event and an open systems journal.",
    tags: ["PYTHON", "PYTORCH", "OLMOE", "ASTRO / MDX"],
    note: "OPEN SYSTEMS JOURNAL",
    links: [
      { label: "Open project", href: "https://moescope.pages.dev/" },
      { label: "Source", href: "https://github.com/rishabhsai/moescope", icon: true },
    ],
  },
]

export function EditorialSections() {
  return (
    <>
      <section className="signal-strip" aria-label="Portfolio summary">
        <span>VVS / 2026</span>
        <p>Building where AI capability meets real human use.</p>
        <span>STATE COLLEGE · SHARJAH · CHENNAI</span>
      </section>

      <section id="experience" className="editorial-section experience-editorial">
        <div className="section-lead">
          <p className="section-index">01 / EXPERIENCE LOG</p>
          <h2>
            From model behavior
            <em>to business behavior.</em>
          </h2>
          <p>
            I like the messy middle: taking capable technology out of the demo,
            understanding the human system around it, and shipping the thing that sticks.
          </p>
        </div>

        <div className="experience-log">
          {experiences.map((experience) => (
            <article key={experience.index} className={experience.featured ? "is-featured" : undefined}>
              <div className="log-index">{experience.index}</div>
              <div className="log-copy">
                <div className="log-meta">
                  <span>{experience.period}</span>
                  {experience.featured && <span className="selected-tag">● SELECTED</span>}
                </div>
                <h3>{experience.title}</h3>
                <p className="log-company">{experience.company}</p>
                <p>{experience.description}</p>
                {experience.href && (
                  <a href={experience.href} target="_blank" rel="noreferrer">
                    Program details <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="editorial-section work-editorial">
        <div className="work-heading">
          <div>
            <p className="section-index">02 / SELECTED WORK</p>
            <h2>Proof, <em>not pitch decks.</em></h2>
          </div>
          <p>
            Four systems from the current résumé: agent authorization, editor-native AI,
            weather intelligence, and inspectable model routing.
          </p>
        </div>

        <div className="project-ledger">
          {projects.map((project) => (
            <article key={project.index}>
              <div className="project-topline">
                <span>PROJECT / {project.index}</span>
                <span>{project.note}</span>
              </div>
              <div className="project-body">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <p>{project.description}</p>
              </div>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.icon ? `${link.label} on GitHub` : undefined}
                      title={link.icon ? link.label : undefined}
                    >
                      {link.icon ? <Github size={17} /> : <>{link.label} <ArrowUpRight size={15} /></>}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link href="/projects" className="archive-link">
          View the full project archive <ArrowRight size={17} />
        </Link>
      </section>

      <section id="evidence" className="editorial-section evidence-section">
        <div className="evidence-heading">
          <p className="section-index">03 / OPERATING EVIDENCE</p>
          <h2>The numbers should <em>say something.</em></h2>
        </div>
        <div className="evidence-grid">
          <div><strong>02</strong><span>Concurrent degrees</span><p>Computer Science at Penn State and Data Science at IIT Madras.</p></div>
          <div><strong>$30K+</strong><span>Revenue operated</span><p>Built through independent e-commerce, supplier strategy, fulfillment, and margin discipline.</p></div>
          <div><strong>3,847</strong><span>Marketplace activity</span><p>Verified downloads and installs across the three extension listings linked above.</p></div>
          <div><strong>500+</strong><span>Students reached</span><p>AI demos, workshops, and activations across the Penn State community.</p></div>
        </div>
      </section>

      <footer id="contact" className="editorial-footer">
        <div>
          <p className="section-index">04 / OPEN CHANNEL</p>
          <h2>Have a difficult thing <em>worth building?</em></h2>
        </div>
        <div className="footer-action">
          <p>
            I&apos;m open to ambitious AI work, product collaborations, and field problems
            that deserve a thoughtful system.
          </p>
          <a href="mailto:Vms5663@psu.edu">Start a conversation <ArrowUpRight size={17} /></a>
        </div>
        <div className="footer-base">
          <span>© 2026 VRISHN VISWA SATHYAMOORTHY</span>
          <div>
            <a href="https://github.com/KingReaper6940" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href="https://www.linkedin.com/in/vrishn-viswa-sathyamoorthy-5bb930281/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            <a href="https://x.com/vrishnviswa" target="_blank" rel="noreferrer">X ↗</a>
          </div>
        </div>
      </footer>
    </>
  )
}
