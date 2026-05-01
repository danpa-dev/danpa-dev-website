# Project Goals (Agent)

## Mission
Build an attractive, highly functional, and easy-to-maintain professional landing page for a developer, hosted on GitHub Pages with a custom domain. The site will be built with Astro and should support a blog written in Markdown.

## Success Criteria
- Clear personal brand: concise bio, professional tone, and strong visual identity.
- High performance: fast load times, minimal JS, optimized images.
- Easy publishing: blog posts as Markdown, simple frontmatter, consistent layouts.
- Maintainable structure: clear directory layout, reusable components, minimal build complexity.
- Robust deployment: GitHub Pages with custom domain, documented DNS setup.

## Primary Features
- Home page with headline, short bio, and CTA links.
- Projects section with featured work and brief descriptions.
- Social links (LinkedIn, GitHub, email) in header/footer.
- Blog index + individual post pages, Markdown-driven.
- About/contact page (if needed for clarity).

## Content & UX Goals
- Tone: professional, confident, approachable.
- Visual design: modern, distinctive, not template-like.
- Navigation: simple, obvious, mobile-friendly.
- Accessibility: semantic HTML, readable typography, sufficient contrast.
## Projects UX Details
- Each project displays as a compact, clickable card.
- Card should include a prominent external link (e.g., "Live demo") that goes directly to the hosted project.
- Clicking the card background (not the external link) should route to a blog post describing the project.
- Projects may be hosted on third-party platforms (e.g., Supabase, Vercel, and similar).

## Technical Direction
- Framework: Astro (static output).
- Content: Markdown with frontmatter for blog posts.
- Styling: to be decided (Tailwind, vanilla CSS, or CSS modules), keep minimal dependencies.
- Hosting: GitHub Pages with custom domain.

## Risks & Mitigations
- DNS setup complexity: document steps clearly and validate with user.
- Scope creep: keep initial launch focused, iterate after.
- Design iteration: start with a strong visual direction early.

## Open Questions
- Preferred content sections beyond home/projects/blog?
- Visual style references or inspirations?
- Blog features: tags, RSS, pagination?
- Contact method: email link, form, or calendar?
