# QSolve

Marketing site for **QSolve**. Starts with a simple homepage to validate the shared Redwood stack and solo GitHub → Vercel workflow.

## Stack

| Layer | Technology |
|--------|------------|
| Framework | RedwoodJS 8.9 |
| UI | React 18 + Vite |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Package manager | Yarn 4 (workspaces: `web`, `api`) |
| Node | 20.x |
| Hosting | Vercel |

## Local development

```bash
yarn install
yarn rw dev
```

Open [http://localhost:8910](http://localhost:8910).

## Build

```bash
yarn rw build
```

## Deploy (Vercel)

1. Push this repo to GitHub under your account (you push; no Cursor collaborator)
2. Vercel → **Add New Project** → import this repository
3. `vercel.json` enables Corepack and `yarn rw build`
4. Add env vars on that Vercel project when you add a database / auth later

## Docs

- `STACK_AND_SETUP.md` — this project’s commands and deploy notes
- `SITE_TEMPLATE.md` — **reusable checklist** for the next client site
- `BRAND_COLORS.md` — QSolve colour + type tokens

## Project layout

```
qsolvewebsite/
├── api/           # GraphQL API + Prisma (ready for later features)
├── web/           # React frontend
│   └── src/
│       ├── components/
│       └── pages/HomePage/
├── redwood.toml
├── vercel.json
└── package.json
```
