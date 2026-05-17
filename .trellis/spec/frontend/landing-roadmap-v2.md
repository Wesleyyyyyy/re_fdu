# Landing Page Implementation Roadmap v2

> Status: ready for implementation (Codex handoff)
> Updated: 2026-05-17
> Supersedes: landing-visual-diagnosis.md (gap analysis only, this is the action plan)

---

## Context

The Hermes reverse-engineering assets have been updated with a complete HANDOFF document at:
`/Users/ethan/workspace/explore/visual_design/landing/hermes_landing_reverse/HANDOFF.md`

This provides production-ready token files, component-level semantic mappings, and corrected font/theme architecture. The previous diagnosis identified gaps; this roadmap specifies exactly what to do.

---

## Confirmed Decisions (2026-05-17, round 2)

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Default theme | **Dark** (deep teal + cream) | RE:FUDAN brand identity; differs from Hermes which defaults light |
| Token system | **Full HANDOFF tokens** (tokens.css + tailwind.config.ts) | Maximum fidelity, component-level semantics |
| Font roles | **Corrected per HANDOFF** | Collapse = body/heading, Mondwest = display, Rules = compressed/expanded labels |
| Background image | **Fixed full-screen layer** (HANDOFF method) | invert + mix-blend-mode: difference + opacity 0.06 |
| #170d02 / #FFAC02 | **EXCLUDED** — animation transition frame, not a design token | Per HANDOFF §7 constraint #4 |

---

## Implementation Steps (ordered)

### Step 1: Copy token files into project

```bash
# From hermes_landing_reverse/ into apps/site/
cp tokens/tokens.css       apps/site/src/styles/tokens.css
cp tokens/tailwind.config.ts  apps/site/tailwind.config.ts
cp styles/fonts.css        apps/site/src/styles/fonts.css
cp assets/filler-bg0.4dbab353.webp  apps/site/public/assets/hero-bg.webp
```

### Step 2: Install Tailwind CSS

The project currently uses plain CSS. Add Tailwind v3 (not v4 — the config is v3 format):

```bash
cd apps/site
bun add tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

Then replace the generated `tailwind.config.ts` with the HANDOFF version (already copied in step 1).

Add to `postcss.config.js`:
```js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }
```

### Step 3: Restructure globals.css

Replace current `globals.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './tokens.css';
@import './fonts.css';

/* Global theme transition */
*, *::before, *::after {
  transition:
    background-color 200ms ease,
    color 200ms ease,
    border-color 200ms ease;
}
```

### Step 4: Override default theme to dark

Since we want dark as default (unlike Hermes), modify the token import order:

In `tokens.css`, swap the `:root` block so dark values are the default:
```css
:root,
[data-theme="dark"] {
  /* dark tokens here (currently under [data-theme="dark"]) */
}

[data-theme="light"] {
  /* light tokens here (currently under :root) */
}
```

### Step 5: Fix font roles

Current state (wrong):
- Collapse → hero headlines
- Mondwest → body/nav

Correct state (per HANDOFF):
- `font-heading` / `font-body` → Collapse (main UI font)
- `font-display` → Mondwest (brand display, used sparingly)
- `font-heading-compressed` → Rules Compressed (section labels, uppercase)
- `font-heading-expanded` → Rules Expanded (hero big text)
- `font-mono` → Courier Prime (terminal)

**Missing font files to acquire:**
- Rules Compressed (Regular/Medium)
- Rules Expanded (Regular/Bold)
- Courier Prime (Regular)

These may need to be sourced from the Hermes server or Google Fonts (Courier Prime is on Google Fonts).

### Step 6: Implement fixed background layer

Per HANDOFF §5 and `hero_terminal_background_analysis.md`:

```tsx
// In layout.tsx, add as first child of <body>:
<div
  className="pointer-events-none fixed inset-0 z-[2]"
  style={{ mixBlendMode: 'difference', opacity: 0.06 }}
>
  <img
    src="/assets/hero-bg.webp"
    alt=""
    className="h-[150dvh] w-auto min-w-[100dvw] object-cover object-top-left invert"
  />
</div>
```

### Step 7: Rewrite page.tsx with component-level tokens

Use the semantic Tailwind classes from the config:
- `bg-canvas`, `text-primary`, `border-border` for globals
- `bg-header-bg`, `text-header-nav`, etc. for header
- `bg-hero-bg`, `text-hero-title`, `bg-hero-cta-primary-bg` for hero
- `bg-terminal-bg`, `text-terminal-prompt`, etc. for demo
- `bg-feature-card-bg`, `text-feature-title`, etc. for features
- `bg-footer-bg`, `text-footer-link`, etc. for footer

### Step 8: Restructure header to grid cells

Keep the `.g`/`.gc` grid system but apply correct token colors:
- Logo: `text-header-logo` (white in dark, blue in light)
- Nav links: `text-header-nav hover:text-header-nav-hover`
- Toggle: `bg-header-toggle-bg text-header-toggle-icon`

### Step 9: Theme toggle update

```tsx
// Default to dark, toggle to light
const prefersDark = true // our override
document.documentElement.setAttribute('data-theme', 'dark')

// Toggle function
const current = document.documentElement.getAttribute('data-theme')
document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
```

### Step 10: Verify

1. `bun run dev:site` → localhost:3000
2. Default renders dark theme (deep teal + cream text)
3. Toggle → light theme (blue-white paper + cobalt blue text)
4. Background image layer visible as subtle texture in both themes
5. Font roles correct: Collapse for body, Mondwest for display accents
6. All component tokens resolve correctly (no raw hex in JSX)
7. `bun run typecheck:site` passes

---

## Key Files (final state)

| File | Purpose |
|------|---------|
| `apps/site/src/styles/tokens.css` | Full HANDOFF token system (light + dark) |
| `apps/site/src/styles/fonts.css` | @font-face declarations |
| `apps/site/tailwind.config.ts` | HANDOFF Tailwind config with semantic colors |
| `apps/site/src/app/globals.css` | Tailwind directives + token/font imports |
| `apps/site/src/app/layout.tsx` | Grid header + fixed bg layer + theme init |
| `apps/site/src/app/page.tsx` | All sections using semantic Tailwind classes |
| `apps/site/src/components/ThemeToggle.tsx` | dark↔light toggle (dark default) |
| `apps/site/public/assets/hero-bg.webp` | Full-screen background texture |
| `apps/site/public/fonts/` | Collapse, Mondwest, Rules*, Courier Prime |

---

## Constraints (from HANDOFF §7)

1. No raw hex in components — all colors via CSS variables or Tailwind semantic classes
2. No second high-saturation hue in light theme (single blue system)
3. Footer always stays dark-styled regardless of theme
4. #170d02 / #FFAC02 are EXCLUDED — animation artifacts, not tokens
5. Uppercase via `text-transform: uppercase` + `letter-spacing`, not hardcoded strings
6. Theme switching via `data-theme` attribute, not `.dark` class

---

## Source References

| Asset | Path |
|-------|------|
| HANDOFF master doc | `hermes_landing_reverse/HANDOFF.md` |
| tokens.css | `hermes_landing_reverse/tokens/tokens.css` |
| tailwind.config.ts | `hermes_landing_reverse/tokens/tailwind.config.ts` |
| Component token map | `hermes_landing_reverse/notes/component_semantic_tokens.md` |
| Background analysis | `hermes_landing_reverse/notes/hero_terminal_background_analysis.md` |
| Font stack | `hermes_landing_reverse/notes/verified_font_stack.md` |
| Hero bg webp | `hermes_landing_reverse/assets/filler-bg0.4dbab353.webp` |
