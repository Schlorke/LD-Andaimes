'use client';

import type React from 'react';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Wrench, Clock } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Andaimes Fachadeiros',
    description:
      'Sistema modular completo para trabalhos em fachadas, garantindo máxima segurança e produtividade.',
    image: '/images/andaime-fachadeiro.jpg',
    features: ['Montagem rápida', 'Alta resistência', 'Certificado'],
    icon: Shield,
  },
  {
    id: 2,
    name: 'Torres de Serviço',
    description:
      'Torres móveis ideais para manutenção e serviços em altura, com fácil movimentação.',
    image: '/images/torre-servico.jpg',
    features: ['Mobilidade', 'Estabilidade', 'Versatilidade'],
    icon: Wrench,
  },
  {
    id: 3,
    name: 'Escoras Metálicas',
    description:
      'Suporte estrutural robusto para lajes e vigas, garantindo segurança durante a construção.',
    image: '/placeholder.svg?height=300&width=400',
    features: ['Suporte robusto', 'Ajuste preciso', 'Durabilidade'],
    icon: Clock,
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

export function ProductsSection() {
  return (
    <section id="produtos" className="relative py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <ScrollReveal>
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-orange-100 to-orange-200 px-4 py-2 text-sm font-semibold text-orange-800"
            >
              Nossos Produtos
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <h2 className="font-display text-responsive-4xl mb-6 font-bold tracking-tight text-gray-900">
              Soluções completas para sua obra
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-responsive-lg mx-auto max-w-3xl leading-relaxed text-gray-600">
              Equipamentos certificados e de alta qualidade para garantir a
              segurança e eficiência do seu projeto.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <ScrollReveal key={product.id} delay={index * 0.3}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card className="group flex h-[520px] flex-col overflow-hidden border-0 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image || '/placeholder.svg'}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute top-4 left-4">
                        <div className="rounded-lg bg-orange-500 p-3 shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="font-display mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                          {product.name}
                        </h3>
                        <p className="mb-4 line-clamp-3 leading-relaxed text-gray-600">
                          {product.description}
                        </p>
                        {product.description.length > 120 && (
                          <button className="mb-2 text-sm font-medium text-orange-600 hover:text-orange-700">
                            Continuar leitura...
                          </button>
                        )}
                        <div className="mb-6 flex flex-wrap gap-2">
                          {product.features.slice(0, 3).map(feature => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="bg-orange-50 text-orange-700 transition-colors duration-300 hover:bg-orange-100"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {product.features.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-600"
                            >
                              +{product.features.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="mt-auto w-full bg-transparent transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white"
                      >
                        Saiba mais
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={1.2}>
          <div className="mt-12 text-center">
            <Button size="lg">
              Ver todos os produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
