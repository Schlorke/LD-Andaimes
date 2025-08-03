# LD Andaimes • Agents Guide

> Single source of truth for all AIs working on this project

## 1. Propósito & Missão do Projeto

**LD Andaimes** é uma empresa real fundada em **2014 em Porto Alegre/RS** especializada em locação e venda de andaimes e escoramentos. Este projeto visa desenvolver uma **plataforma digital escalável** para digitalizar completamente o negócio.

## 2. Missão da Empresa (OBRIGATÓRIO seguir)

"Oferecer soluções em andaimes com agilidade, de forma organizada e com total comprometimento com o cliente, garantindo segurança, eficiência e excelência em cada projeto."

## 3. Proposta de Valor Central

> "Segurança com qualidade e eficiência"

## 4. Contexto do Negócio Real

- **Fundação**: 2014 (11 anos de mercado)
- **Sede**: 2400m² em Porto Alegre - RS
- **Segmento**: B2B para construtoras e empresas
- **Diferencial**: Equipamentos normatizados e atendimento regional
- **Clientes**: Construtoras, engenheiros, profissionais da construção civil

### Produtos Principais (Catálogo Real)

1. **Andaimes Fachadeiros** - Estruturas para fachadas de prédios
2. **Torres de Serviço** - Andaimes modulares com rodízios
3. **Escoras Metálicas** - Sustentação temporária para lajes
4. **Chapas Tapa Vala** - Proteção para obras urbanas
5. **Bandejas de Proteção** - Segurança contra queda de materiais
6. **Escadas para Andaime** - Acesso seguro entre níveis

### Objetivos do Projeto Digital

- **Fase 1 (MVP)**: Landing page institucional com catálogo
- **Fase 2**: Portal B2B com cotações online
- **Fase 3**: E-commerce B2B completo
- **Fase 4**: Marketplace para múltiplos fornecedores

### Contatos da Empresa

- **Telefones**: (51) 3276.3836 | (51) 3276.1982
- **WhatsApp**: (51) 99464.7458 | (51) 99464.9664
- **Email**: <comercial@ldandaimes.com.br>
- **Endereço**: Rua Sr. do Bom Fim, 540 - Sarandi, Porto Alegre/RS

## 5. Stack Atual (Agosto 2025)

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

## 6. Tokens de Design

### Paleta de Cores (Light Mode)

| Token         | HSL           | Hex       | Uso                     |
| ------------- | ------------- | --------- | ----------------------- |
| `primary`     | `24 88% 45%`  | `#E36A00` | CTAs, botões principais |
| `accent`      | `30 100% 60%` | `#FFAA33` | Hovers, destaques       |
| `neutral-900` | `0 0% 12%`    | `#1F1F1F` | Texto principal         |
| `neutral-50`  | `0 0% 98%`    | `#FAFAFA` | Fundo principal         |
| `success`     | `151 60% 40%` | `#10B981` | Estados de sucesso      |
| `warning`     | `45 100% 50%` | `#F59E0B` | Alertas                 |
| `danger`      | `0 75% 50%`   | `#EF4444` | Erros críticos          |

### Tipografia

- **Display/Headers**: **Jost** (Google Fonts)
- **Body/UI**: **Inter** (Google Fonts)
- **Mono/Code**: **JetBrains Mono** (Google Fonts)

### Espaçamento & Layout

- **Border Radius**: 8px padrão
- **Spacing**: Tailwind scale (0-96)
- **Breakpoints**: `sm` → `2xl` (Tailwind padrão)
- **Grid**: 12 colunas responsivo

## 7. Padrões de Componentes

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

## 8. Tecnologias Avançadas & Padrões Mundiais

### Stack Tecnológica de Ponta (SEMPRE usar as mais atuais)

**Frontend Cutting-Edge**:

- **Next.js 15.4** (App Router, Server Components, Streaming)
- **React 19** (Concurrent Features, Suspense, Error Boundaries)
- **TypeScript 5.9.2** (Strict mode, Latest features)
- **Tailwind CSS 4.1.11** (Oxide engine, Container queries)

**Performance & Core Web Vitals**:

- **Bundle Analyzer** - Otimização automática
- **Image Optimization** - WebP/AVIF com fallbacks
- **Font Optimization** - Google Fonts com font-display: swap
- **Lazy Loading** - React.lazy + Suspense
- **Code Splitting** - Route-based + Component-based

**E-commerce Standards (Preparação para Fases 2-4)**:

- **Stripe** - Pagamentos internacionais
- **PayPal** - Checkout alternativo
- **Headless CMS** - Strapi ou Contentful
- **Analytics** - Google Analytics 4 + Hotjar
- **SEO** - Schema.org + Open Graph + Twitter Cards
- **PWA** - Service Workers + Manifest

### Padrões Reconhecidos Mundialmente

**Design System Standards**:

