import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "@/components/ui/hero"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

const meta: Meta<typeof Hero> = {
  title: "LD Andaimes/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Andaimes e Escoramentos de Qualidade",
    subtitle:
      "Soluções completas para construção civil com segurança e eficiência. Locação e venda com entrega rápida.",
    primaryAction: (
      <Button variant="primary" size="lg">
        <Phone className="w-5 h-5" />
        Solicitar Orçamento
      </Button>
    ),
    secondaryAction: (
      <Button variant="secondary" size="lg">
        Ver Catálogo
        <ArrowRight className="w-5 h-5" />
      </Button>
    ),
  },
}

export const Gradient: Story = {
  args: {
    variant: "gradient",
    title: "Construa com Segurança",
    subtitle:
      "Andaimes profissionais para obras de todos os tamanhos. Qualidade garantida e suporte técnico especializado.",
    primaryAction: (
      <Button variant="accent" size="lg">
        Fale Conosco
      </Button>
    ),
    secondaryAction: (
      <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
        Saiba Mais
      </Button>
    ),
  },
}

export const WithBackgroundImage: Story = {
  args: {
    variant: "image",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    title: "Especialistas em Andaimes",
    subtitle: "Mais de 20 anos fornecendo soluções seguras para a construção civil.",
    primaryAction: (
      <Button variant="primary" size="xl">
        Solicitar Visita Técnica
      </Button>
    ),
  },
}

export const Minimal: Story = {
  args: {
    variant: "minimal",
    size: "sm",
    title: "Locação de Andaimes",
    subtitle: "Equipamentos certificados e equipe especializada.",
    primaryAction: <Button variant="primary">Ver Produtos</Button>,
  },
}

export const Large: Story = {
  args: {
    size: "xl",
    title: "LD Andaimes",
    subtitle:
      "Sua obra em boas mãos. Andaimes, escoramentos e acessórios para construção civil com qualidade e segurança garantidas.",
    primaryAction: (
      <Button variant="primary" size="xl">
        <Phone className="w-6 h-6" />
        (11) 9999-9999
      </Button>
    ),
    secondaryAction: (
      <Button variant="secondary" size="xl">
        Catálogo Digital
        <ArrowRight className="w-6 h-6" />
      </Button>
    ),
  },
}
