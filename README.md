# dan_personal_website

Personal site for [danpa.dev](https://danpa.dev). Astro 5, static-first, Helvetica/system typography with a blue accent.

**Repo:** `danpa-dev/danpa-dev-website`

## Commands

Run from this directory (`dan_personal_website/`), not the parent workspace:

```bash
npm install
npm run dev       # Dev server (default http://localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Serve dist/ locally
```

## Project structure

```text
dan_personal_website/
├── public/
│   ├── CNAME           # danpa.dev (custom domain hint for static hosts)
│   └── favicon.svg
├── src/
│   ├── components/     # Nav, Footer, ProjectCard, ServiceItem, Breadcrumbs
│   ├── content/
│   │   ├── project/    # Case studies → /projects/[slug]
│   │   └── writings/   # Essays → /writings/[slug]
│   ├── data/
│   │   ├── projects.ts # Home + /projects listing (slugs must match content filenames)
│   │   └── services.ts # Home-only Services section + booking URL
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── .github/workflows/
    └── deploy.yml      # GitHub Pages (push to main)
```

## Content

- **Projects:** Markdown in `src/content/project/`; card metadata and order in `src/data/projects.ts`. Slug = filename without `.md` (e.g. `netflix-resume.md` → `/projects/netflix-resume`).
- **Writings:** Markdown in `src/content/writings/`. Collection may be empty; pages handle that.
- **Services:** Static copy in `src/data/services.ts`; rendered on the home page only (not in nav, no detail routes).

Rendered Markdown (writings, project case studies, about copy) is wrapped in **`.post-body`** for typography. The global CSS reset strips default list padding, so list/block styles live under `.post-body` in `src/styles/global.css`. See **`docs/markdown-content.md`** before adding new Markdown routes or prose classes.

## Deployment (GitHub Pages)

Target domain: **danpa.dev** (apex). Workflow: `.github/workflows/deploy.yml` — same pattern as `dan_resume` (`configure-pages` → `upload-pages-artifact` → `deploy-pages`).

**One-time GitHub setup (manual):**

1. Repo **Settings → Pages → Build and deployment → Source:** **GitHub Actions**
2. **Custom domain:** `danpa.dev`
3. Squarespace DNS: four `A` records on `@` to GitHub Pages IPs (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)); optional `www` CNAME → `danpa-dev.github.io`
4. After DNS propagates: **Enforce HTTPS**

Push to `main` (or run the workflow manually) to deploy.

Workspace-level deployment notes: `../memory/knowledge/dan-personal-website/deployment.md`

## Related sites

- [resume.danpa.dev](https://resume.danpa.dev) — Netflix-style resume (`dan_resume/`, separate repo)
