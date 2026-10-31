import type { APIRoute } from 'astro';
import { PRODUTOS, urlReview } from '../data/produtos';
import { SITE } from '../config';
export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const linhas = [
    `# ${SITE.nome}`,
    '',
    `> ${SITE.descricao}`,
    '',
    '## Listas',
    `- [Melhor cadeirinha para carro](${u('/melhor-cadeirinha-para-carro/')})`,
    `- [Melhor bebê conforto](${u('/melhor-bebe-conforto/')})`,
    `- [Melhor cadeirinha giratória 360](${u('/melhor-cadeirinha-giratoria-360/')})`,
    `- [Melhor assento de elevação](${u('/melhor-assento-de-elevacao/')})`,
    `- [Comparador](${u('/comparador/')})`,
    '',
    '## Guias',
    `- [Lei da cadeirinha](${u('/guias/lei-da-cadeirinha/')})`,
    `- [O que é i-Size](${u('/guias/o-que-e-i-size/')})`,
    `- [ISOFIX ou cinto](${u('/guias/isofix-ou-cinto/')})`,
    '',
    '## Reviews',
    ...PRODUTOS.map((p) => `- [${p.nome}](${u(urlReview(p.slug))}): ${p.tipo}, ${p.faixa}, nota ${p.nota}/10`),
    '',
  ];
  return new Response(linhas.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
