# dan_personal_website Agent Guide

Astro 5 personal website intended for `danpa.dev`.

## Current State

- Visual redesign is complete: clean Helvetica/system-font aesthetic, blue accent, bordered cards, list-style writing.
- Content is still mostly placeholder/lorem ipsum.
- Not deployed yet.
- A GitHub Pages workflow scaffold exists at `.github/workflows/deploy.yml`, but final deployment platform is still TBD.
- No `public/CNAME` exists yet.

## Commands

Use npm from this project directory:

```bash
npm install
npm run dev      # Astro dev server
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Project Structure

- `src/pages/` — routes (`/`, `/projects`, `/blog`, `/about`)
- `src/components/` — Astro components (`Nav`, `Footer`, `Breadcrumbs`, `ProjectCard`)
- `src/layouts/Layout.astro` — shared page shell
- `src/styles/global.css` — global design system/styles
- `src/data/projects.ts` — project list for home and `/projects`
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
- Card/background click routes to the related blog/project writeup.

Avoid making the site feel like a SaaS/product landing page. Dan prefers understated, personal, clean design with subtle blue accents.
