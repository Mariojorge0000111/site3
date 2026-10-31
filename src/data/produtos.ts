export type Categoria = 'bebe-conforto' | 'multigrupo' | 'giratoria' | 'cadeirinha' | 'assento';

export interface Produto {
  slug: string;
  nome: string; // "Safety 1st Multifix"
  marca: string;
  categoria: Categoria;
  tipo: string; // "Multigrupo conversível"
  faixa: string; // "0 a 36 kg" ou "40 a 150 cm (até 36 kg)"
  kgMin: number;
  kgMax: number;
  idade: string; // "Do nascimento a cerca de 10 anos"
  grupos: string;
  isofix: string; // "Sim", "Não", "Sim (ou cinto do carro)"
  ancoragem: string; // "Top tether", "Perna de apoio", "Não tem"
  costasAte: string; // "Até 13 kg", "Não se aplica"
  reclinacoes: string;
  giro360: boolean;
  pesoProduto: string;
  norma: string; // "NBR 14400", "R129 (i-Size)"
  inmetro: string; // "Sim, registro nº ..." | "Sim" | "Confira no anúncio"
  precoFaixa: 1 | 2 | 3 | 4; // até 500 / 500-1000 / 1000-2000 / 2000+
  precoRef: string; // "cerca de R$ 1.350 (out/2026)"
  nota: number; // 0 a 10, conforme a metodologia
  notas: { seguranca: number; instalacao: number; conforto: number; versatilidade: number; custo: number };
  melhorPara: string;
  resumo: string;
  pros: string[];
  contras: string[];
  paraQuem: string;
  paraQuemNao: string;
  imagem: string; // nome do arquivo em /images sem extensão
  imagemAlt: string;
  mlUrl: string; // link de afiliado
  fonte: string; // URL da ficha técnica usada
  atualizado: string; // AAAA-MM-DD
}

const arquivos = import.meta.glob('./produtos/*.json', { eager: true }) as Record<string, { default: Produto }>;

export const PRODUTOS: Produto[] = Object.values(arquivos)
  .map((m) => m.default)
  .sort((a, b) => b.nota - a.nota);

export function produto(slug: string): Produto {
  const p = PRODUTOS.find((x) => x.slug === slug);
  if (!p) throw new Error(`Produto não encontrado: ${slug}`);
  return p;
}

export const CATEGORIAS: Record<Categoria, { nome: string; lista: string }> = {
  'bebe-conforto': { nome: 'Bebê conforto', lista: '/melhor-bebe-conforto/' },
  multigrupo: { nome: 'Multigrupo 0 a 36 kg', lista: '/melhor-cadeirinha-para-carro/' },
  giratoria: { nome: 'Giratória 360°', lista: '/melhor-cadeirinha-giratoria-360/' },
  cadeirinha: { nome: 'Cadeirinha', lista: '/melhor-cadeirinha-para-carro/' },
  assento: { nome: 'Assento de elevação', lista: '/melhor-assento-de-elevacao/' },
};

export const FAIXAS_PRECO: Record<number, string> = {
  1: 'até R$ 500',
  2: 'R$ 500 a R$ 1.000',
  3: 'R$ 1.000 a R$ 2.000',
  4: 'acima de R$ 2.000',
};

export const urlReview = (slug: string) => `/reviews/${slug}/`;

/** Foto do produto servida pelo CDN do Mercado Livre (quadrada, 560 px). */
export const imgProduto = (id: string) => `https://http2.mlstatic.com/D_Q_NP_2X_${id}-E.webp`;
