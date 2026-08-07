---
name: next-best-practices
description: Apply Vercel-aligned Next.js App Router practices when adding or reviewing routes, React components, data fetching, images, fonts, metadata, caching, or performance.
---

# Next.js Best Practices

Use this skill for any Next.js implementation or review in this repository.

This follows Vercel's current guidance: the former standalone `next-best-practices` skill was retired in favor of version-matched Next.js docs and generated agent instructions. Keep this file as a short, project-local entry point rather than duplicating framework documentation that can become stale.

## Workflow

1. Inspect the route and determine whether it can remain a Server Component. Use a Client Component only for interactivity or browser-only APIs.
2. Make the smallest focused change. Keep page composition in `app/` and reusable UI in `app/components/`.
3. Use framework primitives: `next/image`, `next/font`, `next/link`, and the Metadata API when applicable.
4. Check responsive behavior, semantic structure, keyboard access, and image/font loading.

## Guardrails

- Do not make the whole page a Client Component to support one interactive child.
- Do not fetch data sequentially when requests can safely run in parallel.
- Do not use `<img>` for content images or CSS background images when `next/image` is suitable.
- Do not mark every image `priority`; reserve it for the likely LCP image.
- Give decorative images empty `alt` text and informative images concise, specific alternative text.
- Use `next/link` for internal navigation once the destination routes exist.
- Keep secrets and server-only code out of client component dependency trees.
- Avoid manual document `<head>` manipulation; use exported metadata.

## Version-matched reference

When this project is upgraded to Next.js 16.3 or later, run `yarn dev` once to let Next.js generate its framework-specific `AGENTS.md` and `CLAUDE.md` guidance. Until then, use the framework docs bundled with the installed Next.js version (when available) and the repository conventions in `/AGENTS.md`.

Vercel source: https://github.com/vercel-labs/next-skills
