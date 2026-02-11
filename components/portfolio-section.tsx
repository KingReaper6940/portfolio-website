"use client"

import { ArrowRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function PortfolioSection() {
  const projects = [
    {
      title: "Cursor Prompt Enhancer",
      description:
        "Published VS Code/Cursor extension suite with 380+ downloads on Open VSX. Uses AI to refine developer prompts in real-time with 4.8+ star rating.",
      tag: "Published Product",
      bgColor: "bg-[#8B5CF6]",
      github: "https://github.com/KingReaper6940/CursorEnhancer",
      live: "https://open-vsx.org/extension/VrishnViswaSathyamoorthy/cursor-prompt-enhancer",
      liveText: "View on Open VSX",
    },
    {
      title: "Project One",
      description:
        "My first commissioned project — a sleek, professional website built for a modern management company. Developed using Next.js and deployed on Vercel, delivering fast performance, responsive design, and a seamless user experience that effectively showcases the company's services and brand.",
      tag: "First Commissioned Project",
      bgColor: "bg-[#F59E0B]",
      github: "https://github.com/KingReaper6940/project-one",
      live: "https://project-one-j8f2-adqr6d70e-kingreaper6940s-projects.vercel.app/",
      liveText: "View Live Website",
    },
    {
      title: "AI Research Assistant",
      description:
        "Built an AI-powered research agent using Retrieval-Augmented Generation (RAG) patterns for autonomous information gathering. Processes 50+ daily news sources with 92%+ relevance accuracy using GPT-4.",
      tag: "AI/ML Project",
      bgColor: "bg-[#38BDF8]",
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

              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-black hover:gap-3 transition-all text-sm md:text-base bg-black/10 hover:bg-black/20 px-5 py-3 rounded-full"
                  >
                    View on GitHub
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-black hover:gap-3 transition-all text-sm md:text-base bg-white/40 hover:bg-white/60 px-5 py-3 rounded-full"
                  >
                    {project.liveText || "View Live Website"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="group bg-black text-white border-[3px] border-black rounded-full px-8 py-4 font-bold text-lg hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all inline-flex items-center gap-3"
          >
            View All My Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
