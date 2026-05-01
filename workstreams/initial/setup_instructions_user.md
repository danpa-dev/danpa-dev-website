# Setup Instructions (User)

## Overview
This site will be built with Astro and hosted on GitHub Pages with a custom domain. You will write blog posts in Markdown and deploy by pushing to GitHub.

## GitHub Setup (When Ready)
- Create or choose a GitHub repository for the site.
- Use the default branch `main`.
- GitHub Pages will deploy via GitHub Actions in `.github/workflows/deploy.yml`.
- In repo settings: Settings → Pages → Build and deployment → select GitHub Actions.

## Custom Domain (Squarespace Domains)
- Add a `public/CNAME` file containing your domain (e.g., `danpark.com`).
- In Squarespace Domains, configure DNS:
  - Apex domain `A` records:
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
  - `CNAME` for `www` pointing to `username.github.io`.
- In GitHub repo Settings → Pages, set the custom domain and enable “Enforce HTTPS.”

## Local Development
- Install Node.js (LTS).
- Run:
  - `npm install` to install dependencies.
  - `npm run dev` to start the local dev server.
  - `npm run build` to generate the static site.

## Content Workflow
- Blog posts live in `src/content/blog/` as Markdown.
- Each post has frontmatter: `title`, `description`, `pubDate`.
- Images go in `public/` and are referenced by absolute paths (e.g., `/images/hero.jpg`).

## Notes
- If you choose a GitHub Pages project site without a custom domain, set `base` in `astro.config.mjs` to `/<repo-name>`.

## What I Need From You
- The domain name you want to use.
- Your GitHub username.
- Any brand/style preferences or inspiration sites.
