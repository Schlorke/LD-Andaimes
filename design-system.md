# Design System LD Andaimes 🚧

Sistema de design para a plataforma de locação/venda de andaimes e escoramentos da LD Andaimes.

## 📚 Storybook

O design system está completamente documentado no **Storybook 9.1.0**:

```bash
# Executar Storybook local
pnpm storybook
# Abre http://localhost:6006

# Build estático do Storybook
pnpm build-storybook
```

### Stories Disponíveis

- **LD Andaimes/Button** - Sistema de botões com 5 variantes
- **LD Andaimes/Hero** - Componente hero com 5 configurações
- **LD Andaimes/Pages/Landing Page** - Página completa com seções

## 🎨 Foundations

### Design Tokens

#### Cores

```css
/* Primary - Laranja LD Andaimes */
--ld-orange-50: #fff7ed;
--ld-orange-100: #ffedd5;
--ld-orange-200: #fed7aa;
--ld-orange-300: #fdba74;
--ld-orange-400: #fb923c;
--ld-orange-500: #e36a00; /* Primary */
--ld-orange-600: #ea580c;
--ld-orange-700: #c2410c;
--ld-orange-800: #9a3412;
--ld-orange-900: #7c2d12;

/* Accent - Amarelo Construção */
--ld-yellow-50: #fffbeb;
--ld-yellow-100: #fef3c7;
--ld-yellow-200: #fde68a;
--ld-yellow-300: #fcd34d;
--ld-yellow-400: #ffaa33; /* Accent */
--ld-yellow-500: #f59e0b;
--ld-yellow-600: #d97706;

/* Neutros - Concreto */
--ld-gray-50: #f9fafb;
--ld-gray-100: #f3f4f6;
--ld-gray-200: #e5e7eb;
--ld-gray-300: #d1d5db;
--ld-gray-400: #9ca3af;
--ld-gray-500: #6b7280;
--ld-gray-600: #4b5563;
--ld-gray-700: #374151;
--ld-gray-800: #1f2937;
--ld-gray-900: #111827;
```

#### Tipografia

- **Display**: Jost (headings, hero)
- **Body**: Inter (parágrafos, UI)
- **Mono**: JetBrains Mono (código, dados técnicos)

#### Espaçamentos

Escala baseada em 4px (Tailwind padrão):

- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px

#### Border Radius

- sm: 4px, md: 8px, lg: 12px, xl: 16px

## 🧱 Componentes

### Hero

Seção principal da landing page com CTAs.

**Variantes:**

- `default` - Fundo branco, texto escuro
- `gradient` - Gradiente laranja/amarelo
- `image` - Com imagem de fundo
- `minimal` - Layout limpo e minimalista

**Tamanhos:**

- `sm`, `md`, `lg`, `xl`

### Button

Botão principal do sistema com múltiplas variantes.

**Variantes:**

