import { HeroSection } from "@/components/hero-section";
import { VideoSection } from "@/components/video-section";
import { PricingSection } from "@/components/pricing-section";
import { LearningTopicsGrid } from "@/components/learning-topics-grid";
import { CertificateSection } from "@/components/certificate-section";
import { DetailedCourseContent } from "@/components/detailed-course-content";
import { ProfitPotential } from "@/components/profit-potential";
import { RiskFreeGuarantee } from "@/components/risk-free-guarantee";
import { PricingOptions } from "@/components/pricing-options";
import { FAQSection } from "@/components/faq-section";
import { SocialProof } from "@/components/social-proof";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function BatatasRecheadasLanding() {
  const ctaLink = "https://wa.me/5511999999999"; // Centralized CTA link

  const heroConfig = {
    title:
      'Aprenda a fazer <span class="text-yellow-400">Batatas Recheadas</span> com<br/><span class="text-yellow-400">Vídeo Aulas e Receitas Exclusivas</span>',
    subtitle:
      'Receba muitos <span class="text-yellow-400">Pedidos</span> e <span class="text-yellow-400">Mude sua Realidade</span>',
    ctaText: "CLIQUE AQUI E COMECE AGORA",
    ctaLink: ctaLink,
    backgroundImage: "/placeholder.svg?height=800&width=1200",
    logoSrc: "/placeholder.svg?height=80&width=80", // Placeholder for chef logo
  };

  const videoConfig = {
    youtubeVideoId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
    title: "CLIQUE PARA ASSISTIR O VÍDEO",
    description:
      "Veja como é simples transformar sua vida com batatas recheadas",
    thumbnailImage: "/placeholder.svg?height=400&width=600",
  };

  const pricingConfig = {
    originalPrice: "R$ 47,00",
    currentPrice: "R$ 7,00",
    ctaText: "CLIQUE AQUI E COMECE AGORA",
    ctaLink: ctaLink,
    badgeText: "OFERTA LIMITADA",
  };

  const learningTopics = [
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Receitas que mais Vendem",
      title: "Receitas que mais Vendem",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Método Comprovado",
      title: "Método Comprovado 3k a 5k Vendendo Batatas",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Embalagem Ideal",
      title: "Embalagem Ideal",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Tudo Sobre Recheios",
      title: "Tudo Sobre Recheios",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Dicas para agilizar a produção",
      title: "Dicas para agilizar a produção",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Montagem das Batatas",
      title: "Montagem das Batatas",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Acompanhamentos de Sucesso",
      title: "Acompanhamentos de Sucesso",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Dicas para o Delivery",
      title: "Dicas para o Delivery",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Tudo sobre Molhos",
      title: "Tudo sobre Molhos",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Batatas Recheadas Saudáveis",
      title: "Batatas Recheadas Saudáveis",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Como atrair clientes",
      title: "Como atrair clientes",
    },
    {
      src: "/placeholder.svg?height=96&width=96",
      alt: "Doces Especiais",
      title: "Doces Especiais",
    },
  ];

  const certificateConfig = {
    ctaText: "CLIQUE AQUI E COMECE AGORA",
    ctaLink: ctaLink,
  };

  const detailedCourseItems = [
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Video Aulas Exclusivas",
      title: "Vídeo Aulas Exclusivas",
      description:
        "Tenha acesso a vídeo aulas exclusivas explicando tudo sobre a produção de Batatas Recheadas, e como você vai fazer para viver disso de uma vez por todas, utilizando minhas estratégias vencedoras.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Certificado de Qualificação",
      title: "Certificado de Qualificação",
      description:
        "Receba um novo e lindo Certificado exclusivo com seu nome, para você colocar na parede da sua lanchonete, e ganhar muita credibilidade!",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Método: Lucrando com Batatas Recheadas",
      title: "Método: Lucrando com Batatas Recheadas",
      description:
        "Descubra todas as estratégias e Receitas Exclusivas que eu utilizo para lucrar de 4mil a 8 mil vendendo Batatas Recheadas.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Tudo sobre Batatas Recheadas",
      title: "Tudo sobre Batatas Recheadas",
      description:
        "É um guia completo com dicas, receitas e estratégias para quem quer aprender a fazer e vender batatas recheadas de forma simples, saborosa e lucrativa.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Congelamento Inteligente",
      title: "Congelamento Inteligente",
      description:
        "Guia prático para quem quer aprender a congelar alimentos da forma certa, mantendo o sabor, a textura e a qualidade por mais tempo. Ideal para quem trabalha com comida e quer otimizar a produção, evitar desperdícios e garantir mais organização na rotina.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Tudo sobre Recheios",
      title: "Tudo sobre Recheios",
      description:
        "Aprenda tudo sobre recheios, desde os recheios clássicos até opções diferenciadas e gourmet. Ideal para variar o cardápio, encantar os clientes e aumentar os lucros!",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Montagem das Batatas",
      title: "Montagem das Batatas",
      description:
        "Aprenda o passo a passo da montagem perfeita: do corte e preparo da batata até a finalização com recheios bem distribuídos, apresentação caprichada e toque profissional. Ideal para impressionar seus clientes e valorizar ainda mais seu produto!",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Acesso ao: Cardápio Campeão (Editável)",
      title: "Acesso ao: Cardápio Campeão (Editável)",
      description:
        "Diversos Modelos de cardápios prontos para imprimir e utilizar, ou então edite da maneira que achar melhor — perfeito para quem não tem um cardápio moderno e sofisticado.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Batatas Recheadas Saudáveis",
      title: "Batatas Recheadas Saudáveis",
      description:
        "Batatas com ingredientes nutritivos, combinações equilibradas e recheios que agradam sem sair da linha. Perfeito para atender clientes que buscam sabor com saúde e ainda garantir ótimos lucros!",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Acompanhamentos de Sucesso",
      title: "Acompanhamentos de Sucesso",
      description:
        "Acompanhamentos ideais que agregam muito ao servir com as batatas que aumentam o ticket médio e conquistam o cliente.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Mapa da Organização",
      title: "Mapa da Organização",
      description:
        "Aprenda como armazenar corretamente seus alimentos, evitar desperdícios e otimizar espaço para manter tudo sempre pronto e fresquinho.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Molhos Secretos para Acompanhamento",
      title: "Molhos Secretos para Acompanhamento",
      description:
        "Transforme o sabor das suas batatas com as receitas dos meus molhos secretos, e se diferenciar da concorrência com esses molhos exclusivos de Doguerias 5 Estrelas.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Venda Batatas Recheadas no Instagram",
      title: "Venda Batatas Recheadas no Instagram",
      description:
        "Aprenda como atrair clientes, postar fotos que vendem, usar hashtags certas, fazer stories que engajam e criar promoções que realmente funcionam. Tudo para você vender todos os dias e lotar sua agenda de pedidos!",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "Planilha de Precificação (Editável)",
      title: "Planilha de Precificação (Editável)",
      description:
        "Tenha acesso à minha planilha de precificação, onde você preenche as informações da sua batata recheada (ingredientes, quantidade e valor gasto), e ela já calcula automaticamente o custo de produção, o preço de venda ideal e a margem de lucro de cada receita.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=128&width=96",
      alt: "15 Receitas de Doces Favoritos dos Clientes",
      title: "15 Receitas de Doces Favoritos dos Clientes",
      description:
        "Tenha acesso as minhas 15 Principais Receitas de Doces, que são campeãs de vendas no nosso delivery e como você pode fazer ela também.",
    },
    {
      type: "icon",
      src: "/facebook.svg?height=40&width=40", // Placeholder for Facebook icon
      alt: "Grupo no Facebook com o Léo",
      title: "Grupo no Facebook com o Léo",
      description:
        "Você terá acesso a um grupo exclusivo no Facebook com outros alunos(a) para compartilhar suas ideias e tirar suas dúvidas em tempo real, 24h por dia!",
    },
    {
      type: "icon",
      src: "/telegram.png?height=40&width=40", // Placeholder for Telegram icon
      alt: "Canal no Telegram com o Léo",
      title: "Canal no Telegram com o Léo",
      description:
        "Você terá acesso a um canal exclusivo no Telegram com outros alunos(a) e receberá dicas e receitas únicas do Léo.",
    },
    {
      type: "icon",
      src: "/whatsapp.svg?height=40&width=40", // Placeholder for WhatsApp icon
      alt: "Receba no WhatsApp na hora!",
      title: "Receba no WhatsApp na hora!",
      description:
        "Você vai receber acesso completo ao conteúdo imediatamente após adquirir via WhatsApp!",
    },
    {
      type: "icon",
      src: "/whatsapp.svg?height=40&width=40", // Placeholder for WhatsApp icon
      alt: "Comunidade no WhatsApp",
      title: "Comunidade no WhatsApp",
      description:
        "Você vai ter acesso a uma comunidade exclusiva no whatsapp onde receberá avisos do nosso curso e conteúdos relevantes.",
    },
    {
      type: "icon",
      src: "/guarantee.png?height=40&width=40", // Placeholder for Guarantee icon
      alt: "Garantia e Acesso Vitalício",
      title: "Garantia e Acesso Vitalício",
      description:
        "Você tem 7 Dias de Garantia caso não Goste de alguma coisa devolvemos o seu dinheiro. E também acesso vitalício ao curso para assistir e rever a qualquer momento.",
    },
  ];

  const profitItems = [
    {
      src: "/placeholder.svg?height=128&width=128",
      alt: "Batata Recheada com Frango Cremoso",
      name: "BATATA RECHEADA COM FRANCO CREMOSO",
      cost: "R$ 2,00",
      sale: "R$ 20,00",
      profit: "900%",
    },
    {
      src: "/placeholder.svg?height=128&width=128",
      alt: "Batata com Calabresa e Queijo",
      name: "BATATA COM CALABRESA E QUEIJO",
      cost: "R$ 2,00",
      sale: "R$ 20,00",
      profit: "900%",
    },
    {
      src: "/placeholder.svg?height=128&width=128",
      alt: "Batata com Bacon e Cheddar",
      name: "BATATA COM BACON E CHEDDAR",
      cost: "R$ 2,00",
      sale: "R$ 20,00",
      profit: "900%",
    },
    {
      src: "/placeholder.svg?height=128&width=128",
      alt: "Batata Recheada com Brócolis e Requeijão",
      name: "BATATA RECHEADA COM BRÓCOLIS E REQUEIJÃO",
      cost: "R$ 2,00",
      sale: "R$ 20,00",
      profit: "900%",
    },
    {
      src: "/placeholder.svg?height=128&width=128",
      alt: "Batata com Carne Moída e Milho",
      name: "BATATA COM CARNE MOÍDA E MILHO",
      cost: "R$ 2,00",
      sale: "R$ 20,00",
      profit: "900%",
    },
    {
      src: "/placeholder.svg?height=128&width=128",
      alt: "Batata com Cogumelos e Queijo",
      name: "BATATA COM COGUMELOS E QUEIJO",
      cost: "R$ 2,00",
      sale: "R$ 20,00",
      profit: "900%",
    },
  ];

  const riskFreeConfig = {
    ctaText: "CLIQUE AQUI E COMECE AGORA",
    ctaLink: ctaLink,
  };

  // Master list of all possible benefits for comparison
  const allBenefits = [
    "Vídeo Aulas Práticas",
    "Método: Lucrando com Batatas Recheadas",
    "BÔNUS: Tudo sobre Batatas Recheadas",
    "BÔNUS: Tudo sobre Recheios",
    "BÔNUS: Montagem das Batatas",
    "BÔNUS: Acesso ao Cardápio Campeão",
    "BÔNUS: Batatas Recheadas Saudáveis",
    "BÔNUS: Receba no WhatsApp",
    "BÔNUS: Congelamento Inteligente",
    "BÔNUS: Receitas de Molhos Secretos para Acompanhamento",
    "BÔNUS: Acompanhamentos de Sucesso",
    "BÔNUS: 15 Receitas de Doces Favoritos dos Clientes",
    "BÔNUS: Mapa da Organização",
    "BÔNUS: Venda Batatas Recheadas no Instagram",
    "Certificado com seu nome", // Specific to Completo
    "7 Dias de Garantia Incondicional",
    "Planilha de Precificação", // Specific to Básico (and Completo also has it implicitly via DetailedCourseContent)
    "BÔNUS: Grupo no Facebook e Telegram", // Specific to Básico
    "Certificado Pacote Básico", // Specific to Básico
  ];

  const pricingOptions = [
    {
      name: "PACOTE COMPLETO",
      tag: "Mais Vendido",
      originalPrice: "R$ 597,00",
      currentPrice: "R$ 17,00",
      benefits: allBenefits.map((benefitText) => ({
        text: benefitText,
        included:
          benefitText !== "Certificado Pacote Básico" && // Completo doesn't have this specific basic certificate
          benefitText !== "Planilha de Precificação" && // Completo has a more detailed one, but for comparison, let's mark it as included
          benefitText !== "BÔNUS: Grupo no Facebook e Telegram" // Completo has other support channels
            ? true
            : false,
      })),
      ctaText: "APERTE AQUI PARA ADQUIRIR",
      ctaLink: ctaLink,
      highlight: true,
    },
    {
      name: "PACOTE BÁSICO",
      originalPrice: "R$ 47,00",
      currentPrice: "R$ 7,00",
      benefits: allBenefits.map((benefitText) => ({
        text: benefitText,
        included:
          benefitText === "Vídeo Aulas Práticas" ||
          benefitText === "Método: Lucrando com Batatas Recheadas" ||
          benefitText === "Planilha de Precificação" ||
          benefitText === "BÔNUS: Grupo no Facebook e Telegram" ||
          benefitText === "Certificado Pacote Básico"
            ? true
            : false,
      })),
      ctaText: "APERTE AQUI PARA ADQUIRIR",
      ctaLink: ctaLink,
      highlight: false,
    },
  ];

  const faqItems = [
    {
      question: "Tenho que pagar todo mês?",
      answer: "Não! O pagamento é único e você terá acesso vitalício ao curso.",
    },
    {
      question: "E se por algum motivo eu não gostar do curso?",
      answer:
        "Oferecemos uma garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro.",
    },
    {
      question: "O curso terá certificado?",
      answer:
        "Sim! Ao concluir o curso, você receberá um certificado de qualificação personalizado.",
    },
    {
      question: "Em quanto tempo terei acesso as apostilas?",
      answer:
        "O acesso é imediato após a confirmação do pagamento. Você receberá tudo no seu e-mail ou WhatsApp.",
    },
    {
      question: "Preciso saber cozinhar para fazer o curso?",
      answer:
        "Não! O curso é para iniciantes e ensina tudo do zero, passo a passo.",
    },
    {
      question: "E se eu tiver dúvidas durante o curso?",
      answer:
        "Você terá acesso ao nosso grupo exclusivo no WhatsApp e Telegram para tirar todas as suas dúvidas diretamente com o Léo e outros alunos.",
    },
  ];

  // Testimonials data re-added
  const testimonials = [
    {
      name: "Maria Silva",
      result: "R$ 3.200/mês",
      text: "Em 3 meses saí do zero e já estou faturando mais de R$ 3 mil por mês! As receitas são incríveis.",
      rating: 5,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "João Santos",
      result: "R$ 4.500/mês",
      text: "Estava desempregado e hoje tenho minha própria renda. Melhor investimento que já fiz na vida!",
      rating: 5,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Ana Costa",
      result: "R$ 2.800/mês",
      text: "As técnicas de precificação me ajudaram muito. Agora sei exatamente quanto cobrar.",
      rating: 5,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Carlos Oliveira",
      result: "R$ 5.200/mês",
      text: "Consegui expandir para 3 pontos de venda. O curso mudou minha vida financeira!",
      rating: 5,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Fernanda Lima",
      result: "R$ 2.100/mês",
      text: "Comecei como renda extra e hoje é minha principal fonte de renda. Recomendo!",
      rating: 5,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Roberto Mendes",
      result: "R$ 3.800/mês",
      text: "O suporte é excepcional. Sempre que tenho dúvidas, sou atendido rapidamente.",
      rating: 5,
      image: "/placeholder.svg?height=48&width=48",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection {...heroConfig} />
      {/* Video Section */}
      <VideoSection {...videoConfig} />
      {/* Pricing Section */}
      <PricingSection {...pricingConfig} />
      {/* Learning Topics Grid */}
      <LearningTopicsGrid
        title="VEJA O QUE VOCÊ VAI APRENDER"
        topics={learningTopics}
      />
      {/* Certificate Section */}
      <CertificateSection {...certificateConfig} />
      {/* Detailed Course Content */}
      <DetailedCourseContent
        title="VEJA O QUE VOCÊ VAI RECEBER NO CURSO"
        items={detailedCourseItems}
        ctaText="CLIQUE AQUI E COMECE AGORA"
        ctaLink={ctaLink}
      />
      {/* Profit Potential */}
      <ProfitPotential
        title="VEJA O QUANTO DE LUCRO QUE VOCÊ PODE TER"
        items={profitItems}
      />
      {/* Risk Free Guarantee */}
      <RiskFreeGuarantee {...riskFreeConfig} />
      {/* Pricing Options (Two Packages) - IMPROVED */}
      <PricingOptions
        title="ESCOLHA A MELHOR OPÇÃO PARA VOCÊ"
        options={pricingOptions}
      />
      {/* Social Proof */}
      <SocialProof />
      {/* Testimonials */}
      <TestimonialsSection
        title="VEJA O QUE NOSSOS ALUNOS ESTÃO DIZENDO"
        testimonials={testimonials}
      />
      {/* FAQ Section */}
      <FAQSection title="FAQ PERGUNTAS FREQUENTES" items={faqItems} />
      {/* Footer */}
      <footer className="py-8 bg-black ">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Curso Batatas Recheadas. Todos os
            direitos reservados.
          </p>
          {/* <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contato
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
