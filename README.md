# QSolve

Exact static copy of the live site **https://qsolve.ie/**, ready to deploy and connect to that domain.

## What’s live in production

| Path | Purpose |
|------|---------|
| `public-site/` | Full website (HTML + CSS + JS + images + logos) — **this is what Vercel deploys** |
| `DOMAIN.md` | How to connect **qsolve.ie** / **www.qsolve.ie** on Vercel |
| `site-mirror/` | Raw crawl archive (reference) |

## Preview locally

```bash
cd public-site
python3 -m http.server 8765
```

Open [http://localhost:8765](http://localhost:8765).

## Deploy (Vercel) + domain

1. Push this repo to your GitHub
2. Vercel → **Add New Project** → import repo (framework: Other)
3. Confirm output directory is `public-site` (`vercel.json` sets this)
4. Follow **`DOMAIN.md`** to attach `qsolve.ie`

## Editing

Edit HTML under `public-site/` (e.g. `public-site/about-us/index.html`). Assets live in `public-site/wp-content/`.

## Optional Redwood stack

The `web/` + `api/` RedwoodJS app remains for a future React rebuild. It is **not** what deploys right now.

## Docs

- `DOMAIN.md` — DNS / Vercel domain steps for **qsolve.ie**
- `STACK_AND_SETUP.md` — Redwood commands (optional)
- `BRAND_COLORS.md` — brand tokens
