"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, TrendingUp, Shield, Clock, Users, Award, DollarSign } from "lucide-react"

interface BenefitsDifferentialsProps {
  ctaLink: string
}

export function BenefitsDifferentials({ ctaLink }: BenefitsDifferentialsProps) {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Baixo Investimento",
      description: "Comece com menos de R$ 100 e tenha potencial de faturar milhares por mês",
      highlight: false,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Alta Demanda",
      description: "Batatas recheadas são um dos produtos mais pedidos no delivery",
      highlight: false,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Resultados Rápidos",
      description: "Primeiros lucros já na primeira semana de aplicação",
      highlight: false,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Suporte Exclusivo",
      description: "Grupo VIP no WhatsApp com suporte direto por 30 dias",
      highlight: false,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Método Comprovado",
      description: "Mais de 5.000 alunos já transformaram suas vidas",
      highlight: false,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia Total",
      description: "7 dias de garantia incondicional ou seu dinheiro de volta",
      highlight: false,
    },
  ]

  const differentials = [
    "Mais de 20 receitas exclusivas aprovadas",
    "Planilha completa de custos e precificação",
    "Estratégias de marketing digital para redes sociais",
    "Técnicas de produção em escala profissional",
    "Como estruturar delivery e parcerias",
    "Certificado de conclusão do curso",
    "Acesso vitalício ao conteúdo",
    "Atualizações gratuitas por 1 ano",
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Benefits Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Por que escolher nosso <span className="text-yellow-400">curso</span>?
          </h2>
          <p className="text-xl text-gray-300">Vantagens que fazem toda a diferença no seu sucesso</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`${
                benefit.highlight
                  ? "bg-gradient-to-br from-yellow-400/20 to-green-400/20 border-yellow-400"
                  : "bg-gray-800 border-gray-700"
              } hover:border-yellow-400 transition-colors`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button after benefits */}
        <div className="text-center mb-16">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base md:text-xl px-4 sm:px-6 md:px-12 py-6 md:py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-md sm:max-w-lg mx-auto min-h-[4rem] md:min-h-[5rem]"
            onClick={() => window.open(ctaLink, "_blank")}
          >
            <span className="text-center leading-tight break-words flex-1">👉 QUERO COMEÇAR AGORA</span>
          </Button>
        </div>

        {/* Differentials Section - Redesigned */}
        <div className="bg-black rounded-3xl p-8 md:p-12 border border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              O que você vai receber <span className="text-yellow-400">hoje</span>:
            </h3>
            <p className="text-gray-400">Conteúdo completo para transformar sua vida financeira</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-200 text-lg font-medium">{differential}</span>
              </div>
            ))}
          </div>

          {/* Value Comparison */}
          <div className="text-center bg-gradient-to-r from-red-900/50 to-red-800/50 rounded-2xl p-6 mb-8 border border-red-500/30">
            <div className="mb-4">
              <div className="text-gray-400 text-lg mb-2">Valor total de tudo isso:</div>
              <div className="text-3xl font-bold text-red-400 line-through mb-2">R$ 1.497,00</div>
              <div className="text-5xl md:text-6xl font-bold text-yellow-400">R$ 7,00</div>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
              ECONOMIA DE R$ 1.490,00
            </div>
          </div>

          {/* CTA Button in differentials */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base md:text-xl px-4 sm:px-6 md:px-12 py-6 md:py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-md sm:max-w-lg mx-auto min-h-[4rem] md:min-h-[5rem] animate-pulse"
              onClick={() => window.open(ctaLink, "_blank")}
            >
              <span className="text-center leading-tight break-words flex-1">🚀 SIM, EU QUERO AGORA</span>
            </Button>
            <p className="text-sm text-gray-400 mt-4">🔒 Pagamento seguro • Acesso imediato • Garantia de 7 dias</p>
          </div>
        </div>
      </div>
    </section>
  )
}
