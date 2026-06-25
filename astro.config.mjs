import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL overrides the production domain at build/deploy time (the only env var read).
export default defineConfig({
  site: process.env.SITE_URL || 'https://drippingspringswelldrilling.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' }, // inline CSS → no render-blocking request
  integrations: [
    sitemap({
      // Lean launch sitemap: only intentional, indexable pages.
      // Keep: homepage (/), service hubs (/{service}/), city hubs (/service-area/{city}/).
      // Drop: legal pages, and the auto-generated service×city combo pages
      //       (/{service}/{city}/) — those are noindexed too (see [service]/[city].astro).
      filter: (page) => {
        const path = new URL(page).pathname;
        if (/^\/(terms|privacy)\/?$/.test(path)) return false; // legal
        const segs = path.split('/').filter(Boolean);
        if (segs.length === 2 && segs[0] !== 'service-area') return false; // service×city combo
        return true;
      },
    }),
  ],
});
