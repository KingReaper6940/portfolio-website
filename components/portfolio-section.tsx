"use client"

import { ArrowRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function PortfolioSection() {
  const projects = [
    {
      title: "Helios.ai — Extreme Weather Early-Warning Dashboard",
      description:
        "Built at the Google Developer Hackathon — an AI-powered early-warning dashboard for SDG 13.1 (Climate Action). Features an interactive Leaflet terrain map with risk-colored markers, 3-model AI consensus (Helios, NOAA HRRR, ECMWF-IFS), severity-ranked smart alerts, and real-time multi-city support for State College, Pittsburgh, and Philadelphia. Uses Gemini via a secure Vercel serverless proxy.",
      tag: "🏆 Google Developer Hackathon",
      bgColor: "bg-[#10B981]",
      github: "https://github.com/KingReaper6940/Helios.ai",
      live: "https://helios-ai-nine.vercel.app",
      liveText: "View Live Dashboard",
    },
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
      title: "Terminal Arcade",
      description:
        "Built at HackPSU Spring 2026 — a multiplayer game platform that runs entirely over SSH. 9 playable games including Snake, Tetris, Minesweeper, and AI-powered games by Google Gemini. Zero friction: no install, no browser, no signup — just SSH and play. Built in Go with the Charmbracelet ecosystem.",
      tag: "🎮 HackPSU Spring 2026",
      bgColor: "bg-[#F59E0B]",
      github: "https://github.com/rishabhsai/terminalgames",
      live: "https://devpost.com/software/terminal-games-8onpsk",
      liveText: "View on Devpost",
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
