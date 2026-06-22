// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
// changefreq is a string *enum* (EnumChangefreq), not a plain string — the raw
// "weekly"/"monthly" literals don't satisfy SitemapItem under astro check.
import { EnumChangefreq } from "sitemap";
import { fileURLToPath } from "node:url";

// Static marketing site served at the okroot.co domain root.
export default defineConfig({
  site: "https://okroot.co",
  // astro-icon inlines Iconify SVGs at build time (no runtime JS) — compatible
  // with the strict `script-src 'self'` CSP. Icons live in @iconify-json/lucide.
  // @astrojs/sitemap auto-generates sitemap-index.xml from every prerendered
  // route at build — no hand-maintained public/sitemap.xml to drift. 404 is
  // excluded (it's noindex). Per-section priority/changefreq via serialize.
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      serialize(item) {
        const { url } = item;
        if (url === "https://okroot.co/") {
          return { ...item, changefreq: EnumChangefreq.WEEKLY, priority: 1.0 };
        }
        if (url.endsWith("/recetas/")) {
          return { ...item, changefreq: EnumChangefreq.WEEKLY, priority: 0.8 };
        }
        if (url.includes("/recetas/")) {
          return { ...item, changefreq: EnumChangefreq.MONTHLY, priority: 0.7 };
        }
        if (/\/(privacidad|terminos|habeas-data|cookies)\/$/.test(url)) {
          return { ...item, changefreq: EnumChangefreq.YEARLY, priority: 0.3 };
        }
        return { ...item, changefreq: EnumChangefreq.MONTHLY, priority: 0.6 };
      },
    }),
  ],
  // Bundle every <script> to an external hashed file so the strict
  // `script-src 'self'` CSP in netlify.toml allows them (no inline scripts).
  build: {
    inlineStylesheets: "never",
  },
  // Self-hosted fonts: downloaded + subset (latin) + woff2-optimized at build,
  // served from 'self' as hashed /_astro assets. Kills the render-blocking
  // round-trips to fonts.googleapis.com / fonts.gstatic.com on the critical
  // path. Both families are variable, so each ships as ONE file covering the
  // whole 400..800 weight range. The <Font> component in Base.astro injects the
  // @font-face + preload links; cssVariables are referenced from src/index.css.
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Bricolage Grotesque",
        cssVariable: "--ff-display",
        weights: ["400 800"],
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.google(),
        name: "Plus Jakarta Sans",
        cssVariable: "--ff-sans",
        weights: ["400 800"],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
  vite: {
    // Cast: @tailwindcss/vite is typed against a different Vite version than
    // the one Astro bundles, so its Plugin type doesn't line up. Runtime is fine.
    plugins: [/** @type {any} */ (tailwindcss())],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      assetsInlineLimit: 0,
    },
  },
});
