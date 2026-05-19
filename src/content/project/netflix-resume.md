---
title: Netflix Resume
description: A vibe-coded, Netflix-style portfolio for work history—built with Cursor.
pubDate: 2024-09-10
context: Case study · vibe coding
tags:
  - Vibe Coding
  - Cursor
  - React
  - TypeScript
---

## Why I built this

This started as a vibe-coding experiment: use [Cursor](https://cursor.com) and frontier models to generate a site that *looks and feels* like Netflix, but surfaces my work history instead of shows. The goal was fun first—a memorable way to browse roles, projects, and media—not a traditional resume layout.

I have no background as a front-end engineer. I had not used React, Vite, or the rest of the stack before this project. Almost everything you see on [resume.danpa.dev](https://resume.danpa.dev) was built by describing intent, iterating in chat, and accepting (or fighting) what came back. In that sense it is as much a demo of what these tools can do as it is a portfolio.

## What shipped

A content-driven SPA: carousels, modals, season-style job switching, thumbnails, and video placeholders—all wired to JSON so the UI stays separate from copy. It is live, deploys on push, and reads well on a laptop. Whether that counts as “I built a website” or “I directed one” is left as an exercise for the reader.

## How the build actually felt

The first half was embarrassingly fast. Layout, scaffolding, and the broad Netflix metaphor came together quickly. The second half was not. Subtle UI behavior—spacing, focus, carousel edge cases, things that need a human eye—cost disproportionate time. I would get stuck in loops where the model confidently changed the wrong thing, or missed a constraint I had already stated twice.

I started this when **GPT-4.5** was the default; by the time I was still polishing details, **5.5** was available. The gap between “generate a plausible page” and “ship something you are willing to put your name on” did not shrink as much as I hoped. The tools are impressive at the macro level and uneven at the micro level. That mismatch is the main source of frustration I remember from the project.

## What I learned about content (not just code)

Generating *something* is easy. Generating *interesting* media is still hard.

It is trivial to produce slop—generic clips, filler thumbnails, noise that fills a card. Making assets that feel intentional and worth clicking requires taste, editing, and thought in the prompt itself. I came away convinced that **prompt engineering for video and image assets** is going to be a real job category, whether we like the label or not. The bottleneck is less “can a person create pixels” and more “does a person with taste know what to ask for.”

The same applies to copy: role descriptions, episode titles, modal text. AI drafts are a starting point; the good version still needs a human pass.

## Keeping it updated

Another lesson landed after launch: **maintenance is its own project.**

I still have a canonical PDF resume—the version I send to employers. This site has parallel JSON, media paths, and generated assets. Keeping those in sync is manual and easy to neglect. Every job change is two edits and a sanity check, not one.

I have thought about future work that would make this less painful—or more interesting for others:

- Treat one source of truth (e.g. structured resume data) and generate both PDF and site from it.
- Pipeline media generation from that same source so thumbnails and clips stay aligned.
- Go further: upload a resume, and spin up a Netflix-style site automatically. That feels like a fun extension of the same experiment, not a requirement for v1.

For now, the site is the showy, fun demo; the PDF is the formal one.

## Bottom line

Netflix Resume is a vibe-coded project that showcases what AI-assisted development can do when you have clear taste and patience—and what it still cannot do without you. I am proud of how it looks and clear-eyed about how it was made.
