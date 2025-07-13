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
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          </div>
        )}

        <div className="space-y-6">
          {blocks.map((block, index) => (
            <Card
              key={index}
              className={`${
                block.highlight
                  ? "bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-yellow-400"
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {showCheckmarks && <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">{block.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{block.content}</p>
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
