# Landing Page Visual Diagnosis: Hermes vs Current Output

> Status: diagnostic — gap analysis for implementation handoff
> Created: 2026-05-17
> Source evidence: screenshots (images 7-10), Hermes reverse assets at `/Users/ethan/workspace/explore/visual_design/landing/hermes_landing_reverse/`

---

## Executive Summary

The current `landing/index.html` achieves correct section structure and content mapping, but fails to reproduce the Hermes visual system at three critical levels:

1. **Color token system** — wrong palette entirely (teal/mint instead of warm amber + cool cream)
2. **Header grid architecture** — flexbox nav instead of bordered grid cells
3. **Typography sizing & composition** — correct fonts loaded but wrong sizing model, wrong hero centering, missing responsive `--vsq` scaling

The page reads as "a page that uses the same fonts" rather than "a structural clone of the same design system."

---

## 1. Color Token Gap (Critical)

### Hermes verified tokens (from `theme_states.json`)

| Token | Warm state (State A) | Cool state (State B) |
|-------|---------------------|---------------------|
| `--background-base` | `#170d02` (burnt umber) | `#041C1C` (deep teal) |
| `--midground-base` | `#FFAC02` (amber/gold) | `#ffe6cb` (warm cream) |
| `--foreground-base` | `#ffffff` | `#ffffff` |

### Current implementation tokens

| Token | "Dark" (default) | "Light" (toggle) |
|-------|-----------------|-----------------|
| `--background` | `#041C1C` | `#EEF4FF` |
| `--midground` | `#B8D4D0` (pale teal) | `#2A4A7F` (navy) |
| `--accent` | `#7ECDC4` (mint) | `#4A7FC1` (blue) |

### Diagnosis

The implementation invented a teal/blue palette that doesn't exist in Hermes. The correct approach:

- **Both Hermes themes are dark-backed.** Neither is a conventional "light mode" with white/blue background.
- State A (warm): black-brown bg + amber text + white headlines
- State B (cool): deep teal bg + cream text + white headlines
- The `#EEF4FF` light blue background in my implementation has no Hermes precedent — it was imported from an earlier plan that predated the Hermes clone decision.

### Correct token model for RE:FUDAN

```css
:root[data-theme='cool'] {
  --color-bg: #041C1C;
  --color-fg: #ffffff;
  --color-mid: #ffe6cb;
  --color-border: color-mix(in srgb, #ffe6cb 20%, transparent);
  --color-accent: #ffe6cb;
}

:root[data-theme='warm'] {
  --color-bg: #170d02;
  --color-fg: #ffffff;
  --color-mid: #FFAC02;
  --color-border: color-mix(in srgb, #FFAC02 20%, transparent);
  --color-accent: #FFAC02;
}
```

**Decision needed**: Do we keep Hermes's exact warm/cool pair, or substitute our own pair that maintains the same structural relationship (both dark-backed, one warmer, one cooler)? The bg-dark.png and bg-light.png images suggest the user may want one dark and one genuinely light theme — but Hermes itself never goes light.

---

## 2. Header Architecture Gap (Critical)

### Hermes header (from screenshots + DOM snapshot)

```
┌─────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ HERMES      │ DOCS         │ PORTAL       │ SOCIALS ⊕⊕   │ THEME ◉◎     │
│ AGENT       │              │              │              │              │
└─────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```

- Uses the `.g`/`.gc` grid system — each nav item is a bordered cell
- Wordmark is stacked two-line ("HERMES" / "AGENT"), very large, fills its cell
- Each cell has visible right border (`1px solid var(--color-border)`)
- The entire header row has a bottom border
- Cells are tall (~80px+), giving generous vertical padding
- Theme toggle is a pill with sun/moon icons inside the last cell

### Current implementation

```
复见  RE:FUDAN                    DEMO  FEATURES  INTERFACES  [THEME]
```

- Flexbox, no grid cells, no visible borders between items
- Wordmark is inline, small, single-line
- Nav items are plain text links with no cell containment
- Theme toggle is a text button, not a pill with icons
- Header height is minimal (~50px)

### Required changes

- Header must use `.g`/`.gc` grid with visible cell borders
- Wordmark cell: "复见" stacked above "RE:FUDAN" (mimicking "HERMES" / "AGENT" two-line stack)
- Each nav item gets its own bordered cell
- Theme toggle gets its own cell with pill-shaped control
- Cell height should be generous (min 5rem)

---

## 3. Typography Sizing Gap (Significant)

### Hermes sizing model

```css
html { font-size: clamp(10px, calc(var(--vsq) * 5), 14px) }
/* where --vsq: calc(.5vw + .5vh) */
```

This means:
- Base font size is viewport-responsive (10-14px range)
- All `rem` values scale with viewport
- Hero title at `36.75px` computed = ~2.625rem in this system
- Body text at `14px` = 1rem

### Current implementation

```css
html { font-size: clamp(10px, calc(var(--vsq)*5), 14px) }
h1 { font-size: clamp(2.8rem, 8vw, 6rem) }
```

