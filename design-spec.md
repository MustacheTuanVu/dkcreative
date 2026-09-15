# DK Creative Exhibition — Design Spec

## 1. Source và viewport

```yaml
page: dkcreative-home
source:
  png: null
  svg: creative works exhibition - by Peter.svg
target_pixels: { width: 1366, height: 1464 }
viewport:
  cssWidth: 1366
  cssHeight: 1464
  deviceScaleFactor: 1
  capture: viewport-only
  browser: Chromium 1228/1234 headless
  fonts: local Baloo 2 ExtraBold for display copy; system Arial for body copy
  animations: frozen
```

SVG là visual reference dùng để đo geometry, typography và asset bounds. `index.html` dựng lại các vùng bằng HTML semantic, Tailwind CDN và CSS deterministic; page không import page SVG. Các ảnh độc lập được tách ra khỏi reference, áp mask alpha khi cần, còn typography được render bằng local display font/system body font.

## 2. Confidence ledger

| Fact | Value | Status | Evidence |
|---|---|---|---|
| Artboard size | 1366 × 1464 | VERIFIED | `inspect-svg.py` root attrs |
| ViewBox | `0 0 1024.5 1098` | VERIFIED | `inspect-svg.py` |
| Background | white | VERIFIED | reference render |
| Text rendering | converted to SVG paths; `text_count: 0` | VERIFIED | `inspect-svg.py` |
| Embedded image count | 51 | VERIFIED | `inspect-svg.py` |
| Desktop layout | fixed artboard with horizontal overflow below 1366px | VERIFIED | source render at 1280px |
| Target capture scale | CSS 1366 × 1464 at DPR 1 | ASSUMED/SUPPORTED | source width/height and full-artboard Chrome capture |
| Interaction destinations | category SVG files supplied in same folder | SUPPORTED | repository asset inventory |

## 3. Tokens

```yaml
colors:
  canvas: "#ffffff"
  ink: "#000000"
  muted: "#6c3c29"
  line: "transparent"
type:
  display: { family: "Baloo 2", weight: 800, tracking: "per-line tuned", lineHeight: "56px" }
  body: { family: "Arial", weight: 400, tracking: "0", lineHeight: "18px" }
spacing: [8, 16, 24, 40, 80]
radii: { image: "8px", hotspot: "4px" }
shadows: { card: "none" }
```

## 4. Layout relationships

- **Canvas/background:** one white 1366 × 1464 artboard.
- **Main container:** fixed artboard; no scaling at the locked target viewport. At narrower viewports the page preserves the source overflow rather than inventing a new mobile composition.
- **Header:** centered in the upper region with two-line display title and two-line intro.
- **Space navigation:** four horizontal visual slots across the upper-middle region; invisible semantic anchors match each slot.
- **Profile section:** photo left, author/education center, experience/software right.
- **Client strip:** full-width horizontal logo row beneath the profile.
- **Footer:** contact block left, shortcut navigation and back-to-top control right.
- **Breakpoint behavior:** preserve fixed artboard for reference fidelity; allow horizontal scrolling on smaller screens.

## 5. Component inventory

| Component | Repeats | Visible states | Semantic element | Data/content |
|---|---:|---|---|---|
| Semantic canvas | 1 | base | `main` | fixed 1366 × 1464 HTML/CSS artboard |
| Space hotspot | 4 | base/hover/focus | `a` | four supplied category SVG destinations |
| Contact hotspot | 2 | base/hover/focus | `a` | telephone and email |
| Shortcut hotspot | 4 | base/hover/focus | `a` | four in-page category links |
| Back-to-top | 1 | base/hover/focus | `a` | `#top` |

## 6. Exact copy visible in the reference

- `creative works exhibition`
- `Welcome to the exhibition of Khoa's graphic works and creative vision.`
- `* Established since 2021 , last update in 2026 *`
- `space I` / `2D graphic design` / `now on view`
- `space II` / `video & motion graphic` / `now on view`
- `space III` / `photoshoot direction` / `now on view`
- `space IV` / `logo & brand identity` / `now on view`
- `about the author`
- `Nguyễn Đăng Khoa (Peter) is a Creative professional evolving into a dedicated Graphic & Motion Designer. Backed by a foundation in content marketing, he brings a strategic perspective to visual design, ensuring that every creative output serves a clear purpose.`
- `His work combines creativity, analytical thinking, and problem-solving to create meaningful visual experiences that connect ideas, audiences, and business goals.`
- `(+84) 708 282 984`
- `ndkhoa.contact@gmail.com`
- `education`
- `Sep 2016` / `May 2020` / `Saigon University` / `Bachelor in International Studies` / `Marketing Concentration`
- `experience`
- `Jan 2021` / `Jul 2022` / `FPT Software` / `Content Marketing Executive`
- `Jan 2025` / `Feb 2026` / `Lagtuz Agency` / `Graphic & Motion Design`
- `Jan 2023` / `present` / `Freelance` / `Graphic & Motion Design`
- `software`
- `KNAUF`, `SONY`, `VitaDairy`, `FPT Software`, `UOB`, `RỪNG THÔNG KAO`, `BAEMIN`, `VNGGAMES`
- `grab a call. let's share!`
- `shortcut`
- `back to top`

## 7. Asset map

| Slot | Source asset | Method | Quality check | Status |
|---|---|---|---|---|
| Page layout | measured bounds from `creative works exhibition - by Peter.svg` | HTML/CSS absolute geometry | render at 1366 × 1464 | VERIFIED |
| Category destinations | `graphic design.svg`, `video & motion.svg`, `photoshoot direction.svg`, `logo & brand identity.svg` | semantic anchor `href` | files exist in project | VERIFIED |
| Photo/logos/software/icons | independent PNG assets under `assets/` | extracted image payloads with mask alpha restored | browser `naturalWidth`/`naturalHeight` audit | VERIFIED |
| Portrait | `assets/peter-photo-cropped.png` | independent clipped-photo crop from the supplied portrait | target crop is 353 × 345 and pixel-compared | VERIFIED |

## 8. States và interaction

| Control | Base state | Implied state | Trigger | Verification |
|---|---|---|---|---|
| Four space anchors | transparent overlay over reference | hover/focus affordance | pointer/keyboard | `shot.mjs --verify`; click destination audit |
| Phone/email anchors | transparent overlay | hover/focus affordance | pointer/keyboard | DOM audit |
| Back-to-top anchor | transparent overlay | focus affordance | click | Playwright/Chrome click then `scrollY === 0` |

## 9. Acceptance

```yaml
max_changed_ratio: 0.055
max_mean_abs_error: 5.5
ignored_regions: []
required_states:
  - static desktop artboard
  - semantic anchors present and keyboard-focusable
known_limitations:
  - category anchors open the supplied SVG references because no separate category page requirements were provided
  - below the locked artboard width, horizontal scrolling is intentional to preserve the reference composition
  - the source display lettering is outlined and has per-glyph geometry; the HTML uses local Baloo 2 with tuned line tracking, so pixel equality with the outlined source is not claimed
```
