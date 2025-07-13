"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoSectionProps {
  youtubeVideoId: string
  title: string
  description?: string
  thumbnailImage?: string
}

export function VideoSection({ youtubeVideoId, title, description, thumbnailImage }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-12 md:py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 sm:p-8 rounded-2xl shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 text-white">{title}</h3>
          {description && <p className="text-sm sm:text-base text-center text-green-100 mb-4 sm:mb-6">{description}</p>}

          <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
            {!isPlaying ? (
              <div className="relative w-full h-full cursor-pointer group" onClick={() => setIsPlaying(true)}>
                <img
                  src={thumbnailImage || "/placeholder.svg?height=400&width=600"}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
