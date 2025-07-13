"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, TrendingUp, Shield, Clock, Users, Award, DollarSign } from "lucide-react" // Removed ArrowRight

interface BenefitsDifferentialsProps {
  ctaLink: string
}

export function BenefitsDifferentials({ ctaLink }: BenefitsDifferentialsProps) {
  const benefits = [
    {
      icon: <DollarSign className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Baixo Investimento",
      description: "Comece com menos de R$ 100 e tenha potencial de faturar milhares por mês",
      highlight: true,
    },
    {
      icon: <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Alta Demanda",
      description: "Batatas recheadas são um dos produtos mais pedidos no delivery",
      highlight: true,
    },
    {
      icon: <Clock className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Resultados Rápidos",
      description: "Primeiros lucros já na primeira semana de aplicação",
      highlight: false,
    },
    {
      icon: <Users className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Suporte Exclusivo",
      description: "Grupo VIP no WhatsApp com suporte direto por 30 dias",
      highlight: false,
    },
    {
      icon: <Award className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Método Comprovado",
      description: "Mais de 5.000 alunos já transformaram suas vidas",
      highlight: false,
    },
    {
      icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Garantia Total",
      description: "7 dias de garantia incondicional ou seu dinheiro de volta",
      highlight: false,
    },
  ]

  const differentials = [
    "Mais de 20 receitas exclusivas testadas e aprovadas",
    "Planilha completa de custos e precificação",
    "Estratégias de marketing digital para redes sociais",
    "Técnicas de produção em escala profissional",
    "Como estruturar delivery e parcerias",
    "Certificado de conclusão do curso",
    "Acesso vitalício ao conteúdo",
    "Atualizações gratuitas por 1 ano",
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
            Por que escolher nosso <span className="text-yellow-400">curso</span>?
          </h2>
          <p className="text-base sm:text-xl text-gray-300">Vantagens que fazem toda a diferença no seu sucesso</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`${
                benefit.highlight
                  ? "bg-gradient-to-br from-yellow-400/20 to-green-400/20 border-yellow-400"
                  : "bg-gray-800 border-gray-700"
              } hover:border-yellow-400 transition-colors`}
            >
              <CardContent className="p-5 sm:p-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-black">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-400">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button after benefits */}
        <div className="text-center mb-12 md:mb-16">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 md:py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto min-h-[3.5rem] md:min-h-[4.5rem]"
            onClick={() => window.open(ctaLink, "_blank")}
          >
            <span className="text-center leading-tight break-words flex-1">👉 QUERO COMEÇAR AGORA</span>
            {/* Removed ArrowRight icon */}
          </Button>
        </div>

        {/* Differentials Section - Redesigned */}
        <div className="bg-black rounded-3xl p-6 md:p-12 border border-gray-800">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              O que você vai receber <span className="text-yellow-400">hoje</span>:
            </h3>
            <p className="text-sm sm:text-base text-gray-400">Conteúdo completo para transformar sua vida financeira</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-sm sm:text-base text-gray-200 font-medium">{differential}</span>
              </div>
            ))}
          </div>

          {/* Value Comparison */}
          <div className="text-center bg-gradient-to-r from-red-900/50 to-red-800/50 rounded-2xl p-5 sm:p-6 mb-6 md:mb-8 border border-red-500/30">
            <div className="mb-4">
              <div className="text-gray-400 text-base sm:text-lg mb-2">Valor total de tudo isso:</div>
              <div className="text-2xl sm:text-3xl font-bold text-red-400 line-through mb-2">R$ 1.497,00</div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400">R$ 7,00</div>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm">
              <Star className="w-3 h-3 sm:w-4 h-4" />
              ECONOMIA DE R$ 1.490,00
            </div>
          </div>

          {/* CTA Button in differentials */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 md:py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto min-h-[3.5rem] md:min-h-[4.5rem] animate-pulse"
              onClick={() => window.open(ctaLink, "_blank")}
            >
              <span className="text-center leading-tight break-words flex-1">🚀 SIM, EU QUERO AGORA</span>
              {/* Removed ArrowRight icon */}
            </Button>
            <p className="text-xs sm:text-sm text-gray-400 mt-4">
              🔒 Pagamento seguro • Acesso imediato • Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
