# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing landing page for **Root** — a personalized-nutrition app for celiacs,
diabetics, and lactose-intolerant users (brand "Lúmina W"). Spanish-language
copy. Single Vite SPA, deployed to Netlify at the `okroot.co` domain root.

## Commands

```bash
npm run dev       # Vite dev server (http://localhost:5173)
npm run build     # tsc -b (project-references type-check) then vite build → dist/
npm run preview   # serve the production build locally
npm run lint      # tsc -b --noEmit — type-check only; THIS IS THE ONLY "lint"
```

There is no ESLint, Prettier, or test runner. "Linting" means TypeScript
type-checking. Verify changes compile with `npm run lint` or `npm run build`.

## Architecture

- **Routing** (`src/App.tsx`): React Router. A single `<Layout>` route wraps all
  pages. `index` → `Landing`; plus `faq`, `about`, `contact`, `legal`, and a
  `*` catch-all. The landing page composes section components in fixed order
  (`Hero → PainSection → HowItWorks → Features → Founder → Waitlist → FaqSection`).
- **Scroll behavior** is centralized, not per-component. `Layout`'s
  `ScrollManager` resets scroll on route change and honors `#hash` anchors.
  Cross-route section jumps pass `state.scrollTo` via router navigation;
  `Landing` reads that state on mount to scroll to a section. When adding
  navigation that should land on a landing section, use this `state.scrollTo`
  convention rather than ad-hoc scrolling.
- **Reveal-on-scroll animations** (`src/hooks/useReveal.ts`): add the `reveal`
  class to elements and call `useReveal()` on a container ref; the hook's
  IntersectionObserver adds `is-visible` when they enter view. Stagger children
  with an inline `--reveal-delay`. All animation is pure CSS — do not add an
  animation library.

## Styling

- **Tailwind CSS v4, CSS-first config** — there is no `tailwind.config.js`.
  The theme lives in `src/index.css` under `@theme { ... }` (brand colors like
  `--color-primary`, fonts, easing). Extra design tokens are plain CSS vars on
  `:root`. Add/adjust design tokens there, then use them as Tailwind utilities
  (e.g. `bg-primary`, `text-accent`, `border-line`).
- **shadcn/ui "new-york" style**, but only `Button` and `Card` are vendored into
  `src/components/ui/` and customized to the brand (CVA variants). `cn()` from
  `@/lib/utils` merges classes. Icons: lucide (`components.json` config), though
  custom SVGs live in `src/components/icons.tsx`.
- Path alias `@/` → `src/` (configured in both `vite.config.ts` and tsconfig).

## Configuration constants

`src/lib/utils.ts` holds the runtime-config constants — edit these, not
scattered literals:
- `APP_URL` — where the "Entrar a la app" CTA points (`https://app.okroot.co`).
- `PORTFOLIO_URL` — founder social-proof link.
- `WAITLIST_ENDPOINT` — waitlist form POST target. Empty string runs the form in
  optimistic-demo mode (no network). **If you set a cross-origin endpoint, you
  must also widen `connect-src` / `form-action` in `netlify.toml`'s CSP**, or the
  browser blocks the POST.

## Deploy (Netlify)

`netlify.toml` is the source of truth: build → `dist`, SPA fallback
(`/* → /index.html`), strict security headers including a tight CSP, and
immutable caching for hashed `/assets/*`. The site serves at the domain root
(`base: "/"` in `vite.config.ts`).

Note: `README.md` is partly stale — it describes an older `/root/` base path and
`dist/root` output. The actual config serves from the domain root (`base: "/"`,
publish `dist`). Trust `vite.config.ts` + `netlify.toml` over the README.
