"use client"

import { CallToAction } from "@/components/call-to-action"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-16">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {logoSrc && (
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-yellow-300 overflow-hidden">
              <Image src={logoSrc || "/placeholder.svg"} alt="Logo" width={100} height={100} className="object-cover" />
            </div>
          </div>
        )}

        <div className="space-y-3 sm:space-y-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <div className="w-24 h-1 sm:w-32 bg-yellow-400 mx-auto" />

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <div className="pt-2 sm:pt-2">
          <CallToAction text={ctaText} link={ctaLink} />
        </div>

        <div className="mt-6 sm:mt-8 text-sm sm:text-lg text-gray-200 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
            <span>Dicas de venda e precificação</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
            <span>Cardápios variados e lucrativos</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
            <span>Faturar mais com menos esforço</span>
          </div>
          <div className="text-yellow-400 font-bold mt-4">Tudo isso por apenas R$7,00!</div>
        </div>
      </div>
    </section>
  )
}
