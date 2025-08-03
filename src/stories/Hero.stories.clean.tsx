import type { Meta, StoryObj } from '@storybook/nextjs';
import { Hero } from '@/components/ui/hero';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Hero> = {
  title: 'LD Andaimes/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Componente Hero para seções principais com título, subtítulo e ações.',
      },
    },
    // Desabilitar controles para props que são elementos React
    controls: {
      exclude: [
        'primaryAction',
        'secondaryAction',
        'className',
        'backgroundImage',
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'gradient', 'image', 'minimal'],
      description: 'Variante visual do hero',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do hero',
    },
    title: {
      control: { type: 'text' },
      description: 'Título principal do hero',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Subtítulo do hero',
    },
    // Desabilitar controles para ações (são elementos React)
    primaryAction: { table: { disable: true } },
    secondaryAction: { table: { disable: true } },
    backgroundImage: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Hero
      {...args}
      title="Andaimes e Escoramentos de Qualidade"
      subtitle="Soluções completas para construção civil com segurança e eficiência. Locação e venda com entrega rápida."
      primaryAction={
        <Button variant="primary" size="lg">
          <Phone className="h-5 w-5" />
          Solicitar Orçamento
        </Button>
      }
      secondaryAction={
        <Button variant="secondary" size="lg">
          Ver Catálogo
          <ArrowRight className="h-5 w-5" />
        </Button>
      }
    />
  ),
};

export const Gradient: Story = {
  render: args => (
    <Hero
      {...args}
      variant="gradient"
      title="Construa com Segurança"
      subtitle="Andaimes profissionais para obras de todos os tamanhos. Qualidade garantida e suporte técnico especializado."
      primaryAction={
        <Button variant="accent" size="lg">
          Fale Conosco
        </Button>
      }
      secondaryAction={
        <Button variant="ghost" size="lg">
          Saiba Mais
        </Button>
      }
    />
  ),
};

export const WithBackgroundImage: Story = {
  render: args => (
    <Hero
      {...args}
      variant="image"
      title="Equipamentos de Qualidade"
      subtitle="Andaimes e escoramentos certificados para máxima segurança em obras."
      backgroundImage="/placeholder.jpg"
      primaryAction={
        <Button variant="accent" size="lg">
          <Phone className="h-5 w-5" />
          Contato Direto
        </Button>
      }
    />
  ),
};

export const Minimal: Story = {
  render: args => (
    <Hero
      {...args}
      variant="minimal"
      title="Especialistas em Andaimes"
      subtitle="Mais de 20 anos fornecendo soluções seguras para a construção civil."
      primaryAction={
        <Button variant="primary" size="xl">
          Solicitar Visita Técnica
        </Button>
      }
    />
  ),
};

export const Large: Story = {
  render: args => (
    <Hero
      {...args}
      size="xl"
      title="LD Andaimes"
      subtitle="Sua obra em boas mãos. Andaimes, escoramentos e acessórios para construção civil com qualidade e segurança garantidas."
      primaryAction={
        <Button variant="primary" size="xl">
          <Phone className="h-6 w-6" />
          (51) 99464-7458
        </Button>
      }
      secondaryAction={
        <Button variant="secondary" size="xl">
          Ver Todos os Produtos
        </Button>
      }
    />
  ),
};
