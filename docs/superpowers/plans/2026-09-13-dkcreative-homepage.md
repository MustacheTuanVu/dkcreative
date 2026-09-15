# DK Creative Exhibition — HTML Reconstruction Plan

**Goal:** Rebuild the supplied 1366 × 1464 exhibition design as a semantic plain-HTML/Tailwind page, preserving the measured geometry while keeping the page reference SVG out of the HTML output.

**Architecture:** A fixed HTML/CSS canvas contains semantic header, navigation, profile, client, and footer regions. Independent extracted PNG assets provide the photo, logos, artwork, and icons. Local Baloo 2 ExtraBold covers display lettering; Arial covers body copy. Real anchors provide category, contact, shortcut, and back-to-top behavior.

**Tech stack:** HTML5, Tailwind CDN, local CSS, local font asset, native anchors, Chromium screenshot/diff tooling.

**Spec:** `design-spec.md`

## Constraints

- Use plain HTML and Tailwind; no framework or build scaffolding.
- Use the supplied page SVG as a measurement/reference source only; do not import or embed it in `index.html`.
- Match the locked target viewport: 1366 × 1464 CSS pixels, DPR 1, viewport-only capture.
- Preserve the supplied visible copy and independent artwork; do not invent a mobile redesign.
- Do not commit, push, or deploy without an explicit request.

## Task 1: Semantic page and independent assets

**Files:**

- `index.html`
- `assets/*.png`
- `assets/fonts/display/baloo-2-800.ttf`

- [x] Extract visible image payloads from the supplied reference and restore mask-derived alpha where required.
- [x] Create a fixed 1366 × 1464 semantic canvas with header, space nav, profile, education, experience, software, client strip, and footer.
- [x] Add real category-file links, phone/mail links, in-page shortcut links, and a back-to-top link.
- [x] Add hover/focus rules without changing the base visual state.
- [x] Pass the implementation gate with no page-level reference SVG usage.

## Task 2: Visual and interaction verification

**Evidence:**

- `artifacts/target.png`
- `artifacts/render-v24-final-tuned.png`
- `artifacts/diff-v24-final-tuned/metrics.json`
- `acceptance.md`

- [x] Capture the reference at 1366 × 1464, viewport-only, DPR 1.
- [x] Capture the HTML page through the local HTTP server at the same viewport.
- [x] Compare target and reconstructed render; final local changed ratio is `0.03398299050316428`, mean absolute error is `3.9944345102369008`, and p95 error is `0.0`.
- [x] Run the strict interaction audit: 13 controls, no pointer failures, hover/focus rules present, no dead controls, no warnings.
- [x] Verify the browser back-to-top path from `scrollY=500` to `scrollY=0`.
- [x] Verify all 27 image nodes load with non-zero natural dimensions.

## Delivery state

- Local HTML/assets/docs are complete and verified.
- `/root/dkcreative-site` is synced with v24 and served by `dkcreative-site.service` on port 8901.
- `https://dk.coderkiemcom.com/` serves v24; public screenshot matches the local v24 render pixel-for-pixel.