- `primary` - Laranja LD (#E36A00)
- `secondary` - Outline laranja
- `accent` - Amarelo construção (#FFAA33)
- `ghost` - Transparente com hover
- `destructive` - Vermelho para ações críticas

**Tamanhos:**

- `sm`, `md`, `lg`, `xl`

### Card

Container para conteúdo estruturado.

**Variantes:**

## 🧩 Componentes Implementados

### Button Component

Sistema robusto de botões com 5 variantes principais:

**Variantes disponíveis:**

- `primary` - Ação principal (laranja LD)
- `secondary` - Ação secundária
- `accent` - Destaque especial (amarelo)
- `ghost` - Ação sutil, transparente
- `destructive` - Ações de remoção/cancelamento

**Tamanhos:** `sm`, `md`, `lg`, `xl`

**Estados:** default, hover, active, disabled

**Exemplo:**

```tsx
<Button variant="primary" size="lg">
  <Phone className="h-5 w-5" />
  Solicitar Orçamento
</Button>
```

### Hero Component

Componente para seções principais com CTA integrado:

**Variantes:**

- `default` - Layout padrão com fundo neutro
- `gradient` - Gradiente LD Andaimes
- `image` - Com imagem de fundo
- `minimal` - Versão simplificada

**Tamanhos:** `sm`, `md`, `lg`, `xl`

**Props principais:**

- `title` - Título principal
- `subtitle` - Descrição/subtítulo
- `primaryAction` - Botão principal (React element)
- `secondaryAction` - Botão secundário (React element)
- `backgroundImage` - URL da imagem de fundo

### Card Component

Container flexível para conteúdo agrupado.

**Variantes:**

- `default` - Borda sutil
- `elevated` - Sombra pronunciada
- `outlined` - Borda destacada

### Badge

Indicadores de status e categorias.

**Variantes:**

- `default`, `secondary`, `success`, `warning`, `error`, `info`

### Páginas Completas

#### LandingPage

Demonstração completa de component-driven development:

- **Hero Section** - Título, subtítulo e CTAs
- **Services Section** - Grid de serviços com ícones
- **CTA Section** - Chamada final para ação

**Stories disponíveis:**

- `Default` - Versão completa
- `Mobile` - Otimizada para mobile
- `Alternative` - Dados mock alternativos

## 🔧 Utilitários

### cn() function

Função utilitária para combinar classes CSS:

```tsx
import { cn } from '@/lib/utils';

// Combina classes condicionalmente
const buttonClass = cn(
  'base-class',
  variant === 'primary' && 'primary-class',
  disabled && 'disabled-class'
);
```

**Tecnologias:**

- `clsx` - Combinação condicional de classes
- `tailwind-merge` - Merge inteligente de classes Tailwind

### Input

Campos de entrada com validação.

**Estados:**

- Default, Focus, Error, Disabled

### Dialog/Modal

Sobreposições para ações importantes.

## ♿ Acessibilidade

### Checklist WCAG 2.2 AA+

- [x] Contraste mínimo 4.5:1 (textos)
- [x] Contraste mínimo 3:1 (elementos gráficos)
- [x] Focus visível em todos os elementos interativos
- [x] Navegação por teclado completa
- [x] ARIA labels e roles apropriados
- [x] Textos alternativos para imagens
- [x] Estrutura semântica HTML5

### Guidelines

1. **Cores**: Nunca usar apenas cor para transmitir informação
2. **Foco**: Ring laranja (#E36A00) com 2px de espessura
3. **Texto**: Mínimo 16px em dispositivos móveis
4. **Toque**: Área mínima 44x44px para elementos interativos

## 📐 Guidelines

### Nomenclatura

- Componentes: PascalCase (`Button`, `HeroSection`)
- Props: camelCase (`variant`, `isLoading`)
- CSS Classes: kebab-case (`btn-primary`, `hero-section`)

### Theming

Sistema baseado em CSS Custom Properties para suporte a tema escuro futuro.

### Responsividade

Mobile-first com breakpoints Tailwind:

- sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

## 🗺️ Roadmap

### Fase 1 - MVP (Atual)

- [x] Design tokens
- [x] Componentes base (Button, Card, Input)
- [x] Hero section
- [x] Documentação Storybook

### Fase 2 - Landing Page

- [ ] Navigation/Header
- [ ] Footer
- [ ] Testimonials
- [ ] Pricing cards
- [ ] Contact forms

### Fase 3 - Plataforma B2B

- [ ] Dashboard components
- [ ] Data tables
- [ ] Charts/Analytics
- [ ] Authentication flows

## 📊 Métricas

### Performance

- Bundle size: < 50kb (tree-shaken)
- First Paint: < 1.5s
- Lighthouse Score: 95+

### Acessibilidade

- WAVE: 0 erros
- axe-core: AAA quando possível
- Keyboard navigation: 100%

### Qualidade

- TypeScript strict mode
- 90%+ test coverage
- Storybook stories para todos os componentes
