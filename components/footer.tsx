"use client"

import { Mail, Download } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [showToast, setShowToast] = useState(false)

  const copyEmailToClipboard = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const email = "Vms5663@psu.edu"

    try {
      await navigator.clipboard.writeText(email)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <footer id="contact" className="bg-black text-white py-16 md:py-20 relative">
      {/* Toast Notification */}
      <div
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="bg-white text-black px-6 py-4 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border-2 border-black flex items-center gap-3 animate-bounce-subtle">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-semibold text-sm md:text-base">Copied to clipboard! ✨</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {"Let's"} build something <span className="text-[#6366F1]">amazing</span> together
          </h2>
          <p className="text-white/70 mb-10 text-base md:text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? {"I'm"} always open to discussing new opportunities and ideas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={copyEmailToClipboard}
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-[#6366F1] hover:text-white hover:scale-105 transition-all cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </button>
            <a
              href="/Vrishn%20Viswa%20Resume.pdf"
              download="Vrishn Viswa Resume.pdf"
              className="group flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black hover:scale-105 transition-all no-underline"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          <p className="text-white/50 text-sm mb-6">Or find me on social</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/KingReaper6940"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white hover:scale-125 transition-all no-underline"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vrishn-viswa-sathyamoorthy-5bb930281/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white hover:scale-125 transition-all no-underline"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://x.com/vrishnviswa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white hover:scale-125 transition-all no-underline"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a
              href="mailto:Vms5663@psu.edu"
              className="text-white/60 hover:text-white hover:scale-125 transition-all no-underline"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>© 2025 Vrishn Viswa Sathyamoorthy</p>
        </div>
      </div>
    </footer>
  )
}
