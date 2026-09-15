# DK Creative acceptance record

## Scope

Converted the five-page DK Creative exhibition to a Next.js 16 App Router application with typed React components while preserving the existing 1366px artboards, local assets/fonts, navigation states, and proportional mobile scaling. Full-page reference SVGs remain measurement/evidence files; no runtime page uses a reference SVG as an image/background or copies its XML/path payload.

## Runtime entry points

- `/`
- `/graphic-design`
- `/video-motion`
- `/photoshoot-direction`
- `/logo-brand-identity`

## Build verification

- `npm run typecheck`: PASS
- `npm run build`: PASS; all five routes prerendered successfully
- `next start` on `127.0.0.1:8931`: all five canonical route probes returned HTTP 200
- Representative `/assets/raster-crops/space_i.png` and `/assets/fonts/display/baloo-2-800.ttf`: HTTP 200

## Visual comparison

Chromium headless, viewport `1366px`, DPR `1`, full artboard, threshold `8`; Next render compared to the existing reference target:

| Page | Artboard | Changed ratio | Mean absolute error | p95 | Gate |
|---|---:|---:|---:|---:|---|
| Graphic design | 1366 × 5077 | 3.7183% | 2.7967 | 5 | PASS |
| Video & motion | 1366 × 4282 | 5.1573% | 3.3759 | 9 | PASS |
| Photoshoot direction | 1366 × 2777 | 5.6174% | 6.7275 | 16 | PASS |
| Logo & brand identity | 1366 × 3193 | 4.6816% | 4.8804 | 7 | PASS |

Homepage migration comparison against the verified static responsive render:

- Desktop `1366 × 1464`: changed ratio `0.00845%`
- Mobile `390 × 900`: changed ratio `0.00627%`

These are implementation comparison metrics, not a claim of pixel-identical 100% output.

## Browser verification

- Strict interaction audit: all five pages PASS; homepage `13` interactive controls, each category page `7`; `0` dead controls and `0` warnings.
- Homepage images: `27/27`; Graphic: `19/19`; Video: `19/19`; Photoshoot: `22/22`; Logo: `18/18`.
- Fonts: `document.fonts.status = loaded`.
- At 390px: responsive scale `0.285505...`, stage width `390px`, document width `390px`, no horizontal overflow on all five routes.
- Category active links expose `aria-current="page"` and correct clean route hrefs.

## Deployment

Deployed and verified on production:

- `dkcreative-site.service` runs `next start` from `/root/dkcreative-site` on `127.0.0.1:8901`.
- `cloudflared-hermes-docs.service` remains active and continues to route the public hostname.
- Public canonical routes `/`, `/graphic-design`, `/video-motion`, `/photoshoot-direction`, and `/logo-brand-identity` return HTTP `200` and Next-rendered HTML.
- Public `.html` paths return HTTP `404`.
- Public strict audit passes for all five canonical routes.
- Production backup: `/root/dkcreative-site.backup-20260915-165642`.
