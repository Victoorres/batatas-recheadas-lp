"use client"

import Image from "next/image"

interface Recipe {
  src: string
  alt: string
  title: string
}

interface RecipeGalleryProps {
  title: string
  recipes: Recipe[]
}

export function RecipeGallery({ title, recipes }: RecipeGalleryProps) {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-800">
                <Image
                  src={recipe.src || "/placeholder.svg?height=300&width=300"}
                  alt={recipe.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-bold text-sm">{recipe.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
