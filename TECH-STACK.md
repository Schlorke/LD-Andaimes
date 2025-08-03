# Tecnologias & Dependências - LD Andaimes

## 📦 Stack Principal

### Framework & Runtime

- **Next.js**: `15.4.5` - Framework React com App Router
- **React**: `19.x` - Biblioteca principal para UI
- **TypeScript**: `5.9.2` - Linguagem com tipagem estática
- **Node.js**: `18+` - Runtime JavaScript (especificado via .nvmrc)

### Styling & UI

- **Tailwind CSS**: `4.x` - Framework CSS utility-first
- **tailwind-merge**: `3.3.1` - Merge inteligente de classes Tailwind
- **tailwindcss-animate**: `1.0.7` - Animações pré-configuradas
- **Radix UI**: `1.x` - Componentes acessíveis headless
- **shadcn/ui**: Components baseados em Radix + Tailwind
- **class-variance-authority**: `0.7.1` - API para variantes de componentes
- **clsx**: `2.1.1` - Utilitário para classes condicionais

### Design System & Documentação

- **Storybook**: `9.1.0` - Documentação interativa de componentes
- **@storybook/nextjs**: `9.1.0` - Integração com Next.js
- **@storybook/addon-docs**: `9.1.0` - Documentação automática
- **@storybook/addon-a11y**: `9.1.0` - Testes de acessibilidade

### Ícones & Assets

- **Lucide React**: `0.536.0` - Biblioteca de ícones SVG
- **next-themes**: `0.4.4` - Gerenciamento de temas dark/light

### Formulários & Validação

- **React Hook Form**: `7.62.0` - Gerenciamento de formulários
- **input-otp**: `1.4.2` - Input para códigos OTP

### UI Components Extras

- **cmdk**: `1.1.1` - Command palette component
- **sonner**: `2.0.7` - Toast notifications
- **vaul**: `1.1.2` - Drawer component
- **embla-carousel-react**: `8.6.0` - Carousel component
- **react-day-picker**: `9.8.1` - Date picker
- **react-resizable-panels**: `3.0.4` - Painéis redimensionáveis
- **recharts**: `3.1.0` - Biblioteca de gráficos

## 🛠️ Ferramentas de Desenvolvimento

### Linting & Formatting

- **ESLint**: `9.x` - Linter JavaScript/TypeScript
- **eslint-config-next**: `15.4.5` - Configuração ESLint para Next.js
- **Prettier**: `3.6.2` - Formatador de código
- **prettier-plugin-tailwindcss**: `0.6.14` - Plugin Prettier para Tailwind

### Testing

- **Vitest**: `3.2.4` - Framework de testes unitários
- **@vitest/browser**: `3.2.4` - Testes no navegador
- **@vitest/coverage-v8**: `3.2.4` - Coverage de testes
- **Playwright**: `1.54.2` - Testes end-to-end
- **@storybook/addon-vitest**: `9.1.0` - Integração Vitest com Storybook

### Build & Development

- **PostCSS**: `8.5.x` - Processador CSS
- **@tailwindcss/postcss**: `4.x` - Plugin PostCSS do Tailwind
- **webpack**: Via Next.js - Bundler (usado pelo Storybook)

### Tipos TypeScript

- **@types/node**: `24.1.0` - Tipos Node.js
- **@types/react**: `19.x` - Tipos React
- **@types/react-dom**: `19.x` - Tipos React DOM

## 🔧 Configurações Específicas

### Package Manager

- **pnpm**: `10.x` - Gerenciador de pacotes
- **Lockfile**: Sincronizado para compatibilidade com Vercel
- **Build config**: Via `vercel.json` para deploy customizado

### Overrides de Dependências

**Removidos para compatibilidade com Vercel:**

```json
// Anteriormente causavam conflito no lockfile
{
  "pnpm": {
    "overrides": {
      "glob": "^11.0.0",
      "rimraf": "^6.0.0"
    }
  }
}
```

### Deploy & CI/CD

- **Vercel**: Deploy automático via GitHub
- **Node.js**: `18.x` (especificado via `.nvmrc`)
- **Build command**: `pnpm build`
- **Install command**: `pnpm install --no-frozen-lockfile`

### Compatibilidade

- **Node.js**: `18.x` ou superior
- **pnpm**: `9.x` ou superior
- **Navegadores modernos**: Chrome 90+, Firefox 88+, Safari 14+

## 📈 Atualizações Recentes (Janeiro 2025)

### Major Updates

- **tailwind-merge**: `2.6.0` → `3.3.1` (breaking changes resolvidos)
- **@types/node**: `22.17.0` → `24.1.0` (suporte Node.js mais recente)

### Minor/Patch Updates

- **Next.js**: `15.2.4` → `15.4.5` (melhorias de performance)
- **lucide-react**: `0.454.0` → `0.536.0` (novos ícones)

### Storybook Ecosystem

- Migração completa para **Storybook 9.1.0**
- Remoção de addons incompatíveis (`@storybook/addon-controls`)
- Configuração otimizada para Next.js 15.4

## 🎯 Políticas de Atualização

### Estratégia de Versionamento

- **Major versions**: Avaliação cuidadosa, testing extensivo
- **Minor versions**: Atualizações regulares para features e melhorias
- **Patch versions**: Atualizações automáticas para segurança

### Dependências Críticas Monitoradas

- Next.js (framework principal)
- React (biblioteca base)
- TypeScript (sistema de tipos)
- Tailwind CSS (sistema de styling)
- Storybook (design system)

### Ferramentas de Monitoramento

- Dependabot (GitHub) para atualizações automáticas
- `pnpm audit` para vulnerabilidades de segurança
- `pnpm outdated` para verificar atualizações disponíveis

## 🔍 Scripts de Manutenção

```bash
# Verificar dependências desatualizadas
pnpm outdated

# Atualizar dependências (interativo)
pnpm update -i

# Auditoria de segurança
pnpm audit

# Verificar duplicatas
pnpm dedupe

# Limpar cache
rm -rf node_modules/.pnpm-store
pnpm install
```
