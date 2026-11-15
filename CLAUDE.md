# site3 · Cadeirinha Bebê (cadeirinhabebe.com.br)

Blog de afiliado do Mário Jorge: reviews ultra nichados de cadeirinhas de bebê para carro, com links de afiliado do Mercado Livre. Os produtos revisados são os mesmos que os blogs mais bem ranqueados do nicho já posicionam.

## Stack e publicação
- Astro 7 + @astrojs/sitemap (com `lastmod`), Node 22.23.4 (`.node-version`).
- Cloudflare Pages, projeto `cadeirinha-bebe`: cada push na `main` publica sozinho (build `npm run build`, saída `dist`).
- Domínios: https://cadeirinhabebe.com.br e www (DNS na Cloudflare).
- Commits: autor `Mário Jorge <mariojorgefx@gmail.com>`, mensagem em português. Trabalho grande: branch `redesign-blog` e depois merge na `main`.

## Onde fica cada coisa
- `src/data/produtos/<slug>.json`: ficha de cada uma das 17 cadeirinhas (faixa de peso, ISOFIX, notas por critério, prós, contras, link `meli.la` em `mlUrl`, link da Amazon em `amazonUrl`, id da foto no ML). A nota geral pesa segurança 35, instalação 20, conforto 15, versatilidade 15 e custo 15.
- `src/data/produtos.ts`: tipos, categorias e `imgProduto(id)`. As fotos são carregadas do CDN do Mercado Livre (`http2.mlstatic.com`).
- `src/config.ts`: `SITE`, `MENU` e `PESSOAS` (equipe, usada nas assinaturas e no schema Person).
- Layouts: `Review` (reviews), `Lista` (melhor-…), `Artigo` (guias), `Post` (blog).
- Páginas:
  - `src/pages/reviews/*.md`: 17 reviews;
  - `melhor-*.md`: 4 listas;
  - `guias/`: lei da cadeirinha, i-Size, ISOFIX ou cinto;
  - `comparativos/`;
  - `blog/*.md`: 14 artigos, com `capa`, `categoria`, `tags` e `produtos`;
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

## Amazon
- Associado da Amazon desde nov/2026, StoreID `mjs0b8-20`. O cadeirinhabebe.com.br está na lista de sites da conta.
- Link no formato `https://www.amazon.com.br/dp/<ASIN>?tag=mjs0b8-20`, no campo `amazonUrl`. O botão `BotaoAmazon` aparece nos cards das listas, na lateral do review, nos destaques da home e no bloco de produtos dos posts; tabelas, comparador e faixa fixa ficam só com o Mercado Livre.
- O link não precisa ser do modelo exato: o objetivo é levar a pessoa para dentro da loja.
- O aviso "Como Associado da Amazon, recebo por compras qualificadas" é obrigatório e está no rodapé e em `/aviso-de-afiliado/`.

## Fila de publicação (nov/2026)
- 100 palavras-chave levantadas em 15/11/2026 (autocompletar do Google + concorrentes: gdm, AnalisaMelhor, Guia o Melhor, Busca Melhores, Melhores para Comprar, mybest, Buscapé, blog do Mercado Livre, Amo Produtinhos, Mundo dos Reviews). Lista em `docs/palavras-chave.csv` e na planilha "Palavras-chave Cadeirinha Bebê" (Claude Sheets).
- 37 já tinham página (2 artigos escritos foram descartados em `fila/descartados/` por disputarem busca com as listas); 63 artigos novos ficam em `fila/<slug>.md`, fora de `src/pages`, na ordem de `fila/fila.json`.
- O Mário escolheu publicar 5 por dia. `python3 fila/publicar.py 5` move os próximos 5 para `src/pages/<destino>/` com a data do dia (só os que passam em `fila/checar.py`) e registra em `fila/publicados.json`. Uma tarefa agendada diária roda isso, faz o build, o commit e o push.
- Regras para quem escreve: `fila/BRIEF.md`. Artigo da fila não linka outro artigo da fila.

## Pendências conhecidas
- Tarefa agendada "Publicar 5 artigos do Cadeirinha Bebê" (diária, 7h51 de Brasília, nuvem) publica a fila; quando a fila acabar, ainda não há tarefa de artigos recorrentes. Sem backlinks da 8links.
- Search Console conectado em 03/11/2026 (propriedade de domínio, verificada pela Cloudflare) e sitemap enviado. Indexação pedida para melhor-cadeirinha-para-carro, melhor-cadeirinha-giratoria-360 e o comparativo Safety 1st x Cosco.
- O que mais vai ajudar o ranqueamento: fotos e vídeos próprios dos testes da Mariana.

## Combinados com o Mário
- Quando precisar de uma confirmação dele, mandar notificação no celular.
- Nunca digitar senhas. Nunca comprar nada.
- Responder em português.
