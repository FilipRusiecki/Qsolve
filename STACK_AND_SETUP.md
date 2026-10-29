# QSolve — Stack & Setup

## Commands

```bash
yarn install
yarn rw dev          # http://localhost:8910
yarn rw build
```

## Stack

- RedwoodJS 8.9 (`web` + `api`)
- React 18 + Vite
- Tailwind CSS 3 + Framer Motion
- Yarn 4 · Node 24
- Vercel (`vercel.json` Corepack + `yarn rw build`)

## What’s here now

- Simple homepage (hero, about, contact) for stack + deploy testing
- Brand colours from QSolve brand book → see `BRAND_COLORS.md`
- Montserrat + Work Sans (variable fontsource packages)

## Deploy (Vercel)

1. Push this repo to **your** GitHub (`FilipRusiecki/...`) — you alone; no Cursor collaborator
2. Vercel → **Add New** → **Project** → import that repo
3. Framework Preset: **RedwoodJS** (or leave defaults; `vercel.json` handles build)
4. Use a **new** Vercel project (not Fergus / Digital House / FRVG / MacRua / Kotrina)
5. Deploy — add `DATABASE_URL` later when you need a real database

## Solo git routine

See `SITE_TEMPLATE.md` for the reusable new-site checklist (scaffold, GitHub, Vercel).
