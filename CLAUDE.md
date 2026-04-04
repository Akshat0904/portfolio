# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build
```

There are no lint or test scripts configured.

## Stack & Versions

- **Next.js 16.2.2** with App Router — read `node_modules/next/dist/docs/` before touching routing or data-fetching; APIs may differ from training data
- **React 19.2.4** — new patterns (e.g. `use`, server actions) apply
- **Tailwind CSS v4** — configured via `globals.css` with `@import "tailwindcss"` and `@theme inline`; there is **no** `tailwind.config.js`
- **TypeScript 5**, **framer-motion**, **lucide-react**, **react-icons**

## Architecture

Single-page portfolio (`app/page.tsx`) that composes full-section components in order: `Navbar → Hero → About → Skills → Experience → Projects → Contact → footer`. All components live in `components/`.

### Styling conventions

- Design tokens are declared in `globals.css` under `@theme inline` (e.g. `--color-accent: #6366f1`, `--color-card`, `--color-border`, `--color-muted`) — use these CSS variables instead of raw hex values.
- Base background is `#0f0f0f`, accent is indigo `#6366f1`/`#4f46e5`.
- Tailwind v4 utility classes reference theme tokens automatically (e.g. `bg-card`, `text-muted`, `border-border`).

### Network

`next.config.ts` permits `192.168.1.14` as a dev origin (`allowedDevOrigins`) for local-network testing.
