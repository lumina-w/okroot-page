# OKRoot — Landing

Landing page de **Root** (marca OKRoot), la app de nutrición personalizada para
celíacos, diabéticos e intolerantes a la lactosa.

## Stack

- Astro 5 (sitio estático, routing por archivos en `src/pages/`)
- Navegación con View Transitions (`<ClientRouter />`), mejora progresiva sobre HTML real
- TypeScript
- Tailwind CSS v4 (config CSS-first con `@theme`, vía `@tailwindcss/vite`)
- Iconos inline en build con `astro-icon` + `@iconify-json/lucide`
- Sitemap auto-generado con `@astrojs/sitemap`
- Animaciones en CSS puro (sin dependencias de animación)
- Waitlist en Supabase vía PostgREST (sin SDK, `fetch` directo)
- Analítica GA4 con consentimiento (banner de cookies), nunca carga por defecto

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build estático a dist/
npm run preview   # sirve el build de producción
npm run lint      # astro check (type-check)
```

## Variables de entorno

Copia `.env.example` a `.env` y rellena:

```bash
PUBLIC_SUPABASE_URL=https://TU-PROYECTO.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu-anon-public-key
PUBLIC_GA_ID=G-XXXXXXXXXX   # opcional: GA4. Sin esto no carga analítica.
```

Astro solo expone al cliente las variables con prefijo `PUBLIC_`. Sin las dos de
Supabase, el form de waitlist corre en **modo demo** (no envía nada). En
producción hay que definirlas en los env vars de Netlify, o se pierden los
registros. `PUBLIC_GA_ID` es opcional: si no está, no se carga ningún script de
analítica (y aun con él, GA4 solo arranca tras aceptar el banner de cookies).
Ejecuta
`supabase/waitlist.sql` en el proyecto para crear la tabla `okroot-waitlist` y su
Row Level Security (anon solo puede INSERT).

## Deploy (Netlify)

`netlify.toml` ya está configurado:

- Build con `npm run build`, publicado desde `dist/`; el sitio vive en la raíz
  del dominio (`okroot.co`, `site` en `astro.config.mjs`).
- Sin SPA fallback: Astro genera un HTML real por ruta y Netlify sirve
  `404.html` para rutas desconocidas.
- Security headers (CSP, HSTS, X-Frame-Options, etc.); el CSP permite
  `connect-src https://*.supabase.co`.

Conecta el repo a Netlify con publish dir `dist`. **Define
`PUBLIC_SUPABASE_URL` y `PUBLIC_SUPABASE_ANON_KEY` en los env vars de Netlify**
antes del primer deploy.

## Pendientes

- Mockups de recetas / dashboard usan datos de muestra (marcados con `TODO`).
- Textos legales (`src/pages/privacidad.astro`, `terminos.astro`,
  `habeas-data.astro`, `cookies.astro`) son preliminares.
