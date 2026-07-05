# Development Harness — Acervo Ravena

## Definição

**Harness** = SDD (Spec-Driven Development) + regras operacionais + comandos Cursor + checklists + gates + validação + fechamento de ciclo.

## Objetivos

- padronizar como mudanças no site institucional são especificadas, implementadas e documentadas;
- reduzir escopo creep;
- permitir execução em stages com checkpoint humano em ciclos large.

## Princípios

1. **Escopo explícito** — fora do `request.md`/`plan.md` é proibido ou deferido.
2. **Spec como verdade validada** — `spec/` reflete o implementado e validado.
3. **Evidência antes de conclusão** — gates documentados em `validation.md`.
4. **Parada entre stages** — ciclos large exigem aprovação humana entre stages.

## Artefatos SDD

| Artefato | Papel |
|----------|-------|
| `request.md` | intenção humana inicial |
| `plan.md` | delta planejado |
| `scenarios.feature` | critérios de aceite observáveis |
| `tasks.md` | checklist executável |
| `spec-delta.md` | mudanças propostas em `spec/` |
| `validation.md` | evidência de gates |
| `implementation-notes.md` | registro de execução (large) |
| `review.md` | revisão formal (large) |

## Path canônico de cycles

```
cycles/Q{quarter}{year}/{MMDD}-<slug>/
```

Exemplo: `cycles/Q32026/0704-nextjs-site-robusto-acervo-ravena/`

## Gates

### Refinamento
- request lido; specs consultadas; artefatos gerados; spec-delta se specs afetadas

### Implementação
- escopo respeitado; implementation-notes atualizado (large)

### Validação
- `pnpm build` passa; cenários mapeados em validation.md

### Fechamento
- `/update-spec` quando aplicável; `/close-cycle`

## Referências

- Fluxo: [`development-workflow.md`](development-workflow.md)
- Feature principal: [`features/site-institucional/readme.md`](features/site-institucional/readme.md)
- Comandos: `.cursor/commands/` (quando configurados no projeto)