The `--vsq` base is correct, but the `h1` sizing uses a separate `clamp()` with `8vw` that overrides the rem-based scaling. In Hermes, the hero title is large but not as extreme — it's ~2.6rem in the responsive system, which at 14px base = ~36px. My implementation pushes it to 6rem max = 84px, which is why the headline dominates the viewport more aggressively than Hermes.

### Hero composition

- **Hermes**: centered text, badge above, headline, description paragraph, then numbered install steps with code blocks
- **Current**: left-aligned, badge above, headline, description, CTA buttons

The centering and the install-step pattern (numbered labels + code blocks with COPY buttons) are distinctive Hermes elements that should be replicated structurally, even if our content differs (we don't have install commands — we have CTA buttons instead).

---

## 4. Missing Visual Elements

### Dither texture
Hermes has small colored dots/pixels scattered across the page (visible in screenshots as tiny colored squares at corners and edges). These are CSS-generated via a `dither` class. Not implemented.

### Arc-border gradient animation
The terminal demo box in Hermes has an animated gradient stroke. My CSS includes this but it may not be rendering correctly due to the overall color mismatch.

### Background treatment
- Hermes: solid black/dark background, NO background image in the hero
- Current: background image with overlay in the hero
- The background images (bg-dark.png, bg-light.png) should be used in the Demo section's right panel (like Hermes uses a dark forest/nature image there), NOT as a full-page hero background

### Grid border visibility
In Hermes, the `.g`/`.gc` borders are a primary compositional device — they're always visible and create the editorial grid feel. In my implementation, borders exist but are too subtle due to wrong color tokens.

---

## 5. Section-by-Section Mapping

| Hermes Section | RE:FUDAN Equivalent | Gap |
|---|---|---|
| Header (grid cells) | Header (flexbox) | Architecture wrong |
| Hero (centered, install steps) | Hero (left-aligned, CTAs) | Alignment + content pattern |
| Demo (terminal 3fr + image 2fr) | Demo (same structure) | Correct structure, wrong colors |
| Features (6 cells, 3×2) | Features (6 cells) | Correct structure |
| Tools (label + value row) | — | Missing section |
| Platforms (label + value row) | Platforms (detail row) | Correct pattern |
| Environments (label + value row) | Environments (detail row) | Correct pattern |
| Skills (expandable list) | Interfaces (4 cells) | Different pattern |
| Research (expandable) | Manifesto (quote) | Different content type |
| Footer (version + brand) | Footer (version + brand) | Correct |

---

## 6. Architecture Decision: apps/site

Per user direction (2026-05-17), the landing page moves from `landing/index.html` to `apps/site` as a Next.js App Router application. The current HTML file is a structural prototype only.

Target architecture:
```
apps/
├── site/          # Landing page (Next.js 15, App Router)
│   ├── src/app/
│   ├── src/components/
│   ├── src/styles/
│   └── public/
└── app/           # Product flow P1-P4 (Next.js 15, App Router)
    └── ...
```

Both apps share:
- Same design token system (CSS variables)
- Same component semantic conventions
- Same font stack
- Same contract schemas (JSON/Schema for page transitions, form data, match results, A2A trace, handoff decisions)

---

## 7. Priority Fix Order

1. **Color tokens** — switch to Hermes warm/cool pair (both dark-backed)
2. **Header grid** — rebuild as `.g`/`.gc` with bordered cells and stacked wordmark
3. **Hero centering** — center-align hero content, adjust font sizing to match Hermes proportions
4. **Background image placement** — move from hero overlay to Demo section right panel only
5. **Dither texture** — add CSS-generated pixel dots
6. **Typography scale** — audit all sizes against Hermes's rem-based system
7. **Detail row pattern** — ensure Tools/Platforms/Environments use consistent label+value grid

---

## 8. Confirmed Decisions (2026-05-17)

1. **Theme pair**: Use Hermes original colors exactly. Warm = `#170d02` bg + `#FFAC02` mid. Cool = `#041C1C` bg + `#ffe6cb` mid. Both dark-backed.
2. **Background images**: bg-dark.png and bg-light.png appear ONLY in the Demo section right panel (like Hermes's forest/nature image). Not as hero background.
3. **Hero content pattern**: CTA buttons ("BUILD YOUR AGENT" / "FIND YOUR GUIDE") are acceptable in place of Hermes's install steps. May revisit later.
4. **Progressive disclosure**: YES — implement the "LESS ∧" / "MORE ∨" toggle pattern for detail sections (Interfaces, Platforms, Environments, Protocol).

---

## Reference Paths

- Hermes reverse assets: `/Users/ethan/workspace/explore/visual_design/landing/hermes_landing_reverse/`
- Theme tokens verified: `hermes_landing_reverse/theme_states.json`
- Reusable architecture: `hermes_landing_reverse/notes/reusable_stack_and_theme_architecture.md`
- Font files: `landing/public/fonts/` (Collapse-Bold.woff2, Mondwest-Regular.woff2, FZCuSong.ttf)
- Background images: `landing/public/images/` (bg-dark.png, bg-light.png)
- Current prototype: `landing/index.html`
