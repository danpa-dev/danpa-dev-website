---
title: Signal Raft
description: Documentation and reference material as a static site—fast, cacheable, boring on purpose.
pubDate: 2024-07-18
context: Case study · docs & static hosting
tags:
  - Cloudflare
  - Docs
  - Static
---

Signal Raft is the **project-facing** story: how reference content stayed fast, searchable enough, and cheap to host.

## Goals

Readers should get answers without waiting on a server round-trip for every navigation. The bar was “feels local,” even on mediocre networks.

## Approach

Static generation, aggressive caching, minimal client scripts. Structure beat styling—clear headings, stable URLs, and short pages.

## Takeaway

For docs, predictability wins. I’d rather ship a dull pipeline that never surprises anyone than a clever one that breaks when traffic spikes.
