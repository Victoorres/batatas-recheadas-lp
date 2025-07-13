"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface TextBlock {
  title: string
  content: string
  highlight?: boolean
}

interface TextBlocksProps {
  title?: string
  blocks: TextBlock[]
  showCheckmarks?: boolean
}

export function TextBlocks({ title, blocks, showCheckmarks = false }: TextBlocksProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
          </div>
        )}

        <div className="space-y-4 md:space-y-6">
          {blocks.map((block, index) => (
            <Card
              key={index}
              className={`${
                block.highlight
                  ? "bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-yellow-400"
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  {showCheckmarks && (
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">{block.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{block.content}</p>
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
