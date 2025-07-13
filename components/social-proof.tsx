"use client"

import { MessageCircle, Users, Star, Coins } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-12 md:py-16 bg-green-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Junte-se a mais de 5.000 pessoas que já transformaram suas vidas
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center text-white">
          <div>
            <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
            <div className="text-2xl sm:text-3xl font-bold mb-1">5.000+</div>
            <div className="text-sm sm:text-base">Alunos Ativos</div>
          </div>

          <div>
            <Star className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
            <div className="text-2xl sm:text-3xl font-bold mb-1">4.9/5</div>
            <div className="text-sm sm:text-base">Avaliação Média</div>
          </div>

          <div>
            <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
            <div className="text-2xl sm:text-3xl font-bold mb-1">98%</div>
            <div className="text-sm sm:text-base">Satisfação</div>
          </div>

          <div>
          <Coins className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" />
          <div className="text-2xl sm:text-3xl font-bold mb-1">R$ 2.500</div>
            <div className="text-sm sm:text-base">Faturamento Médio</div>
          </div>
        </div>
      </div>
    </section>
  )
}
