"use client"

import { Button } from "@/components/ui/button"
// Removed ArrowRight import

interface CTASectionProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonLink: string
  backgroundColor?: "green" | "red" | "yellow" | "black"
  urgent?: boolean
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundColor = "green",
  urgent = false,
}: CTASectionProps) {
  const bgColors = {
    green: "bg-gradient-to-r from-green-900 to-green-800",
    red: "bg-gradient-to-r from-red-900 to-red-800",
    yellow: "bg-gradient-to-r from-yellow-900 to-yellow-800",
    black: "bg-black",
  }

  return (
    <section className={`py-12 md:py-16 ${bgColors[backgroundColor]}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            {urgent && "⚠️ "}
            {title}
          </h2>

          {subtitle && <p className="text-base sm:text-xl mb-6 sm:mb-8 text-gray-200">{subtitle}</p>}

          <Button
            size="lg"
            className={`${
              urgent ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-green-500 hover:bg-green-600"
            } text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 py-5 md:py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto min-h-[3.5rem] md:min-h-[4.5rem]`}
            onClick={() => window.open(buttonLink, "_blank")}
          >
            <span className="text-center leading-tight break-words hyphens-auto flex-1">👉 {buttonText}</span>
            {/* Removed ArrowRight icon */}
          </Button>

          <p className="text-xs sm:text-sm text-gray-300 mt-4 sm:mt-6">🔒 Acesso 100% seguro • Resultados garantidos</p>
        </div>
      </div>
    </section>
  )
}
