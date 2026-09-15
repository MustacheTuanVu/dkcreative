# DK Creative Exhibition — HTML Reconstruction Acceptance

## Scope

`index.html` là bản dựng lại bằng HTML semantic, Tailwind CDN và CSS deterministic theo artboard reference 1366 × 1464. Page reference SVG chỉ được dùng để đo geometry và kiểm tra visual; không được import hoặc nhúng vào HTML output.

## VERIFIED

- HTML entry: `index.html`.
- Structure includes semantic `main`, `header`, `nav`, `section`, and `footer` regions.
- `check-implementation.py --entry index.html --reference "creative works exhibition - by Peter.svg"` returned `status: pass` with `violations: []`.
- Final local render: `artifacts/render-v24-final-tuned.png`, dimensions `1366 × 1464`, viewport-only, DPR 1.
- Final local pixel comparison: `artifacts/diff-v24-final-tuned/metrics.json`.
- Final local metrics: `changed_pixels=67960`, `changed_ratio=0.03398299050316428`, `mean_abs_error=3.9944345102369008`, `p95_abs_error=0.0`, `max_abs_error=255`, `gate_failed=false`.
- Final metrics are within reconstructed-HTML acceptance limits: changed ratio ≤ `0.055`, mean absolute error ≤ `5.5`.
- Independent portrait crop is `assets/peter-photo-cropped.png`, `353 × 345`; it reproduces the clipped photo region without using a page-level SVG image.
- Extracted client logos, space artwork, software artwork, shortcut artwork, and back-to-top artwork are referenced as independent files under `assets/`; the new fixed-viewport raster crops live under `assets/raster-crops/` and do not replace the original assets.
- Browser asset audit loaded 27 image nodes with non-zero natural dimensions.
- Strict interaction audit returned `interactiveCount=13`, `noPointer=0`, `hoverRules=1`, `focusRules=1`, `dead=[]`, and `warnings=[]`.
- Browser back-to-top test moved `scrollY` from `500` to `0`.
- Phone links use `tel:+847****2984`; email links use `mailto:ndkhoa.contact@gmail.com`.
- Four top space cards resolve to the supplied category SVG files; footer shortcuts resolve to the corresponding in-page space IDs.

## SUPPORTED

- Tailwind CDN is included for the original plain-HTML/Tailwind requirement. The local style block owns the fixed canvas and reference geometry so the base render remains deterministic.
- Local Baloo 2 ExtraBold is used for display lettering; Arial/Liberation Sans is used for body copy. The source title is outlined with per-glyph geometry, so exact pixel equality for display text is not claimed.
- Horizontal overflow below the locked 1366px canvas width is intentional; no mobile redesign was invented.

## DEPLOYED (v24)

- Closed deploy docroot: `/root/dkcreative-site` contains 71 intended runtime files with no missing dependencies.
- `dkcreative-site.service` and `cloudflared-hermes-docs.service` are both `active` and `enabled`; origin listens on `127.0.0.1:8901`.
- `https://dk.coderkiemcom.com/` returns HTTP `200`, serves the new HTML marker set, and its HTML SHA-256 matches the deploy docroot exactly.
- Public `assets/peter-photo-cropped.png`, Baloo font, and all four category SVG URLs return HTTP `200`; new image/font hashes match the deploy docroot.
- Public browser verification reports canvas `1366 × 1464`, loaded Baloo font, 27 loaded images, all four category fetches at `200`, and back-to-top `500 → 0`.
- Public screenshot `artifacts/render-v24-public.png` is pixel-identical to the final local render: `different_pixels=0`, `max_abs_error=0`, `mean_abs_error=0.0`.

## UNKNOWN/BLOCKED

- The project directory is not a Git repository, so no Git diff/status review is available.

## Verification commands

```text
python3 /root/.hermes/skills/fucking-design-cheap/scripts/check-implementation.py --entry index.html --reference "creative works exhibition - by Peter.svg"
node /root/.hermes/skills/fucking-design-cheap/scripts/shot.mjs --url http://127.0.0.1:8911/index.html --out artifacts/render-v24-final-tuned.png --width 1366 --height 1464 --scale 1 --viewport-only --wait 1500
python3 /root/.hermes/skills/fucking-design-cheap/scripts/compare.py --target artifacts/target.png --render artifacts/render-v24-final-tuned.png --out-dir artifacts/diff-v24-final-tuned
node /root/.hermes/skills/fucking-design-cheap/scripts/shot.mjs --url http://127.0.0.1:8911/index.html --verify --strict
```
