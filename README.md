# RE_FUDAN

Monorepo for the RE_FUDAN demo.

## Layout

- `apps/site` - public landing experience
- `apps/app` - product walkthrough shell
- `packages/contracts` - shared domain types and demo payloads
- `doc/` - preserved source/archive material
- `landing/` - legacy static prototype preserved as reference

## Stack

- TypeScript
- Bun for workspace scripts
- Next.js App Router
- Mock-first contracts, no mandatory database for MVP

## Local Run

- `bun install`
- `bun --cwd apps/site run dev`
- `bun --cwd apps/app run dev`

Set `NEXT_PUBLIC_APP_URL` and `NEXT_PUBLIC_SITE_URL` if you deploy the two apps
to different origins later.
