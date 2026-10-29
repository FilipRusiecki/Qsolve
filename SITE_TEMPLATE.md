# New Client Site Template (solo GitHub push)

Use this checklist every time you start a marketing site like MacRua, Digital House, Kotrina, FRVG, or Fergus Flanagan Architects.

**Goal:** same stack and routine, **you** push from VS Code / Cursor git to **your** GitHub only. No Cursor account as a GitHub collaborator. No shared deploy project.

---

## 1. Separate everything

| Item | Rule |
|------|------|
| Folder | New folder (e.g. `E:\ClientNameWebsite`) |
| Cursor | Open that folder in its **own** window/workspace |
| GitHub | New repo under **your** account (`FilipRusiecki/...`) |
| Vercel | New Vercel project → import **only** that repo |
| Secrets | Never copy production `.env` from another client |

Do **not** add Cursor (or any bot/org) as a GitHub collaborator. Remote = your personal repo; pushes come from your machine.

---

## 2. Scaffold (Windows note)

`yarn create redwood-app` can fail on `E:\` with `EPERM mkdir E:\`. Prefer:

```bash
# From C:\Users\FIFI (or another non-drive-root path)
yarn create redwood-app ClientNameTemp --typescript false --yarn-install false --git-init false

# Copy into the real project folder (no MOVE of half-installed trees)
robocopy C:\Users\FIFI\ClientNameTemp E:\ClientNameWebsite /E

cd /d E:\ClientNameWebsite
yarn install
```

Target versions (match existing sites unless you deliberately upgrade):

- RedwoodJS **8.9**
- Node **20.x**
- Yarn **4.x** (Corepack)
- Tailwind CSS **3** + Framer Motion
- Vercel via `vercel.json` (Corepack + `yarn rw build`)

---

## 3. Standard setup commands

```bash
yarn rw setup ui tailwind --force
yarn workspace web add framer-motion
# optional fonts:
# yarn workspace web add @fontsource-variable/<display> @fontsource-variable/<body>
```

Align `redwood.toml` with the other sites:

- Web port `8910`
- API port `8912`
- `apiUrl = "/api"`
- `[web] title = "Client Name"`

Add root `vercel.json`:

```json
{
  "build": {
    "env": {
      "ENABLE_EXPERIMENTAL_COREPACK": "1"
    }
  },
  "buildCommand": "yarn rw build --verbose"
}
```

Copy into the new repo:

- `STACK_AND_SETUP.md` (project-specific commands + Vercel notes)
- This file (`SITE_TEMPLATE.md`) if you want the checklist in-repo

---

## 4. Minimal homepage (smoke test)

Keep the first ship tiny so you can verify stack + git + Vercel:

1. `/` HomePage only (+ NotFound)
2. Nav + hero + one below-fold section + contact + footer
3. Tailwind theme tokens + 2–3 Framer Motion entrances
4. No dbAuth / Postgres until the client needs them

Defer auth, Prisma models, and extra pages until content is ready.

---

## 5. Git — you alone push

```bash
cd E:\ClientNameWebsite
git init
git add .
git commit -m "Initial Redwood marketing site"

# Create empty repo on GitHub (your account), then:
git remote add origin https://github.com/FilipRusiecki/<NEW_REPO>.git
git branch -M main
git push -u origin main
```

Or use VS Code / Cursor **Source Control** UI — still authenticated as **you**.

### Do not

- Invite Cursor as a GitHub collaborator
- Push from a shared Cloud Agent GitHub identity for client repos
- Reuse another client’s Vercel project or env vars

---

## 6. Vercel

1. Vercel → **Add New** → **Project**
2. Import the new GitHub repo only
3. Framework: RedwoodJS (or rely on `vercel.json`)
4. Deploy; add `DATABASE_URL` / auth secrets later when needed

---

## 7. Local smoke test

```bash
yarn install
yarn rw dev
# → http://localhost:8910
yarn rw build
```

---

## Agent checklist (tick before calling it done)

- [ ] New folder + own Cursor workspace
- [ ] Redwood 8.9 + Yarn 4 + Node 20
- [ ] Tailwind + Framer Motion
- [ ] `vercel.json` + `redwood.toml` ports / `/api`
- [ ] Simple homepage loads locally
- [ ] `STACK_AND_SETUP.md` (+ this template) present
- [ ] Git remote is **your** GitHub repo only
- [ ] No Cursor collaborator on the repo
- [ ] Separate Vercel project

---

## Reference projects

| Folder | Repo |
|--------|------|
| `C:\Users\FIFI\filipWebsite` | `FilipRusiecki/filipWebsite` |
| `E:\digitalhouseWebsite` | `FilipRusiecki/DigitalHouseMarketingWebsite` |
| `E:\MacRuaWebsite` | `FilipRusiecki/MacRuaWebsite` |
| `E:\KotrinaCioladisWebsite` | `FilipRusiecki/KotrinaCioladisWebsite` |
| `E:\Fergus-Flanagan-Architects` | `FilipRusiecki/Fergus-Flanagan-Architects` |
| `~/Desktop/QSolve/qsolvewebsite` | *(create when ready)* |

Full-stack support/auth pattern (heavier): see `filipWebsite/PROJECT_DUPLICATION_PROMPT.md` and `STACK_AND_SETUP.md`.  
Light marketing sites: copy the Digital House / MacRua / Kotrina / Fergus pattern in this template.
