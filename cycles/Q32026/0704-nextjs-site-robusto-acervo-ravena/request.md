# Request — Migração Next.js e site institucional robusto do Acervo Ravena

**Classificação:** Large  
**Path:** `cycles/Q32026/0704-nextjs-site-robusto-acervo-ravena/`  
**Data do ciclo:** 2026-07-04

---

## Context

O Acervo Ravena é um site institucional documental sobre o Ravena Cassino Hotel em Laguna, SC. O projeto atual é **Vite + React** com layout monolítico em `src/app/App.tsx` (hero, história, timeline, relatos, CTA, footer). O layout inicial foi aprovado editorialmente, mas a arquitetura precisa ser mais robusta.

Conteúdo disponível:

- **9 fotografias** em `public/` (WhatsApp images — acervo real)
- **Depoimento do Juliano** (gerente atual do Ravena Cassino Hotel):
  > "O Ravena não é só um hotel antigo, mas um acontecimento que mudou o litoral da Laguna. Seu valor está justamente na capacidade de trazer essa ocupação que só fez bem para os arredores e transformou a praia (Mar Grosso)."

Referência visual para a **timeline**: barra horizontal com marcadores, ano ativo em destaque (serif, verde), anos inativos menores, botões de navegação lateral (setas lime) e texto descritivo centralizado abaixo do ano selecionado (estilo Editora Árvore da Vida).

Lacunas atuais: link `#acervo` no header aponta para seção inexistente; imagens do hero/relatos ainda usam placeholders Unsplash.

**Nota:** repositório ainda **não possui** `spec/harness.md` nem specs canônicas — bootstrap de spec pode ocorrer no `/refine-request`.

---

## Intent

- Migrar o projeto de **Vite/React para Next.js** (App Router) como base de produção
- Preservar e refinar a identidade visual do layout aprovado (hero, tipografia, paleta, tom editorial)
- Reimplementar a **Linha do Tempo** como componente interativo no estilo do print de referência
- Integrar conteúdo real: fotos de `public/` e depoimento do Juliano
- Completar seções faltantes e adicionar seções complementares coerentes (galeria/acervo, depoimento em destaque, sobre o projeto)
- Organizar código em componentes modulares e camada de conteúdo editável

---

## Entregas

### 1. Migração para Next.js

- App Next.js (App Router) com Tailwind e estrutura escalável
- Migrar estilos (theme, fonts, tailwind) do Vite atual
- Substituir monólito `App.tsx` por `app/page.tsx` + componentes de seção
- Configurar assets em `public/` compatível com Next.js
- Scripts dev/build funcionais

### 2. Estrutura de componentes

- Layout: Header, Footer
- Seções: Hero, Historia, Timeline, AcervoGallery, Relatos, ContribuaCTA
- Reutilizar shadcn/ui existente onde fizer sentido
- Camada de conteúdo (`content/` ou `data/`) para timeline, depoimentos e metadados de imagens

### 3. Timeline interativa (estilo print)

- Barra horizontal com linha e dots por marco temporal
- Ano ativo: tipografia serif grande, cor verde, dot destacado
- Anos inativos: menores, cinza
- Botões circulares lime com setas (← →) para navegar entre marcos
- Texto descritivo centralizado abaixo do ano ativo
- Responsivo (mobile: scroll ou navegação simplificada)
- Manter marcos atuais como default (1930, 1942, 1946, 1970, 1998, 2024), estruturados para fácil edição

### 4. Integração de conteúdo

- Renomear/organizar imagens de `public/` com slugs legíveis
- Criar seção **Acervo** (`#acervo`) com galeria das fotos reais
- Incluir depoimento do Juliano em Relatos e/ou bloco de citação em destaque
- Substituir placeholders Unsplash onde houver asset real disponível

### 5. Seções complementares

- Depoimento em destaque com citação do Juliano
- Sobre o projeto (missão do acervo documental)
- Corrigir navegação: todos os links do header apontam para seções existentes

### 6. Polish e robustez

- Acessibilidade básica na timeline (teclado, aria-labels, focus)
- Otimização de imagens (`next/image`)
- Metadata básica (title, description) no layout root
- Remover dependências Vite/react-router não utilizadas após migração

---

## Constraints

- Preservar identidade visual atual (minimalista, editorial, serif para datas/títulos, sans para corpo)
- Timeline conforme print de referência
- Conteúdo em **pt-BR**
- Reutilizar Tailwind, shadcn/ui, lucide-react onde possível
- Não inventar fatos históricos sem base — marcos da timeline podem ser placeholders até validação
- Renomear assets de `public/` com slugs amigáveis

---

## Referências

- Print de referência da timeline (Editora Árvore da Vida)
- Layout atual: `src/app/App.tsx`
- Assets: `public/*.jpeg` (9 fotografias)
- Depoimento: Juliano, gerente atual do Ravena Cassino Hotel
- Design Figma: https://www.figma.com/design/14rNWRzAn9ojxT9OG55Iz9/Institutional-website-design
- `guidelines/Guidelines.md`

---

## Critérios de aceite

- [ ] Site roda em Next.js (`dev` + `build` OK)
- [ ] Timeline interativa conforme print de referência
- [ ] Galeria com fotos reais de `public/`
- [ ] Depoimento do Juliano visível no site
- [ ] Layout responsivo; navegação por âncoras funcional
- [ ] Código modularizado (não monolítico)

---

## Fora de escopo

- CMS, backend, API, banco de dados, Supabase
- Formulário funcional de contribuição (CTA pode permanecer placeholder/mailto)
- Busca funcional no header
- Páginas internas dedicadas (entrevista individual, item do acervo)
- SEO avançado, analytics, i18n
- Deploy para produção (Vercel, domínio, DNS)
- Pesquisa histórica ou redação extensa de novos textos
- Bootstrap completo do SDD Harness (opcional neste ciclo)

---

## Validação esperada

- `pnpm dev` / `npm run dev` sobe Next.js sem erros
- `pnpm build` / `npm run build` completa com sucesso
- Página principal renderiza: hero, história, timeline, acervo, relatos (Juliano), CTA, footer
- Timeline: setas/clique alteram ano ativo e atualizam texto
- Imagens de `public/` carregam via `next/image` ou equivalente
- Layout responsivo mobile e desktop

---

## Decisões de refinamento (2026-07-04)

| Tópico | Decisão |
|--------|---------|
| Renderização | SSG estático |
| Timeline | Manter textos placeholder do App.tsx |
| Galeria | Grid + lightbox + estrutura de metadados (valores genéricos) |
| Juliano | Bloco de citação em destaque + card em Relatos |
| Imagens | `public/` só no acervo; hero/relatos mantêm Unsplash |
| Package manager | pnpm |
| Spec | Bootstrap completo (`harness`, `development-workflow`, feature spec) |
| CTA | Botão placeholder sem ação |
| Seções extras | Impacto em Laguna, Sobre o projeto (+ seções editoriais conforme plan.md) |

---

## Entrada humana (escopo aprovado)

Migrar Acervo Ravena para Next.js mantendo layout editorial aprovado. Timeline interativa no estilo do print (barra horizontal, ano ativo, setas, texto abaixo). Integrar 9 fotos de `public/` e depoimento do Juliano. Adicionar seção Acervo e seções complementares. Código modular e robusto.
