<h1 align="center">LD Andaimes 🚧</h1>
<p align="center">
  Site & Plataforma • Next 15.4 · Tailwind 4 · TypeScript 5.9 · Storybook 9.1
</p>

<p align="center">
  <a href="https://github.com/Schlorke/LD-Andaimes/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/Schlorke/LD-Andaimes/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://ld-andaimes.vercel.app"><img alt="Deploy" src="https://img.shields.io/website?url=https%3A%2F%2Fld-andaimes.vercel.app"></a>
  <a href="http://localhost:6006"><img alt="Storybook" src="https://img.shields.io/badge/Storybook-9.1.0-FF4785?logo=storybook"></a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
</p>

## ✨ Visão geral

Landing page corporativa e futura plataforma B2B de locação/venda de andaimes e escoramentos da LD Andaimes.  
Foco em **performance, acessibilidade AA+** e design system consistente com component-driven development.

## 🚀 Stack Atualizada

| Camada        | Tech                                      | Versão    |
| ------------- | ----------------------------------------- | --------- |
| Front-end     | **Next.js 15.4** (App Router) + React 19  | ✅ Latest |
| UI            | **Tailwind CSS 4** · shadcn/ui · Radix UI | ✅ Latest |
| Linguagem     | **TypeScript 5.9**                        | ✅ Latest |
| Testes        | Vitest 3.2 · Playwright 1.54              | ✅ Latest |
| CI/CD         | GitHub Actions → Vercel                   | ✅ Latest |
| Design System | **Storybook 9.1** + Component Stories     | ✅ Latest |
| Ícones        | **Lucide React 0.536**                    | ✅ Latest |
| Utils         | **tailwind-merge 3.3** · clsx 2.1         | ✅ Latest |

## 🛠️ Desenvolvimento

### Requisitos

- Node.js 18+
- pnpm 9+

### Setup Local

```bash
# Instalar dependências
pnpm install

# Desenvolvimento (Next.js com Turbopack)
pnpm dev
# Abre <http://localhost:3000>

# Storybook (Design System)
pnpm storybook
# Abre <http://localhost:6006>

# Build de produção
pnpm build
pnpm start

# Testes e qualidade
pnpm lint          # ESLint
pnpm lint:fix      # ESLint com correções automáticas
pnpm format        # Prettier
pnpm format:check  # Verificar formatação
```

### Scripts Disponíveis

| Script            | Descrição                               |
| ----------------- | --------------------------------------- |
| `dev`             | Servidor de desenvolvimento (Turbopack) |
| `build`           | Build de produção                       |
| `start`           | Servidor de produção                    |
| `storybook`       | Servidor do Storybook (port 6006)       |
| `build-storybook` | Build estático do Storybook             |
| `lint`            | Verificar código com ESLint             |
| `lint:fix`        | Corrigir problemas automaticamente      |
| `format`          | Formatar código com Prettier            |
| `format:check`    | Verificar formatação                    |

## 📚 Componentes & Stories

### Component-Driven Development

O projeto segue as melhores práticas de desenvolvimento orientado a componentes:

- **Componentes Atômicos**: `Button`, `Badge`, `Card`
- **Componentes Compostos**: `Hero`, `Navigation`
- **Páginas Completas**: `LandingPage` com dados mock

### Storybook Stories Disponíveis

- `Button` - Variantes: primary, secondary, accent, ghost, destructive
- `Hero` - Seções principais com call-to-actions
- `LandingPage` - Página completa com múltiplas seções
- `Page` - Exemplos de páginas com estados

### Estrutura de Componentes

```
src/
├── components/ui/     # Componentes base (shadcn/ui)
├── stories/          # Stories do Storybook
└── lib/utils.ts      # Utilitários (cn, twMerge)
```

## 📑 Roteiro Atualizado

### ✅ Concluído

- [x] Configurar repositório & CI
- [x] Scaffold Next.js + Tailwind
- [x] Design tokens e sistema de cores
- [x] Componentes base (Button, Card, Badge, Hero)
- [x] Configuração do Storybook 9.1
- [x] Component-driven development
- [x] Landing page MVP funcional
- [x] Documentação de componentes
- [x] Atualizações de dependências (Janeiro 2025)

### 🚧 Em Progresso

- [ ] Testes automatizados (Vitest + Playwright)
- [ ] Integração de dados (Supabase/API)
- [ ] Páginas internas (Catálogo, Contato)
- [ ] Otimização de performance (Core Web Vitals)

### 📅 Próximos Passos

- [ ] Sistema de autenticação
- [ ] Dashboard administrativo
- [ ] Funcionalidades B2B (orçamentos, pedidos)
- [ ] PWA e recursos offline

## 🤝 Contribuindo

1. Crie sua branch `feat/nome-da-feature`
2. Abra PR com descrição e checklist
3. Commits seguem Conventional Commits (`feat:`, `fix:`…)

## 📝 Licença

MIT © Harry Schlorke
