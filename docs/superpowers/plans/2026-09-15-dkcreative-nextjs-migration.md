# DK Creative Next.js Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Convert the five-page static DK Creative exhibition into a Next.js App Router application without changing the measured desktop/mobile composition or navigation behavior.

**Architecture:** Use Next.js 16 App Router with TypeScript. Shared React components own the title/header, four-space navigation, responsive artboard shell, and footer; page-specific components/data retain each category's measured absolute geometry and media slots. Keep the existing `assets/` directory as the source of truth through a `public/assets` symlink, with clean canonical routes only.

**Tech Stack:** Next.js 16.3.5, React 19.3.0, TypeScript 7, CSS global styles, native anchors/Next Link, local fonts/assets.

**Spec:** `DESIGN.md`, `design-spec.md`, `design-spec-*.md`, `category-acceptance.md`.

## Global Constraints

- Preserve the 1366px artboard geometry and proportional mobile scaling.
- Preserve all five visible page compositions, copy, images, fonts, and four-space menu links.
- Do not embed full reference SVG files as page images/backgrounds or copy their XML/path payloads into React.
- Expose only clean canonical Next.js routes; do not add `.html` rewrites.
- Do not deploy or commit/push until explicitly requested after migration verification.
- Keep generated `.next/` and screenshot artifacts out of Git.

---

### Task 1: Scaffold Next.js runtime

**Files:**
- Create: `package.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.mjs`
- Create: `app/layout.tsx`
- Modify: `category.css`, `styles/home.css`
- Create: `public/assets` symlink to `../assets`
- Modify: `.gitignore`

- [x] Add Next/React/TypeScript scripts and dependencies.
- [x] Configure App Router, strict TypeScript, image/font-safe global CSS, and the five clean canonical routes.
- [x] Make assets available at `/assets/**` without duplicating the existing 80MB asset tree.
- [x] Run `npm install` and confirm the package lock is generated.

### Task 2: Build shared exhibition components

**Files:**
- Create: `components/ExhibitionTitle.tsx`
- Create: `components/SpaceNavigation.tsx`
- Create: `components/ResponsiveArtboard.tsx`
- Create: `components/SiteFooter.tsx`
- Create: `components/CollectionCopy.tsx`
- Create: `lib/site-data.ts`
- Modify: `category.css`

- [x] Move shared title glyph markup, four-space navigation, responsive scaling client logic, collection metadata markup, and footer into typed components.
- [x] Keep exact hrefs, active `aria-current`, status copy, contact links, and back-to-top behavior.
- [x] Keep the CSS artboard shell and responsive scale behavior equivalent to the verified static implementation.

### Task 3: Convert homepage route

**Files:**
- Create: `app/page.tsx`
- Create: `components/HomePage.tsx`
- Create: `styles/home.css`

- [x] Convert homepage semantic sections and absolute geometry to JSX.
- [x] Preserve profile, education, experience, software, clients, shortcuts, and footer links.
- [x] Verify `/` renders the same content and 1366×1464 artboard.

### Task 4: Convert four category routes

**Files:**
- Create: `app/graphic-design/page.tsx`, `app/video-motion/page.tsx`, `app/photoshoot-direction/page.tsx`, `app/logo-brand-identity/page.tsx`
- Create: `components/CategoryPage.tsx`
- Create: `components/category/GraphicDesignPage.tsx`, `VideoMotionPage.tsx`, `PhotoshootDirectionPage.tsx`, `LogoBrandIdentityPage.tsx`
- Create: `category.css` (reuse existing verified shared stylesheet)

- [x] Convert every category section, media slot, caption, inline geometry value, active menu state, and footer to typed JSX.
- [x] Normalize runtime asset paths to `/assets/...` while retaining the same dimensions and object-fit behavior.
- [x] Verify all five clean canonical routes.

### Task 5: Build and browser verification

**Files:**
- Modify: `README.md`, `category-acceptance.md` only if verification/runtime instructions need updating.

- [x] Run `rm -rf .next && npm run typecheck`.
- [x] Run `npm run build` after typecheck passes.
- [x] Start an isolated Next server on a free local port and curl all five canonical routes.
- [x] Use browser/CDP at 1366px and 390px to verify artboard width, responsive scale, image/font loading, menu active state, and no horizontal overflow.
- [x] Render desktop pages and compare against existing baselines; investigate any geometry regression before completion.
- [x] Review `git diff`, `git status`, generated files, and secret scan. Do not commit/push/deploy in this migration unless separately requested.
