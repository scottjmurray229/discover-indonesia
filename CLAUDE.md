# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Discover Indonesia — a travel guide website built with Astro 5, Tailwind CSS 4, and deployed to Cloudflare Pages. Content is markdown-based using Astro's content collections with Zod schemas. Domain: discoverindonesia.info

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test runner is configured. No linter is configured.

## Architecture

### Content Collections (`src/content/`)

Two collections defined in `src/content/config.ts`:
- **destinations** — Travel destination pages with typed schema (region enum: bali/java/sumatra/sulawesi/kalimantan/nusa-tenggara, budgetPerDay object, highlights array, contentStatus workflow)
- **blog** — Articles with categories (destination, food, festival, practical, budget, culture)

### Routing (`src/pages/`)

- `index.astro` — Home page
- `destinations/[...slug].astro` — Dynamic catch-all route for destination pages
- `404.astro` — Custom error page

### Deployment

Cloudflare Pages via `@astrojs/cloudflare` adapter. Config in `wrangler.jsonc`. D1 database: discover-indonesia-db

## Content Rules

- First-person plural voice: "we discovered...", "our first morning..."
- Authors: Both Scott and Janice (Indonesia is Asia, both authors apply)
- Currency: IDR (Indonesian Rupiah)
- Cross-link every page to at least 2 other content pillars
