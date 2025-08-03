# LD Andaimes • Agents Guide

> Single source of truth for all AIs working on this project

## 1. Propósito

**LD Andaimes** é uma plataforma digital para locação e venda de andaimes e escoramentos, desenvolvida com foco em:

- 🏗️ **B2B**: Construtoras e empresas do setor
- 📱 **Responsividade**: Mobile-first design
- ♿ **Acessibilidade**: WCAG 2.2 AA compliance
- 🚀 **Performance**: Core Web Vitals otimizados

### Objetivos

- Digitalizar processo de locação/venda
- Interface intuitiva para gestão de equipamentos
- Sistema de cotações e pedidos online
- Dashboard analítico para tomada de decisões

## 2. Stack Atual (Agosto 2025)

### Frontend Core

- **Next.js 15.4** (App Router) + **React 19**
- **TypeScript 5.9.2** (strict mode)
- **Tailwind CSS 4.1.11** + PostCSS nesting
- **shadcn/ui** (Radix UI v2 primitives)

### Development & Testing

- **Storybook 9.1** (builder-webpack5)
- **Vitest 3** + **Playwright 1.54**
- **ESLint 9** + **Prettier 3.6**

### Backend & Database

- **Node.js 22 LTS**
- **Prisma 5** ORM
- **PostgreSQL 17** (Supabase hosting)

### CI/CD & Deployment

- **Turborepo** (monorepo management)
- **GitHub Actions** (CI/CD pipeline)
- **Vercel** (hosting & deployment)

## 3. Tokens de Design

### 🎨 Paleta de Cores (Light Mode)

| Token         | HSL           | Hex       | Uso                     |
| ------------- | ------------- | --------- | ----------------------- |
| `primary`     | `24 88% 45%`  | `#E36A00` | CTAs, botões principais |
| `accent`      | `30 100% 60%` | `#FFAA33` | Hovers, destaques       |
| `neutral-900` | `0 0% 12%`    | `#1F1F1F` | Texto principal         |
| `neutral-50`  | `0 0% 98%`    | `#FAFAFA` | Fundo principal         |
| `success`     | `151 60% 40%` | `#10B981` | Estados de sucesso      |
| `warning`     | `45 100% 50%` | `#F59E0B` | Alertas                 |
| `danger`      | `0 75% 50%`   | `#EF4444` | Erros críticos          |

### 📝 Tipografia

- **Display/Headers**: **Jost** (Google Fonts)
- **Body/UI**: **Inter** (Google Fonts)
- **Mono/Code**: **JetBrains Mono** (Google Fonts)

### 📐 Espaçamento & Layout

- **Border Radius**: 8px padrão
- **Spacing**: Tailwind scale (0-96)
- **Breakpoints**: `sm` → `2xl` (Tailwind padrão)
- **Grid**: 12 colunas responsivo

## 4. Padrões de Componentes

### Estrutura de Arquivos

```text
components/
├── ui/                    # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
└── custom/               # Componentes específicos LD
    ├── hero-section.tsx
    └── ...
```

### Convenções de Nomenclatura

- **Componentes**: `PascalCase` (ex: `HeroSection`)
- **Props**: `camelCase` (ex: `isLoading`)
- **CSS Classes**: `kebab-case` (ex: `btn-primary`)
- **Arquivos**: `kebab-case.tsx`

### Variantes de Componentes

```typescript
// Button variants alinhadas ao design system
variant: 'primary' | 'secondary' | 'accent' | 'ghost' | 'destructive';
size: 'sm' | 'md' | 'lg' | 'xl';
```

## 5. Storybook & Testes

### 📚 Storybook

```bash
# Desenvolvimento
pnpm run storybook         # http://localhost:6006

# Build para produção
pnpm run build-storybook
```

**Todos os componentes** devem ter:

- ✅ Story principal com controles
- ✅ Variantes documentadas
- ✅ Documentação MDX
- ✅ Testes de acessibilidade

### 🧪 Testes

```bash
# Unit tests (Vitest)
pnpm test
pnpm test:watch

# E2E tests (Playwright)
pnpm test:e2e
```

## 6. Guardrails

### 🚨 Regras Obrigatórias

