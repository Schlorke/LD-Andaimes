"use client"

import type React from "react"
import Image from "next/image"
import { Hero } from "@/components/ui/hero"
import { Button } from "@/components/ui/button"
import { ProductsSection } from "@/components/sections/products-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { Phone, ArrowRight, Shield, Clock, Award, Users, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { icon: Award, value: "10+", label: "Anos de Experiência" },
  { icon: Users, value: "500+", label: "Projetos Realizados" },
  { icon: Shield, value: "100%", label: "Equipamentos Certificados" },
  { icon: Clock, value: "24/7", label: "Suporte Técnico" },
]

const testimonials = [
  {
    name: "João Silva",
    role: "Engenheiro Civil, Construtora Alfa",
    image: "/placeholder-user.jpg",
    quote:
      "A LD Andaimes é nossa parceira de confiança. A qualidade dos equipamentos e a pontualidade na entrega são impecáveis. Segurança em primeiro lugar, sempre!",
  },
  {
    name: "Mariana Costa",
    role: "Arquiteta, MC Arquitetura",
    image: "/placeholder-user.jpg",
    quote:
      "O atendimento técnico da LD fez toda a diferença no nosso projeto. Eles entenderam nossa necessidade e forneceram a solução ideal. Recomendo fortemente.",
  },
]

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30 text-foreground overflow-hidden">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Hero
          title={
            <span className="block">
              A{" "}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-400 bg-clip-text text-transparent">
                Próxima Geração
              </span>{" "}
              de Segurança em Andaimes
            </span>
          }
          subtitle="Soluções de engenharia vertical que redefinem a eficiência e a segurança na construção civil. Bem-vindo ao futuro."
          primaryAction={
            <Button
              size="xl"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl shadow-orange-500/25"
              asChild
            >
              <a href="https://wa.me/5551994647458?text=Olá! Gostaria de solicitar um orçamento para andaimes.">
                <Phone className="h-5 w-5 mr-3" />
                Solicitar Orçamento
              </a>
            </Button>
          }
          secondaryAction={
            <Button
              variant="outline"
              size="xl"
              className="bg-white/20 border-white/30 text-white backdrop-blur-md hover:bg-white/30 hover:border-white/50 shadow-xl"
            >
              Explorar Soluções
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>
          }
        />

        {/* Ondulação moderna */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            />
          </svg>
        </div>
      </motion.div>

      {/* Stats Section */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-orange-50/20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <div className="text-center group cursor-pointer">
                      <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-xl shadow-orange-500/10 border border-orange-100/50 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-500">
                        <Icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                        <div className="font-semibold text-lg text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Products Section */}
      <ScrollReveal>
        <ProductsSection />
      </ScrollReveal>

      {/* Portfolio Section */}
      <ScrollReveal>
        <PortfolioSection />
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal>
        <section
          id="sobre"
          className="py-32 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal delay={0.3}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20">
                  <Image
                    src="/images/entrega-andaimes.jpg"
                    alt="Caminhão da LD Andaimes carregado com equipamentos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.6}>
                <div className="space-y-6">
                  <Badge
                    variant="secondary"
                    className="mb-6 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 py-2 text-sm font-semibold"
                  >
                    Sobre a LD Andaimes
                  </Badge>
                  <h2 className="text-5xl font-bold tracking-tight mb-8 text-gray-900 font-display">
                    Mais de uma década construindo com segurança
                  </h2>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                      Fundada em 2014 em Porto Alegre, a LD Andaimes nasceu com o compromisso de oferecer soluções
                      completas em andaimes e escoramentos para a construção civil.
                    </p>
                    <p>
                      Nossa sede de 2.400m² abriga um amplo estoque de equipamentos certificados e uma equipe técnica
                      especializada, garantindo agilidade e qualidade em cada projeto.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/25"
                  >
                    Conheça nossa história
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-orange-50/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <ScrollReveal>
                <Badge
                  variant="secondary"
                  className="mb-6 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 px-4 py-2 text-sm font-semibold"
                >
                  Depoimentos
                </Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="text-5xl font-bold tracking-tight mb-6 text-gray-900 font-display">
                  Confiança que constrói
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                  O sucesso dos nossos parceiros é a nossa maior conquista.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.3}>
                  <Card className="border-l-4 border-orange-500 bg-gradient-to-br from-white to-orange-50/30 shadow-2xl shadow-orange-500/10 backdrop-blur-sm hover:shadow-3xl hover:shadow-orange-500/20 transition-all duration-500 border-0">
                    <CardContent className="pt-8 p-8">
                      <div className="flex items-center mb-6">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`Foto de ${testimonial.name}`}
                          width={80}
                          height={80}
                          className="rounded-full mr-6 shadow-lg"
                        />
                        <div>
                          <p className="font-semibold text-xl text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-600 mt-1">{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 rounded-3xl p-16 text-white text-center relative overflow-hidden shadow-2xl shadow-gray-900/30">
              <div className="relative z-10">
                <ScrollReveal>
                  <h2 className="text-5xl font-bold tracking-tight mb-6 font-display">
                    Pronto para elevar seu projeto?
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
                    Nossa equipe técnica está pronta para encontrar a melhor solução para sua obra.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/25"
                      asChild
                    >
                      <a href="https://wa.me/5551994647458?text=Olá! Gostaria de solicitar um orçamento para andaimes.">
                        <Phone className="h-5 w-5 mr-2" />
                        Solicitar Orçamento
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md shadow-xl"
                    >
                      Baixar Catálogo PDF
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
