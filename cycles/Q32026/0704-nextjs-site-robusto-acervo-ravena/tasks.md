# Tasks — nextjs site robusto acervo ravena

**Classificação:** Large (staged)  
**Package manager:** pnpm

## Preparação

- [x] Ler `request.md`, `plan.md`, `scenarios.feature`, `spec-delta.md`
- [x] Confirmar decisões de refinamento registradas no `plan.md`

---

## Stage 1 — Bootstrap Next.js

- [x] Criar app Next.js (App Router) com pnpm
- [x] Configurar Tailwind 4 compatível com Next
- [x] Migrar `src/styles/theme.css`, `fonts.css`, tokens shadcn de `default_shadcn_theme.css`
- [x] Criar `app/layout.tsx` com metadata básica (title, description pt-BR)
- [x] Configurar SSG estático para `app/page.tsx`
- [x] Scripts `dev`, `build`, `start` no `package.json`
- [x] Smoke: `pnpm dev` sobe sem erro
- [x] Registrar progresso em `implementation-notes.md`

**Checkpoint humano** antes de Stage 2.

---

## Stage 2 — Layout e seções estáticas

- [x] Criar `components/layout/Header.tsx` (nav: História, Acervo, Relatos; menu mobile; ícone busca decorativo)
- [x] Criar `components/layout/Footer.tsx` (links incluindo Sobre)
- [x] Criar `components/sections/Hero.tsx` (carrossel Unsplash preservado)
- [x] Criar `components/sections/Historia.tsx` (copy atual)
- [x] Criar `components/sections/ContribuaCTA.tsx` (botão placeholder sem ação)
- [x] Montar `app/page.tsx` com composição inicial
- [x] Âncoras `#historia` funcionando
- [x] Registrar em `implementation-notes.md`

**Checkpoint humano** antes de Stage 3.

---

## Stage 3 — Timeline interativa

- [x] Criar `content/timeline.ts` com marcos placeholder (1930–2024, textos do App.tsx)
- [x] Criar `components/sections/Timeline.tsx`:
  - [x] Barra horizontal com linha e dots
  - [x] Ano ativo serif verde + dot verde + setas lime
  - [x] Anos inativos menores/cinza
  - [x] Texto descritivo centralizado abaixo
  - [x] Navegação setas, clique em ano, teclado
  - [x] Responsivo mobile
- [x] Adicionar `#timeline` na página
- [x] Registrar em `implementation-notes.md`

**Checkpoint humano** antes de Stage 4.

---

## Stage 4 — Acervo e assets

- [x] Renomear/mover imagens para `public/acervo/` com slugs legíveis (ex.: `acervo-01.jpeg`)
- [x] Criar `content/acervo.ts` com estrutura `{ slug, src, alt, year?, caption?, credit? }`
- [x] Criar `components/sections/AcervoGallery.tsx`:
  - [x] Grid responsivo
  - [x] Lightbox ao clicar (Dialog/shadcn)
  - [x] `next/image` para otimização
- [x] Seção `#acervo` na página
- [x] Registrar em `implementation-notes.md`

**Checkpoint humano** antes de Stage 5.

---

## Stage 5 — Depoimento, relatos e seções complementares

- [x] Criar `content/depoimentos.ts` com depoimento Juliano
- [x] Criar `components/sections/DepoimentoDestaque.tsx` (citação Juliano)
- [x] Criar `components/sections/ImpactoLaguna.tsx` (texto curto impacto/Mar Grosso)
- [x] Criar `components/sections/Relatos.tsx` (card Juliano + 1 placeholder Unsplash)
- [x] Criar `content/site.ts` + `components/sections/SobreProjeto.tsx` (`#sobre`)
- [x] Ordem final das seções conforme `plan.md`
- [x] Todas as âncoras do header/footer funcionando
- [x] Registrar em `implementation-notes.md`

**Checkpoint humano** antes de Stage 6.

---

## Stage 6 — Cleanup, polish e validação

- [x] Aplicar `next/image` onde aplicável (hero Unsplash pode usar img ou next/image com domains config)
- [x] Remover arquivos Vite obsoletos (`vite.config.ts`, `index.html`, `src/main.tsx`, monólito `App.tsx` se substituído)
- [x] Limpar dependências não usadas (react-router, vite, etc.)
- [x] Acessibilidade: aria-labels na timeline e lightbox
- [x] `pnpm build` passa
- [x] Smoke manual: desktop + mobile (viewport estreito)
- [x] Preencher baseline em `validation.md` (via `/validate-cycle`)
- [x] Registrar em `implementation-notes.md`

---

## Fechamento

- [ ] `/review-implementation` executado
- [ ] `/validate-cycle` executado
- [ ] Promover `spec-delta.md` via `/update-spec`
- [ ] `/close-cycle` quando aprovado
