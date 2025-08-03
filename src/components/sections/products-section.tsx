"use client"

import type React from "react"

import { Building2, Wrench, Shield, Truck, HardHat, StepBackIcon as Stairs } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const products = [
  {
    id: "fachadeiros",
    title: "Andaimes Fachadeiros",
    description: "Estruturas metálicas para reformas e pinturas de fachadas com segurança e mobilidade.",
    icon: Building2,
    features: ["Reformas externas", "Instalação de revestimentos", "Manutenção de fachadas"],
    badge: "Mais Popular",
  },
  {
    id: "torres",
    title: "Torres de Serviço",
    description: "Andaimes modulares com rodízios para trabalhos pontuais em altura.",
    icon: Wrench,
    features: ["Trabalhos internos/externos", "Manutenção elétrica", "Acesso pontual"],
    badge: null,
  },
  {
    id: "escoras",
    title: "Escoras Metálicas",
    description: "Equipamentos de aço para sustentação temporária com altura ajustável.",
    icon: Shield,
    features: ["Apoio de fôrmas", "Sustentação estrutural", "Alta resistência"],
    badge: null,
  },
  {
    id: "chapas",
    title: "Chapas Tapa Vala",
    description: "Placas metálicas para cobertura de valas em obras urbanas.",
    icon: Truck,
    features: ["Proteção de trabalhadores", "Evita acidentes", "Suporta veículos"],
    badge: null,
  },
  {
    id: "bandejas",
    title: "Bandejas de Proteção",
    description: "Acessórios de segurança para extremidades dos pavimentos do andaime.",
    icon: HardHat,
    features: ["Contém queda de materiais", "Protege pedestres", "Organiza espaço"],
    badge: "Obrigatório",
  },
  {
    id: "escadas",
    title: "Escadas para Andaime",
    description: "Acessórios para acesso seguro entre níveis do andaime.",
    icon: Stairs,
    features: ["Acesso seguro", "Facilita trabalho", "Item essencial"],
    badge: null,
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

interface ProductsSectionProps {
  className?: string
}

export function ProductsSection({ className }: ProductsSectionProps) {
  return (
    <section id="produtos" className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">
              Nossos Produtos
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 font-display">
              Soluções Completas em Andaimes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Equipamentos certificados e normatizados para máxima segurança em obras de todos os tamanhos
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <ScrollReveal key={product.id} delay={index * 0.1}>
                <Card className="relative group hover:shadow-xl transition-all duration-500 h-full flex flex-col transform hover:scale-[1.02]">
                  {product.badge && (
                    <Badge
                      variant={product.badge === "Mais Popular" ? "default" : "warning"}
                      className="absolute -top-2 -right-2 z-10 bg-orange-500 text-white"
                    >
                      {product.badge}
                    </Badge>
                  )}

                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors">
                        <Icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{product.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base text-gray-600">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col justify-between">
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-orange-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="outline"
                      className="w-full mt-auto group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href="https://wa.me/5551994647458?text=Olá! Gostaria de uma cotação para andaimes.">
                        Solicitar Cotação
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Ver Catálogo Completo
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
