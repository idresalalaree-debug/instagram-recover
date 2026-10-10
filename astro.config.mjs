import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://instagram-recover.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always', format: 'directory' },
  compressHTML: true,
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
});
