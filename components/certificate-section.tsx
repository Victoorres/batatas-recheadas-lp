"use client"

import { CallToAction } from "@/components/call-to-action"
import Image from "next/image"

interface CertificateSectionProps {
  ctaText: string
  ctaLink: string
}

export function CertificateSection({ ctaText, ctaLink }: CertificateSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
          RECEBA UM <span className="text-yellow-400">CERTIFICADO DE QUALIFICAÇÃO</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="relative w-56 h-40 sm:w-64 sm:h-48 md:w-80 md:h-60 bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=240&width=320"
              alt="Certificado Pacote Completo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-base sm:text-xl font-bold bg-black/50">
              PACOTE COMPLETO
            </div>
          </div>
          <div className="relative w-56 h-40 sm:w-64 sm:h-48 md:w-80 md:h-60 bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=240&width=320"
              alt="Certificado Pacote Básico"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-base sm:text-xl font-bold bg-black/50">
              PACOTE BÁSICO
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-lg text-gray-700 mb-8">
          Ao concluir, você receberá o seu certificado personalizado, com a merecida aprovação de competência, pronto
          para ser impresso ou exposto em Restaurante ou na sua Casa!
        </p>

        <CallToAction text={ctaText} link={ctaLink} />
      </div>
    </section>
  )
}
