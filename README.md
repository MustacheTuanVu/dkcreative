# DK Creative

Static semantic HTML/CSS reconstruction of the DK Creative exhibition and its four category pages.

## Pages

- `index.html` — exhibition homepage
- `graphic-design.html` — graphic design collection
- `video-motion.html` — video and motion collection
- `photoshoot-direction.html` — photoshoot direction collection
- `logo-brand-identity.html` — logo and brand identity collection

The reference SVG files are retained as design evidence. Runtime pages use semantic HTML, shared CSS, extracted assets, and dedicated composite crops rather than embedding the full reference SVG as an image or background.

## Local preview

```bash
python3 -m http.server 8911
```

Then open <http://127.0.0.1:8911/>.

## Verification

The implementation was checked with the `fucking-design-cheap` implementation checker and strict browser audit. Generated screenshots and pixel-diff outputs are local-only and ignored under `artifacts/`.
