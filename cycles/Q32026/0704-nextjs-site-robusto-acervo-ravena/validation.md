# Validação — nextjs site robusto acervo ravena

> **Ciclo:** `0704-nextjs-site-robusto-acervo-ravena`  
> **Status:** baseline preenchido na Stage 6 — revisão formal via `/validate-cycle`

---

## Gates

| Gate | Comando | Resultado | Evidência |
|------|---------|-----------|-----------|
| Build produção | `pnpm build` | ✅ Pass | `/` prerendered como Static (○) |
| TypeScript | incluído no `next build` | ✅ Pass | sem erros TS |
| Smoke HTTP | `pnpm start` + GET `/` | ✅ 200 | 6/6 âncoras presentes no HTML |

## Cenários (smoke estático)

| Cenário Gherkin | Status | Evidência |
|-----------------|--------|-----------|
| Visitante acessa a página principal | ✅ | HTML contém "Memória do", seções editoriais |
| Visitante navega pelo menu do cabeçalho | ✅ | `id="historia"`, `id="acervo"`, `id="relatos"` no DOM |
| Visitante explora a linha do tempo | ⚠️ | Implementado (client); smoke manual interativo pendente |
| Visitante consulta o acervo fotográfico | ⚠️ | Grid + lightbox implementados; clique manual pendente |
| Visitante lê depoimento do Juliano | ✅ | "Juliano" presente no HTML (destaque + relatos) |
| Visitante conhece o projeto do acervo | ✅ | `id="sobre"` presente |
| Visitante usa site em mobile | ⚠️ | Layout responsivo via Tailwind; smoke viewport manual pendente |

## Baseline / deferimentos

- **Peer deps:** `react-day-picker`, `react-popper` declaram React 18; projeto usa React 19 — sem falha de build.
- **Deps legado Figma:** pacotes shadcn/MUI não usados na landing permanecem no `package.json` (backlog de poda).
- **Interação timeline/lightbox:** validação E2E manual recomendada antes de `/close-cycle`.

## Comandos executados (Stage 6)

```text
pnpm build                    # OK
pnpm start + GET localhost:3000  # 200, anchors 6/6
```
