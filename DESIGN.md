# DK Creative category pages — shared design system

## Objective
Reconstruct the four supplied category artboards as semantic HTML/CSS pages. The SVG files are measurement/evidence only; they are never loaded by page output.

## Shared viewport

```yaml
cssWidth: 1366
categoryCapture: full-page
DPR: 1
browser: Chromium headless
fontDisplay: local Baloo 2 ExtraBold (`assets/fonts/display/baloo-2-800.ttf`)
fontBody: Arial/Helvetica fallback
animations: frozen for capture
```

## Shared tokens

```yaml
colors:
  header: "#f9f9f9"
  canvas: "#ffffff"
  ink: "#000000"
  muted: "#6c3c29"
  footer: "#000000"
  footerInk: "#ffffff"
type:
  display: { family: "Baloo 2", weight: 800, size: 56px, lineHeight: 56px }
  body: { family: "Arial", weight: 400, size: 14px, lineHeight: 18px }
  sectionHeading: { family: "Times New Roman", weight: 700, size: 30px, lineHeight: 34px }
  conceptHeading: { family: "Arial", weight: 700, size: 14px, lineHeight: 18px }
spacing: [18, 21, 43, 56, 72, 126]
radius: 8px
```

## Shared relationships

- The first 471px is a pale header band with the curved two-line title, intro, and four real navigation anchors.
- Each category is a fixed 1366px artboard. Narrow screens preserve the source horizontal overflow instead of inventing a new mobile composition.
- Collection sections are semantic `<section>` elements with a label/title, three-column metadata row, and independent media assets positioned inside the real artboard relationship.
- The final 222px is a black semantic footer with contact links and a real back-to-top anchor.
- Image slots use the original embedded media decoded into `assets/reference-extracted/<page>/raw-*.{jpg,png}`. These are standalone slot assets, not the page SVG.
- All visible copy is kept verbatim where readable from the reference; unreadable/ambiguous source text is omitted rather than invented.

## Interaction

- Four header space cards navigate to the four HTML pages.
- Footer phone/email are real links.
- Back-to-top is a real anchor to `#top`.
- Hover keeps the frozen screenshot surface unchanged; focus has a visible outline.
