# Directory Structure

> Default backend organization for the first implementation wave.

---

## Overview

Until the stack-selection task says otherwise, treat RE_FUDAN as a single
deployable TypeScript app with co-located UI and backend logic. Backend code
should be feature-sliced around the product flow, not around abstract layers.

---

## Bootstrap Layout

```text
src/
├── server/
│   ├── profile/
│   ├── matching/
│   ├── dialogue/
│   ├── referral/
│   ├── privacy/
│   ├── adapters/
│   └── shared/
├── contracts/
└── mocks/
```

Use the folders as follows:

- `profile/`: ingestion normalization, persona assembly, public/private views
- `matching/`: path similarity, recommendation reasons, ranking inputs
- `dialogue/`: A2A turn orchestration, trace formatting, handshake rules
- `referral/`: human handoff, acceptance / rejection decisions
- `privacy/`: shared privacy policy, filters, release guards
- `adapters/`: external systems such as SecondMe, vector stores, scraping/import
- `shared/`: framework-independent helpers used by multiple backend features
- `contracts/`: shared request/response/domain schemas used by UI and backend
- `mocks/`: seeded fixtures for demo mode and tests

---

## Organization Rules

- Put business rules in feature folders, not in route handlers.
- Keep framework entrypoints thin; they should validate input, call feature
  services, and map results to transport responses.
- Put external API or model calls behind `adapters/` so demo logic can swap
  mock/live behavior without rewriting product logic.

---

## Naming Conventions

- Feature folders use lower-case singular nouns: `profile`, `matching`.
- Shared schemas use explicit domain names: `profile-schema`, `a2a-turn-schema`.
- Mock files should mirror the feature they support: `matching/mock-candidates`.
