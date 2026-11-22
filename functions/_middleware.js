import { destinoSemWww } from './www-redirect.js';

export async function onRequest(context) {
  const destino = destinoSemWww(context.request.url, context.request.headers.get('host'));
  if (destino) return Response.redirect(destino, 301);
  return context.next();
}
