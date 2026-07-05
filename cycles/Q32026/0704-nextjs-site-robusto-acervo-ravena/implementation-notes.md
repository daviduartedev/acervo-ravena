# Implementation notes — nextjs site robusto acervo ravena

**Modo:** staged (Large)  
**Status:** Stage 6 concluída — implementação do ciclo completa; aguardar `/review-implementation` e `/validate-cycle`

---

## Stage 1 — Bootstrap Next.js ✅

**Data:** 2026-07-05

### Tarefas concluídas

- [x] Next.js 16.2.9 (App Router) instalado com pnpm
- [x] React 19.2.7 + TypeScript 6 configurados
- [x] Tailwind CSS 4.3.1 + `@tailwindcss/postcss` para Next
- [x] Estilos migrados: `app/globals.css` importa `src/styles/theme.css`, fonts Manrope, `tw-animate-css`
- [x] `app/layout.tsx` com metadata pt-BR
- [x] `app/page.tsx` placeholder (SSG estático confirmado no build)
- [x] Scripts `dev`, `build`, `start` apontando para Next
- [x] Smoke `pnpm dev` — GET / 200
- [x] `pnpm build` — rota `/` prerendered como static (○)

### Arquivos criados

| Arquivo | Propósito |
|---------|-----------|
| `app/layout.tsx` | Root layout + metadata |
| `app/page.tsx` | Homepage placeholder |
| `app/globals.css` | Tailwind 4 + theme migrado |
| `next.config.ts` | Config Next (remotePatterns Unsplash) |
| `tsconfig.json` | TypeScript Next |
| `next-env.d.ts` | Types Next |

### Arquivos alterados

| Arquivo | Mudança |
|---------|---------|
| `package.json` | next, react, scripts; `onlyBuiltDependencies` |
| `postcss.config.mjs` | `@tailwindcss/postcss` |
| `pnpm-workspace.yaml` | `win32`/`darwin` em `supportedArchitectures` |

### Comandos executados

```text
pnpm add next react react-dom
pnpm add -D typescript @types/react @types/react-dom @types/node @tailwindcss/postcss
pnpm add -D tailwindcss@4.3.1 lightningcss-win32-x64-msvc
pnpm install
pnpm build   # OK — static /
pnpm dev     # OK — GET / 200
```

### Desvios / correções

1. **`pnpm-workspace.yaml`** limitava `supportedArchitectures` a Linux — impedia binários nativos no Windows. Adicionado `win32` e `darwin`.
2. **`lightningcss` native binary** ausente — resolvido com `lightningcss-win32-x64-msvc` + `onlyBuiltDependencies` no package.json.
3. **`tsconfig.json`** exclui temporariamente `src/main.tsx` e `vite.config.ts` (legado Vite; remoção na Stage 6).

### Riscos remanescentes

- Peer deps de `react-day-picker` e `react-popper` pedem React 18; projeto usa React 19 (não bloqueia — shadcn não usado ainda na página).
- Arquivos Vite legados coexistem até Stage 6.
- `pnpm-workspace.yaml` tinha `minimumReleaseAge: 10080` — mantido.

### Próximo passo

Stage 2 — Layout e seções estáticas (Header, Footer, Hero, História, CTA).

---

## Stage 2 — Layout e seções estáticas ✅

**Data:** 2026-07-05

### Tarefas concluídas

