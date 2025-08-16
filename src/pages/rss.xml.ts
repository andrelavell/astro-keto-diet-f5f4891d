import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '~/site.config';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.url,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((p) => ({
        link: `/blog/${p.slug}/`,
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
      })),
  });
}
