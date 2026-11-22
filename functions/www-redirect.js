const APEX = 'cadeirinhabebe.com.br';
const WWW = `www.${APEX}`;

function hostLimpo(valor) {
  return (valor || '').split(',')[0].trim().replace(/:\d+$/, '').toLowerCase();
}

/** URL absoluta no apex, ou null se o pedido já não está no www. Mantém path e query. */
export function destinoSemWww(requestUrl, hostHeader) {
  const url = new URL(requestUrl);
  const hosts = [url.hostname.toLowerCase(), hostLimpo(hostHeader)];
  if (!hosts.includes(WWW)) return null;
  url.protocol = 'https:';
  url.hostname = APEX;
  url.port = '';
  return url.toString();
}
