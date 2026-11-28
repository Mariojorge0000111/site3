export const SITE = {
  nome: 'Cadeirinha Bebê',
  dominio: 'cadeirinhabebe.com.br',
  descricao:
    'Reviews e comparativos de cadeirinhas para carro, bebês conforto e assentos de elevação vendidos no Brasil, com ficha técnica completa e prós e contras.',
  equipe: 'Equipe Cadeirinha Bebê',
  grupoOfertas: 'https://chat.whatsapp.com/K8uPHAs4sp5GY3lDhMnpEt',
  youtube: 'https://www.youtube.com/@CadeirainhasdeBeb%C3%AA',
  amazonOfertasUrl: 'https://www.amazon.com.br/s?k=cadeirinha+para+carro&tag=mjscadblog-20',
};

export const MENU = [
  { href: '/melhor-cadeirinha-para-carro/', rotulo: 'Cadeirinhas' },
  { href: '/melhor-bebe-conforto/', rotulo: 'Bebê conforto' },
  { href: '/melhor-cadeirinha-giratoria-360/', rotulo: 'Giratórias 360' },
  { href: '/melhor-assento-de-elevacao/', rotulo: 'Assentos' },
  { href: '/comparador/', rotulo: 'Comparador' },
  { href: '/blog/', rotulo: 'Blog' },
  { href: '/sobre/', rotulo: 'Quem somos' },
];

export const PESSOAS = {
  mariana: {
    id: 'mariana-silva',
    nome: 'Mariana Silva',
    papel: 'Análise técnica e comparação',
    foto: '/images/equipe/mariana-silva.webp',
    bio: 'Analisa e compara cada cadeirinha antes de qualquer nota sair: lê o manual e a ficha do fabricante, confere o registro no Inmetro e a norma (i-Size ou NBR 14400) e cruza com as avaliações de quem comprou.',
    faz: ['Compara instalação (ISOFIX, top tether, perna de apoio) pelo manual', 'Compara giro, reclinação e ajuste do cinto de 5 pontos pela ficha técnica', 'Resume as reclamações mais comuns de compradores (peso, tamanho no banco, capa)'],
  },
  joao: {
    id: 'joao-almeida',
    nome: 'João Almeida',
    papel: 'Edição e blog',
    foto: '/images/equipe/joao-almeida.webp',
    bio: 'Escreve e administra o blog. Transforma a análise da equipe e a ficha técnica em texto direto: resposta primeiro, defeito sem rodeio, sem alarmismo.',
    faz: ['Confere a ficha com o manual, o fabricante e o registro no Inmetro', 'Acompanha as regras do Contran e as normas i-Size e NBR 14400', 'Atualiza reviews quando o modelo muda'],
  },
} as const;

export const pessoaSchema = (p: { id: string; nome: string; papel: string; foto: string }, site: URL) => ({
  '@type': 'Person',
  '@id': new URL(`/sobre/#${p.id}`, site).href,
  name: p.nome,
  jobTitle: p.papel,
  image: new URL(p.foto, site).href,
  url: new URL(`/sobre/#${p.id}`, site).href,
  worksFor: { '@id': new URL('/#organizacao', site).href },
});
