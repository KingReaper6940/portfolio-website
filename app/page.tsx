import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EditorialSections } from "@/components/editorial-sections"

export default function Home() {
  return (
    <main className="site-shell">
      <Navigation />
      <HeroSection />
      <EditorialSections />
    </main>
  )
}
