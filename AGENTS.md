# Next.js Project Guide

This is a Next.js App Router portfolio built with TypeScript, React, and Tailwind CSS v4.

## Working rules

- Apply SOLID principles pragmatically: keep components and modules focused on one responsibility; extend stable code through composition and typed props; use small purpose-built prop interfaces; and keep data or configuration separate from presentation where practical. Avoid abstractions until they solve a real reuse or complexity problem.
- Keep route components server-rendered by default. Add `'use client'` only when a component needs browser APIs, event handlers, or React client hooks.
- Use `next/image` for static and remote images. Supply meaningful `alt` text, `sizes` for responsive `fill` images, and `priority` only for the above-the-fold LCP image.
- Use `next/font` or the existing local `@font-face` declaration for fonts; do not add render-blocking external font stylesheets.
- Define page-level SEO data through the Metadata API in `app/layout.tsx` or the applicable route segment.
- Keep components focused and colocated under `app/components/`. Prefer typed props and avoid `any`.
- Preserve the existing responsive Tailwind design. Prefer semantic HTML and keyboard-accessible native elements.
- Never expose secrets in client components or commit environment values. Use server-only environment access when needed.

## Commands

```bash
yarn lint
yarn build
yarn dev
```

Run `yarn lint` after source changes. Run `yarn build` for changes that affect routes, rendering, metadata, or Next.js configuration.

## Next.js guidance

For implementation work, read `skills/next-best-practices/SKILL.md`. It is intentionally concise and routes to the version-matched Next.js documentation when it is available.

## Change boundaries

- Do not modify generated output such as `.next/`.
- Do not add dependencies unless they materially support the requested feature.
- Update this file and the relevant skill when project conventions change.
