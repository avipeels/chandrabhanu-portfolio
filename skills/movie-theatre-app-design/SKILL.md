---
name: movie-theatre-app-design
description: Reference the Final Portfolio Figma page when building or reviewing the Movie Ticket Booking App entry in this portfolio.
---

# Final Portfolio reference for the Movie Ticket Booking App

This is a portfolio-page reference. Do not use the source Movie Theatre App screen system (the dark magenta mobile UI) as the visual language for the portfolio site.

## Source of truth

- Figma file: `wdCcgjyCw5oqF2z2NHECF5` — *1. Movie Theatre App - 07.03*
- Page: `Final Portfolio` (`509:97`)
- The Movie Ticket Booking App appears as the middle card on `Home page option 5` (`509:158`), alongside Navigation App for Indian Cities, Tokyo Anti-Library, Sankalp School, Urban Simulation Board Game, and Drawings.
- The previously linked `521:39` node is a flattened image inside `Project 6` (the navigation-app case study). It is not the Movie Ticket Booking App source and should not drive this page's styling.

## Portfolio home composition

- Desktop canvas: 1728 px wide; the visible home artboard is 1728 × 1437 px.
- A full-width collage/hero image occupies the top ~378 px.
- Below it is a generous white page with a left-aligned identity block, right-aligned `Work` / `About` navigation, and a discipline line below the name.
- The work grid is three columns of 330 px cards. Card x positions are approximately 299, 699, and 1099 px; the second row begins around y 988 px. The gap is approximately 70 px horizontally and 72 px vertically.
- Each project card is an exported/composited visual (the Figma file stores these as vectors), with the year above the card and a solid dark-green title band at the bottom.
- The Movie Ticket Booking App card is the middle card in the first row, dated `2025` in the Final Portfolio screenshot. Keep its card placement and hierarchy consistent with the other projects.

## Confirmed visual system

- Background: white (`#FFFFFF`).
- Default text: black (`#000000`).
- Active identity and navigation accent: dark green (`#165C12`). This is the main portfolio accent; do not replace it with the movie app's magenta.
- Card title band: dark green matching the identity accent, with white uppercase title text.
- Imagery is editorial and image-led; preserve the artwork crop and let the green title block provide the stable label area.
- The design is intentionally airy and asymmetric: large margins, a broad hero image, and compact project cards surrounded by white space.

## Typography

The dominant family is Montserrat:

| Usage | Style | Source size |
| --- | --- | --- |
| Portfolio name | Montserrat Bold, green | 32 px |
| Work / About navigation | Montserrat Regular or SemiBold | 16 px |
| Discipline/subtitle line | Montserrat Regular | 16 px |
| Project year | Montserrat Regular | 16 px |
| Project/card title | Montserrat Bold, uppercase, white on green | 32 px |
| Case-study section heading | Montserrat Bold | 24 px |
| Case-study body | Montserrat Regular | 16 px |
| Image credit/caption | Montserrat Regular | 12 px, white when over imagery |

Poppins appears only in a few contact/footer variants, and Figma Hand appears in small annotation details. Use Montserrat for the portfolio implementation unless reproducing one of those exact variants.

All observed text uses automatic line height and zero letter-spacing. Keep the typography calm and editorial; avoid the condensed, high-density type scale from the mobile movie-app screens.

## Responsive implementation intent

- Preserve the visual hierarchy at smaller widths: hero/collage first, identity and nav next, then a single-column card stack or intentional two-column grid.
- Keep the green title band attached to each card and maintain readable white uppercase text.
- Use the current project data for the Movie Ticket Booking App, but replace any movie-app-specific magenta/dark screen styling in the portfolio shell with the Final Portfolio white/green system.
- Use responsive gutters and `next/image`; do not recreate the Figma's flattened vectors or rely on absolute desktop coordinates.

## Implementation checklist

1. Treat `Final Portfolio` (`509:97`) and `Home page option 5` (`509:158`) as the visual reference.
2. Use white, black, and `#165C12` for the portfolio shell and project-card labels.
3. Use Montserrat at the sizes above; do not import the mobile app's magenta/dark screen token set.
4. Keep the Movie Ticket Booking App as a project card/content item within this portfolio composition.
5. Revisit the Final Portfolio screenshot when matching image crop, card spacing, hero composition, or navigation placement.
