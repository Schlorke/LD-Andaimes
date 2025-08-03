# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [0.2.0] - 2025-01-03

### 🎉 Adicionado

- **Storybook 9.1.0** - Design system completo com documentação interativa
- **Component-driven development** - Estrutura baseada em componentes atômicos → páginas
- **Landing Page completa** - Página funcional com Hero, Services e CTA sections
- **Stories abrangentes**:
  - `Button` - 5 variantes (primary, secondary, accent, ghost, destructive)
  - `Hero` - 5 variações (default, gradient, with image, minimal, large)
  - `LandingPage` - 3 versões (default, mobile, alternative)
- **Mock data patterns** - Exemplos de como usar dados simulados em stories
- **Viewport testing** - Suporte para testar responsividade no Storybook

### ⬆️ Atualizações de Dependências

- **Next.js**: `15.2.4` → `15.4.5`
- **@types/node**: `22.17.0` → `24.1.0`
- **tailwind-merge**: `2.6.0` → `3.3.1` (major update)
- **lucide-react**: `0.454.0` → `0.536.0`

### 🛠️ Melhorias

- **Symbol filtering** - Resolvidos erros de "Cannot convert Symbol to string" no Storybook
- **Addon compatibility** - Removidos addons incompatíveis com Storybook 9.x
- **Hot reload** - Melhorado HMR para desenvolvimento mais eficiente
- **TypeScript** - Configurações otimizadas para melhor DX

### 🔧 Configurações

- **Decorators** - Implementado `withSafeProps` para filtrar propriedades React problemáticas
- **PropFilter** - Configurado filtro TypeScript para exclusão automática de props
- **Controls** - Desabilitados controles para propriedades que são elementos React
- **Documentation** - Descrições detalhadas para todos os componentes e stories

### 📚 Documentação

- **README.md** - Atualizado com stack completa e scripts disponíveis
- **Component documentation** - Stories com descrições e exemplos de uso
- **Best practices** - Guias de component-driven development
- **Setup guides** - Instruções detalhadas para desenvolvimento local

## [0.1.0] - 2024-12-XX

### 🎉 Inicial

- Configuração inicial do projeto Next.js 15
- Setup do Tailwind CSS 4
- Configuração do TypeScript 5.9
- Estrutura base de componentes
- CI/CD com GitHub Actions
- Deploy automático na Vercel

---

## Tipos de Mudanças

- `🎉 Adicionado` para novas funcionalidades
- `⬆️ Atualizações` para mudanças em funcionalidades existentes
- `🛠️ Melhorias` para mudanças que melhoram a experiência
- `🔧 Configurações` para mudanças em configurações
- `📚 Documentação` para mudanças na documentação
- `🐛 Corrigido` para correção de bugs
- `🔒 Segurança` para vulnerabilidades corrigidas
- `💔 Removido` para funcionalidades removidas
