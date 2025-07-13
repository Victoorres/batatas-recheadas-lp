"use client"

import { CallToAction } from "@/components/call-to-action"
import { Badge } from "@/components/ui/badge"
import { Lock, ShieldCheck, HeartHandshake } from "lucide-react"

interface PricingSectionProps {
  originalPrice: string
  currentPrice: string
  ctaText: string
  ctaLink: string
  badgeText?: string
}

export function PricingSection({ originalPrice, currentPrice, ctaText, ctaLink, badgeText }: PricingSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badgeText && (
          <Badge className="bg-red-600 text-white text-base sm:text-lg px-3 py-1.5 mb-4 sm:mb-6">{badgeText}</Badge>
        )}

        <div className="mb-6 sm:mb-8">
          <div className="text-gray-600 text-2xl sm:text-3xl line-through mb-2">De {originalPrice}</div>
          <div className="text-5xl sm:text-6xl md:text-8xl font-bold text-green-600 mb-3">{currentPrice}</div>
          <div className="text-base sm:text-xl text-gray-700">Pagamento único • Acesso imediato</div>
        </div>

        <CallToAction text={ctaText} link={ctaLink} />

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6 sm:mt-8 text-gray-600 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Satisfação Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Privacidade Protegida</span>
          </div>
        </div>
      </div>
    </section>
  )
}
