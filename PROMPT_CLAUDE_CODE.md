# PROMPT MESTRE DEFINITIVO PARA O CLAUDE CODE: LANDING PAGE ZENSAI RESTAURANTE

> **Instruções de uso:** Copie todo o bloco de código markdown abaixo e cole diretamente no Claude Code na pasta do projeto.

---

```markdown
Você é um Arquiteto Frontend Sênior e Lead UI/UX & Motion Designer especialista em marcas de hospitalidade de luxo e alta gastronomia asiática (referências: Edo Zushi, Zuma, Nobu).

Seu objetivo é desenvolver a base estrutural, visual e interativa completa da Landing Page do **Zensai Restaurante (Zensai - Sabor Oriental)**. O projeto deve ser ultra-performático, modular e pronto para receber novos itens de cardápio e fotografias.

---

### 🛑 DIRETRIZES DE DESIGN HUMANO (REGRA 0% ASPECTO DE IA)
O projeto DEVE ter aparência de código e design desenvolvidos por um estúdio humano de elite, SEM vícios ou clichês de inteligência artificial:
1. **NÃO use gradientes azul/roxo/neon genéricos** nem glassmorphism exagerado com borrões brancos gigantes.
2. **NÃO use emojis como ícones em títulos ou botões** (nada de 🍣🥢🔥🚀 nos headings). Utilize micro-ícones SVG elegantes (traço fino estilo Lucide) ou tipografia pura.
3. **NÃO escreva textos robóticos corporativos** (evite clichês como "O futuro da gastronomia", "Uma revolução no seu paladar"). Adote o tom genuíno da hospitalidade e tradição japonesa (*omotenashi*): respeito absoluto à matéria-prima, cortes artesanais precisos, frescor diário dos pescados e acolhimento intimista.
4. **Respeito às Normas de Acessibilidade (WCAG AAA):** Contraste impecável entre textos e superfícies escuras, foco visível para navegação por teclado e semântica estrita.

---

### 🏛️ ESTILOS VISUAIS SELECIONADOS (DO GUIA DE TERMOS)
A estética visual do Zensai combina:
1. **Dark Mode First & Luxury Minimal:** Atmosfera noturna sofisticada inspirada na fachada real com lanternas acesas, contrastando preto sumi-e com vermelho carmim e toques de bambu dourado.
2. **Editorial & Typography First:** Hierarquia tipográfica marcante com títulos em caixa alta espaçada (estilo Edo Zushi), grids assimétricos e respiros amplos (*ma* 間 - espaço negativo intencional).
3. **Japandi / Japanese Zen Structure:** Linhas geométricas finas inspiradas na marcenaria tradicional (*shoji*), acabamentos refinados e bordas sutis.

---

### 🎨 DESIGN TOKENS & PALETA DE CORES (CSS VARIABLES)
Configure no `:root`:
```css
:root {
  /* Cores de Fundo e Superfície */
  --bg-primary: #0A0A0C;       /* Preto sumi-e profundo */
  --bg-secondary: #121215;     /* Carvão escuro para seções alternadas */
  --bg-card: #18181D;          /* Superfície de cards e blocos */
  --bg-elevated: #202026;      /* Modais, popups e drawer */

  /* Cores de Acento */
  --accent-red: #C92A2A;       /* Vermelho carmim japonês (Sol da fachada Zensai) */
  --accent-red-hover: #E03131;
  --accent-gold: #C2A26F;      /* Dourado pálido de bambu para selos e detalhes */
  --accent-gold-glow: rgba(194, 162, 111, 0.15);

  /* Tipografia */
  --text-primary: #F8F9FA;     /* Off-white de alto contraste */
  --text-secondary: #ADB5BD;   /* Cinza claro para descrições */
  --text-muted: #6C757D;       /* Legendas e metadados */

  /* Linhas e Bordas Shoji */
  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-hover: rgba(201, 42, 42, 0.4);
  --border-gold: rgba(194, 162, 111, 0.25);

  /* Curvas de Animação */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Tipografia (Google Fonts):**
- Títulos & Destaques: `'Montserrat'`, sans-serif (pesos 600, 700, 800 em caixa alta com `letter-spacing: 0.08em` a `0.15em`).
- Corpo de Texto & Leitura: `'Plus Jakarta Sans'`, sans-serif (pesos 300, 400, 500).

---

### 🎬 MOTION DESIGN & ANIMAÇÕES (DO GUIA DE TERMOS TÉCNICOS)
Implemente motion de alto nível via CSS acelerado por hardware (`transform`, `opacity`) e `IntersectionObserver` nativo no JS:

1. **Scroll-triggered reveal (Fade in on scroll):**
   - Classes `.reveal` que começam com `opacity: 0; transform: translateY(24px)` e ganham `.is-visible` ao entrar no viewport (duração: `600ms var(--ease-spring)`).
2. **Staggered entrance:**
   - Delay progressivo nos cards do cardápio e nos itens de diferenciais (`transition-delay: calc(var(--index) * 80ms)`), criando um efeito cascata refinado.
3. **Parallax scrolling sutil no Hero:**
   - Efeito suave de movimento na imagem de fundo `zensai frente restaurante.png` ao rolar a página.
4. **Text reveal / Kinetic typography no Hero:**
   - Entrada elegante da headline com `clip-path` ou fade/translate sequenciado no carregamento (`on-mount`).
5. **Microinteractions & Hover transform:**
   - **Botões:** `transform: translateY(-2px) scale(1.01)` com transição de `200ms var(--ease-spring)` e brilho sutil de borda.
   - **Cards de Pratos:** Elevação leve `translateY(-4px)` com realce suave da borda dourada/vermelha e zoom lento da imagem (`scale(1.04)` em `400ms`).
   - **Links da Navegação:** Efeito de linha sublinhada que surge a partir do centro (`width: 0%` -> `100%`).
6. **Marquee Loop elegante (Faixa Contínua):**
   - Faixa infinita discreta entre seções com palavras-chave e ideogramas:
     `SUSHIBAR ARTESANAL • 新鮮 PESCADOS SELECIONADOS • ALTA GASTRONOMIA • IZAKAYA • 伝統 TRADIÇÃO & CONTEMPORANEIDADE • DELIVERY EXPRESS`
7. **Floating / Levitation:**
   - Indicador chevron na base do Hero oscilando suavemente (`translateY(0) -> translateY(8px) -> translateY(0)` em loop de `2.4s ease-in-out`).
8. **Pulse Glow sutil:**
   - Respiração quase imperceptível de iluminação no botão principal de WhatsApp (`box-shadow: 0 0 0 0 rgba(201, 42, 42, 0.4)` expandindo a cada 3s).

---

### 🏢 DADOS REAIS DO RESTAURANTE (EXTRAÍDOS DA FACHADA)
- **Nome Oficial:** Zensai Restaurante (Zensai - Sabor Oriental)
- **WhatsApp Oficial:** `(46) 98812-8289` (link: `https://wa.me/5546988128289?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20no%20Zensai`)
- **Telefone Delivery:** `(46) 3025-2591` (link: `tel:4630252591`)
- **Hero Image:** `./zensai frente restaurante.png` (arquivo local existente na raiz do projeto)
- **Segmentos:** Sushibar Tradicional & Contemporâneo, Combinados Especiais, Pratos Quentes, Ambiente Izakaya e Delivery Especializado.

---

### 📂 ARQUITETURA DE ARQUIVOS
Crie arquivos estáticos puros, sem bundlers obrigatórios, prontos para rodar localmente ou em produção:
1. `index.html`: Semântica HTML5 estrita (`header`, `nav`, `main`, `section`, `article`, `footer`), OpenGraph/SEO, esquema Schema.org `Restaurant`.
2. `style.css`: Design tokens, layout responsivo via CSS Grid e Flexbox, tipografia fluida com `clamp()`, animações e regras de media queries.
3. `script.js`:
   - Efeito sticky com `backdrop-filter: blur` na navbar ao rolar.
   - Menu gaveta mobile fluido com trava de scroll no body.
   - Filtro de categorias do cardápio em tempo real com animação de fade nos itens.
   - Indicador dinâmico de status em tempo real ("🟢 ABERTO AGORA" / "🔴 FECHADO NO MOMENTO") baseado no relógio local.
   - Observador `IntersectionObserver` para disparar as classes de scroll reveal.

---

### 📐 ESTRUTURA DETALHADA DAS SEÇÕES

#### 1. Top Announcement Bar
- Faixa superior elegante com micro-alinhamento:
  - "🍣 **Delivery & Retirada:** Peça pelo WhatsApp (46) 98812-8289 ou ligue (46) 3025-2591" + Badge com status de hoje.

#### 2. Header / Navbar Fixo
- **Logo:** Símbolo circular do Sol Vermelho estilizado com o nome "ZENSAI - Sabor Oriental".
- **Menu Desktop:** `HOME`, `O ZENSAI`, `CARDÁPIO`, `AMBIENTE`, `HORÁRIOS`, `CONTATO`.
- **Ações Rápidas (Direita):**
  - Link de chamada: `(46) 3025-2591`
  - Botão CTA Vermelho com microinteração: `Pedir pelo WhatsApp`
- **Menu Mobile:** Botão hambúrguer animado abrindo drawer lateral escuro.

#### 3. Hero Section (Inspirado no Edo Zushi com a imagem do Zensai)
- **Background:** `zensai frente restaurante.png` com `background-size: cover; background-position: center;`.
- **Tratamento de Imagem:** Camada de vinheta e gradientes escuros:
  - Gradiente superior para contraste de 100% da navbar.
  - Gradiente inferior suave que funde perfeitamente o asfalto da foto com o preto `#0A0A0C` da página.
- **Conteúdo Centralizado:**
  - Título Principal com kinetic text reveal: **"A AUTÊNTICA GASTRONOMIA ORIENTAL"**
  - Subtítulo acolhedor: *"Irasshaimase! Seja bem-vindo ao Zensai. Uma imersão completa na alta culinária japonesa, pescados nobres e ambiente temático acolhedor."*
  - Badges com separadores pontilhados elegantes:
    `SUSHIBAR • COMBINADOS ESPECIAIS • PRATOS QUENTES • IZAKAYA`
  - Tag de destaque secundária: `ATENDIMENTO NO SALÃO & DELIVERY EXPRESS`
  - Dupla de botões CTA:
    - `[Explorar Cardápio]` (scroll suave para a seção de pratos)
    - `[Fazer Pedido no WhatsApp]` (link direto)
  - Indicador chevron animado convidando ao scroll.

#### 4. Marquee Loop Sofisticado
- Fita horizontal infinita com tipografia sutil em caixa alta e ideogramas discretos.

#### 5. Seção "O Zensai" (Tradição, Cortes & Conceito)
- Layout editorial em 2 colunas assimétricas:
  - Coluna Texto: Manifesto do restaurante sobre o respeito à tradição oriental, pescados frescos do dia e hospitalidade.
  - Coluna Destaques: 3 cards com borda shoji sutil e ícones SVG finos:
    1. "Pescados Frescos Selecionados"
    2. "Preparo Artesanal & Sushibar à Vista"
    3. "Ambiente Temático com Lanternas Tradicionais"

#### 6. Seção Cardápio em Destaque (Filtro por Categorias)
- Barra de abas com transição suave via JS:
  - `[Todos]`, `[Combinados Especiais]`, `[Sushis & Sashimis]`, `[Hot Rolls & Temakis]`, `[Pratos Quentes]`, `[Sobremesas & Bebidas]`.
- Grid responsivo de cards com staggered reveal:
  - Tag do prato (ex: "Destaque do Sushibar", "Para Compartilhar"),
  - Nome do prato e descrição refinada dos ingredientes,
  - Preço formatado,
  - Botão "Pedir via WhatsApp" (já com o nome do prato na mensagem automática).
- Deixe o código HTML estruturado e comentado para fácil adição de novos pratos.

#### 7. Seção Experiência & Salão
- Galeria de imagens do ambiente (lanternas japonesas, iluminação cênica, balcão).
- Efeito hover refinado com scale sutil e máscara escura.

#### 8. Seção Horários de Funcionamento (Tabela & Status em Tempo Real)
- Tabela de horários semanal limpa e diagramada.
- Badge dinâmico calculado pelo JS:
  - Se estiver dentro do horário de funcionamento: `🟢 ABERTO AGORA PARA ATENDIMENTO`
  - Se estiver fora: `🔴 FECHADO NO MOMENTO • REABRE EM BREVE`

#### 9. Seção Localização & Pedidos
- Coluna 1:
  - Bloco de contato com botões diretos de WhatsApp `(46) 98812-8289` e Telefone `(46) 3025-2591`.
  - Instruções de entrega rápida e retirada no balcão.
  - Botão de rota: "Abrir no Google Maps / Waze".
- Coluna 2:
  - Card de mapa interativo com filtro dark mode estilizado.

#### 10. Footer Institucional
- Logotipo com sol vermelho, links de navegação, Instagram do restaurante e copyright.

---

### ⚙️ EXECUÇÃO
Crie agora os arquivos `index.html`, `style.css` e `script.js` no diretório atual. Utilize a imagem `./zensai frente restaurante.png` como plano de fundo do Hero e certifique-se de que a página carregue com fluidez máxima e zero falhas de layout.
```
