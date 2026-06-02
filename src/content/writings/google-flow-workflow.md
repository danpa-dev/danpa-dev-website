---
title: Notes on Using Google Flow for Video Generation
description: Notes from experimenting with Google Flow for AI video generation, including what worked, what failed, and where the tools still need improvement.
pubDate: 2026-06-02
tags:
  - AI Video
  - Google Flow
  - Gemini Omni
---

Written in June 2026 with some help from the Haiku 4.5 model.

## Overview

I experimented with **Google Flow** in late May 2026 to generate AI videos. Earlier, I used **Kling AI** for video creation in Amazon Work History Season One.

The results were better than I expected for short clips, but consistency and precise control still break down when you try to assemble a longer sequence.

## Tools & Features

### Flow Agent

Google's [May 19 announcement](https://blog.google/innovation-and-ai/models-and-research/google-labs/flow-updates/) introduced **Flow Agent** alongside **Gemini Omni Flash**. The agent was hyped during release but did not work for me. I consistently got an "unknown error, please try again" message when trying to use the agent feature in Google Flow. Disappointing.

### Avatar Feature

- I used Google Flow's avatar scanning feature to add myself to the platform. During the avatar upload, it had me read a couple of numbers to record the timbre of my voice.
- I was pleasantly surprised by the quality of the vocal reproduction. It mimicked the timbre of my voice and subtle intonations surprisingly well.
- Minor note: I should have shaved my stubble mustache beforehand because the videos prominently feature it.

## Workflow Notes

### Best Workflow

1. Start with **image assets first**: either screenshots from existing media that I edit or images generated from scratch with **Nano Banana 2**.
2. Refine images until satisfied.
3. Use the polished images as ingredients for video generation with **Gemini Omni Flash**.

### Generosity of Credits

- The cheapest paid Google AI plan still gives **1,000 credits/month**.
- Short clips of four seconds cost seven credits; eight second clips cost twelve credits. This was more than enough to create all the content I needed.
- The video quality was good enough that I did not need to generate two variants at once to improve my chances of getting a usable result.

## Major Limitations

### 1. Consistency Issues

Within a single clip, things are fairly coherent and consistent. Visual problems arise **between generations**. Things like:

- Camera movement
- Cuts and editing styles
- Movement of individuals

These are noticeably different between clips. The visual language can be kept more consistent by using image assets as ingredients.

This problem also affects audio. Volume and vocal timbre can be inconsistent between clips for non-avatar characters. This is a bigger problem. I think a professional would need to handle the audio of a multi-generation segment manually.

### 2. Out-of-Distribution Requests Fail

Example: I tried to imagine a basketball player dribbling a ball with their feet so hard and fast that they would slowly rise, like wire work in Hong Kong martial arts films or _Shaolin Soccer_.

Despite half a dozen prompt variations, the model could not generate anything close to what I wanted. I cannot know whether the request fell outside the training distribution or whether a better workflow would have worked. But the failed attempts suggest that **creative work at the margins - novel, off-kilter ideas - still requires humans**.

### 3. Prompting Documentation Gaps

There are several key unknowns about what’s possible with prompting - like:

- Can I use timestamps to direct what happens when?
- Can I define specific characters and dialogue, like a movie script with stage directions?
- Can I specify exact movements like eye gaze?
- What camera movements and lenses are available?

**Need:** comprehensive prompting guides listing available keywords, capabilities, and control limits.

## Observations & Learnings

### Time Investment

The process took **much longer than expected**, involving:

1. Ideation
2. Image generation and refinement
3. Video generation
4. Iteration based on output

I slightly regret the time spent, but it was a valuable learning experience about current model capabilities.

### Not Yet a Professional Threat

I am not a professional filmmaker, and even if I were, I would not worry much about this technology yet, **with the caveat that I might be using the tool ineffectively**. If this were my full-time job, I could probably find workarounds to the limitations that I encountered.

### Other Frontier Models

I did not re-evaluate updated versions from **Kling AI** or **SeedDance**, the other frontier models in video generation.
