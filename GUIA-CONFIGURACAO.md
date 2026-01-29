# 📋 Guia de Configuração - Site Gabriella Clínica

Este guia te ajudará a configurar e personalizar o site passo a passo.

## 🚀 Passo 1: Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Aguarde a instalação de todos os pacotes necessários.

## 🎨 Passo 2: Testar o Site Localmente

Para visualizar o site no navegador:

```bash
npm run dev
```

Acesse: `http://localhost:3000`

Você verá o site funcionando com os textos e layout base!

## ✏️ Passo 3: Personalizar Informações de Contato

### 3.1 Header (Navegação)
**Arquivo**: `components/Header.tsx`

Não precisa alterar nada ainda, está pronto!

### 3.2 Footer (Rodapé)
**Arquivo**: `components/Footer.tsx`

Encontre e substitua:
- Linha 18: `CRP: XX/XXXXX` → Seu número CRP real
- Linha 46: `contato@exemplo.com` → Seu email
- Linha 56: `(00) 00000-0000` → Seu telefone
- Linha 66: `5500000000000` → Seu WhatsApp (formato: 55 + DDD + número)

**Exemplo WhatsApp**:
- Seu número: (11) 98765-4321
- No código: 5511987654321

## 📝 Passo 4: Personalizar Textos da Home

**Arquivo**: `app/page.tsx`

### 4.1 Hero Section (Topo)
- **Linha 8-10**: Título principal
- **Linha 11-14**: Subtítulo descritivo
- **Linhas 16-26**: Botões de ação (já estão prontos!)

### 4.2 Seção "Sobre a Psicóloga"
- **Linha 105-108**: Texto sobre você
- **Linha 109-113**: Sua filosofia de trabalho
- **Linha 116**: Seu CRP (substitua XX/XXXXX)

### 4.3 CTAs (Calls-to-Action)
- **Linha 207**: Link do WhatsApp - altere o número

## 🖼️ Passo 5: Adicionar Sua Foto

1. Coloque sua foto profissional na pasta `public/images/`
2. Nomeie como: `gabriella-foto.jpg` (ou .png)
3. No arquivo `app/page.tsx`, linha 95:

**Substitua isto:**
```tsx
<div className="bg-verde-mar-200 rounded-2xl aspect-square flex items-center justify-center">
  <svg className="w-32 h-32 text-verde-mar-400"...>
    {/* ícone placeholder */}
  </svg>
</div>
```

**Por isto:**
```tsx
<div className="rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/images/gabriella-foto.jpg"
    alt="Psicóloga Gabriella B. Engelhardt"
    className="w-full h-full object-cover"
  />
</div>
```

## 🎨 Passo 6: Ajustar Cores (Opcional)

Se quiser modificar as cores, edite: `tailwind.config.ts`

As cores atuais:
- **Verde-mar principal**: `#2A9D8F`
- **Vermelho cardeal**: `#C1121F`

## 📄 Passo 7: Revisar Layout e Design

Com o servidor rodando (`npm run dev`), navegue pelo site:

1. **Home** - Página principal ✅
2. **Atendimento** - Placeholder (desenvolver depois) 🚧
3. **Minha História** - Placeholder (desenvolver depois) 🚧
4. **Contato** - Placeholder (desenvolver depois) 🚧

### O que revisar na Home:
- [ ] Título do Hero está adequado?
- [ ] Descrição dos serviços faz sentido?
- [ ] Texto sobre você está correto?
- [ ] Foto está no lugar certo?
- [ ] Todas as informações de contato estão corretas?

## ✅ Checklist de Configuração Básica

- [ ] Instalei as dependências (`npm install`)
- [ ] Testei o site localmente (`npm run dev`)
- [ ] Atualizei o CRP no Footer
- [ ] Atualizei email de contato
- [ ] Atualizei telefone
- [ ] Atualizei WhatsApp (com código do país)
- [ ] Adicionei minha foto profissional
- [ ] Revisei todos os textos da Home
- [ ] Testei a responsividade (mobile, tablet, desktop)

## 🎯 Próximos Passos

Depois de configurar a base:

1. **Desenvolver página de Atendimento** - Detalhar cada serviço
2. **Desenvolver página Minha História** - Sua trajetória completa
3. **Desenvolver página de Contato** - Formulário funcional
4. **Adicionar botão WhatsApp flutuante** - Sempre visível
5. **Otimizar SEO** - Meta tags específicas

## 🆘 Problemas Comuns

### Erro ao instalar dependências
```bash
# Tente limpar o cache
npm cache clean --force
npm install
```

### Porta 3000 já em uso
```bash
# Use outra porta
npm run dev -- -p 3001
```

### Mudanças não aparecem
- Salve o arquivo
- Aguarde alguns segundos
- Recarregue a página (Ctrl/Cmd + R)
- Se não funcionar, reinicie o servidor

## 💡 Dicas

1. **Sempre salve os arquivos** antes de testar
2. **Teste em diferentes navegadores** (Chrome, Firefox, Safari)
3. **Teste no celular** - responsividade é essencial
4. **Peça feedback** de outras pessoas
5. **Faça alterações pequenas** de cada vez

## 📞 Teste seu WhatsApp

Para testar se o link do WhatsApp está correto:

1. Clique no botão WhatsApp no site
2. Deve abrir o WhatsApp Web
3. A conversa deve ser com o número correto

Formato do link: `https://wa.me/5511987654321`
- 55 = Brasil
- 11 = DDD
- 987654321 = Número (sem espaços, sem hífen)

---

**Pronto! Seu site está configurado e pronto para personalização! 🎉**
