import type { Meta, StoryObj } from '@storybook/nextjs';
import { ProductsSection } from '@/components/sections/products-section';

const meta: Meta<typeof ProductsSection> = {
  title: 'LD Andaimes/Sections/ProductsSection',
  component: ProductsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Seção completa de produtos da LD Andaimes com grid responsivo e cards interativos.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};
