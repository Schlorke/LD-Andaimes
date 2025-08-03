/**
 * Motion tokens for consistent animations across the application.
 */
export const motionTokens = {
  durations: {
    fast: 0.2,
    base: 0.4,
    slow: 0.8,
  },
  easing: [0.22, 1, 0.36, 1],
} as const;

/**
 * Variants for Framer Motion animations.
 */
export const motionVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: motionTokens.durations.base,
        ease: motionTokens.easing,
      },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.durations.base,
        ease: motionTokens.easing,
      },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: motionTokens.durations.fast,
        ease: motionTokens.easing,
      },
    },
  },
} as const;
