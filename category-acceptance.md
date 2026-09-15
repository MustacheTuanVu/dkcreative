# Category pages acceptance record

## Scope

Implemented all four SVG references as semantic HTML/CSS pages under `/root/dự án coding/dkcreative/`. Reference SVGs remain measurement/evidence files; no category page uses a full-page SVG as an image or background.

## Entry points

- `graphic-design.html` ← `graphic design.svg`
- `video-motion.html` ← `video & motion.svg`
- `photoshoot-direction.html` ← `photoshoot direction.svg`
- `logo-brand-identity.html` ← `logo & brand identity.svg`

Homepage `index.html` now routes all four space cards to these HTML entries.

## Visual comparison

Chromium headless, viewport `1366px`, DPR `1`, full artboard, threshold `8`:

| Page | Artboard | Changed pixels | Changed ratio | Mean absolute error | p95 | Gate |
|---|---:|---:|---:|---:|---:|---|
| Graphic design | 1366 × 5077 | 258,729 / 6,935,182 | 3.7307% | 2.8075 | 5 | PASS |
| Video & motion | 1366 × 4282 | 300,503 / 5,849,212 | 5.1375% | 3.3321 | 9 | PASS |
| Photoshoot direction | 1366 × 2777 | 210,711 / 3,793,382 | 5.5547% | 6.5984 | 15 | PASS |
| Logo & brand identity | 1366 × 3193 | 202,451 / 4,361,638 | 4.6416% | 4.7937 | 7 | PASS |

These are implementation comparison metrics, not a claim of pixel-identical 100% output.

## Verification

- `check-implementation.py`: PASS for all four entries; no violations.
- `shot.mjs --verify --strict`: PASS for all four entries; `7` interactive controls, `0` dead, `0` warnings per page.
- Local browser routing: all four pages return HTTP 200, expected `scrollHeight`, all page images loaded, `document.fonts.status = loaded`.
- Asset parser: all local `src` references exist; no HTML page contains an SVG `src`/reference image.

## Deployment

Not deployed to `dk.coderkiemcom.com` in this change. Production remains the previously deployed homepage version until an explicit deploy request is given.
