# dan_personal_website Agent Guide

Astro 5 personal website for **danpa.dev**.

## Current state

- Visual redesign is done: Helvetica/system font, blue accent `#2563eb`, bordered project cards, list-style writings.
- **Projects:** one case study (`netflix-resume`); listing in `src/data/projects.ts`.
- **Writings:** collection empty (placeholder posts removed); empty states on home and `/writings`.
- **About:** hidden from nav (`src/pages/about/index.astro` kept but not linked).
- **Deploy:** GitHub Pages via `.github/workflows/deploy.yml` (aligned with `dan_resume`: `configure-pages@v5`, artifact upload, `deploy-pages@v4`). Not live until GitHub Pages source + DNS are configured.
- **`public/CNAME`:** `danpa.dev`. Custom domain must also be set in repo **Settings → Pages** (Actions workflows do not read `CNAME` alone).

## Commands

Use npm from **this** project directory (`dan_personal_website/`), not the parent workspace root.

```bash
npm install
npm run dev      # Astro dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

If content changes do not appear after deleting Markdown, clear Astro cache: `rm -rf .astro node_modules/.astro dist` then rebuild.

## Project structure

- `src/pages/` — routes (`/`, `/projects`, `/writings`; `/about` exists but is not in nav)
- `src/components/` — `Nav`, `Footer`, `Breadcrumbs`, `ProjectCard`
- `src/layouts/Layout.astro` — shared shell
- `src/styles/global.css` — design system
- `src/data/projects.ts` — project list for home and `/projects`
- `src/content/writings/` — essays (`/writings/[slug]`)
- `src/content/project/` — case studies (`/projects/[slug]`); filename slug must match `postUrl` in `projects.ts`
- `public/` — static assets (`CNAME`, favicon)
- `.github/workflows/deploy.yml` — GitHub Pages deploy on push to `main`

## Memory / orientation

If started from workspace root (`/Users/danpark/coding/website`):

- `memory/BOOTSTRAP.md`
- `memory/knowledge/dan-personal-website/overview.md`
- `memory/knowledge/dan-personal-website/deployment.md`
- `memory/workstreams/active/personal-website.md`

## UX requirements

Project cards: prominent external link to the live project; card click goes to the writeup. Understated personal design — not a SaaS landing page.

## Deploy checklist (human)

1. Push to `main` on `danpa-dev/danpa-dev-website`
2. GitHub **Settings → Pages → Source:** GitHub Actions
3. **Custom domain:** `danpa.dev`; configure Squarespace A/CNAME records
4. Enable **Enforce HTTPS** after DNS
