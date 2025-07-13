"use client"

import Image from "next/image"
import { CallToAction } from "@/components/call-to-action"

interface ContentItem {
  type: "text" | "image" | "icon"
  src?: string // For image/icon
  alt?: string // For image/icon
  title: string
  description: string
}

interface DetailedCourseContentProps {
  title: string
  items: ContentItem[]
  ctaText: string
  ctaLink: string
}

export function DetailedCourseContent({ title, items, ctaText, ctaLink }: DetailedCourseContentProps) {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 sm:gap-6 bg-gray-900 p-5 sm:p-6 rounded-xl border border-gray-800"
            >
              {item.type === "image" && item.src && (
                <div className="relative w-20 h-24 sm:w-24 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt || item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {item.type === "icon" && item.src && (
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-full flex items-center justify-center">
                  <Image src={item.src || "/placeholder.svg"} alt={item.alt || item.title} width={60} height={60} />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <CallToAction text={ctaText} link={ctaLink} />
        </div>
      </div>
    </section>
  )
}
