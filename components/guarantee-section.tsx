"use client"

import { Shield, Award, CheckCircle } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">GARANTIA DE SATISFAÇÃO DE 7 DIAS</h2>
          <p className="text-xl text-gray-600">Sua compra está 100% protegida</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Garantia Total</h3>
            <p className="text-gray-600">Se não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Certificado</h3>
            <p className="text-gray-600">Receba seu certificado de conclusão do curso</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Suporte</h3>
            <p className="text-gray-600">Suporte direto comigo por 30 dias via WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
