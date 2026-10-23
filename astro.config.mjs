import { defineConfig } from 'astro/config';

// No custom domain registered yet, so this deploys to the default
// GitHub Pages project URL. Once a domain is bought, add public/CNAME,
// switch `site` to the custom domain, and drop `base`.
export default defineConfig({
  site: 'https://chantellejankin-spec.github.io',
  base: '/sles-site/',
});
