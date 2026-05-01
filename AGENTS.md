# dan_personal_website Agent Guide

Astro 5 personal website intended for `danpa.dev`.

## Current State

- Visual redesign is complete: clean Helvetica/system-font aesthetic, blue accent, bordered cards, list-style writing.
- Content uses two Markdown collections: **writings** (essays) and **project** (case studies); listing metadata for projects lives in `src/data/projects.ts` (slugs must match `src/content/project/{slug}.md`).
- Not deployed yet.
- A GitHub Pages workflow scaffold exists at `.github/workflows/deploy.yml`, but final deployment platform is still TBD.
- No `public/CNAME` exists yet.

## Commands

Use npm from **this** project directory (`dan_personal_website/`), not the parent workspace root—otherwise content collections and routes will not match this site.

```bash
npm install
npm run dev      # Astro dev server
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Project Structure

- `src/pages/` — routes (`/`, `/projects`, `/writings`, `/about`)
- `src/components/` — Astro components (`Nav`, `Footer`, `Breadcrumbs`, `ProjectCard`)
- `src/layouts/Layout.astro` — shared page shell
- `src/styles/global.css` — global design system/styles
- `src/data/projects.ts` — project list for home and `/projects`
- `src/content/writings/` — Markdown **essays** (`/writings`, `/writings/[slug]`)
- `src/content/project/` — Markdown **project case studies** (`/projects/[slug]`). Filenames must match `postUrl` paths in `src/data/projects.ts`.
- `public/` — static assets

## Memory / Orientation

If started from the workspace root (`/Users/danpark/coding/website`), read:

- `memory/BOOTSTRAP.md`
- `memory/knowledge/dan-personal-website/overview.md`
- `memory/knowledge/dan-personal-website/deployment.md`
- `memory/workstreams/active/personal-website.md`
- `memory/knowledge/user-preferences.md`

## Important UX Requirements

Project cards should have two clear affordances:

- A prominent external link (e.g. "Live demo") directly to the hosted project.
- Card/background click routes to the project writeup.

Avoid making the site feel like a SaaS/product landing page. Dan prefers understated, personal, clean design with subtle blue accents.
