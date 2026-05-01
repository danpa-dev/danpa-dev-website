---
title: Neon Grove
description: A realtime-friendly data layer with Supabase—what worked and what I’d revisit.
pubDate: 2024-08-24
context: Case study · backend & realtime
tags:
  - Supabase
  - PostgreSQL
  - Realtime
---

Neon Grove was an excuse to **ship something that stays warm**: subscriptions, auth-shaped boundaries, and APIs that don’t fight the client.

## Problem shape

I needed list views that update when rows change, without wiring websockets by hand everywhere. Managed realtime plus a clear row-level security story beat rolling my own first.

## What I built

Tables and policies tuned for read-heavy paths; a thin client that subscribes where it matters and falls back to plain fetches elsewhere. Nothing clever on purpose—clarity over novelty.

## Learnings

Realtime is easy to demo and hard to reason about at scale. Next time I’d document subscription lifetimes earlier and add tracing around channel churn before optimizing queries.
