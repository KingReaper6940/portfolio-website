"use client"

import { Mail, Code, Brain, Database, Rocket, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Building AI-powered applications using GPT-4, OpenAI Whisper, and RAG patterns for intelligent automation and research tools.",
      icon: Brain,
      gradient: "from-violet-500 via-purple-500 to-indigo-600",
      glowColor: "shadow-violet-500/50",
    },
    {
      title: "Full-Stack Development",
      description: "Creating modern web applications with Next.js, React, TypeScript, and cloud platforms like Vercel and AWS.",
      icon: Code,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "shadow-blue-500/50",
    },
    {
      title: "Data Science",
      description: "Analyzing complex datasets and building data pipelines with Python, processing 50+ daily sources with 92%+ accuracy.",
      icon: Database,
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      glowColor: "shadow-emerald-500/50",
    },
    {
      title: "Product Development",
      description: "End-to-end product lifecycle management from ideation to deployment, with published extensions on VS Code Marketplace.",
      icon: Rocket,
      gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
      glowColor: "shadow-rose-500/50",
    },
    {
      title: "E-commerce & Business",
      description: "Strategic market research, supplier management, and scaling ventures to $30,000+ revenue with optimized profit margins.",
      icon: ShoppingCart,
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "shadow-amber-500/50",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 md:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My <span className="bg-gradient-to-r from-pink-500 via-red-500 to-rose-600 text-transparent bg-clip-text inline-block relative">
                technical skills
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-rose-600 opacity-20 blur-xl"></span>
              </span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              From AI development to full-stack engineering, I bring a diverse toolkit
              to build innovative solutions that make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 p-8 flex flex-col hover:shadow-2xl hover:border-gray-300/50"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  {/* Icon with gradient background */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${service.glowColor} group-hover:shadow-2xl`}>
                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                  </div>

                  <h3 className="text-[24px] leading-[32px] font-bold mb-3 text-[#0B0B0B] relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-[16px] leading-[26px] font-medium text-[#393939] relative z-10">
                    {service.description}
                  </p>

                  {/* Bottom gradient accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              )
            })}

            {/* Call to action card with enhanced styling */}
            <div className="group relative bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:translate-y-[-8px] transition-all duration-500 shadow-2xl hover:shadow-yellow-500/50 overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 via-transparent to-orange-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated pulse rings */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/30 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>

              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-xl relative z-10">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-[24px] leading-[32px] font-bold mb-4 text-[#0B0B0B] relative z-10">
                Let's collaborate
              </h3>
              <p className="text-[16px] leading-[26px] font-medium text-[#393939] mb-6 relative z-10">
                Have an interesting project or opportunity? I'd love to hear about it!
              </p>

              <a href="mailto:Vms5663@psu.edu" className="w-full relative z-10">
                <Button className="bg-black text-white hover:bg-gray-900 hover:scale-105 rounded-2xl px-8 py-4 font-medium text-[16px] w-full transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
