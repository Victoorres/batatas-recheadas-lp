"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  logoSrc?: string
  backgroundImage?: string
}

export function HeroSection({ title, subtitle, ctaText, ctaLink, logoSrc, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {logoSrc && (
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-yellow-300 overflow-hidden">
              <Image src={logoSrc || "/placeholder.svg"} alt="Logo" width={80} height={80} className="object-cover" />
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div className="w-32 h-1 bg-yellow-400 mx-auto" />

        <p className="text-xl md:text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: subtitle }} />

        <div className="pt-8">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl px-6 md:px-12 py-4 md:py-6 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto"
            onClick={() => window.open(ctaLink, "_blank")}
          >
            <span className="text-center leading-tight">👉 {ctaText}</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
