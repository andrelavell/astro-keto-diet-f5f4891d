import { SITE } from '~/site.config';

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${SITE.url.replace(/\/$/, '')}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
