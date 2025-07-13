"use client"

import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react" // Removed ArrowRight import

interface FinalCTAProps {
  buttonText: string
  buttonLink: string
}

export function FinalCTA({ buttonText, buttonLink }: FinalCTAProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-red-500/30">
          {/* Urgency Header */}
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm mb-3">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              OFERTA POR TEMPO LIMITADO
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">{`⚠️ ÚLTIMA CHANCE!`}</h2>
            <p className="text-base sm:text-lg text-red-100 mb-4 sm:mb-6">
              Esta oferta pode sair do ar a qualquer momento.
              <br />
              <strong>Não deixe para depois!</strong>
            </p>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-3 gap-4 mb-6 md:mb-8 text-center">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">5.000+</div>
              <div className="text-xs sm:text-sm text-gray-300">Alunos</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">R$ 2.500</div>
              <div className="text-xs sm:text-sm text-gray-300">Faturamento/Mês</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-xs sm:text-sm text-gray-300">Satisfação</div>
            </div>
          </div>

          {/* Main CTA Button */}
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 md:py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto min-h-[3.5rem] md:min-h-[4.5rem] animate-pulse"
            onClick={() => window.open(buttonLink, "_blank")}
          >
            <span className="text-center leading-tight break-words flex-1">🚀 {buttonText}</span>
            {/* Removed ArrowRight icon */}
          </Button>

          {/* Security and Guarantee */}
          <div className="mt-4 sm:mt-6 space-y-2">
            <p className="text-xs sm:text-sm text-gray-300">🔒 Pagamento 100% seguro • Garantia de 7 dias</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-400">
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
