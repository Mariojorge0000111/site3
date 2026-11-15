# Brief para redatores: artigos novos do cadeirinhabebe.com.br

Você vai escrever artigos para o blog de afiliado Cadeirinha Bebê (cadeirinhabebe.com.br), em português do Brasil.
Repositório: /home/claude/site3. Leia ANTES de escrever:
- /home/claude/site3/CLAUDE.md (regras do site; elas valem acima deste brief em caso de conflito)
- Dois posts modelo: src/pages/blog/casaco-na-cadeirinha.md e src/pages/blog/quando-tirar-o-assento-de-elevacao.md
- Um comparativo modelo (só se você escrever comparativo): src/pages/comparativos/safety-1st-multifix-vs-cosco-progress.md
- As fichas dos produtos: src/data/produtos/*.json (17 modelos). São os ÚNICOS produtos que o site recomenda e linka.
- Os guias, para não repetir e para linkar: src/pages/guias/*.md

## Onde salvar
- Cada artigo vira UM arquivo em /home/claude/site3/fila/<slug>.md (mesmo para comparativos; o destino está em fila/fila.json).
- NÃO salve nada em src/pages. NÃO rode git. NÃO faça commit nem push.
- Capa: /home/claude/site3/public/images/blog/<slug>.webp (1600x800) e <slug>-800.webp (800x400). Comparativos não precisam de capa.

## Frontmatter de post (copie o formato dos modelos)
layout: ../../layouts/Post.astro, titulo, descricao, h1, intro, categoria, tags, produtos, capa, capaAlt, data: "2026-11-15", atualizado: "2026-11-15", faq (4 a 6 perguntas com p/r).
- titulo: 30 a 60 caracteres, com a palavra-chave no começo. descricao: 130 a 155 caracteres (conte!).
- categoria: uma destas: "Como escolher", "Instalação", "Lei e normas", "Segurança", "Uso e cuidados".
- tags: use as já existentes: cadeirinha, bebe-conforto, assento, giratoria, multigrupo, instalacao, lei. (Pode usar 2 a 4.)
- produtos: 2 a 6 slugs de src/data/produtos que façam sentido para o tema (eles viram cards com botões de Mercado Livre e Amazon no fim do post). Em artigo de lista ("melhor X"), coloque todos os modelos citados.
- capa: "pexels <id>"; capaAlt: descrição fiel da foto.

## Estrutura do texto
1. Primeiro parágrafo responde a pergunta da palavra-chave de forma direta.
2. Bloco `> **Resposta rápida:** ...` logo no começo.
3. Seções H2 claras, com a palavra-chave e variações naturais. Tabela quando ajudar a comparar.
4. `## Na prática` (passo a passo ou checklist) e `## O que a gente faria` (recomendação por perfil, citando modelos do site com link para o review /reviews/<slug>/).
5. `## Fontes` no fim, quando citar lei, entidade ou estudo.
- 900 a 1.500 palavras. Profundidade real, nada de enchimento.

## Regras de conteúdo (obrigatórias)
- Voz: calma, técnica, honesta, "você" e "a gente". Sem travessão longo (— ou –): use vírgula, dois-pontos ou ponto. Sem clichês de IA ("no mundo de hoje", "é crucial", "mergulhar", "jornada", "não é apenas X, é Y", listas de três adjetivos).
- Dados de produto: SÓ o que está na ficha JSON (peso, faixa, ISOFIX, giro, norma, prós, contras, precoRef). Atribua ao fabricante ("segundo o fabricante"). Preço só como a faixa do precoRef, com mês e ano (out/2026).
- Não invente estatísticas, estudos, depoimentos, preços, modelos de carro, pessoas. Não cite produto que não está nas fichas como recomendação.
- Lei brasileira: Resolução Contran 819/2021 e art. 168 do CTB. Confira no guia src/pages/guias/lei-da-cadeirinha.md e mantenha coerência com ele. Qualquer fato novo (ANAC, regra de companhia aérea, estudo, orientação de entidade) precisa ser checado com WebSearch/WebFetch e citado em Fontes.
- Entidades que podem ser citadas: AAP (HealthyChildren.org), NHTSA, Criança Segura, Abramet, Inmetro, Contran/Senatran. NUNCA atribua recomendação à SBP.
- Equipe: só Mariana Silva (testes) e João Almeida (texto). Não invente pessoas. Pode dizer "a equipe testou" para os 17 modelos.
- Segurança infantil acima de venda: nunca sugira algo inseguro (criança sem cadeirinha, acessório não original sob o corpo, banco da frente fora das exceções).

## Links internos
- Link SÓ para páginas que já existem (lista abaixo). NÃO linke para outros artigos da fila: eles ainda não estão publicados.
- Use 5 a 10 links internos por artigo, em âncoras naturais.
- Páginas existentes:
  /melhor-cadeirinha-para-carro/ · /melhor-bebe-conforto/ · /melhor-cadeirinha-giratoria-360/ · /melhor-assento-de-elevacao/ · /comparador/ · /metodologia/
  /guias/lei-da-cadeirinha/ · /guias/isofix-ou-cinto/ · /guias/o-que-e-i-size/
  /comparativos/safety-1st-multifix-vs-cosco-progress/
  /reviews/<slug>/ para os 17 produtos (slug = nome do arquivo JSON)
  /blog/bebe-conforto-ate-quando-usar/ · /blog/cadeirinha-depois-de-acidente/ · /blog/cadeirinha-no-banco-do-meio-ou-atras-do-motorista/ · /blog/cadeirinha-para-carro-pequeno/ · /blog/casaco-na-cadeirinha/ · /blog/como-ajustar-o-cinto-da-cadeirinha/ · /blog/como-instalar-bebe-conforto-no-carro/ · /blog/como-limpar-cadeirinha-de-carro/ · /blog/grupos-da-cadeirinha-0-1-2-3/ · /blog/quando-tirar-o-assento-de-elevacao/ · /blog/quando-virar-a-cadeirinha-de-frente/ · /blog/quanto-tempo-o-bebe-pode-ficar-no-bebe-conforto/ · /blog/selo-inmetro-cadeirinha-como-consultar/ · /blog/validade-da-cadeirinha-e-cadeirinha-usada/
- Não escreva links de afiliado à mão: os botões do Mercado Livre e da Amazon saem sozinhos dos `produtos` do frontmatter.

## Capa (Pexels)
- API: curl -s -H "Authorization: OGrPhafmsC4WqTQw6ZJQMgoyglFP15xxE7dOEGrMWnAitBOSMIUm1Sjp" "https://api.pexels.com/v1/search?query=...&per_page=15&orientation=landscape"
- Antes de escolher, leia /home/claude/site3/fila/capas-usadas.txt e NÃO repita um id. Depois de escolher, acrescente "<id> <slug>" nesse arquivo.
- Baixe a prévia e OLHE a foto com a ferramenta Read antes de usar. Regras de segurança: prefira fotos sem criança (interior de carro, banco traseiro, cinto, fivela, cadeirinha vazia, estrada, mãos de adulto, objetos). Se aparecer criança, ela precisa estar presa numa cadeirinha no banco de trás; nunca solta, nunca no banco do motorista ou da frente, nunca em cadeira de alimentação. Sem rosto de pessoa famosa, sem marca de carro em destaque.
- Converta com Python/PIL: recorte 2:1 centralizado, salve 1600x800 e 800x400 em WEBP qualidade 78.
- Trabalhe em pastas próprias para downloads (ex.: /home/claude/tmp-capas-<lote>/).

## Comparativos
- layout: ../../layouts/Artigo.astro, secao: { nome: "Comparativos", url: "/comparativos/" }, sem capa/categoria/tags/produtos (siga o modelo).
- Tabela lado a lado com os dados das duas fichas, quem deve escolher cada uma, prós e contras de cada, FAQ.

## Ao terminar
Rode `cd /home/claude/site3 && python3 fila/checar.py` (se existir) e corrija o que apontar.
Responda com uma lista: slug, título, nº de palavras, id da capa, e qualquer dúvida de fato que você não conseguiu confirmar.
