# Plano (delta) — Migração Next.js e site institucional robusto

**Ciclo:** Q3 2026 · `0704-nextjs-site-robusto-acervo-ravena`  
**Classificação:** Large  
**Package manager:** pnpm

## Objetivo do delta

Substituir o protótipo **Vite + React monolítico** (`src/app/App.tsx`) por um site **Next.js App Router** com SSG estático, componentes modulares, timeline interativa no estilo de referência (Editora Árvore da Vida), galeria do acervo real e seções editoriais complementares — preservando a identidade visual aprovada.

Este ciclo **bootstrapa** `spec/` (primeira spec canônica do repositório).

## Decisões de refinamento

| Tópico | Decisão |
|--------|---------|
| Renderização | **SSG estático** — landing single-page, conteúdo em arquivos TypeScript/JSON |
| Timeline | Manter **textos placeholder atuais** do `App.tsx` (1930–2024), estruturados em `content/timeline.ts` |
| Galeria acervo | **Grid responsivo + lightbox ao clicar** + estrutura de metadados (alt, ano?, descrição?, crédito?) com valores genéricos prontos para edição futura |
| Depoimento Juliano | **Bloco de citação em destaque** (entre História e Timeline) **+ card** na seção Relatos |
| Imagens hero/relatos | **Manter Unsplash** por ora; `public/` usado **somente no acervo** |
| CTA "Enviar Relato" | **Botão visual sem ação** (placeholder) |
| Seções extras | Agente inclui o que fizer sentido editorialmente (ver mapa abaixo) |
| Spec | Bootstrap completo: `harness.md`, `development-workflow.md`, `spec/README.md`, `spec/features/site-institucional/readme.md` |
| Busca no header | Permanece **sem funcionalidade** (ícone decorativo) |

## Estado atual (baseline)

| Área | Situação |
|------|----------|
| Stack | Vite 6 + React 18, Tailwind 4, shadcn/ui (não usado na página principal) |
| Página | Monólito `src/app/App.tsx` (~230 linhas) |
| Seções | Hero, História, Timeline (scroll horizontal), Relatos, CTA, Footer |
| Lacunas | `#acervo` no menu sem seção; depoimento Juliano ausente |
| Assets | 9 JPEGs em `public/` com nomes WhatsApp |
| Spec | **Inexistente** |

## Estado-alvo (fim do ciclo)

### Arquitetura

```
app/
  layout.tsx          # metadata, fonts, globals
  page.tsx            # composição das seções
components/
  layout/             # Header, Footer
  sections/           # Hero, Historia, DepoimentoDestaque, Timeline, AcervoGallery, Relatos, ImpactoLaguna, SobreProjeto, ContribuaCTA
  ui/                 # shadcn existente + lightbox/dialog se necessário
content/
  timeline.ts
  acervo.ts
  depoimentos.ts
  site.ts             # copy institucional (sobre, impacto)
public/
  acervo/             # imagens renomeadas (slug legível)
```

### Mapa de seções (ordem na página)

| # | Seção | Âncora | Notas |
|---|--------|--------|-------|
| 1 | Hero | — | Carrossel Unsplash preservado |
| 2 | História | `#historia` | Copy atual "A Gênese" |
| 3 | Depoimento em destaque | — | Citação Juliano, tipografia editorial |
| 4 | Linha do tempo | `#timeline` | Interativa: barra, dots, ano ativo, setas, texto abaixo |
| 5 | Acervo fotográfico | `#acervo` | 9 fotos reais, grid + lightbox |
| 6 | Impacto em Laguna | `#impacto` | Texto curto sobre transformação do litoral/Mar Grosso (complementa Juliano) |
| 7 | Relatos | `#relatos` | Card Juliano + 1 card placeholder editorial (Unsplash) |
| 8 | Sobre o projeto | `#sobre` | Missão do acervo; link no footer, não no header |
| 9 | Contribua | — | CTA placeholder |
| 10 | Footer | — | Navegação inclui Sobre |

**Header nav:** História · Acervo · Relatos (inalterado).

### Timeline (comportamento)

- Um marco **ativo** por vez; anos inativos visíveis na barra (menores, cinza).
- Ano ativo: serif grande, verde; dot verde sólido; setas lime (← →) nos lados do ano.
- Texto descritivo **centralizado abaixo** da barra, atualiza ao mudar marco.
- Interação: setas, clique em ano inativo, teclado (←/→ quando focado).
- Mobile: mesma lógica com barra scrollável ou anos compactos; setas sempre acessíveis.

### Galeria acervo

- Grid responsivo (2–4 colunas).
- Clique abre **lightbox** (dialog/modal) com imagem ampliada.
- Metadados em `content/acervo.ts`: `{ slug, src, alt, year?, caption?, credit? }` — campos opcionais preenchidos genericamente onde faltar informação.

## Ordem de execução (stages)

1. **Bootstrap Next.js** — scaffold, estilos, metadata, SSG.
2. **Layout + seções estáticas** — Header, Hero, História, CTA, Footer.
3. **Timeline interativa** — componente + content layer.
4. **Acervo + assets** — renomear imagens, galeria + lightbox.
5. **Relatos, depoimento e seções complementares** — Juliano (duplo), Impacto, Sobre, Relatos.
6. **Cleanup e validação** — remover Vite, `next/image`, build, gates.

## Critério de “pronto”

- `pnpm dev` e `pnpm build` OK.
- Todas as seções do mapa renderizam na home.
- Timeline e galeria comportam-se conforme spec da feature.
- Código modular (sem monólito App.tsx).
- `spec-delta.md` pronto para promoção via `/update-spec` após validação.

## Fora de escopo

- CMS, backend, formulários, busca, páginas internas, deploy, troca de Unsplash no hero/relatos.

## Riscos

| Risco | Mitigação |
|-------|-----------|
| Tailwind 4 + Next.js compat | Seguir setup oficial Next 15 + Tailwind 4; validar build cedo na Stage 1 |
| Migração quebra estilos | Migrar `theme.css`/`fonts.css` antes de desmontar seções |
| Lightbox a11y | Usar Dialog Radix existente em shadcn |
| Textos históricos não validados | Manter placeholders; comentário em `content/timeline.ts` |

## Deferimentos

- Substituir Unsplash no hero/relatos → ciclo futuro de conteúdo.
- CTA funcional (mailto/form) → ciclo futuro.
- Metadados ricos das fotos → preenchimento editorial posterior.
