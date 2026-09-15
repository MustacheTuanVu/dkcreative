# Video & motion — design spec

## 1. Source and viewport

```yaml
page: video-motion
source:
  svg: video & motion.svg
  rasterBaseline: artifacts/target-video-cdp.png
target_pixels: {width: 1366, height: 4282}
viewport: {cssWidth: 1366, cssHeight: 4282, deviceScaleFactor: 1, capture: full-page, animations: frozen}
```

## 2. Verified structure

- Header band: y=1–471, `#f9f9f9`.
- Collection IV: y≈472–1762, white.
- Collection V: y≈1762–2622, white.
- Collection VI: y≈2622–4059, `#f9f9f9`.
- Footer: y≈4059–4281, black.
- Three collections contain 6 + 5 + 4 visible media slots.

## 3. Exact visible copy

- `collection IV` / `Motion Creatives`
- Description: `Accurated collection of motion graphic projects across different industries, including collaborations with notable brands such as FPT Software, BEAMIN, and Poshaco Group.`
- Role: `Motion Design`; `Content Creation`; `Graphic Design`
- Project type: `Ad Creatives`
- `collection V` / `Ghost Story, VNG Games`
- Description: `A promotional campaign for a major game update featuring the collaboration between A Record of a Mortal's Journey to Immortality and Ghost Story. The highlight was Login To Love, a short film created to engage the community.`
- Role: `Content Planning`; `Video Editing`
- Project type: `Seeding/ Booking`; `Content`
- `collection VI` / `Mo Stay, Rừng Thông Mo`
- Creative Idea: `“Forest Retreat” highlights the brand’s unique positioning in the heart of a pine forest, differentiating it from typical retreat brands. The content plan explores nature, people, facilities, and lifestyle moments that nurture physical and mental well-being.`
- Role: `Create Content`; `Filming (by phone)`; `Editing`
- Project type: `Social Content`; `Thematic Campaign`

## 4. Asset map

- Collection IV: raw-10 through raw-15.
- Collection V: raw-16 through raw-20.
- Collection VI: raw-21 through raw-24.

## 5. Acceptance

```yaml
required_states: [base, focus, back-to-top]
known_limitations: [SVG text is flattened to paths; image masks are represented by independent media slots]
```