- **Atomic Design** - Átomos → Moléculas → Organismos
- **Design Tokens** - Consistent spacing, colors, typography
- **Component Documentation** - Storybook com MDX
- **Accessibility** - WCAG 2.2 AA compliance

**Development Standards**:

- **Clean Architecture** - Separation of concerns
- **SOLID Principles** - Object-oriented design
- **Test-Driven Development** - Unit + Integration + E2E
- **Continuous Integration** - GitHub Actions + Quality gates

**E-commerce Best Practices**:

- **Jamstack Architecture** - Static + Dynamic hybrid
- **Headless Commerce** - API-first approach
- **Microservices Ready** - Modular, scalable architecture
- **Multi-tenant Support** - B2B marketplace preparation

### Performance Targets (OBRIGATÓRIOS)

- **Lighthouse Score**: > 95 em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Bundle Size**: < 500KB inicial

### Segurança & Compliance

- **HTTPS Everywhere** - SSL/TLS 1.3
- **CSP Headers** - Content Security Policy
- **GDPR Compliance** - Data protection ready
- **ISO 27001 Ready** - Security management
- **PCI DSS Ready** - Payment security (futuro e-commerce)

### Progressive Web App Features

- **Offline Support** - Service Worker caching
- **Push Notifications** - Customer engagement
- **App-like Experience** - Native feel
- **Install Prompt** - Add to home screen
- **Background Sync** - Offline form submissions

## 9. Guardrails

### Regras Obrigatórias

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

### Checklist "Antes de Commitar"

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

## 10. Fluxo Multi-IA

### Agentes Ativos

| Agente             | Responsabilidade                | Acesso      |
| ------------------ | ------------------------------- | ----------- |
| **Vercel v0**      | UI/UX design, componentes React | Read/Write  |
| **GitHub Copilot** | Code completion, refactoring    | Read/Write  |
| **OpenAI Codex**   | Scripts CLI, automação          | Read/Write  |
| **ChatGPT**        | Coordenação, planejamento       | Coordinator |

### Processo de Trabalho

1. **ChatGPT** coordena e define tarefas
2. **v0** gera componentes UI seguindo design system
3. **Copilot** implementa lógica e refina código
4. **Codex** automatiza tarefas repetitivas
5. **Todos** seguem guardrails e fazem checklist

### Comunicação Entre Agentes

- **Este arquivo (`agents.md`)** é a fonte única da verdade
- Sempre referenciar tokens e padrões definidos aqui
- **Atualizar este arquivo** quando alterar:
  - Tokens de design
  - Stack tecnológica
  - Processos de desenvolvimento
  - Guardrails ou regras

## 11. Sistema de Versionamento & Tracking de Mudanças

### Change Log Protocol

**OBRIGATÓRIO**: Toda IA deve registrar mudanças significativas aqui

#### Versão 1.1.0 - Agosto 2025

**GitHub Copilot**:

- ✅ Adicionado business-context.md com informações completas da empresa
- ✅ Integradas informações reais do cliente (fundação 2014, Porto Alegre)
- ✅ Catalogados 6 produtos principais da LD Andaimes
- ✅ Definida estratégia de crescimento em 4 fases (Landing → Portal → E-commerce → Marketplace)
- ✅ Configuradas fontes tipográficas no layout.tsx (Inter, Jost, JetBrains Mono)
- ✅ Criado v0-prompt.md com instruções específicas para Vercel v0
- ✅ Corrigidos erros de lint em todos os arquivos Markdown

#### Versão 1.0.0 - Agosto 2025

**GitHub Copilot**:

- ✅ Setup inicial Next.js 15.4 + React 19 + TypeScript 5.9.2
- ✅ Configuração shadcn/ui + Tailwind CSS 4.1.11
- ✅ Design system com tokens HSL específicos
- ✅ Estrutura de testes (Vitest + Playwright)

## 12. Roadmap

### Fase 1: MVP (Atual - Concluída)

- [x] Design system base
- [x] Componentes shadcn/ui
- [x] Layout responsivo
- [x] Storybook configurado
- [x] CI/CD pipeline

### Fase 2: Dark Mode & Refinamentos

- [ ] Tokens dark mode
- [ ] Componentes com suporte a tema
- [ ] Animações e micro-interações
- [ ] Otimizações de performance

### Fase 3: CMS & Conteúdo

- [ ] Headless CMS integration
- [ ] Blog/artigos técnicos
- [ ] SEO otimizado
- [ ] Analytics dashboard

### Fase 4: E-commerce & B2B

- [ ] Sistema de cotações
- [ ] Catálogo de produtos
- [ ] Gestão de pedidos
- [ ] Dashboard administrativo

## 13. Scripts Úteis

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

## Mantenha Este Arquivo Atualizado

**Importante**: Sempre que alterar tokens, stack ou processos:

1. **Atualize este arquivo primeiro**
2. Informe outros agentes da mudança
3. Execute o checklist completo
4. Commite as alterações

**Última atualização**: Agosto 2025