- [x] `components/layout/Header.tsx` — nav, menu mobile, busca decorativa
- [x] `components/layout/Footer.tsx` — links com âncoras (#historia, #acervo, #relatos, #sobre)
- [x] `components/sections/Hero.tsx` — carrossel Unsplash com `next/image`, auto-play 5s
- [x] `components/sections/Historia.tsx` — copy "A Gênese" com `id="historia"`
- [x] `components/sections/ContribuaCTA.tsx` — botão placeholder (`aria-disabled`)
- [x] `app/page.tsx` — composição Header → Hero → História → CTA → Footer
- [x] `pnpm build` OK

### Arquivos criados

| Arquivo | Tipo |
|---------|------|
| `components/layout/Header.tsx` | client |
| `components/layout/Footer.tsx` | server |
| `components/sections/Hero.tsx` | client |
| `components/sections/Historia.tsx` | server |
| `components/sections/ContribuaCTA.tsx` | server |

### Arquivos alterados

| Arquivo | Mudança |
|---------|---------|
| `app/page.tsx` | substituiu placeholder pela composição editorial |

### Comandos executados

```text
pnpm build   # OK — static /
```

### Notas

- Links `#acervo`, `#relatos`, `#sobre` no header/footer apontam para seções das Stages 4–5 (ainda não renderizadas).
- Hero migrado para `next/image` com domínio Unsplash já configurado em `next.config.ts`.

### Próximo passo

Stage 3 — Timeline interativa.

---

## Stage 3 — Timeline interativa ✅

**Data:** 2026-07-05

### Tarefas concluídas

- [x] `content/timeline.ts` — 6 marcos placeholder (1930–2024)
- [x] `components/sections/Timeline.tsx`:
  - Barra horizontal com linha e dots (desktop: todos os anos visíveis)
  - Ano ativo: Playfair Display, verde `#1b4d3e`, setas lime `#c5e84a`
  - Anos inativos clicáveis, menores e cinza
  - Título + descrição centralizados abaixo (`aria-live="polite"`)
  - Navegação: setas, clique em ano, teclado ←/→ (section focável)
  - Mobile: ano grande + setas + dots compactos na barra
- [x] `#timeline` inserido entre História e CTA em `app/page.tsx`
- [x] `pnpm build` OK

### Arquivos criados

| Arquivo | Propósito |
|---------|-----------|
| `content/timeline.ts` | Dados dos marcos |
| `components/sections/Timeline.tsx` | Componente interativo |

### Arquivos alterados

| Arquivo | Mudança |
|---------|---------|
| `app/page.tsx` | `<Timeline />` após História |
| `app/globals.css` | Playfair Display + `.font-serif-timeline`; `@source content/` |

### Comandos executados

```text
pnpm build   # OK — static /
```

### Próximo passo

Stage 4 — Acervo e assets.

---

## Stage 4 — Acervo e assets ✅

**Data:** 2026-07-05

### Tarefas concluídas

- [x] 9 imagens movidas de `public/*.jpeg` → `public/acervo/acervo-01.jpeg` … `acervo-09.jpeg`
- [x] `content/acervo.ts` — metadados com alt/caption genéricos; year/credit opcionais reservados
- [x] `components/sections/AcervoGallery.tsx` — grid 2/3/4 colunas, lightbox Dialog, `next/image`
- [x] `components/ui/dialog.tsx` + `lib/utils.ts` — Dialog adaptado para lightbox
- [x] `#acervo` após Timeline em `app/page.tsx`
- [x] `pnpm build` OK

### Arquivos criados

| Arquivo | Propósito |
|---------|-----------|
| `public/acervo/acervo-01.jpeg` … `acervo-09.jpeg` | Assets renomeados |
| `content/acervo.ts` | Metadados do acervo |
| `components/sections/AcervoGallery.tsx` | Galeria + lightbox |
| `components/ui/dialog.tsx` | Dialog Radix (lightbox) |
| `lib/utils.ts` | Helper `cn()` |

### Arquivos alterados

| Arquivo | Mudança |
|---------|---------|
| `app/page.tsx` | `<AcervoGallery />` após Timeline |

### Comandos executados

```text
# Move/rename WhatsApp images → public/acervo/acervo-NN.jpeg
pnpm build   # OK — static /
```

### Próximo passo

Stage 5 — Depoimento, relatos e seções complementares.

---

## Stage 5 — Depoimento, relatos e seções complementares ✅

**Data:** 2026-07-05

### Tarefas concluídas

- [x] `content/depoimentos.ts` — Juliano + cards para Relatos
- [x] `content/site.ts` — copy Impacto e Sobre
- [x] `DepoimentoDestaque` — blockquote editorial entre História e Timeline
- [x] `ImpactoLaguna` — `#impacto`, texto Mar Grosso/Laguna
- [x] `Relatos` — card Juliano + placeholder Manoel Silveira (Unsplash)
- [x] `SobreProjeto` — `#sobre`, missão do acervo
- [x] Ordem final em `app/page.tsx` conforme plan.md
- [x] Âncoras header/footer: `#historia`, `#acervo`, `#relatos`, `#sobre`
- [x] `pnpm build` OK

### Ordem final da página

Hero → História → Depoimento → Timeline → Acervo → Impacto → Relatos → Sobre → CTA → Footer

### Arquivos criados

| Arquivo | Propósito |
|---------|-----------|
| `content/depoimentos.ts` | Depoimento Juliano + relato cards |
| `content/site.ts` | Copy institucional |
| `components/sections/DepoimentoDestaque.tsx` | Citação em destaque |
| `components/sections/ImpactoLaguna.tsx` | Seção impacto |
| `components/sections/Relatos.tsx` | Grid de relatos |
| `components/sections/SobreProjeto.tsx` | Sobre o projeto |

### Arquivos alterados

| Arquivo | Mudança |
|---------|---------|
| `app/page.tsx` | Composição completa das 9 seções |

### Comandos executados

```text
pnpm build   # OK — static /
```

### Próximo passo

Stage 6 — Cleanup, polish e validação.

---

## Stage 6 — Cleanup, polish e validação ✅

**Data:** 2026-07-05

### Tarefas concluídas

- [x] `next/image` já aplicado em Hero, Acervo, Relatos
- [x] Removidos: `vite.config.ts`, `index.html`, pasta `src/` inteira (Vite monólito + shadcn legado)
- [x] Theme migrado para `styles/theme.css`
- [x] Removidos pacotes: `vite`, `@tailwindcss/vite`, `@vitejs/plugin-react`, `react-router`
- [x] Removido override `pnpm.overrides.vite`
- [x] `.gitignore` criado (`.next`, `node_modules`, etc.)
- [x] `package.json` renomeado para `acervo-ravena`
- [x] A11y lightbox: `aria-describedby` + id na caption
- [x] Timeline já tinha aria-labels e teclado (Stage 3)
- [x] `pnpm build` OK
- [x] Smoke produção: GET `/` 200, 6/6 âncoras, conteúdo Juliano/Hero/Acervo
- [x] `validation.md` baseline preenchido

### Arquivos removidos

- `vite.config.ts`, `index.html`, `src/**` (App.tsx, main.tsx, components/ui legado)

### Arquivos criados/alterados

| Arquivo | Mudança |
|---------|---------|
| `styles/theme.css` | theme migrado de `src/styles/` |
| `app/globals.css` | import atualizado, removido `@source src/` |
| `.gitignore` | novo |
| `package.json` | nome + deps limpas |
| `validation.md` | baseline gates e cenários |
| `AcervoGallery.tsx` | a11y lightbox |

### Comandos executados

```text
pnpm remove react-router vite @tailwindcss/vite @vitejs/plugin-react
pnpm build   # OK
pnpm start   # smoke GET / 200
```

### Backlog (fora deste stage)

- Poda de deps Figma/shadcn não utilizadas (MUI, recharts, etc.)
- Smoke interativo timeline/lightbox/mobile viewport
- `/review-implementation`, `/validate-cycle`, `/update-spec`, `/close-cycle`

### Implementação do ciclo

Todas as 6 stages concluídas. Site Next.js SSG com landing completa conforme `plan.md`.
