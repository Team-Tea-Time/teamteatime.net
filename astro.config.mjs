import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/docs/laravel-forum": "/docs/laravel-forum/6.x/general",
    "/docs/laravel-forum/[version]": "/docs/laravel-forum/[version]/general"
  },
  integrations: [mdx()]
});