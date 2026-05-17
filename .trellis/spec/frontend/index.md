# Frontend Development Guidelines

> Bootstrap frontend rules for a demo-first, agent-mediated campus product.

---

## Overview

The repo now uses a dual-app Next.js baseline:

- `apps/site` for the public landing experience
- `apps/app` for the product walkthrough shell
- `packages/contracts` for shared UI-visible domain types and demo payloads

The product pitch is not "generic campus social". The UI must visibly express:

- profile distillation into an agent
- path-based matching, not random browsing
- protocol-like A2A communication, not ordinary chat only
- privacy boundaries and human approval as first-class UI states

---

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Landing Roadmap v2](./landing-roadmap-v2.md) | Implementation steps for Codex — HANDOFF-aligned | **Active** |
| [Design System](./design-system.md) | Token overview (superseded by roadmap v2 for specifics) | Reference |
| [Landing Visual Diagnosis](./landing-visual-diagnosis.md) | Original gap analysis (historical) | Archived |
| [Directory Structure](./directory-structure.md) | Feature-sliced UI layout | Bootstrap default |
| [Component Guidelines](./component-guidelines.md) | Product-specific component behavior | Bootstrap default |
| [Hook Guidelines](./hook-guidelines.md) | Hooks for feature flow and derived state | Bootstrap default |
| [State Management](./state-management.md) | Local/shared/server state defaults | Bootstrap default |
| [Quality Guidelines](./quality-guidelines.md) | UX and review bar for demo work | Bootstrap default |
| [Type Safety](./type-safety.md) | Shared product contracts and validation | Bootstrap default |

---

## Current Project Reality

- `doc/用户需求PRD_latest.md` remains the rich source document.
- `apps/site` is the canonical landing runtime and the only active landing implementation target.
- `landing/` remains a legacy static prototype reference and archive only.
- Hermes reverse-engineering assets for landing work live at
  `/Users/ethan/workspace/explore/visual_design/landing/hermes_landing_reverse/`.
- The implementation handoff for that asset pack is
  `/Users/ethan/workspace/projects/hackathon/reconnect_fdu/RE_FUDAN/.trellis/spec/frontend/landing-roadmap-v2.md`.
- The first implementation target is the core demo chain P0 -> P4.
- Extra modes such as games, dating, clubs, or trading are future branches,
  not first-build obligations.

---

## Non-Negotiables

- Make privacy level visible in the UI wherever it changes output.
- Show why a match was recommended.
- Treat protocol trace and human handoff as product features, not debug-only
  afterthoughts.
