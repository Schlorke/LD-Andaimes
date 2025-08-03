'use client';

import { useEffect, ReactNode } from 'react';

interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
}

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    let lenis: LenisInstance | null = null;

    const initLenis = async () => {
      if (typeof window !== 'undefined') {
        try {
          const Lenis = (await import('lenis')).default;

          lenis = new Lenis({
            lerp: 0.08,
            duration: 1.5,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            infinite: false,
            autoResize: true,
            syncTouch: false,
            syncTouchLerp: 0.1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          }) as LenisInstance;

          function raf(time: number) {
            lenis?.raf(time);
            requestAnimationFrame(raf);
          }

          requestAnimationFrame(raf);
        } catch (error) {
          console.warn('Lenis not available:', error);
        }
      }
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
