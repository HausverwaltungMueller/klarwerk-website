# MARE & OLIVE

A premium, fictional Mediterranean restaurant website built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

This is a self-contained demo project living alongside the main Klarwerk site in this repository. It does not share dependencies or build output with it.

## Stack

- React 19 + TypeScript, built with Vite
- Tailwind CSS for styling (custom Mediterranean palette: limestone, olive, terracotta, sand, sea)
- Framer Motion for page transitions, scroll reveals and micro-interactions
- React Router for client-side routing
- lucide-react for iconography

## Visual approach

There is no photography in this project and no dependency on any third-party image CDN. Every "photograph" is an art-directed, generated panel (`src/components/Visual.tsx`): a tonal gradient in the site's Mediterranean palette, a subtle grain texture, and a single-line editorial motif (octopus, olive branch, wave, flame, citrus, etc. — see `src/components/motifs.tsx`). This keeps the site fast, avoids any risk of broken images, and reads as a deliberate design choice rather than a stock-photo template.

## Pages

`/` Home · `/menu` Menu · `/restaurant` Restaurant · `/story` Our Story · `/contact` Contact · `/reservation` Reservation (working mock form, no backend) · `/imprint`, `/privacy` · a 404 fallback for any other path.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build
npm run lint       # oxlint
```

## QA

`scripts/inspect.mjs` is a small Playwright script used during development to smoke-test every route (HTTP status, single `<h1>`, console errors), exercise the mobile menu, and submit the reservation form end to end. Run it against a running `npm run preview` server:

```bash
npm run preview &
node scripts/inspect.mjs
```

Screenshots are written to `screenshots/` (git-ignored).

## Content

All restaurant details — name, address, menu, prices, staff, story — are fictional and created for demonstration purposes only.
