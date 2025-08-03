'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface WhatsAppFloatProps {
  className?: string;
  phone?: string;
}

export function WhatsAppFloat({
  className,
  phone = '5551994647458',
}: WhatsAppFloatProps) {
  const [hasClicked, setHasClicked] = useState(true);

  useEffect(() => {
    const clicked = localStorage.getItem('whatsapp-clicked');
    if (!clicked) {
      setHasClicked(false);
    }
  }, []);

  const handleClick = () => {
    if (!hasClicked) {
      localStorage.setItem('whatsapp-clicked', 'true');
      setHasClicked(true);
    }
    // Abrir WhatsApp diretamente
    const message = encodeURIComponent(
      'Olá! Gostaria de solicitar um orçamento para andaimes.'
    );
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed right-6 bottom-6 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        duration: 0.8,
        delay: 2,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{
        scale: 1.1,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        size="lg"
        onClick={handleClick}
        className={cn(
          'h-16 w-16 rounded-full border-0 bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:from-green-600 hover:to-green-700 hover:shadow-2xl',
          className
        )}
        aria-label="Abrir chat do WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        {!hasClicked && (
          <motion.span
            className="absolute -top-1 -right-1 flex h-5 w-5"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold">
              1
            </span>
          </motion.span>
        )}
      </Button>
    </motion.div>
  );
}
