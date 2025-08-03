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
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="text-foreground overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Hero
          title={
            <span className="block">
              A{' '}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-400 bg-clip-text text-transparent">
                Próxima Geração
              </span>{' '}
              de Segurança em Andaimes
            </span>
          }
          subtitle="Soluções de engenharia vertical que redefinem a eficiência e a segurança na construção civil. Bem-vindo ao futuro."
          primaryAction={
            <Button
              size="xl"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700"
              asChild
            >
              <a href="https://wa.me/5551994647458?text=Olá! Gostaria de solicitar um orçamento para andaimes.">
                <Phone className="mr-3 h-5 w-5" />
                Solicitar Orçamento
              </a>
            </Button>
          }
          secondaryAction={
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 bg-white/20 text-white shadow-xl backdrop-blur-md hover:border-white/50 hover:bg-white/30"
            >
              Explorar Soluções
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          }
        />

        {/* Ondulação moderna */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block h-20 w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            />
          </svg>
        </div>
      </motion.div>

      {/* Stats Section */}
      <ScrollReveal>
        <section className="relative bg-gradient-to-br from-white via-slate-50 to-orange-50/20 py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <div className="group cursor-pointer text-center">
                      <div className="rounded-2xl border border-orange-100/50 bg-gradient-to-br from-white to-orange-50 p-8 shadow-xl shadow-orange-500/10 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                        <Icon className="mx-auto mb-4 h-12 w-12 text-orange-500" />
                        <div className="mb-2 text-4xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-lg font-semibold text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </div>
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
        <section
          id="sobre"
          className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 py-32"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <ScrollReveal delay={0.3}>
                <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/20">
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
                    className="mb-6 bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 text-sm font-semibold text-orange-800"
                  >
                    Sobre a LD Andaimes
                  </Badge>
                  <h2 className="font-display mb-8 text-5xl font-bold tracking-tight text-gray-900">
                    Mais de uma década construindo com segurança
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-600">
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
                  <Button
                    size="lg"
                    className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700"
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
        <section className="relative bg-gradient-to-br from-white via-slate-50 to-orange-50/20 py-32">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <ScrollReveal>
                <Badge
                  variant="secondary"
                  className="mb-6 bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 text-sm font-semibold text-yellow-800"
                >
                  Depoimentos
                </Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="font-display mb-6 text-5xl font-bold tracking-tight text-gray-900">
                  Confiança que constrói
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                  O sucesso dos nossos parceiros é a nossa maior conquista.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.3}>
                  <Card className="hover:shadow-3xl border-0 border-l-4 border-orange-500 bg-gradient-to-br from-white to-orange-50/30 shadow-2xl shadow-orange-500/10 backdrop-blur-sm transition-all duration-500 hover:shadow-orange-500/20">
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
                          <p className="text-xl font-semibold text-gray-900">
                            {testimonial.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <blockquote className="mb-6 text-lg leading-relaxed text-gray-700 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-6 w-6 fill-current text-yellow-400"
                          />
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
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 p-16 text-center text-white shadow-2xl shadow-gray-900/30">
              <div className="relative z-10">
                <ScrollReveal>
                  <h2 className="font-display mb-6 text-5xl font-bold tracking-tight">
                    Pronto para elevar seu projeto?
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed opacity-90">
                    Nossa equipe técnica está pronta para encontrar a melhor
                    solução para sua obra.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <div className="flex flex-col justify-center gap-6 sm:flex-row">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700"
                      asChild
                    >
                      <a href="https://wa.me/5551994647458?text=Olá! Gostaria de solicitar um orçamento para andaimes.">
                        <Phone className="mr-2 h-5 w-5" />
                        Solicitar Orçamento
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 bg-white/10 text-white shadow-xl backdrop-blur-md hover:bg-white/20 hover:text-white"
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
  );
}
