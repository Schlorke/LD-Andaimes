'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroVariants = cva(
  'relative flex flex-col items-center justify-center text-center px-4 overflow-hidden',
  {
    variants: {
      size: {
        md: 'min-h-[100vh] pt-20',
        lg: 'min-h-screen pt-20',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
);

const carouselImages = [
  {
    src: '/images/hero-background.jpg',
    alt: 'Andaimes profissionais em obra',
  },
  {
    src: '/images/andaime-fachadeiro.jpg',
    alt: 'Andaime fachadeiro em prédio',
  },
  {
    src: '/images/torre-servico.jpg',
    alt: 'Torre de serviço móvel',
  },
  {
    src: '/images/entrega-andaimes.jpg',
    alt: 'Entrega de equipamentos',
  },
];

export interface HeroProps extends VariantProps<typeof heroVariants> {
  className?: string;
  title: React.ReactNode;
  subtitle?: string;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    { className, size, title, subtitle, primaryAction, secondaryAction },
    ref
  ) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(prev => (prev + 1) % carouselImages.length);
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    return (
      <section ref={ref} className={cn(heroVariants({ size, className }))}>
        {/* Carrossel de fundo */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={carouselImages[currentImage].src || '/placeholder.svg'}
                alt={carouselImages[currentImage].alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradiente melhorado */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-orange-900/60" />
        </div>

        {/* Efeito ondulado no final do carrossel */}
        <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-20 w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120V53.71c47.79,-22.2,103.59,-32.17,158,-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,67.57,512.34,46.33,583,27.95c69.27,-18,138.3,-24.88,209.4,-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,75,1113,114.29,1200,47.53V120Z"
              opacity="0.3"
              fill="oklch(0.98 0.005 120)"
            />
            <path
              d="M0,120V104.19C13,83.08,27.64,63.14,47.69,47.95,99.41,8.73,165,9,224.58,28.42c31.15,10.15,60.09,26.07,89.67,39.8,40.92,19,84.73,46,130.83,49.67,36.26,2.85,70.9,-9.42,98.6,-31.56,31.77,-25.39,62.32,-62,103.63,-73,40.44,-10.79,81.35,6.69,119.13,24.28s75.16,39,116.92,43.05c59.73,5.85,113.28,-22.88,168.9,-38.84,30.2,-8.66,59,-6.17,87.09,7.5,22.43,10.89,48,26.93,60.65,49.24V120Z"
              opacity="0.6"
              fill="oklch(0.98 0.005 120)"
            />
            <path
              d="M0,120V114.37C149.93,61,314.09,48.68,475.83,77.43c43,7.64,84.23,20.12,127.61,26.46,59,8.63,112.48,-12.24,165.56,-35.4C827.93,42.78,886,24.76,951.2,30c86.53,7,172.46,45.71,248.8,84.81V120Z"
              fill="oklch(0.98 0.005 120)"
            />
          </svg>
        </div>

        {/* Indicadores do carrossel */}
        <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 transform space-x-3">
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              className={cn(
                'h-3 w-3 rounded-full transition-all duration-500',
                currentImage === index
                  ? 'scale-125 bg-orange-500 shadow-lg'
                  : 'bg-white/60 hover:bg-white/80'
              )}
              onClick={() => setCurrentImage(index)}
              aria-label={`Ir para imagem ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <motion.h1
            className="mb-8 text-4xl leading-tight font-bold drop-shadow-2xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/90 drop-shadow-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryAction || secondaryAction) && (
            <motion.div
              className="flex flex-col items-center justify-center gap-6 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {primaryAction}
              {secondaryAction}
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);
Hero.displayName = 'Hero';

export { Hero, heroVariants };
