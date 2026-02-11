"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function LogoMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollerInnerRef = useRef<HTMLDivElement>(null)

  // Only logos
  const items = [
    { src: "/logos/perplexity.png", alt: "Perplexity AI", isPerplexity: true },
    { src: "/amd-header-logo.svg", alt: "AMD" },
    { src: "/logos/etsy-logo.png", alt: "Etsy", isEtsy: true },
  ]

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return

    const scrollerContent = Array.from(scrollerInnerRef.current.children)

    // Clone items for seamless loop
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerInnerRef.current?.appendChild(duplicatedItem)
    })

    scrollerRef.current.setAttribute("data-animated", "true")
  }, [])

  return (
    <div className="overflow-hidden w-full">
      {/* Super wide container to prevent cutoff on rotated element */}
      <div
        ref={scrollerRef}
        className="scroller relative overflow-hidden bg-black py-6 -rotate-[5deg] mt-32 mb-16"
        style={{
          width: '300vw',
          marginLeft: '-100vw',
          marginRight: '-100vw',
        }}
        data-animated="false"
      >
        <div
          ref={scrollerInnerRef}
          className="scroller-inner flex items-center gap-16 py-2"
          style={{
            animation: 'scroll 30s linear infinite',
          }}
        >
          {/* Render items multiple times for wider coverage */}
          {[...Array(5)].map((_, setIndex) =>
            items.map((item, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center flex-shrink-0 px-4"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt || ""}
                  width={item.isPerplexity || item.isEtsy ? 80 : 48}
                  height={item.isPerplexity || item.isEtsy ? 80 : 48}
                  className={`${item.isPerplexity || item.isEtsy ? 'h-14 md:h-16' : 'h-10'} w-auto hover:scale-110 transition-transform cursor-pointer ${item.isEtsy ? 'rounded-lg' : ''}`}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        
        .scroller-inner {
          width: max-content;
        }
      `}</style>
    </div>
  )
}
