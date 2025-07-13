"use client"

import Image from "next/image"

interface ProfitItem {
  src: string
  alt: string
  name: string
  cost: string
  sale: string
  profit: string
}

interface ProfitPotentialProps {
  title: string
  items: ProfitItem[]
}

export function ProfitPotential({ title, items }: ProfitPotentialProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 sm:p-6 rounded-xl border border-gray-800 text-center shadow-xl hover:border-yellow-400 transition-all duration-300"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-yellow-400 group-hover:scale-105 transition-transform duration-300">
                <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 min-h-16">{item.name}</h3>
              <div className="text-gray-400 text-sm space-y-1 mb-4">
                <p>
                  CUSTO: <span className="font-semibold text-yellow-400">{item.cost}</span>
                </p>
                <p>
                  VENDA: <span className="font-semibold text-green-400">{item.sale}</span>
                </p>
              </div>
              <div className="bg-green-900/30 p-3 rounded-lg">
                <p className="text-base sm:text-lg text-gray-300">LUCRO:</p>
                <p className="font-black text-green-500 text-3xl sm:text-4xl">{item.profit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
