import { Mail, Code, Brain, Database, Rocket, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Building AI-powered applications using GPT-4, OpenAI Whisper, and RAG patterns for intelligent automation and research tools.",
      icon: Brain,
      color: "bg-[#6366F1]",
    },
    {
      title: "Full-Stack Development",
      description: "Creating modern web applications with Next.js, React, TypeScript, and cloud platforms like Vercel and AWS.",
      icon: Code,
      color: "bg-[#2F81F7]",
    },
    {
      title: "Data Science",
      description: "Analyzing complex datasets and building data pipelines with Python, processing 50+ daily sources with 92%+ accuracy.",
      icon: Database,
      color: "bg-[#10B981]",
    },
    {
      title: "Product Development",
      description: "End-to-end product lifecycle management from ideation to deployment, with published extensions on VS Code Marketplace.",
      icon: Rocket,
      color: "bg-[#FF6B7A]",
    },
    {
      title: "E-commerce & Business",
      description: "Strategic market research, supplier management, and scaling ventures to $30,000+ revenue with optimized profit margins.",
      icon: ShoppingCart,
      color: "bg-[#F59E0B]",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">technical skills</span>
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
                  className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-8 flex flex-col group"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[24px] leading-[32px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[16px] leading-[26px] font-medium text-[#393939]">{service.description}</p>
                </div>
              )
            })}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[24px] leading-[32px] font-bold mb-4 text-[#0B0B0B]">Let's collaborate</h3>
              <p className="text-[16px] leading-[26px] font-medium text-[#393939] mb-6">
                Have an interesting project or opportunity? I'd love to hear about it!
              </p>
              <a href="mailto:Vms5663@psu.edu" className="w-full">
                <Button className="bg-black text-white hover:bg-black/90 hover:scale-105 rounded-[16px] px-8 py-4 font-medium text-[16px] w-full transition-all">
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
