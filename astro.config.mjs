import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://amoris.in',
  output: 'static',
  integrations: [sitemap()],
});
