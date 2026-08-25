# MARE & OLIVE — Phase 2 audit

Short internal note written before the Phase 2 pass (creative evolution of the existing site). Findings below drove the implementation directly; no approval checkpoint between audit and build, per the brief.

## What's already strong — keep

- **Component architecture.** `Visual.tsx`/`motifs.tsx`, `Reveal.tsx`, `Button.tsx`, `Navbar.tsx`/`Footer.tsx`, `ReservationForm.tsx`, routing in `App.tsx`. All functional, accessible, responsive. No reason to rebuild any of it.
- **The generated-visual system.** Tonal gradients + grain + single-line motifs, standing in for photography. This is the site's most distinctive asset, not a placeholder to be replaced — it already satisfies the "coherent fictional campaign, no stock photography" requirement better than real photos could in this environment (see "Photography" decision below).
- **Reservation flow, forms, a11y basics, WCAG contrast fixes, reduced-motion support** — all solid, unchanged.
- **The footer's oversized "See you by the sea." close** and the hero's understated coastline line-art — genuinely memorable, both kept and used as a model for other moments.

## What feels generic — improve

- **Homepage is shaped like a template**, even though tastefully executed: hero → 2-col philosophy → 4-card dish grid → break → 2-col teaser → menu list → CTA. This is the "very good AI-generated restaurant site" shape the brief calls out by name.
- **Every section uses the same motion**: `Reveal` fade+slide-up, ~0.8s, same easing, on almost every element. Motion coverage is close to 100%, not the 70/30 stillness the brief asks for — nothing is emphasized because everything moves the same way.
- **Section-to-section cuts are hard rectangles** (limestone → dark limestone → charcoal → limestone → olive-dark → olive). No visual continuity between beats.
- **The 4-card signature-dish grid reads as ecommerce**, not editorial — the brief specifically calls this out as the pattern to avoid on the homepage.
- **Founder bio doesn't yet match the new canon** (Naples/Adriatic/Milan vs. the brief's Naples/Split coast/Barcelona/Hamburg).

## Decisions

- **No Three.js, no GSAP.** The app already uses Framer Motion for scroll-linked transforms, parallax and choreography. Layering two more animation libraries on top would duplicate that capability without a compelling technical reason (violates the brief's own rule: "does this create something CSS/what-you-have cannot create as convincingly? If no, don't add it"). Framer Motion's `useScroll`/`useTransform` covers the scroll-choreography, parallax and slow-pointer-tilt asks; CSS gradients cover the color-mood transitions. Where the brief asks for a "subtle Three.js object" or "2.5D table scene," these are built instead as layered Framer Motion depth/parallax and a lightweight CSS pointer-tilt — same perceived effect, no new dependency, no WebGL lifecycle/cleanup risk.
- **No new photography.** No image-generation tool is available in this session, and the brief explicitly forbids filling the gap with random stock photography. So the existing generated-motif system is evolved (more materiality-specific gradients: oil sheen, ceramic matte, ember glow) rather than faked with real images.
- **Scope:** implement the signature moments that fit the existing stack and existing content cleanly — the Opening, the Sea→Fire→Olive→Table→Night arc on the homepage as one continuous journey, the editorial food section, and a timeline device on the Story page. Skip anything that would need real photography assets or a rendering engine the project doesn't have, per rule 35 ("choose the strongest ideas ... the goal is maximum perceived quality, not maximum complexity").

## Plan

1. Update `content.ts`: founder bio to the new canon, add pillar/journey copy.
2. New small components: a typography-as-motion pillar word, a section color-bridge (visual continuity instead of hard cuts), a slow ambient "living photography" wrapper, a pointer-tilt wrapper.
3. Rebuild `Home.tsx` as one continuous journey (Opening → Sea → Fire → Olive → Table → Food → Night → Final CTA), cutting repetitive motion down to the 70/30 ratio.
4. Refine `Hero.tsx` into a quieter opening beat.
5. Add the timeline device to `Story.tsx`.
6. Build, lint, regression-test with the existing Playwright smoke script, screenshot-review, and do a second refinement pass before calling this done.

## Second refinement pass

Screenshot review after the first implementation (desktop + mobile, all nine routes, full-page) found one real issue: the `PillarBeat` background `Visual` places its brightest point near the top-left of the panel, so the Food → Night and, less visibly, other beat transitions occasionally showed a faint bright patch right where the `SectionBridge` had just promised a dark color — undercutting the continuity the bridges are there to create. Fixed by adding a top/bottom edge-darkening gradient inside `PillarBeat` so each beat always resolves to the dark value at its edges regardless of where the underlying gradient's bright spot falls. Re-verified with a fresh screenshot: the seam is gone on all three PillarBeat instances (Sea, Fire, Night).

Everything else held up on review: the five-pillar arc reads as one continuous journey rather than stacked template sections, the Table and Olive moments feel structurally distinct from the Sea/Fire/Night beats as intended, the Food section's editorial layout replaced the old four-card grid without losing any menu information, and the Story page's new timeline reads cleanly at both breakpoints. Full regression (`scripts/inspect.mjs`) stayed green: all 9 routes 200 with a single `<h1>`, reservation form submit and validation both work, mobile menu opens/closes, desktop nav shows all 5 links.
