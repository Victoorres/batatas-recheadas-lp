"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Play, Clock } from "lucide-react"

interface Module {
  title: string
  description: string
  duration: string
  thumbnail: string
}

interface CourseModulesProps {
  title: string
  modules: Module[]
}

export function CourseModules({ title, modules }: CourseModulesProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">{title}</h2>

        <div className="space-y-4 md:space-y-6">
          {modules.map((module, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="relative w-full h-32 sm:w-24 sm:h-16 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={module.thumbnail || "/placeholder.svg?height=64&width=96"}
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" fill="currentColor" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-1 sm:mb-2">
                      Módulo {index + 1}: {module.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-2">{module.description}</p>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
