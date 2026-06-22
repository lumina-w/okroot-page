// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { fileURLToPath } from "node:url";

// Static marketing site served at the okroot.co domain root.
export default defineConfig({
  site: "https://okroot.co",
  // astro-icon inlines Iconify SVGs at build time (no runtime JS) — compatible
  // with the strict `script-src 'self'` CSP. Icons live in @iconify-json/lucide.
  integrations: [icon()],
  // Bundle every <script> to an external hashed file so the strict
  // `script-src 'self'` CSP in netlify.toml allows them (no inline scripts).
  build: {
    inlineStylesheets: "never",
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
