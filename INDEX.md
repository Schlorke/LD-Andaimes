# 📚 Índice da Documentação - LD Andaimes

Guia completo para navegar pela documentação do projeto LD Andaimes.

## 📖 Documentação Principal

### [README.md](./README.md)

#### Visão geral do projeto e setup inicial

- ✨ Visão geral do projeto
- 🚀 Stack tecnológica atualizada
- 🛠️ Guia de desenvolvimento local
- 📚 Informações sobre componentes e stories
- 📑 Roteiro de desenvolvimento

### [CHANGELOG.md](./CHANGELOG.md)

#### Histórico de mudanças e versões

- 🎉 Funcionalidades adicionadas
- ⬆️ Atualizações de dependências
- 🛠️ Melhorias implementadas
- 🔧 Configurações modificadas

## 🎨 Design & Componentes

### [design-system.md](./design-system.md)

#### Sistema de design e fundações visuais

- 🎨 Design tokens (cores, tipografia, espaçamento)
- 🧩 Componentes implementados
- 📚 Documentação do Storybook
- 🔧 Utilitários de CSS

### [STORYBOOK.md](./STORYBOOK.md)

#### Guia completo do Storybook

- 🚀 Como executar e acessar
- 📚 Estrutura das stories
- 🧩 Como criar novas stories
- ⚙️ Configurações especiais
- 📱 Testing responsivo
- 🎯 Melhores práticas
- 🔧 Troubleshooting

## 🛠️ Tecnologia & Desenvolvimento

### [TECH-STACK.md](./TECH-STACK.md)

#### Tecnologias, dependências e versões

- 📦 Stack principal completa
- 🛠️ Ferramentas de desenvolvimento
- 🔧 Configurações específicas
- 📈 Atualizações recentes
- 🎯 Políticas de atualização
- 🔍 Scripts de manutenção

## 🗂️ Estrutura de Arquivos

\`\`\`text
LD-Andaimes/
├── 📄 Documentação
│   ├── README.md           # Visão geral e setup
│   ├── CHANGELOG.md        # Histórico de mudanças
│   ├── design-system.md    # Sistema de design
│   ├── STORYBOOK.md       # Guia do Storybook
│   ├── TECH-STACK.md      # Tecnologias e dependências
│   └── INDEX.md           # Este arquivo
│
├── 🎨 Componentes & Stories (src/)
│   ├── app/               # App Next.js com layout e CSS
│   ├── components/ui/     # Componentes base (shadcn/ui)
│   ├── lib/               # Utilitários (utils.ts)
│   └── stories/           # Stories do Storybook
│
├── ⚙️ Configuração
│   ├── package.json       # Dependências e scripts
│   ├── tsconfig.json      # Configuração TypeScript
│   ├── tailwind.config.*  # Configuração Tailwind
│   ├── next.config.*      # Configuração Next.js
│   └── eslint.config.*    # Configuração ESLint
│
├── 🧪 Testes & Qualidade
│   ├── vitest.config.ts   # Configuração de testes
│   ├── .markdownlint.json # Linting de Markdown
│   └── .prettierrc        # Configuração Prettier
│
└── 🏗️ Build & Deploy
    ├── .nvmrc             # Versão Node.js
    ├── vercel.json        # Config Vercel
    └── .storybook/        # Configuração Storybook
\`\`\`

## 🚀 Quick Start

### 1. Setup Inicial

\`\`\`bash
# Clonar repositório
git clone https://github.com/Schlorke/LD-Andaimes.git
cd LD-Andaimes

# Instalar dependências
pnpm install
\`\`\`

### 2. Desenvolvimento

\`\`\`bash
# Servidor Next.js (localhost:3000)
pnpm dev

# Storybook (localhost:6006)
pnpm storybook
\`\`\`

### 3. Build & Deploy

\`\`\`bash
# Build de produção
pnpm build

# Build do Storybook
pnpm build-storybook
\`\`\`

## 📚 Recursos de Aprendizado

### Para Desenvolvedores Novos no Projeto

1. **Comece com**: [README.md](./README.md)
2. **Execute local**: `pnpm install && pnpm dev`
3. **Explore componentes**: `pnpm storybook`
4. **Entenda a stack**: [TECH-STACK.md](./TECH-STACK.md)

### Para Designers e Product Managers

1. **Design System**: [design-system.md](./design-system.md)
2. **Componentes interativos**: [STORYBOOK.md](./STORYBOOK.md)
3. **Acesse o Storybook**: `http://localhost:6006`

### Para DevOps e Maintenance

1. **Dependências**: [TECH-STACK.md](./TECH-STACK.md)
2. **Histórico de mudanças**: [CHANGELOG.md](./CHANGELOG.md)
3. **Scripts de manutenção**: Ver seção em TECH-STACK.md

## 🔗 Links Úteis

### Projeto

- **Repositório**: [GitHub - LD-Andaimes](https://github.com/Schlorke/LD-Andaimes)
- **Deploy**: [ld-andaimes.vercel.app](https://ld-andaimes.vercel.app)
- **Storybook Local**: [localhost:6006](http://localhost:6006)

### Tecnologias Principais

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Storybook](https://storybook.js.org/docs)
- [Radix UI](https://radix-ui.com)
- [shadcn/ui](https://ui.shadcn.com)

## 🤝 Contribuindo

1. **Leia a documentação relevante** acima
2. **Execute o projeto localmente**
3. **Siga as convenções** estabelecidas
4. **Documente mudanças** no CHANGELOG.md
5. **Atualize documentação** conforme necessário

---

**Última atualização**: Janeiro 2025  
**Versão da documentação**: 0.2.0
