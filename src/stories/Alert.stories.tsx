import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcons,
} from '@/components/ui/alert';

const meta: Meta<typeof Alert> = {
  title: 'LD Andaimes/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Alert para exibir mensagens importantes com diferentes variantes visuais.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'info'],
      description: 'Variante visual do alert',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => {
    const Icon = AlertIcons.success;
    return (
      <Alert variant="success" className="max-w-md">
        <Icon className="h-4 w-4" />
        <AlertTitle>Sucesso!</AlertTitle>
        <AlertDescription>
          Seu orçamento foi enviado com sucesso. Entraremos em contato em breve.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const Icon = AlertIcons.warning;
    return (
      <Alert variant="warning" className="max-w-md">
        <Icon className="h-4 w-4" />
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>
          Verifique se todos os equipamentos estão devidamente instalados antes
          de iniciar o trabalho.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Error: Story = {
  render: () => {
    const Icon = AlertIcons.error;
    return (
      <Alert variant="destructive" className="max-w-md">
        <Icon className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>
          Não foi possível processar sua solicitação. Tente novamente ou entre
          em contato.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Info: Story = {
  render: () => {
    const Icon = AlertIcons.info;
    return (
      <Alert variant="info" className="max-w-md">
        <Icon className="h-4 w-4" />
        <AlertTitle>Informação</AlertTitle>
        <AlertDescription>
          Nosso horário de atendimento é de segunda a sexta, das 8h às 18h.
        </AlertDescription>
      </Alert>
    );
  },
};
