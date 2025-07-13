"use client"

import { MessageCircle, Users, Star, Coins } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Junte-se a mais de 5.000 pessoas que já transformaram suas vidas
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">5.000+</div>
            <div>Alunos Ativos</div>
          </div>

          <div>
            <Star className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">4.9/5</div>
            <div>Avaliação Média</div>
          </div>

          <div>
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">98%</div>
            <div>Satisfação</div>
          </div>

          <div>
          <Coins className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold mb-2">R$ 2.500/mês</div>
            <div>Faturamento Médio</div>
          </div>
        </div>
      </div>
    </section>
  )
}
