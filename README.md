# Site Gabriella B. Engelhardt - Psicóloga

Site profissional para atendimento psicológico, desenvolvido com Next.js 14 e Tailwind CSS.

## 🎨 Design e Cores

### Paleta de Cores
- **Verde-mar (Primária)**: `#2A9D8F` - Representa calma, crescimento e renovação
- **Vermelho Cardeal (Acento)**: `#C1121F` - Para CTAs e destaques importantes
- **Branco e Cinzas**: Base neutra para leitura confortável

### Tipografia
- **Títulos**: Playfair Display (elegante, transmite confiança)
- **Corpo**: Inter (moderna, legível)

## 📁 Estrutura do Projeto

```
gabriella-clinica/
├── app/
│   ├── page.tsx                # Página Home
│   ├── layout.tsx              # Layout principal (Header/Footer)
│   ├── globals.css             # Estilos globais e Tailwind
│   ├── atendimento/
│   │   └── page.tsx            # Página Sobre o Atendimento
│   ├── historia/
│   │   └── page.tsx            # Página Minha História
│   └── contato/
│       └── page.tsx            # Página de Contato
├── components/
│   ├── Header.tsx              # Cabeçalho com navegação
│   └── Footer.tsx              # Rodapé com informações
├── public/
│   └── images/                 # Imagens do site
├── package.json
├── tailwind.config.ts          # Configuração do Tailwind
├── tsconfig.json               # Configuração do TypeScript
└── next.config.mjs             # Configuração do Next.js
```

## 🚀 Como Executar o Projeto

### 1. Instalar Dependências
```bash
npm install
```

### 2. Rodar em Modo Desenvolvimento
```bash
npm run dev
```

O site estará disponível em: `http://localhost:3000`

### 3. Build para Produção
```bash
npm run build
npm start
```

## 📄 Páginas do Site

### ✅ Home (Implementada)
- Hero Section com call-to-action
- Cards de serviços (Psicoterapia, Barras de Access, Avaliação Psicológica)
- Seção "Sobre a Psicóloga" (preview)
- Benefícios e diferenciais
- CTA final para contato

### 🚧 Atendimento (Placeholder)
Conteúdo a ser desenvolvido:
- Detalhamento de Psicoterapia
- Explicação sobre Barras de Access
- Informações sobre Avaliação Psicológica
- FAQ

### 🚧 Minha História (Placeholder)
Conteúdo a ser desenvolvido:
- Trajetória profissional
- Formação e especializações
- Abordagem terapêutica
- CRP e credenciais

### 🚧 Contato (Placeholder)
Conteúdo a ser desenvolvido:
- Formulário de contato
- Informações de contato (WhatsApp, email, telefone)
- Endereço do consultório (se aplicável)
- Mapa de localização

## 🎯 Próximos Passos

1. **Personalizar Conteúdo da Home**
   - Ajustar textos conforme conteúdo real
   - Adicionar foto da psicóloga
   - Atualizar informações de contato (telefone, email, WhatsApp)
   - Inserir número do CRP

2. **Desenvolver Página de Atendimento**
   - Criar seções detalhadas para cada serviço
   - Adicionar informações sobre duração e formato
   - Incluir FAQ

3. **Desenvolver Página Minha História**
   - Adicionar biografia completa
   - Incluir foto profissional
   - Listar formação e experiências

4. **Desenvolver Página de Contato**
   - Criar formulário funcional
   - Adicionar validações
   - Integrar com serviço de email (opcional)

5. **Otimizações Finais**
   - Adicionar botão WhatsApp flutuante
   - Otimizar imagens
   - Configurar SEO (meta tags específicas)
   - Testar responsividade em diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações (preparado para uso)

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (até 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (1024px+)

## ♿ Acessibilidade

- Contraste de cores adequado (WCAG AA)
- Navegação por teclado
- Textos alternativos para imagens
- Estrutura semântica HTML5

## 📦 Deploy

O projeto está pronto para deploy em plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Servidor próprio com Node.js**

## 📝 Notas Importantes

- ⚠️ **Atualizar informações de contato** no Header e Footer
- ⚠️ **Adicionar número CRP real** em todas as menções
- ⚠️ **Substituir placeholder de imagem** pela foto profissional
- ⚠️ **Revisar textos** para garantir tom adequado ao público

## 📞 Informações para Atualizar

No código, procure e substitua:
- `contato@exemplo.com` → Email real
- `(00) 00000-0000` → Telefone real
- `5500000000000` → Número WhatsApp real (formato internacional)
- `XX/XXXXX` → Número CRP real
- URLs de redes sociais (se aplicável)

## 🔒 Conformidade LGPD

O site está preparado para conformidade com LGPD:
- Aviso de privacidade no footer
- Página de privacidade (link preparado)
- Estrutura para consentimento em formulários

---

**Desenvolvido para Gabriella B. Engelhardt - Psicóloga**
