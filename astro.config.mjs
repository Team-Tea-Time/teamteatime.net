import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	redirects: {
        "/docs/[project]/[version]": "/docs/[project]/[version]/general/introduction",
    }
});
