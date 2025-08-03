import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Phone } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'LD Andaimes/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Button customizado para LD Andaimes com variantes específicas do design system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Solicitar Orçamento',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Ver Catálogo',
    variant: 'secondary',
  },
};

export const Accent: Story = {
  args: {
    children: 'Destaque',
    variant: 'accent',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Download className="h-4 w-4" />
        Download Catálogo
      </>
    ),
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Carregando...',
    disabled: true,
    variant: 'primary',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Pequeno</Button>
      <Button size="md">Médio</Button>
      <Button size="lg">Grande</Button>
      <Button size="xl">Extra Grande</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const CTAButtons: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button variant="primary" size="lg">
        <Phone className="h-5 w-5" />
        Fale Conosco
      </Button>
      <Button variant="secondary" size="lg">
        Ver Produtos
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  ),
};
