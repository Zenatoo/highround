// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Tauri sets TAURI_ENV_PLATFORM when it runs the build: the app serves files from "/",
// while GitHub Pages serves the site from "/highround/".
const isApp = Boolean(process.env.TAURI_ENV_PLATFORM);

export default defineConfig({
  site: 'https://zenatoo.github.io',
  base: isApp ? '/' : '/highround',
  trailingSlash: 'always',
  integrations: [mdx()],
  // Small fonts/images would be inlined as data: URIs, which the CSP (font-src 'self') blocks.
  vite: { build: { assetsInlineLimit: 0 } },
  // Shiki injects inline styles, which the CSP blocks; guides have no code blocks anyway.
  markdown: { syntaxHighlight: false },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "worker-src 'self'",
      ],
      // Pagefind (search) runs as WebAssembly.
      scriptDirective: {
        resources: ["'self'", "'wasm-unsafe-eval'"],
      },
    },
  },
});
