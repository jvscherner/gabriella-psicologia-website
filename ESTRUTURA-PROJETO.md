# 📂 Estrutura do Projeto - Site Gabriella Clínica

## 🗂️ Organização de Arquivos

```
gabriella-clinica/
│
├── 📁 app/                          # Páginas e rotas do Next.js
│   ├── 📄 layout.tsx                # Layout principal (Header + Footer)
│   ├── 📄 page.tsx                  # ✅ HOME - Página principal
│   ├── 📄 globals.css               # Estilos globais + Tailwind
│   │
│   ├── 📁 atendimento/
│   │   └── 📄 page.tsx              # 🚧 ATENDIMENTO - A desenvolver
│   │
│   ├── 📁 historia/
│   │   └── 📄 page.tsx              # 🚧 MINHA HISTÓRIA - A desenvolver
│   │
│   └── 📁 contato/
│       └── 📄 page.tsx              # 🚧 CONTATO - A desenvolver
│
├── 📁 components/                   # Componentes reutilizáveis
│   ├── 📄 Header.tsx                # ✅ Cabeçalho com navegação
│   └── 📄 Footer.tsx                # ✅ Rodapé com informações
│
├── 📁 public/                       # Arquivos estáticos (imagens, etc)
│   └── 📁 images/                   # Coloque suas imagens aqui
│
├── ⚙️ package.json                  # Dependências do projeto
├── ⚙️ next.config.mjs               # Configuração Next.js
├── ⚙️ tailwind.config.ts            # Configuração Tailwind (CORES!)
├── ⚙️ tsconfig.json                 # Configuração TypeScript
├── ⚙️ postcss.config.mjs            # Configuração PostCSS
├── ⚙️ .eslintrc.json                # Configuração ESLint
├── ⚙️ .gitignore                    # Arquivos ignorados pelo Git
│
├── 📘 README.md                     # Documentação principal
├── 📙 GUIA-CONFIGURACAO.md          # Guia passo a passo
└── 📗 ESTRUTURA-PROJETO.md          # Este arquivo
```

## 🎨 Arquivos Importantes para Personalização

### 1. **Cores e Estilos**
📄 `tailwind.config.ts`
- Define as cores verde-mar e vermelho cardeal
- Configuração de fontes (Playfair Display + Inter)

📄 `app/globals.css`
- Estilos globais
- Reset CSS
- Utilitários customizados

### 2. **Layout Geral**
📄 `app/layout.tsx`
- Estrutura HTML base
- Inclui Header e Footer em todas as páginas
- Meta tags para SEO

📄 `components/Header.tsx`
- Navegação principal
- Menu mobile responsivo
- Botão "Agendar Consulta"

📄 `components/Footer.tsx`
- Informações de contato
- Links de navegação
- CRP e avisos legais

### 3. **Página Home** ✅
📄 `app/page.tsx`
- Hero Section (topo com título principal)
- Cards de serviços (3 cards)
- Seção sobre a psicóloga
- Benefícios e diferenciais
- CTA final para contato

### 4. **Páginas em Desenvolvimento** 🚧
📄 `app/atendimento/page.tsx` - Placeholder
📄 `app/historia/page.tsx` - Placeholder
📄 `app/contato/page.tsx` - Placeholder

## 🎯 Qual Arquivo Editar Para...

| O que você quer fazer | Arquivo |
|----------------------|---------|
| Mudar cores do site | `tailwind.config.ts` |
| Alterar textos da Home | `app/page.tsx` |
| Atualizar informações de contato | `components/Footer.tsx` |
| Modificar menu de navegação | `components/Header.tsx` |
| Adicionar nova página | Criar pasta em `app/` |
| Adicionar novo componente | Criar arquivo em `components/` |
| Mudar estilos globais | `app/globals.css` |

## 📝 Status das Páginas

### ✅ Concluído
- [x] Home completa com todas as seções
- [x] Header com navegação responsiva
- [x] Footer com informações de contato
- [x] Sistema de cores configurado
- [x] Tipografia configurada
- [x] Layout responsivo (mobile, tablet, desktop)

### 🚧 A Desenvolver
- [ ] Página de Atendimento (detalhamento dos serviços)
- [ ] Página Minha História (biografia completa)
- [ ] Página de Contato (formulário funcional)
- [ ] Botão WhatsApp flutuante
- [ ] Galeria de imagens (se necessário)
- [ ] Blog/Artigos (opcional)

## 🔄 Fluxo de Navegação

```
HOME (/)
│
├─→ ATENDIMENTO (/atendimento)
│   ├─ Psicoterapia
│   ├─ Barras de Access
│   └─ Avaliação Psicológica
│
├─→ MINHA HISTÓRIA (/historia)
│   ├─ Trajetória
│   ├─ Formação
│   └─ Abordagem
│
└─→ CONTATO (/contato)
    ├─ Formulário
    ├─ WhatsApp
    └─ Email/Telefone
```

## 🎨 Sistema de Design

### Cores Principais
```css
Verde-mar:
  - verde-mar-50  → #E8F5F3 (fundos claros)
  - verde-mar-500 → #2A9D8F (principal)
  - verde-mar-700 → #1E7266 (escuro)

Vermelho Cardeal:
  - vermelho-cardeal-500 → #C1121F (CTAs)
  - vermelho-cardeal-600 → #9B0E1A (hover)

Neutros:
  - cinza-50  → #F9FAFB (fundos)
  - cinza-600 → #4B5563 (textos)
  - cinza-900 → #111827 (títulos)
```

### Tipografia
- **Títulos**: `font-serif` (Playfair Display)
- **Corpo**: `font-sans` (Inter)

### Espaçamentos
- **Seções**: `py-20` (padding vertical)
- **Container**: `container-custom` (max-width + padding)

## 🚀 Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start

# Verificar erros (lint)
npm run lint
```

## 📱 Breakpoints Responsivos

```css
sm:  640px   → Mobile grande / Tablet pequeno
md:  768px   → Tablet
lg:  1024px  → Desktop
xl:  1280px  → Desktop grande
2xl: 1536px  → Telas muito grandes
```

## 💡 Convenções do Código

### Nomenclatura de Componentes
- PascalCase: `Header.tsx`, `Footer.tsx`
- Um componente por arquivo

### Nomenclatura de Classes CSS
- Tailwind utilities: kebab-case
- Classes customizadas: kebab-case

### Estrutura de Páginas
```tsx
export default function NomeDaPagina() {
  return (
    <div>
      <section>...</section>
      <section>...</section>
    </div>
  );
}
```

## 📚 Recursos Adicionais

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

**Esta estrutura garante:**
✅ Organização clara
✅ Fácil manutenção
✅ Escalabilidade
✅ Boas práticas
