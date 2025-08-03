'use client';

import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    // Detectar se é necessário aplicar scroll suave
    const shouldApplySmoothScroll = () => {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    if (shouldApplySmoothScroll()) {
      // Aplicar scroll suave para toda a página
      document.documentElement.style.scrollBehavior = 'smooth';

      // Interceptar cliques em links âncora
      const handleAnchorClick = (e: Event) => {
        const target = e.target as HTMLAnchorElement;
        if (target.tagName === 'A' && target.hash) {
          e.preventDefault();
          const targetElement = document.querySelector(target.hash);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);

      return () => {
        document.removeEventListener('click', handleAnchorClick);
        document.documentElement.style.scrollBehavior = 'auto';
      };
    }
  }, []);
}
