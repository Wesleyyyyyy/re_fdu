# Directory Structure

> Default frontend layout for the first playable demo.

---

## Overview

Use feature slices aligned to the product journey, not generic page buckets.
The initial build should optimize for the P0-P4 walkthrough described in the
PRD.

---

## Bootstrap Layout

```text
src/
├── app/
├── features/
│   ├── onboarding/
│   ├── matching/
│   ├── dialogue/
│   ├── referral/
│   └── shared/
├── components/
│   └── ui/
├── contracts/
├── lib/
└── mocks/
```

Use the folders as follows:

- `app/`: route entrypoints, layouts, route-level loading/error states
- `features/onboarding/`: profile ingestion, privacy tagging, agent creation
- `features/matching/`: recommendation cards, radar/explanation UI
- `features/dialogue/`: A2A center, trace log, summary panels, privacy toggle
- `features/referral/`: final human handoff and acceptance/rejection states
- `features/shared/`: cross-feature UI logic tied to the product domain
- `components/ui/`: truly reusable presentation primitives
- `contracts/`: UI-visible domain types shared with backend
- `mocks/`: fixtures and scripted demo traces

---

## Naming Conventions

- Use feature-first folders and explicit names: `match-card`, `a2a-trace-panel`.
- Reserve generic names like `Card` or `Modal` for reusable UI primitives only.
- Keep demo scripts and fixtures close to the feature they explain.
