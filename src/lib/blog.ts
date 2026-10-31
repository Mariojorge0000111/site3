/** Utilitários do blog. As capas ficam em /images/blog/<slug>.webp (1600 px) e <slug>-800.webp. */
export const slugDoPost = (url: string) => url.replace(/\/$/, '').split('/').pop() ?? '';
export const imagemPost = (url: string, largura: 800 | 1600 = 1600) =>
  `/images/blog/${slugDoPost(url)}${largura === 800 ? '-800' : ''}.webp`;

export interface PostResumo { url: string; frontmatter: any }

export function todosPosts(): PostResumo[] {
  const m = import.meta.glob('../pages/blog/*.md', { eager: true }) as Record<string, any>;
  return Object.values(m)
    .map((p) => ({ url: p.url.replace(/\/?$/, '/'), frontmatter: p.frontmatter }))
    .sort((a, b) => (b.frontmatter.data + b.url).localeCompare(a.frontmatter.data + a.url));
}

/** Posts relacionados a um produto (pelo slug) ou a uma categoria de produto (tag). */
export function postsRelacionados(opts: { produto?: string; tags?: string[]; excluir?: string; limite?: number }): PostResumo[] {
  const { produto, tags = [], excluir, limite = 3 } = opts;
  return todosPosts()
    .filter((p) => p.url !== excluir)
    .map((p) => {
      const f = p.frontmatter;
      let pontos = 0;
      if (produto && (f.produtos ?? []).includes(produto)) pontos += 3;
      pontos += (f.tags ?? []).filter((t: string) => tags.includes(t)).length;
      return { p, pontos };
    })
    .filter((x) => x.pontos > 0)
    .sort((a, b) => b.pontos - a.pontos)
    .slice(0, limite)
    .map((x) => x.p);
}
