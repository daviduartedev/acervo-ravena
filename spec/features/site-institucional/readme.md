# Feature: Site institucional — Acervo Ravena

**Ciclo de origem:** `cycles/Q32026/0704-nextjs-site-robusto-acervo-ravena/`

## Objetivo

Landing single-page que preserva e apresenta o legado documental do **Ravena Cassino Hotel** (Laguna, Santa Catarina): história, linha do tempo, acervo fotográfico e relatos.

## Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | Next.js App Router |
| Renderização | **SSG estático** (conteúdo em arquivos) |
| Estilo | Tailwind CSS 4, tokens shadcn |
| Ícones | lucide-react |
| Package manager | pnpm |

## Mapa de seções (ordem)

| Seção | Âncora | Descrição |
|-------|--------|-----------|
| Hero | — | Carrossel fullscreen; título "Memória do Ravena" |
| História | `#historia` | Narrativa "A Gênese" |
| Depoimento em destaque | — | Citação de Juliano (gerente atual) |
| Linha do tempo | `#timeline` | Timeline interativa (ver abaixo) |
| Acervo fotográfico | `#acervo` | Galeria das fotos reais |
| Impacto em Laguna | `#impacto` | Texto sobre transformação do litoral / Mar Grosso |
| Relatos | `#relatos` | Cards de depoimentos (Juliano + editorial) |
| Sobre o projeto | `#sobre` | Missão do acervo documental |
| Contribua | — | CTA convite a enviar materiais |
| Footer | — | Navegação, contato, link Sobre |

## Navegação

### Header (fixo)
- Logo/título: "Ravena Cassino"
- Links: **História** · **Acervo** · **Relatos**
- Ícone de busca: **decorativo** (sem funcionalidade nesta versão)
- Menu hamburger em mobile

### Footer
- Links: História, Acervo Fotográfico, Entrevistas/Relatos, **Sobre o Projeto**
- Contato: Laguna, SC · contato@acervoravena.com.br

## Linha do tempo

Comportamento inspirado em timeline horizontal editorial (referência: Editora Árvore da Vida).

### Visual
- Linha horizontal contínua com dots por marco
- **Marco ativo:** ano grande (serif, verde), dot verde sólido, setas circulares lime (← →) nos lados do ano
- **Marcos inativos:** ano menor, cinza, dot cinza
- Texto descritivo **centralizado abaixo** da barra

### Interação
- Setas avançam/retrocedem marcos (wrap no fim/início)
- Clique em ano inativo seleciona esse marco
- Teclado: ←/→ quando componente focado
- Mobile: layout adaptado; navegação por setas mantida

### Conteúdo
- Marcos default: 1930, 1942, 1946, 1970, 1998, 2024
- Textos em `content/timeline.ts` — **placeholders** até validação histórica
- Cada marco: `{ year, title, description }`

## Acervo fotográfico

### Assets
- Imagens em `public/acervo/` com slugs legíveis
- Origem: fotografias documentais do acervo (9 imagens iniciais)

### UI
- Grid responsivo (2–4 colunas conforme viewport)
- Clique abre **lightbox** (modal) com imagem ampliada
- Fechar: botão, overlay ou Escape

### Metadados (`content/acervo.ts`)
```ts
{ slug, src, alt, year?, caption?, credit? }
```
Campos opcionais podem estar vazios ou genéricos até curadoria editorial.

## Depoimentos

### Juliano (gerente atual, Ravena Cassino Hotel)
Texto:
> O Ravena não é só um hotel antigo, mas um acontecimento que mudou o litoral da Laguna. Seu valor está justamente na capacidade de trazer essa ocupação que só fez bem para os arredores e transformou a praia (Mar Grosso).

**Exibição:**
1. Bloco de citação em destaque (entre História e Timeline)
2. Card na seção Relatos

## Imagens externas

- **Hero e Relatos (placeholder editorial):** Unsplash permitido nesta versão
- **Acervo:** somente fotos reais de `public/acervo/`

## CTA "Enviar Relato"

Botão visual **sem ação** (placeholder). Implementação funcional (mailto/form) é backlog.

## Metadata (layout root)

- Title e description em pt-BR sobre o Acervo Ravena / memória do hotel
- Strings finais definidas na implementação

## Acessibilidade (baseline)

- Navegação por teclado na timeline
- `aria-label` em controles da timeline e lightbox
- Contraste legível em textos sobre imagens do hero (overlay)

## Fora de escopo (v1)

- CMS, backend, API, busca funcional
- Páginas internas (detalhe de foto, entrevista individual)
- Formulário de contribuição
- i18n, analytics avançado, deploy

## Estrutura de código (alvo)

```
app/layout.tsx, app/page.tsx
components/layout/{Header,Footer}.tsx
components/sections/{Hero,Historia,DepoimentoDestaque,Timeline,AcervoGallery,ImpactoLaguna,Relatos,SobreProjeto,ContribuaCTA}.tsx
content/{timeline,acervo,depoimentos,site}.ts
public/acervo/*.jpeg
```
