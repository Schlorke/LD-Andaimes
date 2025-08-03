'use client';

import type React from 'react';

import { motion, type Variants } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { motionVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  variants = motionVariants.slideUp,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollReveal(variants, threshold);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
