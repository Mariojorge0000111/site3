"""Checa os artigos da fila: tamanhos de título/descrição, travessão, links internos, produtos e capa."""
import re, os, glob, json, sys
raiz = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(raiz)
prods = {os.path.basename(f)[:-5] for f in glob.glob('src/data/produtos/*.json')}
def existe(url):
    p = url.split('#')[0].strip('/')
    if p == '': return True
    return any(os.path.exists(x) for x in [f'src/pages/{p}.md', f'src/pages/{p}.astro', f'src/pages/{p}/index.astro', f'src/pages/{p}/index.md'])
alvo = sys.argv[1:] or sorted(glob.glob('fila/*.md'))
alvo = [a for a in alvo if not a.endswith('BRIEF.md')]
erros = 0
for f in alvo:
    s = open(f).read(); slug = os.path.basename(f)[:-3]; prob = []
    fm = s.split('---', 2)[1] if s.startswith('---') else ''
    t = re.search(r'^titulo: "(.*)"$', fm, re.M); d = re.search(r'^descricao: "(.*)"$', fm, re.M)
    if not t or not 30 <= len(t.group(1)) <= 60: prob.append(f'titulo {len(t.group(1)) if t else "ausente"}')
    if not d or not 130 <= len(d.group(1)) <= 155: prob.append(f'descricao {len(d.group(1)) if d else "ausente"}')
    if '—' in s or '–' in s: prob.append('travessao')
    for l in set(re.findall(r'\]\((/[^)\s]*)\)', s)):
        if not existe(l): prob.append(f'link quebrado {l}')
    ps = re.search(r'^produtos: \[(.*)\]$', fm, re.M)
    if 'Post.astro' in fm:
        for p in re.findall(r'"([^"]+)"', ps.group(1) if ps else ''):
            if p not in prods: prob.append(f'produto inexistente {p}')
        if not os.path.exists(f'public/images/blog/{slug}.webp') or not os.path.exists(f'public/images/blog/{slug}-800.webp'): prob.append('sem capa')
        if '> **Resposta rápida:**' not in s: prob.append('sem resposta rapida')
        if '## O que a gente faria' not in s: prob.append('sem O que a gente faria')
    pal = len(s.split('---', 2)[2].split()) if s.count('---') >= 2 else 0
    if pal < 800: prob.append(f'curto {pal} palavras')
    if prob: erros += 1
    print(('OK ' if not prob else 'ERRO ') + slug + (' | ' + '; '.join(prob) if prob else f' | {pal} palavras'))
sys.exit(1 if erros else 0)
