import type { Meta, StoryObj } from "@storybook/nextjs"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

const meta: Meta<typeof LoadingSpinner> = {
  title: "LD Andaimes/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Componente LoadingSpinner para indicar carregamento com diferentes tamanhos e variantes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Tamanho do spinner",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "accent", "muted"],
      description: "Variante de cor do spinner",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: "md",
    variant: "default",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <LoadingSpinner size="sm" />
      <LoadingSpinner size="md" />
      <LoadingSpinner size="lg" />
      <LoadingSpinner size="xl" />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <LoadingSpinner variant="default" />
      <LoadingSpinner variant="accent" />
      <LoadingSpinner variant="muted" />
    </div>
  ),
}
