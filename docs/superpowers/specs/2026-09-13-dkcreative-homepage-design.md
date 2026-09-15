# DK Creative Exhibition Homepage Design

## Objective

Create a single static HTML homepage that preserves the supplied 1366 × 1464 SVG artboard exactly while providing semantic, real navigation controls for the four creative spaces, contact links, shortcuts, and back-to-top.

## Design decision

The reference SVG contains no text elements (`text_count: 0`), 1,125 paths, and 51 embedded images. Rebuilding every flattened path and embedded image as separate HTML/CSS components would introduce unnecessary rendering drift. The implementation therefore uses the unchanged supplied SVG as the visual artboard and overlays semantic HTML anchors at the visible navigation/contact regions. This keeps the screenshot pixel-faithful while making important controls real and keyboard-focusable.

## Layout

- Fixed white artboard: 1366 × 1464.
- Centered exhibition title and intro in the top region.
- Four space links in a single row.
- Profile, work history, software, and client logo strip in the middle.
- Contact/shortcut footer in the lower region.
- Horizontal overflow below the target width is intentional; no unobserved mobile redesign.

## Interaction

- Four top space anchors open the four supplied category SVG files.
- Phone and email areas are real `tel:` and `mailto:` links.
- Four footer shortcuts point to the corresponding category assets.
- Back-to-top is a real anchor to `#top`.
- Hover is visually neutral; focus-visible shows a black outline for keyboard users.

## Verification

Render source SVG and HTML at 1366 × 1464, DPR 1, viewport-only, frozen motion. Compare with `compare.py`; then run the strict interactivity audit. No commit or push is part of this task; deployment is handled separately when explicitly requested.
