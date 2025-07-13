"use client"

import Image from "next/image"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    title?: string
  }[]
  title?: string
  columns?: 2 | 3 | 4
}

export function ImageGallery({ images, title, columns = 3 }: ImageGalleryProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {images.map((image, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-800">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {image.title && (
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
