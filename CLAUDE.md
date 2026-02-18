# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16 App Router** portfolio site for filmmaker José Manuel Vélez.

### Routing
- `/` — Home (hero image + project list)
- `/director/[slug]` — Individual film detail pages (dynamic route)
- `/producer` — Producer page (placeholder)
- `/about` — About page

### Key patterns

**Page backgrounds:** Pages that need a full-screen image or video background use `<Page background={...}>` which wraps `BackgroundWrapper`. The `PageBackground` type (`app/types/PageBackground.ts`) is either `{ type: "image"; src: string }`, `{ type: "video"; src: string }`, or `null`.

**Project data:** All film projects live in `app/director/project-data.ts` as a typed `Project[]` array. This is the single source of truth — both the home page list and individual film detail pages pull from it.

**Header behavior:** The header is fixed and transparent, blurring (`backdrop-blur-lg`) once the user scrolls past its own height. Active nav link is bold + underlined. The `/director/[slug]` routes also highlight the "director" nav item.

### Styling
- Tailwind CSS v4 (configured via `postcss.config.mjs`, imported in `globals.css` with `@import "tailwindcss"`)
- Fonts: `Rubik` (sans, `--font-rubik`) and `Rubik_Mono_One` (mono, `--font-rubik-mono`) loaded via `next/font/google`
- Base styles in `globals.css`: `h1` uses mono font, `h2` uses mono + underline, `p` uses sans with `leading-7`
- Dark theme: black background (`#000000`), white foreground (`#ffffff`)

### Commented-out code
Several files contain large commented-out blocks (old implementations). These are intentional — they serve as reference for future work. Don't delete them unless asked.

## Figma Design File

**File:** JMV Full Website
**Key:** `mu6LUtw5Uriz65fw1Vzf93`
**URL:** https://www.figma.com/design/mu6LUtw5Uriz65fw1Vzf93/JMV-Full-Website
**Last modified:** 2026-01-21

The Figma MCP is configured and working (`figma-developer-mcp` via `~/.claude/settings.json`).

### Pages & Breakpoints
All 4 routes are designed across 3 responsive breakpoints:

| Page | Mobile (≤599px) | Tablet (600–1279px) | Desktop (1280+px) |
|------|----------------|---------------------|-------------------|
| Home | ✓ | ✓ | ✓ |
| Film (`/director/[slug]`) | ✓ | ✓ | ✓ |
| Producer | ✓ | ✓ | ✓ |
| About | ✓ | ✓ | ✓ |

### Additional frames
- `Film/Lightbox` — lightbox overlay state for project stills
- `Home/Menu` — mobile/tablet menu overlay state
- `Under Construction` — desktop placeholder page
- `Components` — shared component library
- `Text styles` — typography reference, including font size and styling
