# DK Creative

Next.js App Router conversion of the DK Creative exhibition: one homepage plus four measured category artboards.

The five canonical App Router pages are:

- `/` — exhibition homepage
- `/graphic-design` — graphic design collection
- `/video-motion` — video and motion collection
- `/photoshoot-direction` — photoshoot direction collection
- `/logo-brand-identity` — logo and brand identity collection

Reference SVG files remain design evidence. Runtime pages use semantic React/TypeScript components, shared CSS, local fonts, extracted raster assets, and dedicated composite crops rather than embedding a full reference SVG as an image or background.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000/>. For a production-like server:

```bash
npm run typecheck
npm run build
npm run start -- -p 8931
```

The existing `assets/` tree is exposed at `/assets/**` through the tracked `public/assets` symlink, so the repository does not duplicate the asset tree.

## Verification

The migration was verified with:

- `npm run typecheck`
- `npm run build`
- HTTP probes for all five canonical routes plus representative font/image assets
- strict browser interaction audit for all five pages
- Chromium desktop/mobile DOM checks: all images and fonts loaded, 390px has no horizontal overflow, and category active navigation is correct
- rendered pixel comparisons against the existing artboard baselines

Generated `.next/` output and screenshots/diffs under `artifacts/` are local-only and ignored by Git.

## Production

- Public: <https://dk.coderkiemcom.com/>
- Service: `dkcreative-site.service`
- Origin: `127.0.0.1:8901`
- Tunnel: `cloudflared-hermes-docs.service`
- The five canonical routes are live; `.html` paths return `404`.
- Deployment backup: `/root/dkcreative-site.backup-20260915-165642`
