import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Served under wavival.dev/root/ — output goes into dist/root so the
// subpath assets resolve correctly when published from the dist root.
export default defineConfig({
  base: "/root/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/root",
    emptyOutDir: true,
  },
});
