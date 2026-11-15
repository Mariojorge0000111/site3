"""Publica os próximos N artigos da fila: move fila/<slug>.md para src/pages/<destino>/ com a data de hoje.
Uso: python3 fila/publicar.py 5   (só move os que estão prontos e passam no checar.py)"""
import json, os, re, subprocess, sys, datetime
raiz = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(raiz)
n = int(sys.argv[1]) if len(sys.argv) > 1 else 5
hoje = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=-3))).date().isoformat()
fila = json.load(open('fila/fila.json'))
pub_path = 'fila/publicados.json'
publicados = json.load(open(pub_path)) if os.path.exists(pub_path) else {}
movidos = []
for item in fila:
    if len(movidos) >= n: break
    slug, destino = item['slug'], item['destino']
    if slug in publicados: continue
    src = f'fila/{slug}.md'
    if not os.path.exists(src):
        print(f'pulado (ainda não escrito): {slug}'); continue
    if subprocess.run([sys.executable, 'fila/checar.py', src]).returncode != 0:
        print(f'pulado (não passou na checagem): {slug}'); continue
    s = open(src).read()
    s = re.sub(r'^data: ".*"$', f'data: "{hoje}"', s, count=1, flags=re.M)
    s = re.sub(r'^atualizado: ".*"$', f'atualizado: "{hoje}"', s, count=1, flags=re.M)
    os.makedirs(f'src/pages/{destino}', exist_ok=True)
    open(f'src/pages/{destino}/{slug}.md', 'w').write(s)
    os.remove(src)
    publicados[slug] = {'data': hoje, 'url': f'/{destino}/{slug}/'}
    movidos.append(f'/{destino}/{slug}/')
json.dump(publicados, open(pub_path, 'w'), ensure_ascii=False, indent=1)
restantes = sum(1 for i in fila if i['slug'] not in publicados)
print('PUBLICADOS:', ' '.join(movidos) if movidos else 'nenhum')
print('RESTANTES NA FILA:', restantes)
