export const SITE = {
  nome: 'Cadeirinha Bebê',
  dominio: 'cadeirinhabebe.com.br',
  descricao:
    'Reviews e comparativos de cadeirinhas para carro, bebês conforto e assentos de elevação vendidos no Brasil, com ficha técnica completa e prós e contras.',
  equipe: 'Equipe Cadeirinha Bebê',
  grupoOfertas: 'https://chat.whatsapp.com/CE34yYz8T382KqlEHnQnsw',
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
    papel: 'Testes de instalação',
    foto: '/images/equipe/mariana-silva.webp',
    bio: 'Testa as cadeirinhas antes de qualquer nota sair: instala com ISOFIX e com o cinto do carro, ajusta para cada fase e anota o que dá trabalho no uso real.',
    faz: ['Instala cada modelo e confere a folga na base', 'Testa giro, reclinação e ajuste do cinto de 5 pontos', 'Avalia peso, tamanho no banco e a capa na hora de lavar'],
  },
  joao: {
    id: 'joao-almeida',
    nome: 'João Almeida',
    papel: 'Edição e blog',
    foto: '/images/equipe/joao-almeida.webp',
    bio: 'Escreve e administra o blog. Transforma os testes e a ficha técnica em texto direto: resposta primeiro, defeito sem rodeio, sem alarmismo.',
    faz: ['Confere a ficha com o manual, o fabricante e o registro no Inmetro', 'Acompanha as regras do Contran e as normas i-Size e NBR 14400', 'Atualiza reviews quando o modelo muda e revisa preços de referência'],
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
