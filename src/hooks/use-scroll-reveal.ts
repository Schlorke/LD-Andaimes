'use client';

import type React from 'react';

import { useEffect, useRef } from 'react';
import {
  useInView,
  useAnimation,
  type AnimationControls,
  type TargetAndTransition,
} from 'framer-motion';

interface ScrollRevealResult {
  ref: React.RefObject<HTMLDivElement>;
  controls: AnimationControls;
  inView: boolean;
}

interface MotionVariants {
  hidden: TargetAndTransition;
  show: TargetAndTransition;
}

export function useScrollReveal(
  variants: MotionVariants,
  threshold = 0.25
): ScrollRevealResult {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return { ref, controls, inView };
}
