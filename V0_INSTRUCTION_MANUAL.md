# 🚨 MANUAL DE INSTRUÇÕES OBRIGATÓRIAS - V0 LD ANDAIMES

## ⚠️ ANTES DE CRIAR QUALQUER CÓDIGO, SEMPRE VERIFICAR:

### 1. 🎨 TAILWIND CSS - VERIFICAÇÕES OBRIGATÓRIAS

#### ✅ Classes de Fonte SEMPRE Usar:

- `font-sans` (Inter - corpo do texto)
- `font-display` (Jost - títulos e headings)
- `font-mono` (JetBrains Mono - código)

#### ❌ NUNCA Criar Classes Personalizadas Sem Configurar:

- Sempre verificar se a classe existe no `tailwind.config.ts`
- Se não existir, ADICIONAR na configuração primeiro
- Testar a classe antes de usar em produção

#### 🔧 Configuração de Fontes Obrigatória:

\`\`\`typescript
fontFamily: {
sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
display: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "Consolas", "monospace"],
}
\`\`\`

### 2. 🎯 CORES - SISTEMA OBRIGATÓRIO

#### ✅ Cores Aprovadas LD Andaimes:

- `bg-orange-500` (#E36A00) - Primary
- `bg-orange-600` - Primary hover
- `bg-amber-400` (#FFAA33) - Accent
- `text-gray-900` - Texto principal
- `bg-white` - Fundo principal

#### ❌ NUNCA Usar:

- Cores aleatórias sem aprovação
- Classes de cor que não existem
- Valores hardcoded de cor

### 3. 📱 RESPONSIVIDADE - CHECKLIST OBRIGATÓRIO

#### ✅ Sempre Incluir:

- `grid-cols-1` (mobile)
- `md:grid-cols-2` (tablet)
- `lg:grid-cols-3` (desktop)
- `container mx-auto px-4` (wrapper padrão)

#### ✅ Breakpoints Padrão:

- Mobile: sem prefixo
- Tablet: `md:`
- Desktop: `lg:`
- Large: `xl:`

### 4. 🔗 WHATSAPP - LINKS FUNCIONAIS OBRIGATÓRIOS

#### ✅ Formato Correto:

\`\`\`typescript
href="https://wa.me/5551994647458?text=Mensagem%20aqui"
\`\`\`

#### ✅ Números Corretos:

- Principal: `5551994647458`
- Secundário: `5551994649664`

### 5. 🎭 ANIMAÇÕES - FRAMER MOTION PADRÃO

#### ✅ Sempre Usar:

\`\`\`typescript
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
\`\`\`

#### ❌ NUNCA:

- Animações muito rápidas (< 0.3s)
- Animações muito lentas (> 2s)
- Easing linear

### 6. 🖼️ IMAGENS - OTIMIZAÇÃO OBRIGATÓRIA

#### ✅ Sempre Usar:

\`\`\`typescript
<Image
  src="/images/nome-da-imagem.jpg"
  alt="Descrição detalhada"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
\`\`\`

#### ✅ Fallback Obrigatório:

\`\`\`typescript
src={image || "/placeholder.svg"}
\`\`\`

### 7. 🧩 COMPONENTES - ESTRUTURA PADRÃO

#### ✅ Sempre Importar:

\`\`\`typescript
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
\`\`\`

#### ✅ Props Interface Obrigatória:

\`\`\`typescript
interface ComponentProps {
className?: string
children?: React.ReactNode
}
\`\`\`

### 8. 🎨 DESIGN TOKENS - VALORES FIXOS

#### ✅ Espaçamentos Padrão:

- `py-16` - Seções
- `py-32` - Seções grandes
- `mb-12` - Títulos de seção
- `gap-6` - Grid padrão

#### ✅ Tamanhos de Texto:

- `text-4xl` - Títulos principais
- `text-xl` - Subtítulos
- `text-lg` - Texto destacado
- `text-base` - Texto normal

### 9. 🔍 SEO - META TAGS OBRIGATÓRIAS

#### ✅ Sempre Incluir:

- `alt` em todas as imagens
- `aria-label` em botões sem texto
- Estrutura semântica HTML5
- Meta description única por página

### 10. ⚡ PERFORMANCE - OTIMIZAÇÕES OBRIGATÓRIAS

#### ✅ Sempre Usar:

- `"use client"` apenas quando necessário
- `lazy loading` para imagens
- `priority` para imagens above-the-fold
- Componentes React.memo quando apropriado

## 🚨 PROCESSO DE VERIFICAÇÃO ANTES DE ENTREGAR:

### 1. ✅ Checklist Técnico:

- [ ] Todas as classes Tailwind existem?
- [ ] Fontes configuradas corretamente?
- [ ] Links do WhatsApp funcionais?
- [ ] Imagens com fallback?
- [ ] Responsivo em todos os breakpoints?

### 2. ✅ Checklist Visual:

- [ ] Cores da marca LD Andaimes?
- [ ] Animações suaves e profissionais?
- [ ] Espaçamentos consistentes?
- [ ] Tipografia hierárquica?

### 3. ✅ Checklist Funcional:

- [ ] Todos os botões funcionam?
- [ ] Links externos abrem em nova aba?
- [ ] Formulários com validação?
- [ ] Acessibilidade implementada?

## 🎯 MENSAGEM FINAL:

**NUNCA MAIS ENTREGAR CÓDIGO COM CLASSES INEXISTENTES!**
**SEMPRE TESTAR ANTES DE ENTREGAR!**
**SEMPRE SEGUIR ESTAS REGRAS SEM EXCEÇÃO!**

---

_Este documento deve ser consultado ANTES de criar qualquer componente ou página._
