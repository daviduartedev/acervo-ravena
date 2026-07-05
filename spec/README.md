# Especificações — Acervo Ravena

Hub canônico de requisitos do site institucional documental do Ravena Cassino Hotel (Laguna, SC).

## Estrutura

| Caminho | Conteúdo |
|---------|----------|
| [`harness.md`](harness.md) | SDD Harness: princípios, gates, artefatos |
| [`development-workflow.md`](development-workflow.md) | Fluxo request → refine → execute → validate |
| `features/<slug>/readme.md` | Comportamento de cada feature |

## Features

| Feature | Pasta | Resumo |
|---------|-------|--------|
| Site institucional | [`site-institucional`](features/site-institucional/readme.md) | Landing single-page: hero, história, timeline, acervo, relatos, sobre |

## Ciclos

Alterações de produto nascem em `cycles/Q{quarter}{year}/{MMDD}-<slug>/`.  
Promoção para `spec/` via `/update-spec` após validação.

## Idioma

Interface e conteúdo editorial: **português brasileiro (pt-BR)**.

## Stack alvo

- Next.js (App Router, SSG)
- Tailwind CSS 4
- shadcn/ui + lucide-react
- pnpm
