"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
// Removed ArrowRight import

interface CallToActionProps {
  text: string
  link: string
  className?: string
  icon?: React.ReactNode
  animatePulse?: boolean // New prop for animation
}

export function CallToAction({ text, link, className, icon, animatePulse = false }: CallToActionProps) {
  return (
    <Button
      size="lg"
      className={`
        bg-green-500 hover:bg-green-600 text-white font-bold 
        text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 
        py-5 md:py-8 rounded-full shadow-2xl 
        hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 
        w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto min-h-[3.5rem] md:min-h-[4.5rem] 
        ${animatePulse ? "animate-pulse" : ""} 
        ${className}
      `}
      onClick={() => window.open(link, "_blank")}
    >
      <span className="text-center leading-tight break-words flex-1">👉 {text}</span>
      {icon} {/* Removed ArrowRight icon, now only renders custom icon if provided */}
    </Button>
  )
}
