import { HeroSection } from "@/components/hero-section";
import { VideoSection } from "@/components/video-section";
import { PricingSection } from "@/components/pricing-section";
import { RecipeGallery } from "@/components/recipe-gallery";
import { GuaranteeSection } from "@/components/guarantee-section";
import { CourseModules } from "@/components/course-modules";
import { BenefitsDifferentials } from "@/components/benefits-differentials";
import { SocialProof } from "@/components/social-proof";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FinalCTA } from "@/components/final-cta";

export default function BatatasRecheadasLanding() {
  const heroConfig = {
    title:
      'Aprenda a fazer <span class="text-yellow-400">Batatas Recheadas</span> com<br/><span class="text-yellow-400">Vídeo Aulas e Receitas Exclusivas</span>',
    subtitle:
      'Receba muitos <span class="text-yellow-400">Pedidos</span> e <span class="text-yellow-400">Mude sua Realidade</span>',
    ctaText: "CLIQUE AQUI E COMECE AGORA",
    ctaLink: "https://wa.me/5511999999999",
    backgroundImage: "/placeholder.svg?height=800&width=1200",
  };

  const videoConfig = {
    youtubeVideoId: "dQw4w9WgXcQ",
    title: "CLIQUE PARA ASSISTIR O VÍDEO",
    description:
      "Veja como é simples transformar sua vida com batatas recheadas",
    thumbnailImage: "/placeholder.svg?height=400&width=600",
  };

  const recipes = [
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Batata Bacon",
      title: "Batata Bacon",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Batata Frango",
      title: "Batata Frango",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Batata Carne",
      title: "Batata Carne",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Batata Vegetariana",
      title: "Batata Vegetariana",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Batata Camarão",
      title: "Batata Camarão",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Batata Calabresa",
      title: "Batata Calabresa",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Batata Portuguesa",
      title: "Batata Portuguesa",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Batata Fitness",
      title: "Batata Fitness",
    },
  ];

  const courseModules = [
    {
      title: "Introdução ao Negócio",
      description:
        "Conheça o potencial do mercado de batatas recheadas e como começar seu negócio do zero",
      duration: "15 min",
      thumbnail: "/placeholder.svg?height=64&width=96",
    },
    {
      title: "Escolha e Preparo das Batatas",
      description:
        "Aprenda a escolher as melhores batatas e técnicas de preparo para garantir qualidade",
      duration: "20 min",
      thumbnail: "/placeholder.svg?height=64&width=96",
    },
    {
      title: "Receitas Básicas",
      description:
        "Domine as 5 receitas fundamentais que todo empreendedor deve saber",
      duration: "35 min",
      thumbnail: "/placeholder.svg?height=64&width=96",
    },
    {
      title: "Receitas Gourmet",
      description:
        "Receitas exclusivas e sofisticadas para aumentar seu ticket médio",
      duration: "45 min",
      thumbnail: "/placeholder.svg?height=64&width=96",
    },
    {
      title: "Precificação Estratégica",
      description:
        "Como calcular custos e definir preços para maximizar seus lucros",
      duration: "25 min",
      thumbnail: "/placeholder.svg?height=64&width=96",
    },
    {
      title: "Marketing e Vendas",
      description:
        "Estratégias para divulgar seu negócio e conquistar clientes fiéis",
      duration: "30 min",
      thumbnail: "/placeholder.svg?height=64&width=96",
    },
    {
      title: "Produção em Escala",
      description:
        "Organize sua produção para atender grandes volumes sem perder qualidade",
      duration: "40 min",
      thumbnail: "/placeholder.svg?height=64&width=96",
    },
    {
      title: "Delivery e Logística",
      description: "Como estruturar entregas e parcerias com apps de delivery",
      duration: "20 min",
      thumbnail: "/placeholder.svg?height=64&width=96",
    },
  ];

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
      <PricingSection
        originalPrice="R$ 497,00"
        currentPrice="R$ 7,00"
        ctaText="CLIQUE AQUI E COMECE AGORA"
        ctaLink="https://wa.me/5511999999999"
        badgeText="OFERTA LIMITADA"
      />

      {/* Recipe Gallery */}
      <RecipeGallery
        title="Veja algumas das receitas que você vai dominar"
        recipes={recipes}
      />

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Course Modules */}
      <CourseModules
        title="Conteúdo Completo do Curso"
        modules={courseModules}
      />

      {/* Benefits and Differentials - IMPROVED */}
      <BenefitsDifferentials ctaLink="https://wa.me/5511999999999" />

      {/* Social Proof */}
      <SocialProof />

      {/* Testimonials */}
      <TestimonialsSection
        title="Veja o que nossos alunos estão dizendo"
        testimonials={testimonials}
      />

      {/* Single Final CTA */}
      <FinalCTA
        buttonText="QUERO GARANTIR MINHA VAGA"
        buttonLink="https://wa.me/5511999999999"
      />

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Curso Batatas Recheadas. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
