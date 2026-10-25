import { defineConfig } from 'astro/config';

// Custom domain: www.sles-cso.com (set as the custom domain in the
// GitHub Pages settings via public/CNAME). DNS at GoDaddy points the
// apex and www to GitHub Pages, same pattern as her other sites.
export default defineConfig({
  site: 'https://www.sles-cso.com',
});
