"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingSectionProps {
  originalPrice: string
  currentPrice: string
  ctaText: string
  ctaLink: string
  badgeText?: string
}

export function PricingSection({ originalPrice, currentPrice, ctaText, ctaLink, badgeText }: PricingSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {badgeText && <Badge className="bg-red-600 text-white text-lg px-4 py-2 mb-6">{badgeText}</Badge>}

        <div className="mb-8">
          <div className="text-gray-600 text-3xl line-through mb-4">De {originalPrice}</div>
          <div className="text-6xl md:text-8xl font-bold text-green-600 mb-4">{currentPrice}</div>
          <div className="text-xl text-gray-700">Pagamento único • Acesso imediato</div>
        </div>

        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-2xl px-6 md:px-16 py-6 md:py-8 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 w-full max-w-lg mx-auto"
          onClick={() => window.open(ctaLink, "_blank")}
        >
          <span className="text-center leading-tight">👉 {ctaText}</span>
        </Button>
      </div>
    </section>
  )
}
