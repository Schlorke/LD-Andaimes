'use client';

import type React from 'react';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    src: '/images/projeto-construcao-ampla.jpg',
    alt: 'Ampla estrutura de andaimes em grande obra de construção civil.',
    category: 'Construção Pesada',
  },
  {
    src: '/images/projeto-restauracao-historica.jpg',
    alt: 'Andaimes na fachada de um prédio histórico em restauração.',
    category: 'Restauração',
  },
  {
    src: '/images/projeto-residencial-moderno.jpg',
    alt: 'Andaimes em um edifício residencial moderno de múltiplos andares.',
    category: 'Residencial',
  },
  {
    src: '/images/projeto-seguranca-total.jpg',
    alt: 'Edifício com andaimes e telas de proteção laranja.',
    category: 'Segurança',
  },
  {
    src: '/images/projeto-manutencao-fachada.jpg',
    alt: 'Andaimes para manutenção da fachada de um prédio.',
    category: 'Manutenção',
  },
  {
    src: '/images/projeto-reforma-predial.jpg',
    alt: 'Trabalhador em andaime durante reforma de fachada.',
    category: 'Reforma',
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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev + 1) % projects.length : 0
    );
  };

  const prevImage = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev - 1 + projects.length) % projects.length : 0
    );
  };
  return (
    <section id="portfolio" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900"></div>
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
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
            <h2 className="font-display mb-6 text-responsive-4xl font-bold tracking-tight text-white">
              Projetos Reais, Soluções Eficientes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="mx-auto max-w-3xl text-responsive-lg leading-relaxed text-white/90">
              Confira alguns dos projetos onde a LD Andaimes garantiu segurança
              e eficiência.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => openModal(index)}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 group-hover:from-black/80" />
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-sm font-semibold text-white shadow-lg">
                    {project.category}
                  </Badge>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal de Galeria */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-[95vw] max-h-[95vh] mx-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={projects[selectedImage].src}
                alt={projects[selectedImage].alt}
                fill
                className="object-contain rounded-lg"
                sizes="95vw"
              />
              
              {/* Botão Fechar */}
              <motion.div
                className="absolute top-4 right-4 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300 h-10 w-10 p-0"
                  onClick={closeModal}
                >
                  <X className="h-5 w-5 opacity-90" />
                </Button>
              </motion.div>
              
              {/* Navegação Anterior */}
              <motion.div
                className="absolute top-1/2 left-4 -translate-y-1/2 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300 h-12 w-12 p-0"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6 opacity-90" />
                </Button>
              </motion.div>
              
              {/* Navegação Próxima */}
              <motion.div
                className="absolute top-1/2 right-4 -translate-y-1/2 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300 h-12 w-12 p-0"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6 opacity-90" />
                </Button>
              </motion.div>
              
              {/* Categoria */}
              <div className="absolute bottom-4 left-4 z-10">
                <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-sm font-semibold text-white shadow-lg">
                  {projects[selectedImage].category}
                </Badge>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
