"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Wrench, Clock } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Andaimes Fachadeiros",
    description: "Sistema modular completo para trabalhos em fachadas, garantindo máxima segurança e produtividade.",
    image: "/images/andaime-fachadeiro.jpg",
    features: ["Montagem rápida", "Alta resistência", "Certificado"],
    icon: Shield,
  },
  {
    id: 2,
    name: "Torres de Serviço",
    description: "Torres móveis ideais para manutenção e serviços em altura, com fácil movimentação.",
    image: "/images/torre-servico.jpg",
    features: ["Mobilidade", "Estabilidade", "Versatilidade"],
    icon: Wrench,
  },
  {
    id: 3,
    name: "Escoras Metálicas",
    description: "Suporte estrutural robusto para lajes e vigas, garantindo segurança durante a construção.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Suporte robusto", "Ajuste preciso", "Durabilidade"],
    icon: Clock,
  },
]

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function ProductsSection() {
  return (
    <section id="produtos" className="py-32 relative wave-divider">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 text-sm font-semibold text-primary-800"
            >
              Nossos Produtos
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Soluções completas para sua obra
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Equipamentos certificados e de alta qualidade para garantir a segurança e eficiência do seu projeto.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <ScrollReveal key={product.id} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm shadow-card-3d hover:shadow-card-3d-hover transition-all duration-300 border-0">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-primary-500 p-2 rounded-lg shadow-3d">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors duration-300"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300 bg-transparent"
                      >
                        Saiba mais
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center mt-12">
            <Button size="lg">
              Ver todos os produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
