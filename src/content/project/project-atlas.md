---
title: Project Atlas
description: Edge-rendered UI experiments with Astro on Vercel—how the pieces fit together.
pubDate: 2024-09-10
context: Case study · edge rendering
tags:
  - Astro
  - Vercel
  - Edge
---

This writeup is **about the project**, not a generic blog essay: scope, tradeoffs, and what shipped.

## Why this existed

I wanted a playground for UI that renders as close to the user as possible, without giving up a comfortable authoring story. Astro’s islands and Vercel’s edge network were the obvious pair to try.

## What shipped

A small surface of routes and components that hydrate only where needed, with the rest staying static HTML. The goal was fast first paint and predictable behavior under load, not feature count.

## Technical notes

Deployment targets the edge; builds stay in CI; content stays in the repo. Keeping the data plane boring made it easier to focus on render paths and caching headers.

## Outcome

Enough confidence to reuse the same patterns elsewhere: static-first, opt-in JS, and clear boundaries between shell and interactive islands.
