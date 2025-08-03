# Guia do Storybook - LD Andaimes

Este guia explica como usar e contribuir com o Storybook do projeto LD Andaimes.

## 🚀 Começando

### Executar Storybook Local

\`\`\`bash
# Instalar dependências
pnpm install

# Executar Storybook (porta 6006)
pnpm storybook

# Build estático (para deploy)
pnpm build-storybook
\`\`\`

### Acessar o Storybook

- **Desenvolvimento**: <http://localhost:6006>
- **Build estático**: `storybook-static/index.html`

## 🏗️ Estrutura do Projeto

### Arquitetura Unificada

O projeto agora utiliza uma estrutura unificada em `src/` que elimina conflitos e duplicações:

\`\`\`text
src/
├── app/                   # Next.js App Router
│   ├── globals.css        # Estilos Tailwind v4
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/ui/         # Componentes shadcn/ui
│   ├── button.tsx         # 5 variantes
│   ├── hero.tsx           # 4 variantes
│   ├── card.tsx           # 3 variantes
│   └── badge.tsx          # Tags e badges
├── lib/
│   └── utils.ts           # Utilitários (cn, twMerge)
└── stories/               # Stories do Storybook
    ├── Button.stories.tsx
    ├── Hero.stories.tsx
    ├── LandingPage.stories.tsx
    └── Configure.mdx
\`\`\`

**Imports**: Todos os componentes são importados via `@/components/ui/` que resolve para `src/components/ui/`.

## 📚 Structure das Stories

### Organização Atual

\`\`\`text
src/stories/
├── Button.stories.tsx         # Componente Button com 5 variantes
├── Hero.stories.tsx          # Componente Hero com múltiplas configurações
├── LandingPage.stories.tsx   # Página completa com seções
├── Page.stories.ts           # Exemplos de página (template)
└── Header.stories.ts         # Header component (template)
\`\`\`

### Padrão de Nomenclatura

- **Namespace**: `LD Andaimes/[Categoria]/[Componente]`
- **Categorias**:
  - Componentes base: `LD Andaimes/Button`, `LD Andaimes/Hero`
  - Páginas: `LD Andaimes/Pages/Landing Page`
  - Templates: `Example/Page`, `Example/Header`

## 🧩 Criando Novas Stories

### Template Base

\`\`\`tsx
import type { Meta, StoryObj } from '@storybook/nextjs';
import { MeuComponente } from '@/components/ui/meu-componente';

const meta: Meta<typeof MeuComponente> = {
  title: 'LD Andaimes/MeuComponente',
  component: MeuComponente,
  parameters: {
    layout: 'centered', // ou 'fullscreen' para páginas
    docs: {
      description: {
        component: 'Descrição do componente e seu propósito.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Variante visual do componente',
    },
    // Desabilitar controles para props React
    onClick: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Exemplo',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Exemplo Secundário',
  },
};
\`\`\`

### Para Componentes com React Elements

Quando o componente aceita React elements como props, use `render`:

\`\`\`tsx
export const ComElementos: Story = {
  render: args => (
    <MeuComponente
      {...args}
      action={<Button variant="primary">Clique Aqui</Button>}
    />
  ),
};
\`\`\`

## ⚙️ Configurações Especiais

### Filtros Implementados

O projeto tem filtros configurados para prevenir erros com propriedades React:

**No `.storybook/main.ts`:**

\`\`\`ts
typescript: {
  reactDocgen: 'react-docgen-typescript',
  reactDocgenTypescriptOptions: {
    propFilter: (prop) => {
      // Excluir propriedades problemáticas
      return !['asChild', 'ref', 'key', '$$typeof'].includes(prop.name);
    },
  },
},
\`\`\`

**No `.storybook/preview.ts`:**

\`\`\`ts
// Decorator para filtrar símbolos
export const decorators = [withSafeProps];
\`\`\`

### Controles Desabilitados

Para evitar erros, desabilite controles para:

- Propriedades que são React elements
- Callbacks/functions
- Refs e propriedades internas do React

\`\`\`tsx
argTypes: {
  primaryAction: { table: { disable: true } },
  secondaryAction: { table: { disable: true } },
  onClick: { table: { disable: true } },
  className: { table: { disable: true } },
}
\`\`\`

## 📱 Testing Responsivo

### Viewports Configurados

As stories de página incluem configurações de viewport:

\`\`\`tsx
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};
\`\`\`

### Viewports Disponíveis

- `mobile`: 375px × 667px
- `tablet`: 768px × 1024px
- `desktop`: 1024px × 768px

## 🎯 Melhores Práticas

### 1. Component-Driven Development

Siga a hierarquia:

1. **Componentes Atômicos** (Button, Input, Badge)
2. **Componentes Compostos** (Hero, Card com conteúdo)
3. **Páginas Completas** (LandingPage, About)

### 2. Dados Mock Realistas

Use dados que representem casos reais:

\`\`\`tsx
export const Realistic: Story = {
  args: {
    title: 'LD Andaimes - Soluções Completas',
    subtitle:
      'Andaimes, escoramentos e acessórios para construção civil com mais de 20 anos de experiência.',
  },
};
\`\`\`

### 3. Documentação Rica

Inclua descrições detalhadas:

\`\`\`tsx
parameters: {
  docs: {
    description: {
      story: 'Esta variante é usada para ações primárias como CTAs principais.',
    },
  },
},
\`\`\`

### 4. Acessibilidade

Teste com o addon de acessibilidade habilitado:

- Verifique contraste de cores
- Teste navegação por teclado
- Valide estrutura semântica

## 🔧 Troubleshooting

### Erro "Cannot convert Symbol to string"

**Solução**: Usar `render` functions em vez de `args` para propriedades React:

\`\`\`tsx
// ❌ Evitar
export const Wrong: Story = {
  args: {
    action: <Button>Click</Button>, // Causa erro de Symbol
  },
};

// ✅ Correto
export const Right: Story = {
  render: args => <Component {...args} action={<Button>Click</Button>} />,
};
\`\`\`

### Erro "missing default export"

**Solução**: Verificar se o `export default meta` está presente:

\`\`\`tsx
const meta: Meta<typeof Component> = {
  /* config */
};
export default meta; // ← Essencial
\`\`\`

### Hot Reload Problemas

**Solução**: Limpar cache e reiniciar:

\`\`\`bash
# Parar Storybook
# Limpar cache
rm -rf .next storybook-static node_modules/.cache

# Reiniciar
pnpm storybook
\`\`\`

## 📖 Recursos Adicionais

- [Documentação oficial do Storybook](https://storybook.js.org/docs)
- [Storybook para Next.js](https://storybook.js.org/docs/get-started/nextjs)
- [Component Story Format](https://storybook.js.org/docs/api/csf)
- [Addon Docs](https://storybook.js.org/docs/writing-docs/autodocs)
