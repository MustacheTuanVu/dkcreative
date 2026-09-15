# Graphic design — design spec

## 1. Source and viewport

```yaml
page: graphic-design
source:
  svg: graphic design.svg
  rasterBaseline: artifacts/target-graphic-cdp.png
target_pixels: {width: 1366, height: 5077}
viewport: {cssWidth: 1366, cssHeight: 5077, deviceScaleFactor: 1, capture: full-page, animations: frozen}
```

## 2. Verified structure

- Header band: y=1–471, `#f9f9f9`.
- Collection I band: y≈472–1384, `#f9f9f9`.
- Collection II band: y≈1384–2703, white.
- Collection III band: y≈2703–4854, white.
- Footer band: y≈4854–5076, black.
- Main media slots are measured from SVG image boxes: 14 slots across three collections.

## 3. Exact visible copy

- `collection I` / `Colos Gain, Vitadairy`
- Description: `Childcare is a shared responsibility. The campaign celebrates fathers and grandparents while positioning Colos Gain as the smart nutritional choice that empowers every caregiver to support a child’s healthy development.`
- Role: `Content Planning`; `Graphic Design`
- Project type: `Social Design`; `Thematic Campaign`
- `collection II` / `Knauf Vietnam`
- Description: `As a new construction materials brand in Vietnam, Knauf is positioned as a reliable choice for buildings and homes. Featuring the key message “Thêm Knauf, Thêm An Tâm” the campaign highlights how Knauf delivers both practical and emotional value to contractors.`
- Role: `Graphic Design`; `Motion Design`
- Project type: `Social Content`; `Thematic Campaign`
- `collection III` / `YTRADE & Others`
- Description: `Developed packaging and POSM materials, including product boxes, labels, and custom illustrations, for international brands such as EZ Furniture, Kutenest, and Banh Mi Ba Cối to strengthen brand identity and enhance the customer experience.`
- Role: `Graphic Design`
- Project type: `POSM, Printing`

## 4. Asset map

- Collection I: raw-10, raw-11, raw-12, raw-13, raw-14, raw-15.
- Collection II: raw-16, raw-17, raw-18, raw-19, raw-20.
- Collection III: raw-23, raw-21, raw-22; source order is preserved for the overlap at the lower gallery transition.

## 5. Acceptance

```yaml
required_states: [base, focus, back-to-top]
known_limitations: [SVG text is flattened to paths; display glyph rasterization can differ from source]
```
