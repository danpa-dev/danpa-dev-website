# Personal Website PRD / Design Doc

## Summary
Build a professional, visually attractive personal website for a developer. The site is a multi-page static site built with Astro and hosted on GitHub Pages with a custom domain. It includes a blog (Markdown-driven) and a projects section with interactive card behavior.

## Goals
- Establish a strong professional homepage and personal brand.
- Showcase projects with direct links and deeper writeups.
- Enable easy blogging via Markdown.
- Keep the site fast, accessible, and low-maintenance.

## Non-Goals
- Complex backend features or user accounts.
- Real-time features or heavy client-side apps.
- External CMS integration (initially).

## Target Audience
- Recruiters, hiring managers, collaborators, and peers.
- Visitors seeking a quick, high-quality overview of work and writing.

## Information Architecture
- Home: hero, short bio, featured projects, highlights, CTA links.
- Projects: project cards with external links + blog post links.
- Blog: index + individual posts.
- About/Contact: optional page for longer bio and contact options.

## Key UX Requirements
- Projects cards:
  - Clickable card routes to the blog post about the project.
  - Prominent external link/button routes directly to the live project.
  - Clear affordances to avoid accidental navigation confusion.
- Navigation:
  - Simple, fixed header or top nav.
  - Mobile-friendly layout.
- Accessibility:
  - Semantic HTML, alt text, keyboard navigation, sufficient contrast.

## Visual Direction
- Modern, distinctive design (not a template look).
- Strong typography and visual hierarchy.
- Clean layout with attention to spacing and readability.

## Content Requirements
- Short professional bio (2-4 sentences).
- Project list with: name, short description, tags/stack, live link, blog link.
- Blog posts in Markdown with frontmatter (title, date, description).
- Social links (LinkedIn, GitHub, email).

## Technical Requirements
- Framework: Astro (static output).
- Hosting: GitHub Pages with custom domain (Squarespace DNS).
- Blog: Markdown content with frontmatter, index page, single post pages.
- Assets: optimized images, local hosting in `public/` or `assets/`.

## Deployment
- Build and deploy to GitHub Pages via GitHub Actions.
- Custom domain configured in repository settings with DNS records.

## Milestones (Proposed)
1) Define content inventory and visual direction.
2) Create Astro scaffold, base layout, and navigation.
3) Build Home + Projects layout.
4) Add blog system and sample posts.
5) Configure GitHub Pages deployment and custom domain.

## Open Questions
- Preferred visual style references?
- Exact list of projects and links?
- Blog features: tags, RSS, pagination?
- Contact method: email, form, or calendar link?
