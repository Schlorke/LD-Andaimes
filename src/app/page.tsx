'use client';

import type React from 'react';
import Image from 'next/image';
import { Hero } from '@/components/ui/hero';
import { Button } from '@/components/ui/button';
import { ProductsSection } from '@/components/sections/products-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import {
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Users,
  Star,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { icon: Award, value: '10+', label: 'Anos de Experiência' },
  { icon: Users, value: '500+', label: 'Projetos Realizados' },
  { icon: Shield, value: '100%', label: 'Equipamentos Certificados' },
  { icon: Clock, value: '24/7', label: 'Suporte Técnico' },
];

const testimonials = [
  {
    name: 'João Silva',
    role: 'Engenheiro Civil, Construtora Alfa',
    image: '/placeholder-user.jpg',
    quote:
      'A LD Andaimes é nossa parceira de confiança. A qualidade dos equipamentos e a pontualidade na entrega são impecáveis. Segurança em primeiro lugar, sempre!',
  },
  {
    name: 'Mariana Costa',
    role: 'Arquiteta, MC Arquitetura',
    image: '/placeholder-user.jpg',
    quote:
      'O atendimento técnico da LD fez toda a diferença no nosso projeto. Eles entenderam nossa necessidade e forneceram a solução ideal. Recomendo fortemente.',
  },
];

function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="text-foreground min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Hero
          title={
            <span className="block">
              A{' '}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                Próxima Geração
              </span>{' '}
              de Segurança em Andaimes
            </span>
          }
          subtitle="Soluções de engenharia vertical que redefinem a eficiência e a segurança na construção civil. Bem-vindo ao futuro."
          primaryAction={
            <Button size="xl" asChild>
              <a href="https://wa.me/5551994647458?text=Olá! Gostaria de solicitar um orçamento para andaimes.">
                <Phone className="mr-3 h-5 w-5" />
                Solicitar Orçamento
              </a>
            </Button>
          }
          secondaryAction={
            <Button variant="outline" size="xl">
              Explorar Soluções
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          }
        />
      </motion.div>

      {/* Stats Section */}
      <ScrollReveal>
        <section className="relative py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <ScrollReveal key={index} delay={index * 0.3}>
                    <motion.div
                      className="group cursor-pointer text-center"
                      whileHover={{ scale: 1.05, y: -8 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                        <Icon className="mx-auto mb-4 h-12 w-12 text-orange-500" />
                        <div className="font-display mb-2 text-responsive-3xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-responsive-base font-semibold text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
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
        <section id="sobre" className="relative overflow-hidden py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <ScrollReveal delay={0.3}>
                <motion.div
                  className="relative h-[500px] overflow-hidden rounded-3xl shadow-xl"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/images/entrega-andaimes.jpg"
                    alt="Caminhão da LD Andaimes carregado com equipamentos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.6}>
                <div className="space-y-6">
                  <Badge
                    variant="secondary"
                    className="mb-6 bg-gradient-to-r from-orange-100 to-orange-200 px-4 py-2 text-sm font-semibold text-orange-800"
                  >
                    Sobre a LD Andaimes
                  </Badge>
                  <h2 className="font-display mb-8 text-responsive-4xl font-bold tracking-tight text-gray-900">
                    Mais de uma década construindo com segurança
                  </h2>
                  <div className="space-y-6 text-responsive-base leading-relaxed text-gray-600">
                    <p>
                      Fundada em 2014 em Porto Alegre, a LD Andaimes nasceu com
                      o compromisso de oferecer soluções completas em andaimes e
                      escoramentos para a construção civil.
                    </p>
                    <p>
                      Nossa sede de 2.400m² abriga um amplo estoque de
                      equipamentos certificados e uma equipe técnica
                      especializada, garantindo agilidade e qualidade em cada
                      projeto.
                    </p>
                  </div>
                  <Button size="lg" className="mt-8">
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
        <section className="relative py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-16 text-center">
              <ScrollReveal delay={0.2}>
                <Badge
                  variant="secondary"
                  className="mb-6 bg-gradient-to-r from-orange-100 to-orange-200 px-4 py-2 text-sm font-semibold text-orange-800"
                >
                  Depoimentos
                </Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="font-display mb-6 text-responsive-4xl font-bold tracking-tight text-gray-900">
                  Confiança que constrói
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="mx-auto max-w-3xl text-responsive-lg leading-relaxed text-gray-600">
                  O sucesso dos nossos parceiros é a nossa maior conquista.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.4}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Card className="border-0 border-l-4 border-orange-500 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                      <CardContent className="p-8 pt-8">
                        <div className="mb-6 flex items-center">
                          <Image
                            src={testimonial.image || '/placeholder.svg'}
                            alt={`Foto de ${testimonial.name}`}
                            width={80}
                            height={80}
                            className="mr-6 rounded-full shadow-lg"
                          />
                          <div>
                            <p className="text-responsive-lg font-semibold text-gray-900">
                              {testimonial.name}
                            </p>
                            <p className="mt-1 text-responsive-sm text-gray-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <blockquote className="mb-6 text-responsive-base leading-relaxed text-gray-700 italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 fill-current text-orange-400"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 p-16 text-center text-white shadow-2xl"
              whileHover={{ scale: 1.01, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative z-10">
                <ScrollReveal>
                  <h2 className="font-display mb-6 text-responsive-4xl font-bold tracking-tight">
                    Pronto para elevar seu projeto?
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p className="mx-auto mb-12 max-w-3xl text-responsive-lg leading-relaxed opacity-90">
                    Nossa equipe técnica está pronta para encontrar a melhor
                    solução para sua obra.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.6}>
                  <div className="flex flex-col justify-center gap-6 sm:flex-row">
                    <Button size="lg" asChild>
                      <a href="https://wa.me/5551994647458?text=Olá! Gostaria de solicitar um orçamento para andaimes.">
                        <Phone className="mr-2 h-5 w-5" />
                        Solicitar Orçamento
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    >
                      Baixar Catálogo PDF
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
