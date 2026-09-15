# Photoshoot direction — design spec

## 1. Source and viewport

```yaml
page: photoshoot-direction
source:
  svg: photoshoot direction.svg
  rasterBaseline: artifacts/target-photoshoot-cdp.png
target_pixels: {width: 1366, height: 2777}
viewport: {cssWidth: 1366, cssHeight: 2777, deviceScaleFactor: 1, capture: full-page, animations: frozen}
```

## 2. Verified structure

- Header band: y=1–471, `#f9f9f9`.
- Collection VII content: y≈471–1245, `#f9f9f9`.
- Sony media gallery band: y≈1245–2554, `#f9f9f9`.
- Footer: y≈2554–2776, black.
- Content has a concept block, one full-width hero slot, and five square campaign slots.

## 3. Exact visible copy

- `collection VII` / `Sony Vietnam`
- Creative Direction: `The creative direction centers on portraying experts using the earbuds WF-1000XM6 as an essential part of their modern lifestyle, seamlessly integrated into both professional environments and everyday moments`
- Role: `Creative Lead`
- Project type: `Photoshoot, KOL, ...`
- `Creative Concept`
- `The concept was brought to life through three everyday listening scenarios, each highlighting a key product feature:`
- `Airport` / `Demonstrating best in noise cancellation.`
- `Workspace` / `Showcasing premium sound quality`
- `On the go` / `Highlighting crystal-clear call quality`

## 4. Asset map

- Concept decoration: raw-13, raw-14, raw-21 (standalone masked icon sources; optional if the mask is not usable).
- Main hero: raw-22.
- Five campaign tiles: raw-23, raw-24, raw-27, raw-26, raw-25.

## 5. Acceptance

```yaml
required_states: [base, focus, back-to-top]
known_limitations: [the reference includes masked vector icon decoration; content photographs are preserved as independent extracted media]
```
