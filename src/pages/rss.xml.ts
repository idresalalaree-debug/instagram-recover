import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.date - +a.data.date);
  const items = posts
    .map((p) => `<item><title>${esc(p.data.title)}</title><link>${SITE.url}/blog/${p.id}/</link><guid>${SITE.url}/blog/${p.id}/</guid><description>${esc(p.data.description)}</description><pubDate>${p.data.date.toUTCString()}</pubDate></item>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE.name}</title><link>${SITE.url}/</link><description>${esc(SITE.description)}</description><language>ar</language>${items}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
}
