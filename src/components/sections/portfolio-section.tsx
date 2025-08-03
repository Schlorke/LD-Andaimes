"use client"

import type React from "react"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    src: "/images/projeto-construcao-ampla.jpg",
    alt: "Ampla estrutura de andaimes em grande obra de construção civil.",
    category: "Construção Pesada",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/projeto-restauracao-historica.jpg",
    alt: "Andaimes na fachada de um prédio histórico em restauração.",
    category: "Restauração",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/projeto-residencial-moderno.jpg",
    alt: "Andaimes em um edifício residencial moderno de múltiplos andares.",
    category: "Residencial",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/projeto-seguranca-total.jpg",
    alt: "Edifício com andaimes e telas de proteção laranja.",
    category: "Segurança",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/projeto-manutencao-fachada.jpg",
    alt: "Andaimes para manutenção da fachada de um prédio.",
    category: "Manutenção",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/projeto-reforma-predial.jpg",
    alt: "Trabalhador em andaime durante reforma de fachada.",
    category: "Reforma",
    span: "col-span-2 row-span-1",
  },
]

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">
              Nossos Projetos
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 font-display">
              Projetos Reais, Soluções Eficientes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Confira alguns dos projetos onde a LD Andaimes garantiu segurança e eficiência.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 h-[600px]">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className={`relative rounded-lg overflow-hidden group cursor-pointer ${project.span}`}>
                <Image
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-orange-500 text-white">{project.category}</Badge>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
