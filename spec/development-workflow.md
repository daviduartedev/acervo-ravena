# Fluxo de desenvolvimento SDD — Acervo Ravena

Complementa [`harness.md`](harness.md).

## Visão geral

```
request.md → /refine-request → plan + tasks + scenarios + spec-delta
           → /execute-stage (por stage em large)
           → /review-implementation → /validate-cycle → /update-spec → /close-cycle
```

## Classificação de ciclos

| Tamanho | Quando usar |
|---------|-------------|
| **Small** | ajuste pontual, ≤3 arquivos, sem mudança estrutural |
| **Medium** | feature isolada, múltiplos arquivos, sem stages |
| **Large** | migração, múltiplos módulos, stages com checkpoint |

## Gates do projeto

| Comando | Quando |
|---------|--------|
| `pnpm dev` | smoke local |
| `pnpm build` | sempre antes de fechar ciclo |

(Lint/typecheck/test serão adicionados quando configurados no projeto.)

## Atualização de specs

- `refine-request` escreve proposta em `spec-delta.md`
- `/update-spec` promove para `spec/` **após** validação

## Package manager

**pnpm** (canônico para este repositório).
