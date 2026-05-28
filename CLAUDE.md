# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Webscan ("Audit your website in 60 seconds") — a website-audit SaaS, built section by section; the landing page is the first piece being built. The current `app/page.tsx` is still the unmodified `create-next-app` starter; the real landing page should be built from the mockup at `design-reference/Webscan Landing Page.html` (a self-unpacking SVG/HTML bundle — open it in a browser to view, don't try to read it as source).

## Commands

- `npm run dev` — start the dev server (Next.js Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extending `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`)

There is no test runner configured.

## Stack notes that bite

- **Next.js 16.2.6 + React 19.2** — APIs may differ from training-data Next.js. The `@AGENTS.md` import above is load-bearing: it instructs you to consult `node_modules/next/dist/docs/` before writing Next code. Always do so.
- **Tailwind v4** — no `tailwind.config.{js,ts}`. The full theme (colors, radii, fonts) lives in `app/globals.css` inside `@theme inline { … }` blocks and CSS custom properties on `:root` / `.dark`. PostCSS config is `@tailwindcss/postcss` only. To add design tokens, edit `globals.css`.
- **shadcn/ui with `radix-vega` style** — configured in `components.json`. New components go in `components/ui/` and should use `cn()` from `@/lib/utils` for class composition.
- **Radix primitives use the unified `radix-ui` package**, not `@radix-ui/react-*`. Import like `import { Slot } from "radix-ui"` and use `Slot.Root` (see `components/ui/button.tsx` for the canonical pattern). Don't add per-primitive `@radix-ui/react-slot` style packages.
- **Icons**: `lucide-react`.
- **Fonts**: Inter (`--font-sans`), Geist (`--font-geist-sans`), Geist Mono (`--font-geist-mono`) are wired up in `app/layout.tsx` via `next/font/google`. Reuse those CSS variables rather than re-importing fonts.

## Conventions

- Path alias: `@/*` → project root (so `@/components/ui/button`, `@/lib/utils`).
- App Router only — everything under `app/`. No `pages/` directory.
- Dark mode uses the `.dark` class variant (see `@custom-variant dark` in `globals.css`).

## Brand & content

- **Brand color**: amber (Tailwind `amber-*` ramp; the design reference uses `#FFFBEB` background and `#B45309` / `#FDE68A` accents).
- **Typography**: Manrope is the brand font. Swap the current Inter setup in `app/layout.tsx` for `Manrope` from `next/font/google` and keep it bound to `--font-sans` so existing utilities pick it up.
- **Markets**: English is primary, Polish is secondary. Write all UI copy in EN first; structure routes/i18n so PL can be added as a secondary locale (don't hard-code English strings in ways that block this).
- **Voice**: plain, direct, human. No corporate-speak — avoid words like "solutions", "leverage", "empower", "seamless", "robust", "cutting-edge". Short sentences. Talk like a person explaining the product to a friend.
