# site3 · Cadeirinha Bebê (cadeirinhabebe.com.br)

Blog de afiliado do Mário Jorge: reviews ultra nichados de cadeirinhas de bebê para carro, com links de afiliado do Mercado Livre. Os produtos revisados são os mesmos que os blogs mais bem ranqueados do nicho já posicionam.

## Stack e publicação
- Astro 7 + @astrojs/sitemap (com `lastmod`), Node 22.23.4 (`.node-version`).
- Cloudflare Pages, projeto `cadeirinha-bebe`: cada push na `main` publica sozinho (build `npm run build`, saída `dist`).
- Domínios: https://cadeirinhabebe.com.br e www (DNS na Cloudflare).
- Commits: autor `Mário Jorge <mariojorgefx@gmail.com>`, mensagem em português. Trabalho grande: branch `redesign-blog` e depois merge na `main`.

## Onde fica cada coisa
- `src/data/produtos/<slug>.json`: ficha de cada uma das 17 cadeirinhas (faixa de peso, ISOFIX, notas por critério, prós, contras, link `meli.la`, id da foto no ML). A nota geral pesa segurança 35, instalação 20, conforto 15, versatilidade 15 e custo 15.
- `src/data/produtos.ts`: tipos, categorias e `imgProduto(id)`. As fotos são carregadas do CDN do Mercado Livre (`http2.mlstatic.com`).
- `src/config.ts`: `SITE`, `MENU` e `PESSOAS` (equipe, usada nas assinaturas e no schema Person).
- Layouts: `Review` (reviews), `Lista` (melhor-…), `Artigo` (guias), `Post` (blog).
- Páginas:
  - `src/pages/reviews/*.md`: 17 reviews;
  - `melhor-*.md`: 4 listas;
  - `guias/`: lei da cadeirinha, i-Size, ISOFIX ou cinto;
  - `comparativos/`;
  - `blog/*.md`: 10 artigos, com `capa`, `categoria`, `tags` e `produtos`;
  - `comparador.astro`, `sobre.astro`, `metodologia`, `aviso-de-afiliado`, `privacidade`.
- `src/lib/blog.ts`: os posts relacionados (por tags e produtos) geram os links internos automáticos.
- As capas do blog ficam em `public/images/blog/<slug>.webp` (1600x800) e `-800.webp`. As fotos vêm do Pexels: conferir sempre se a foto é segura, ou seja, criança presa na cadeirinha e nunca solta ou no banco do motorista.

## Equipe (pessoas reais, funcionários do Mário, autorizaram nome e foto)
- **Mariana Silva**, testes de instalação. Assina "Testado por" nos reviews e nas listas.
- **João Almeida**, edição e blog. Assina "Texto de" e "Por" nos posts e nos guias.
- As fotos ficam em `public/images/equipe/`. Não inventar outras pessoas.

## Voz da marca
- Calma, técnica e honesta. Falar com "você" e "a gente". A resposta vem primeiro.
- Blocos de assinatura do site: `> **Resposta rápida:**`, `## Na prática`, `## O que a gente faria`.
- Sem travessão longo e sem clichês de IA. Não pode parecer cópia dos concorrentes.
- Reviews justos: sempre com prós e contras. A equipe testou os modelos e confirma as especificações, mas os números da ficha são atribuídos ao fabricante.
- Não inventar estatísticas, preços, depoimentos nem modelos de carro. Preço só como faixa de referência, com mês e ano.
- Não atribuir recomendação à SBP. Podem ser citados AAP, NHTSA, Criança Segura e Abramet.

## SEO
- Título entre 30 e 60 caracteres. O sufixo da marca só entra se couber. Descrição entre 130 e 155 caracteres.
- Schemas usados: Product/Review (positiveNotes e negativeNotes), ItemList, FAQPage, BlogPosting, BreadcrumbList, AboutPage e Person.
- O site também tem `llms.txt` e `robots.txt`. No Lighthouse mobile, SEO e acessibilidade estão em 100.
- Links de afiliado com `rel="sponsored nofollow noopener"`.

## Mercado Livre
- Os links de afiliado são gerados no linkbuilder do ML, na conta do Mário (pelo navegador do app). O ML recusou Touring X e One Safe.
- A busca do ML às vezes pede captcha. Quando isso acontecer, avisar o Mário por notificação.

## Pendências conhecidas
- Ainda sem tarefa de artigos recorrentes e sem backlinks da 8links.
- Search Console conectado em 03/11/2026 (propriedade de domínio, verificada pela Cloudflare) e sitemap enviado. Indexação pedida para melhor-cadeirinha-para-carro, melhor-cadeirinha-giratoria-360 e o comparativo Safety 1st x Cosco.
- O que mais vai ajudar o ranqueamento: fotos e vídeos próprios dos testes da Mariana.

## Combinados com o Mário
- Quando precisar de uma confirmação dele, mandar notificação no celular.
- Nunca digitar senhas. Nunca comprar nada.
- Responder em português.
