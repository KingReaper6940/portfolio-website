import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/vrishn-profile.jpeg"
              alt="About Vrishn Viswa"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's behind all this <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">innovation?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              I'm Vrishn Viswa Sathyamoorthy, a computer science student passionate about building
              AI-powered solutions and entrepreneurial ventures. Currently pursuing dual degrees
              at Penn State and IIT Madras.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">$30,000+ in E-commerce Revenue</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Founded and scaled an independent e-commerce venture with 35%+ profit margins
                  through strategic market research and supplier negotiations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Published AI Tools</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Built and published VS Code/Cursor extensions with 360+ downloads, including
                  AI-powered prompt enhancers and voice-to-text coding functionality.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#20B8CD] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Perplexity AI Campus Activator</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Selected to represent Perplexity AI at Penn State, hosting events and driving adoption
                  of AI-powered search tools among 500+ engineering and CS students.
                </p>
              </div>
            </div>
          </div>

          <a href="mailto:Vms5663@psu.edu">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 hover:scale-105 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] transition-all">
              <User className="w-5 h-5" />
              Get in touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