1. **❌ PROIBIDO** criar cores/tipografias fora dos tokens
   - Sempre consultar antes de adicionar novos tokens
   - Use apenas as variáveis CSS definidas

2. **♿ Acessibilidade WCAG 2.2 AA**
   - Contraste mínimo 4.5:1 para textos
   - Contraste mínimo 3:1 para elementos gráficos
   - Navegação por teclado completa
   - ARIA labels apropriados

3. **📱 Mobile-First**
   - Design responsivo obrigatório
   - Teste em dispositivos móveis
   - Performance otimizada

4. **🎯 Performance**
   - Bundle size < 500KB
   - Lighthouse Score > 90
   - Core Web Vitals green

### ✅ Checklist "Antes de Commitar"

```bash
# 1. Lint & Format
pnpm run lint              # ESLint check
pnpm run lint:fix          # Auto-fix issues
pnpm run format            # Prettier format

# 2. Type Check
pnpm run type-check        # TypeScript validation

# 3. Tests
pnpm test                  # Unit tests
pnpm run test:e2e          # E2E tests

# 4. Build Validation
pnpm run build             # Production build
pnpm run build-storybook   # Storybook build

# 5. Visual Review
pnpm run storybook         # Review components
```

## 7. Fluxo Multi-IA

### 🤖 Agentes Ativos

| Agente             | Responsabilidade                | Acesso      |
| ------------------ | ------------------------------- | ----------- |
| **Vercel v0**      | UI/UX design, componentes React | Read/Write  |
| **GitHub Copilot** | Code completion, refactoring    | Read/Write  |
| **OpenAI Codex**   | Scripts CLI, automação          | Read/Write  |
| **ChatGPT**        | Coordenação, planejamento       | Coordinator |

### 🔄 Processo de Trabalho

1. **ChatGPT** coordena e define tarefas
2. **v0** gera componentes UI seguindo design system
3. **Copilot** implementa lógica e refina código
4. **Codex** automatiza tarefas repetitivas
5. **Todos** seguem guardrails e fazem checklist

### 📋 Comunicação Entre Agentes

- **Este arquivo (`agents.md`)** é a fonte única da verdade
- Sempre referenciar tokens e padrões definidos aqui
- **Atualizar este arquivo** quando alterar:
  - Tokens de design
  - Stack tecnológica
  - Processos de desenvolvimento
  - Guardrails ou regras

## 8. Roadmap

### 🎯 Fase 1: MVP (Atual - Concluída)

- [x] Design system base
- [x] Componentes shadcn/ui
- [x] Layout responsivo
- [x] Storybook configurado
- [x] CI/CD pipeline

### 🌙 Fase 2: Dark Mode & Refinamentos

- [ ] Tokens dark mode
- [ ] Componentes com suporte a tema
- [ ] Animações e micro-interações
- [ ] Otimizações de performance

### 📊 Fase 3: CMS & Conteúdo

- [ ] Headless CMS integration
- [ ] Blog/artigos técnicos
- [ ] SEO otimizado
- [ ] Analytics dashboard

### 🛒 Fase 4: E-commerce & B2B

- [ ] Sistema de cotações
- [ ] Catálogo de produtos
- [ ] Gestão de pedidos
- [ ] Dashboard administrativo

## 📚 Scripts Úteis

```bash
# Desenvolvimento
pnpm dev                   # Next.js dev server
pnpm dev:storybook        # Storybook dev

# Build & Deploy
pnpm build                # Production build
pnpm start                # Production server
pnpm deploy               # Deploy to Vercel

# Qualidade
pnpm lint                 # ESLint check
pnpm lint:fix             # Auto-fix lint issues
pnpm format               # Prettier format
pnpm type-check           # TypeScript check

# Testes
pnpm test                 # Unit tests
pnpm test:watch           # Watch mode
pnpm test:e2e             # End-to-end tests
pnpm test:coverage        # Coverage report

# Storybook
pnpm storybook            # Development
pnpm build-storybook      # Build for production
```

---

## 🔄 Mantenha Este Arquivo Atualizado

**Importante**: Sempre que alterar tokens, stack ou processos:

1. **Atualize este arquivo primeiro**
2. Informe outros agentes da mudança
3. Execute o checklist completo
4. Commite as alterações

**Última atualização**: Agosto 2025
