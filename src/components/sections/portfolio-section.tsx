'use client';

import type React from 'react';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    src: '/images/projeto-construcao-ampla.jpg',
    alt: 'Ampla estrutura de andaimes em grande obra de construção civil.',
    category: 'Construção Pesada',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/projeto-restauracao-historica.jpg',
    alt: 'Andaimes na fachada de um prédio histórico em restauração.',
    category: 'Restauração',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/projeto-residencial-moderno.jpg',
    alt: 'Andaimes em um edifício residencial moderno de múltiplos andares.',
    category: 'Residencial',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/projeto-seguranca-total.jpg',
    alt: 'Edifício com andaimes e telas de proteção laranja.',
    category: 'Segurança',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/projeto-manutencao-fachada.jpg',
    alt: 'Andaimes para manutenção da fachada de um prédio.',
    category: 'Manutenção',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/projeto-reforma-predial.jpg',
    alt: 'Trabalhador em andaime durante reforma de fachada.',
    category: 'Reforma',
    span: 'col-span-2 row-span-1',
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

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative bg-gray-50 py-32 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <ScrollReveal>
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-orange-100 to-orange-200 px-4 py-2 text-sm font-semibold text-orange-800 dark:from-orange-800 dark:to-orange-700 dark:text-orange-200"
            >
              Nossos Projetos
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <h2 className="font-display mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Projetos Reais, Soluções Eficientes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Confira alguns dos projetos onde a LD Andaimes garantiu segurança
              e eficiência.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid min-h-[700px] grid-cols-1 grid-rows-3 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl ${project.span}`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 group-hover:from-black/80" />
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-sm font-semibold text-white shadow-lg">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
