import type { Meta, StoryObj } from '@storybook/nextjs';
import { Hero } from '@/components/ui/hero';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, ArrowRight, Shield, Truck, Clock, Star } from 'lucide-react';

// Mock de uma página de landing completa
const LandingPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="xl"
        title="LD Andaimes - Soluções Completas"
        subtitle="Andaimes, escoramentos e acessórios para construção civil com mais de 20 anos de experiência. Qualidade, segurança e entrega garantida."
        primaryAction={
          <Button variant="primary" size="xl">
            <Phone className="h-6 w-6" />
            (51) 99464-7458
          </Button>
        }
        secondaryAction={
          <Button variant="secondary" size="xl">
            Ver Catálogo Completo
            <ArrowRight className="h-6 w-6" />
          </Button>
        }
      />

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Nossos Serviços
          </Badge>
          <h2 className="mb-4 text-3xl font-bold">
            Por que escolher a LD Andaimes?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Oferecemos soluções completas com qualidade certificada e suporte
            técnico especializado
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 text-center">
            <Shield className="text-primary mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 font-semibold">Segurança Certificada</h3>
            <p className="text-muted-foreground text-sm">
              Equipamentos certificados e em conformidade com normas de
              segurança
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Truck className="text-primary mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 font-semibold">Entrega Rápida</h3>
            <p className="text-muted-foreground text-sm">
              Logística eficiente com entrega no prazo em toda a região
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Clock className="text-primary mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 font-semibold">Suporte 24/7</h3>
            <p className="text-muted-foreground text-sm">
              Assistência técnica especializada sempre disponível
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Star className="text-primary mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 font-semibold">20+ Anos</h3>
            <p className="text-muted-foreground text-sm">
              Experiência consolidada no mercado de construção civil
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Entre em contato conosco e receba um orçamento personalizado para
            suas necessidades
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg">
              <Phone className="h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button variant="secondary" size="lg">
              Baixar Catálogo PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof LandingPage> = {
  title: 'LD Andaimes/Pages/Landing Page',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Página de landing completa da LD Andaimes demonstrando component-driven development com dados mock.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Versão completa da landing page com todos os elementos e seções.',
      },
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
    docs: {
      description: {
        story: 'Landing page otimizada para visualização mobile.',
      },
    },
  },
};

export const Alternative: Story = {
  render: () => (
    <div className="bg-background min-h-screen">
      <Hero
        variant="image"
        size="lg"
        title="Locação de Andaimes Profissionais"
        subtitle="Equipamentos de alta qualidade para obras seguras e eficientes. Atendimento especializado e preços competitivos."
        backgroundImage="/placeholder.jpg"
        primaryAction={
          <Button variant="accent" size="lg">
            <Phone className="h-5 w-5" />
            Contato Direto
          </Button>
        }
        secondaryAction={
          <Button variant="ghost" size="lg">
            Saiba Mais
          </Button>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Versão alternativa da landing page demonstrando como usar diferentes dados mock.',
      },
    },
  },
};
