# Root — Landing

Landing page de **Root**, la app de nutrición personalizada para celíacos,
diabéticos e intolerantes a la lactosa (Lúmina W).

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4 (config CSS-first con `@theme`)
- Componentes estilo shadcn/ui (Button, Card) customizados a la marca
- React Router (landing + páginas FAQ / Sobre / Contacto / Legal)
- Animaciones en CSS puro (sin dependencias de animación)

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + build a dist/
npm run preview   # sirve el build de producción
```

## Deploy (Netlify)

`netlify.toml` ya está configurado:

- `base = /` en Vite → el build sale en `dist/`, publicado desde `dist`,
  de modo que el sitio vive en la raíz del dominio (`okroot.co`).
- SPA fallback: `/* → /index.html` (las rutas del cliente no dan 404).
- Security headers (CSP, HSTS, X-Frame-Options, etc.).

Conecta el repo a Netlify con publish dir `dist` y se auto-despliega desde la
rama principal.

## Pendientes

- `WAITLIST_ENDPOINT` en `src/lib/utils.ts` está vacío: el form corre en modo
  demo (sin red). Apuntar a un endpoint real y ampliar `connect-src` /
  `form-action` en el CSP de `netlify.toml`.
- Mockups de recetas / dashboard usan datos de muestra (marcados con `TODO`).
- Textos legales en `src/pages/Legal.tsx` son preliminares.
