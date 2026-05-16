# Backend Development Guidelines

> Bootstrap backend rules for RE_FUDAN while the repo is still docs-first.

---

## Overview

This repo does not have backend code yet. These files define the default
backend direction for the first implementation tasks, distilled from the
source PRD.

If a later task chooses a different stack or service layout, update these
guidelines in the same task before adding divergent code.

Primary product responsibilities:

- build and evolve a student/agent profile
- gate data by privacy level
- explain why a match was recommended
- run A2A dialogue / negotiation traces
- stop at a human handoff before exposing real identity or contact info

---

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | Feature-oriented backend layout | Bootstrap default |
| [Database Guidelines](./database-guidelines.md) | Storage and privacy-first persistence rules | Bootstrap default |
| [Error Handling](./error-handling.md) | Safe error boundaries for agent flows | Bootstrap default |
| [Quality Guidelines](./quality-guidelines.md) | Review and testing bar for backend tasks | Bootstrap default |
| [Logging Guidelines](./logging-guidelines.md) | Logging without leaking student data | Bootstrap default |

---

## Current Project Reality

- `doc/` is the preserved source/archive layer.
- `.trellis/spec/` is the durable implementation rule layer.
- `.trellis/tasks/*/prd.md` is the task-local execution layer.
- External integrations with SecondMe or third-party social platforms are
  not assumed to be real until a task explicitly upgrades them from mock to
  live.

---

## Non-Negotiables

- Do not expose hidden profile fields outside the active privacy tier.
- Do not couple matching logic to raw upload formats.
- Do not let A2A dialogue bypass the final human approval step.
