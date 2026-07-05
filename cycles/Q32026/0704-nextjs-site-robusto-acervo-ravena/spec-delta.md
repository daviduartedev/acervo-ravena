# Spec-delta — bootstrap site institucional Acervo Ravena

**Ciclo:** `0704-nextjs-site-robusto-acervo-ravena`  
**Tipo:** criação inicial (greenfield)  
**Status:** proposta — promover via `/update-spec` após `/validate-cycle`

## Resumo

Primeira spec canônica do repositório. Define o site institucional single-page do Acervo Ravena em Next.js SSG.

## Arquivos a criar em `spec/`

| Arquivo | Ação | Conteúdo proposto |
|---------|------|-------------------|
| `spec/harness.md` | **Criar** | Definição SDD Harness, princípios, gates, responsabilidades |
| `spec/development-workflow.md` | **Criar** | Fluxo request → refine → execute → validate → update-spec |
| `spec/README.md` | **Criar** | Hub de specs; índice da feature site-institucional |
| `spec/features/site-institucional/readme.md` | **Criar** | Comportamento completo da landing: seções, timeline, acervo, navegação, conteúdo |

## Arquivos inalterados

Nenhum — `spec/` não existia.

## Detalhe da feature `site-institucional`

Ver conteúdo completo em `spec/features/site-institucional/readme.md` (espelho do estado-alvo deste ciclo).

Pontos-chave promovidos:

- Stack alvo: **Next.js App Router + SSG + Tailwind 4 + pnpm**
- Landing single-page com seções ordenadas (Hero → … → Footer)
- Timeline interativa com marco ativo único e navegação por setas/clique/teclado
- Acervo: grid + lightbox; assets em `public/acervo/`
- Depoimento Juliano em destaque + card em Relatos
- Header: História, Acervo, Relatos; Sobre só no footer
- CTA contribuição: placeholder sem ação
- Idioma: pt-BR

## Critérios de promoção (`/update-spec`)

Promover somente após:

- [ ] Implementação alinhada ao `plan.md`
- [ ] `pnpm build` passa
- [ ] Cenários de `scenarios.feature` validados manualmente ou por teste
- [ ] Ajustes finos documentados em `implementation-notes.md` se houver desvio
