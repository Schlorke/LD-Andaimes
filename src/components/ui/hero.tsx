"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Image from "next/image"

const heroVariants = cva("relative flex flex-col items-center justify-center text-center px-4 overflow-hidden", {
  variants: {
    size: {
      md: "min-h-[80vh] py-24",
      lg: "min-h-screen py-32",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

const carouselImages = [
  {
    src: "/images/hero-background.jpg",
    alt: "Andaimes profissionais em obra",
  },
  {
    src: "/images/andaime-fachadeiro.jpg",
    alt: "Andaime fachadeiro em prédio",
  },
  {
    src: "/images/torre-servico.jpg",
    alt: "Torre de serviço móvel",
  },
  {
    src: "/images/entrega-andaimes.jpg",
    alt: "Entrega de equipamentos",
  },
]

export interface HeroProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof heroVariants> {
  title: React.ReactNode
  subtitle?: string
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, size, title, subtitle, primaryAction, secondaryAction, ...props }, ref) => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length)
      }, 5000)

      return () => clearInterval(interval)
    }, [])

    return (
      <section ref={ref} className={cn(heroVariants({ size, className }))} {...props}>
        {/* Carrossel de fundo */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <Image
                src={carouselImages[currentImage].src || "/placeholder.svg"}
                alt={carouselImages[currentImage].alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-orange-900/60" />
        </div>

        {/* Indicadores do carrossel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentImage === index ? "bg-orange-500 scale-125" : "bg-white/50",
              )}
              onClick={() => setCurrentImage(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl drop-shadow-2xl">{title}</h1>

          {subtitle && (
            <p className="mx-auto mb-12 max-w-3xl text-lg text-white/90 md:text-xl leading-relaxed drop-shadow-lg">
              {subtitle}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              {primaryAction}
              {secondaryAction}
            </div>
          )}
        </div>
      </section>
    )
  },
)
Hero.displayName = "Hero"

export { Hero, heroVariants }
