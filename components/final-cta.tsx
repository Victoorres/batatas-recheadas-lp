"use client"

import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface FinalCTAProps {
  buttonText: string
  buttonLink: string
}

export function FinalCTA({ buttonText, buttonLink }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-red-500/30">
          {/* Urgency Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
              <Clock className="w-4 h-4" />
              OFERTA POR TEMPO LIMITADO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">⚠️ ÚLTIMA CHANCE!</h2>
            <p className="text-xl text-red-100 mb-6">
              Esta oferta pode sair do ar a qualquer momento.
              <br />
              <strong>Não deixe para depois!</strong>
            </p>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">5.000+</div>
              <div className="text-sm text-gray-300">Alunos</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">R$ 2.500/mês</div>
              <div className="text-sm text-gray-300">Faturamento</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-sm text-gray-300">Satisfação</div>
            </div>
          </div>

          {/* Main CTA Button */}
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base md:text-xl px-4 sm:px-6 md:px-12 py-6 md:py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto min-h-[4rem] md:min-h-[5rem] animate-pulse"
            onClick={() => window.open(buttonLink, "_blank")}
          >
            <span className="text-center leading-tight break-words flex-1">🚀 {buttonText}</span>
          </Button>

          {/* Security and Guarantee */}
          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-300">🔒 Pagamento 100% seguro • Garantia de 7 dias</p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
              <span>✅ Acesso imediato</span>
              <span>✅ Suporte incluso</span>
              <span>✅ Certificado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
