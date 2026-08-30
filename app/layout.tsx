import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://vrishnviswa.com"),
  title: "Vrishn Viswa — AI Systems & Product Engineering",
  description: "Vrishn Viswa builds AI systems, products, and field deployments — including work as a Perplexity AI Expert Advisor Fellow.",
  openGraph: {
    title: "Vrishn Viswa — AI Systems & Product Engineering",
    description: "AI systems · product engineering · field deployment",
    url: "https://vrishnviswa.com",
    siteName: "Vrishn Viswa",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vrishn Viswa — AI systems, product engineering, and field deployment" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrishn Viswa — AI Systems & Product Engineering",
    description: "AI systems · product engineering · field deployment",
    images: ["/og.png"],
  },
  icons: {
    icon: "/vvs-logo.jpg",
    shortcut: "/vvs-logo.jpg",
    apple: "/vvs-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
