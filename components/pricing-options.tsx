"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Sparkles, XCircle } from "lucide-react"
import { CallToAction } from "@/components/call-to-action"

interface BenefitItem {
  text: string
  included: boolean
}

interface PackageOption {
  name: string
  tag?: string
  originalPrice: string
  currentPrice: string
  benefits: BenefitItem[]
  ctaText: string
  ctaLink: string
  highlight?: boolean
}

interface PricingOptionsProps {
  title: string
  options: PackageOption[]
}

export function PricingOptions({ title, options }: PricingOptionsProps) {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {options.map((option, index) => (
            <Card
              key={index}
              className={`
                relative p-6 sm:p-8 rounded-3xl shadow-xl transition-all duration-300
                flex flex-col min-h-[600px] sm:min-h-[650px] md:min-h-[700px] mt-4 md:mt-0
                ${
                  option.highlight
                    ? "bg-gradient-to-br from-gray-950 to-black border-4 border-yellow-500 shadow-2xl shadow-yellow-500/60 transform scale-105 z-20" // Premium highlight
                    : "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-yellow-400 z-10"
                }
              `}
            >
              {option.tag && (
                <div
                  className={`
                    absolute -top-4 left-1/2 -translate-x-1/2 
                    ${option.highlight ? "bg-yellow-400 text-black" : "bg-green-500 text-white"}
                    text-sm sm:text-lg font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg uppercase tracking-wide
                    flex items-center gap-2
                  `}
                >
                  {option.highlight && <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
                  {option.tag}
                </div>
              )}
              <div className="p-0 text-center flex-1 flex flex-col">
                <h3
                  className={`
                    text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 mt-6
                    ${option.highlight ? "text-yellow-300" : "text-white"}
                  `}
                >
                  {option.name}
                </h3>
                <div
                  className={`
                    text-lg sm:text-xl line-through mb-2
                    ${option.highlight ? "text-gray-400" : "text-gray-400"}
                  `}
                >
                  {option.originalPrice}
                </div>
                <div
                  className={`
                    text-6xl sm:text-7xl md:text-7xl font-black mb-4 sm:mb-6
                    ${option.highlight ? "text-green-400" : "text-green-400"}
                  `}
                >
                  {option.currentPrice}
                </div>

                <ul className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1 overflow-y-auto pr-2">
                  {option.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-3">
                      {benefit.included ? (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <span
                        className={
                          benefit.included
                            ? "text-gray-200 text-sm sm:text-base"
                            : "text-gray-400 line-through text-sm sm:text-base"
                        }
                      >
                        {benefit.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <CallToAction
                    text={option.ctaText}
                    link={option.ctaLink}
                    className={`${
                      option.highlight
                        ? "bg-green-600 hover:bg-green-700 text-white animate-pulse"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                    animatePulse={option.highlight}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
