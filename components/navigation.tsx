"use client"

import React from "react"
import Image from "next/image"

export function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "top")}
          className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 hover:scale-110 transition-transform"
        >
          <Image
            src="/vvs-logo.jpg"
            alt="VVS Logo"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </a>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, "top")}
            className="relative text-[18px] font-bold leading-[20px] group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, "about")}
            className="relative text-[18px] font-bold leading-[20px] group"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => scrollToSection(e, "portfolio")}
            className="relative text-[18px] font-bold leading-[20px] group"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a 
            href="#experience" 
            onClick={(e) => scrollToSection(e, "experience")}
            className="relative text-[18px] font-bold leading-[20px] group"
          >
            Experience
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </div>

        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, "contact")}
          className="relative bg-black text-white hover:bg-black/80 rounded-lg px-5 py-3 font-semibold text-sm transition-all hover:scale-105 overflow-hidden group"
        >
          <span className="relative z-10">Contact</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
      </nav>
    </div>
  )
}
