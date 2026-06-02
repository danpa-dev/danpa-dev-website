# Markdown content styling

Writings (`src/content/writings/`) and project case studies (`src/content/project/`) render as HTML inside Astro pages. Typography for that HTML is **not** browser-default: `src/styles/global.css` applies a universal `* { margin: 0; padding: 0 }` reset, which removes list indentation and other prose spacing unless we restore it explicitly.

## Required wrapper class

Any route that renders Markdown (or long-form HTML body copy) must wrap the content in **`.post-body`**:

| Route | File | Wrapper |
|-------|------|---------|
| `/writings/[slug]` | `src/pages/writings/[slug].astro` | `<article class="post-body">` |
| `/projects/[slug]` | `src/pages/projects/[slug].astro` | `<article class="post-body project-writeup">` |
| `/about` | `src/pages/about/index.astro` | `<div class="post-body">` |

Do **not** introduce a one-off prose class (e.g. `.about-content`) without extending the shared rules in `global.css`. If a new page needs Markdown typography, use `.post-body` and add page-specific layout classes alongside it (like `project-writeup`).

## What `.post-body` covers

Defined in `src/styles/global.css` under the “`.post-body` — prose typography” section:

- Headings (`h2`, `h3`)
- Paragraphs
- Ordered and unordered lists (including nested lists)
- Blockquotes, inline `code`, fenced `pre`
- Horizontal rules
- Links (accent color + hover)

When adding new Markdown elements (tables, images with captions, etc.), add styles under `.post-body` in `global.css` and note them here.

## Checklist for new Markdown pages

1. Wrap `<Content />` (or equivalent) in an element with class `post-body`.
2. If lists or block elements look flush-left with markers outside the text column, confirm the wrapper class is present and that no child overrides `padding-left` on `ul`/`ol`.
3. Run `npm run dev`, open the page, and scan a post with bullets, numbers, and a multi-line list item.

## Related docs

- `README.md` — project structure and content paths
- `AGENTS.md` — agent orientation
- `memory/knowledge/dan-personal-website/gotchas.md` — reset/prose pitfall
