# Logo & brand identity — design spec

## 1. Source and viewport

```yaml
page: logo-brand-identity
source:
  svg: logo & brand identity.svg
  rasterBaseline: artifacts/target-logo-cdp.png
target_pixels: {width: 1366, height: 3193}
viewport: {cssWidth: 1366, cssHeight: 3193, deviceScaleFactor: 1, capture: full-page, animations: frozen}
```

## 2. Verified structure

- Header band: y=1–471, `#f9f9f9`.
- Dark Lagtuz identity band: y≈471–1667; textured image slot is clipped inside this band.
- White imagery band: y≈1667–2970.
- Footer: y≈2970–3192, black.
- Dark band contains Logo, Palette, Icon System and three supporting image slots; white band contains the large imagery/brand-board slot.

## 3. Exact visible copy

- `collection VIII` / `Lagtuz Vietnam`
- Creative Direction: `Inspired by the story of life thriving in unimaginable environments like a cactus rising from the middle of a lake, reinforcing the core values of distinctiveness, resilience, and adaptability. The brand image is reimagined through the convergence of technological capabilities, human expertise, and a diverse portfolio of solutions.`
- Role: `Creative Lead`
- Project type: `Rebranding`; `Graphic Design`
- `Logo`; `Palette`; `Icon System`; `Imaginery`
- Palette names: `Lagoon Bloom`, `White Sand`, `Cactus Night`, `Desert Radiance`
- Palette values visible: `#26C0BD`, `#FFFFFF`, `#052D24`, `#FFEF38`; RGB rows `38/192/189`, `255/255/255`, `5/45/36`, `255/239/56`.
- Icon labels: `Digital Communications`, `Media Solutions`, `Budget Marketing`, `Production`.
- Imagery labels: `Horizontal Awakening`, `Resilient Lagoon`, `Desert Bloom`.
- Slogan: `Sustain to Evolve. Thrive in Every`

## 4. Asset map

- Dark textured background: raw-15.
- Horizontal strip: raw-18.
- Supporting imagery: raw-17, raw-19, raw-16.
- White brand-board imagery: raw-25.
- Small icon sources raw-20 through raw-24 are masked in the source and represented with CSS/icon primitives where necessary.

## 5. Acceptance

```yaml
required_states: [base, focus, back-to-top]
known_limitations: [logo/icon vector paths are flattened in the supplied source; small identity marks are approximated semantically while photographic boards remain source assets]
```
