import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Jan 2026 - Present",
      title: "Campus Activator",
      company: "Perplexity AI",
      description:
        "Hosting events and representing Perplexity at Penn State this semester. Executing targeted campus outreach to drive adoption of Perplexity's AI-powered search platform among 500+ engineering and CS students, converting 20%+ of attendees to active users.",
      icon: "/images/perplexity-icon.png",
      showIcon: true,
    },
    {
      period: "2025",
      title: "AI Academy Student",
      company: "AMD",
      description:
        "Selected to join AMD's exclusive AI Academy program, gaining hands-on experience with cutting-edge AI/ML technologies. Learning directly from industry professionals about GPU-accelerated computing, deep learning optimization, and real-world AI deployment strategies.",
      icon: "/amd-header-logo.svg",
      showIcon: true,
    },
    {
      period: "2024 - Present",
      title: "Founder & Operator",
      company: "Independent E-commerce Venture",
      description:
        "Founded and scaled an e-commerce venture from concept to $30,000+ in revenue, managing end-to-end operations. Established supplier relationships with 10+ vendors, reducing cost-per-unit by 20%+ while maintaining 35%+ profit margins.",
      icon: null,
      showIcon: false,
    },
  ]

  return (
    <section id="experience" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              From founding e-commerce ventures to representing AI companies on campus, I bring a unique blend of entrepreneurial
              spirit and technical expertise to every project.
            </p>
            <a href="/Vrishn%20Viswa%20Resume.pdf" download="Vrishn Viswa Resume.pdf">
              <Button className="bg-white text-black hover:bg-gray-100 hover:scale-105 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] transition-all">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px] hover:shadow-[8px_8px_0px_0px_rgba(99,102,241,1)] hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  {exp.showIcon && exp.icon && (
                    <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-black">
                      <Image
                        src={exp.icon || "/placeholder.svg"}
                        alt={exp.title}
                        width={48}
                        height={48}
                        className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
                      />
                    </div>
                  )}
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#6366F1] font-semibold text-base mb-2">{exp.company}</p>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[28px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
