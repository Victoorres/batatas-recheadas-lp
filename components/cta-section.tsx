"use client"

import { Button } from "@/components/ui/button"

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
    <section className={`py-16 ${bgColors[backgroundColor]}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {urgent && "⚠️ "}
            {title}
          </h2>

          {subtitle && <p className="text-xl mb-8 text-gray-200">{subtitle}</p>}

          <Button
            size="lg"
            className={`${
              urgent ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-green-500 hover:bg-green-600"
            } text-white font-bold text-sm sm:text-base md:text-xl lg:text-2xl px-3 sm:px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto min-h-[4rem] md:min-h-[5rem]`}
            onClick={() => window.open(buttonLink, "_blank")}
          >
            <span className="text-center leading-tight break-words hyphens-auto flex-1">👉 {buttonText}</span>
          </Button>

          <p className="text-sm text-gray-300 mt-6">🔒 Acesso 100% seguro • Resultados garantidos</p>
        </div>
      </div>
    </section>
  )
}
