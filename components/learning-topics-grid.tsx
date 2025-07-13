"use client"

import Image from "next/image"

interface Topic {
  src: string
  alt: string
  title: string
}

interface LearningTopicsGridProps {
  title: string
  topics: Topic[]
}

export function LearningTopicsGrid({ title, topics }: LearningTopicsGridProps) {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              <div className="relative w-20 h-20 sm:w-40 sm:h-40 overflow-hidden rounded-full border-2 border-gray-700 group-hover:border-yellow-400 transition-colors mb-2">
                <Image
                  src={topic.src || "/placeholder.svg"}
                  alt={topic.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white">{topic.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
