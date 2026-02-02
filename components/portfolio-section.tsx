import { ArrowRight } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Cursor Prompt Enhancer",
      description:
        "Published VS Code/Cursor extension suite with 360+ downloads on Open VSX. Uses AI to refine developer prompts in real-time with 4.8+ star rating.",
      tag: "Published Product",
      bgColor: "bg-[#6366F1]",
      link: "https://open-vsx.org/extension/VrishnViswaSathyamoorthy/cursor-prompt-enhancer",
      linkText: "View on Open VSX",
    },
    {
      title: "Aura - Mental Health Chatbot",
      description:
        "Award-winning mental health assistant chatbot that won 1st place for innovation at a competitive hackathon. Uses AI to provide empathetic, supportive conversations and mental wellness resources.",
      tag: "Hackathon Winner",
      bgColor: "bg-[#FF6B7A]",
      link: "https://github.com/KingReaper6940/Aura",
      linkText: "View on GitHub",
    },
    {
      title: "AI Research Assistant",
      description:
        "Built an AI-powered research agent using Retrieval-Augmented Generation (RAG) patterns for autonomous information gathering. Processes 50+ daily news sources with 92%+ relevance accuracy using GPT-4.",
      tag: "AI/ML Project",
      bgColor: "bg-[#2F81F7]",
      link: "https://github.com/KingReaper6940",
      linkText: "View on GitHub",
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">projects</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${project.bgColor} border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all p-8 md:p-12`}
            >
              <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                {project.tag}
              </span>

              <h3 className="text-xl md:text-[32px] font-bold mb-4 leading-tight md:leading-[40px] text-black">
                {project.title}
              </h3>

              <p className="text-base md:text-[18px] text-black/80 mb-8 leading-relaxed md:leading-[30px] font-medium max-w-2xl">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-black hover:gap-3 transition-all text-sm md:text-base group/link bg-black/10 hover:bg-black/20 px-5 py-3 rounded-full"
              >
                {project.linkText}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/KingReaper6940"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 hover:scale-105 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              View all projects on GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
