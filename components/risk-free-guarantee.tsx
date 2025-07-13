"use client";

import { CheckCircle, ShieldCheck, Infinity } from "lucide-react";
import { CallToAction } from "./call-to-action";

interface RiskFreeGuaranteeProps {
  ctaText: string;
  ctaLink: string;
}

export function RiskFreeGuarantee({
  ctaText,
  ctaLink,
}: RiskFreeGuaranteeProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
          VOCÊ NÃO TEM <span className="text-yellow-400">RISCO NENHUM</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Garantia de 7 Dias
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Sua satisfação ou seu dinheiro de volta.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
              <Infinity className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Acesso Vitalício
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Assista quando e quantas vezes quiser.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-300 space-y-4 sm:space-y-6 mb-8 md:mb-12">
          <p className="text-base sm:text-xl text-gray-800 font-semibold leading-relaxed">
            Oferecemos uma{" "}
            <span className="font-black text-green-600">
              GARANTIA INCONDICIONAL de 7 dias
            </span>
            . Se por qualquer motivo você não gostar do conteúdo, é só enviar um
            e-mail solicitando o reembolso.
            <br />
            <span className="font-black text-yellow-600">
              Devolveremos 100% do valor investido. Sem perguntas. Sem
              complicações.
            </span>
          </p>
          <p className="grid md:flex items-center justify-center text-base sm:text-lg text-gray-700 font-semibold">
            E o melhor: o acesso é vitalício, para você assistir quando e
            quantas vezes quiser!
          </p>
        </div>

        <CallToAction
          text={ctaText}
          link={ctaLink}
          className="bg-green-600 hover:bg-green-700"
          animatePulse={true}
        />
      </div>
    </section>
  );
}
