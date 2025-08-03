# Prompt Especializado para Vercel v0 - LD Andaimes

## 🎯 Contexto Empresarial Obrigatório

A **LD Andaimes** é uma empresa real fundada em 2014 em Porto Alegre/RS, especializada em locação e venda de andaimes e escoramentos para construção civil.

**Missão**: "Oferecer soluções em andaimes com agilidade, de forma organizada e com total comprometimento com o cliente, garantindo segurança, eficiência e excelência em cada projeto."

**Proposta de Valor**: "Segurança com qualidade e eficiência"

## 🛠️ Catálogo de Produtos (Seguir Exatamente)

1. **Andaimes Fachadeiros** - Estruturas para reformas e pinturas de fachadas
2. **Torres de Serviço** - Andaimes modulares para trabalhos pontuais
3. **Escoras Metálicas** - Sustentação temporária para lajes e vigas
4. **Chapas Tapa Vala** - Proteção para obras urbanas e vias públicas
5. **Bandejas de Proteção** - Segurança contra queda de materiais
6. **Escadas para Andaime** - Acesso seguro entre níveis

## 🎨 Design System Obrigatório

### Paleta de Cores (HSL Values)

\`\`\`css
/_ Cores Primárias _/
--primary: 24 88% 45%; /_ #E36A00 - Laranja LD _/
--accent: 30 100% 60%; /_ #FFAA33 - Amarelo destaque _/
--neutral-900: 0 0% 12%; /_ #1F1F1F - Textos escuros _/
--neutral-50: 0 0% 98%; /_ #FAFAFA - Fundo claro _/

/_ Estados _/
--success: 151 60% 40%; /_ #10B981 - Verde sucesso _/
--warning: 45 100% 50%; /_ #F59E0B - Amarelo alerta _/
--danger: 0 75% 50%; /_ #EF4444 - Vermelho erro _/
\`\`\`

### Tipografia

- **Headers**: Jost (Google Fonts) - font-family: var(--font-jost)
- **Body**: Inter (Google Fonts) - font-family: var(--font-inter)
- **Code**: JetBrains Mono (Google Fonts) - font-family: var(--font-jetbrains-mono)

### Componentes Base (shadcn/ui)

Usar SEMPRE os componentes do shadcn/ui como base:

- Button, Card, Badge, Alert, Input, Select, Textarea
- Dialog, Sheet, Popover, Tooltip, Accordion
- Table, Tabs, Navigation Menu, Breadcrumb

## 📋 Especificações Técnicas

### Stack Obrigatória

- **Next.js 15.4** com App Router
- **React 19** (Server Components quando possível)
- **TypeScript** para todos os componentes
- **Tailwind CSS** para estilização
- **shadcn/ui** como base dos componentes

### Estrutura de Componentes

\`\`\`text
/components
/ui # shadcn/ui base components
/custom # LD Andaimes specific components
/sections # Page sections (Hero, Products, About)
/forms # Contact forms, quote forms
/layout # Header, Footer, Navigation
\`\`\`

## 🚀 Fases do Projeto

### Fase 1: Landing Page (ATUAL)

Criar uma landing page moderna e profissional com:

**Hero Section**:

- Proposta de valor clara: "Segurança com qualidade e eficiência"
- CTA para WhatsApp/telefone
- Imagem hero relacionada a andaimes/construção

**Seção Produtos**:

- Grid responsivo com os 6 produtos
- Cards com ícone, título, descrição breve
- Link para "Saiba mais" ou "Solicitar cotação"

**Seção Sobre**:

- História da empresa (fundada em 2014)
- Valores: Foco no cliente, Segurança, Eficiência
- Localização: Porto Alegre, 2400m² de sede

**Contato/Footer**:

- Telefones: (51) 3276.3836 | (51) 3276.1982
- WhatsApp: (51) 99464.7458 | (51) 99464.9664
- Email: <comercial@ldandaimes.com.br>
- Endereço: Rua Sr. do Bom Fim, 540 - Sarandi, Porto Alegre/RS

### Futuras Fases (Preparar Arquitetura)

- **Fase 2**: Portal B2B com cotações online
- **Fase 3**: E-commerce B2B completo
- **Fase 4**: Marketplace multi-fornecedores

## 📱 Requisitos de UX/UI

### Mobile-First Design

- Navegação mobile otimizada
- Botões de contato sempre visíveis
- Images otimizadas para carregamento rápido
- Typography responsiva

### Acessibilidade (WCAG 2.2 AA)

- Contraste mínimo 4.5:1 para textos
- ARIA labels apropriados
- Navegação por teclado
- Alt text para imagens

### Performance

- Core Web Vitals > 90
- Imagens em WebP/AVIF
- Lazy loading
- Bundle size < 500KB

## 🔧 Padrões de Código

### Nomenclatura

\`\`\`typescript
// Componentes
export function HeroSection() {}
export function ProductCard() {}
export function ContactForm() {}

// Props interface
interface HeroSectionProps {
title: string;
description: string;
ctaText?: string;
}

// CSS Classes
className = 'hero-section';
className = 'product-card';
className = 'contact-form';
\`\`\`

### Estrutura de Componente

\`\`\`typescript
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ComponentProps {
// Props definition
}

export function Component({ prop }: ComponentProps) {
return (

<section className="component-section">
{/_ Component JSX _/}
</section>
);
}
\`\`\`

## 🎯 Exemplos de Prompts Específicos

### Para Hero Section

"Crie um hero section para LD Andaimes, empresa de locação de andaimes em Porto Alegre. Use a proposta de valor 'Segurança com qualidade e eficiência', inclua CTA para WhatsApp (51) 99464.7458, e use as cores primárias #E36A00 e #FFAA33. Design deve ser moderno, profissional e transmitir confiança para construtoras."

### Para Seção de Produtos

"Crie uma seção de produtos para LD Andaimes com grid responsivo mostrando: Andaimes Fachadeiros, Torres de Serviço, Escoras Metálicas, Chapas Tapa Vala, Bandejas de Proteção, Escadas para Andaime. Cada card deve ter ícone, título, descrição breve e CTA 'Solicitar Cotação'."

### Para Contato

"Crie uma seção de contato para LD Andaimes com informações: telefones (51) 3276.3836 e (51) 3276.1982, WhatsApp (51) 99464.7458, email <comercial@ldandaimes.com.br>, endereço Rua Sr. do Bom Fim, 540 - Sarandi, Porto Alegre/RS. Include formulário de contato e mapa."

## ✅ Checklist de Qualidade

Antes de entregar qualquer componente, verificar:

- [ ] Usa design tokens corretos (cores HSL, tipografia)
- [ ] Implementa componentes shadcn/ui como base
- [ ] É responsivo (mobile-first)
- [ ] Tem acessibilidade (ARIA, contraste)
- [ ] Performance otimizada (lazy loading, otimizações)
- [ ] TypeScript tipado corretamente
- [ ] Nomenclatura consistente
- [ ] Reflete identidade da LD Andaimes
- [ ] CTAs direcionam para contato/WhatsApp
- [ ] Transmite confiança e profissionalismo

---

**Importante**: Este projeto é para um cliente real. Priorize qualidade, profissionalismo e fidelidade à marca LD Andaimes em todas as implementações.
