# Connect qsolve.ie to this site

The production site is the static copy in `public-site/` (exact mirror of the live WordPress site). Deploy it on **Vercel**, then point the domain at that project.

## 1. Deploy on Vercel

1. Push this repo to your GitHub account.
2. Vercel → **Add New…** → **Project** → import the repo.
3. Framework preset: **Other** (or leave blank).  
   `vercel.json` already sets `outputDirectory` to `public-site`.
4. Deploy.

You should get a URL like `https://qsolvewebsite-xxxx.vercel.app`.

## 2. Add the domain in Vercel

1. Open the Vercel project → **Settings** → **Domains**.
2. Add:
   - `qsolve.ie`
   - `www.qsolve.ie` (optional but recommended)
3. Vercel will show the DNS records to set.

## 3. Update DNS where qsolve.ie is registered

At your domain registrar (or DNS host), set:

| Type  | Name | Value                          | Notes                          |
|-------|------|--------------------------------|--------------------------------|
| **A** | `@`  | `76.76.21.21`                  | Vercel’s apex IP (confirm in Vercel UI) |
| **CNAME** | `www` | `cname.vercel-dns.com`     | Or the exact target Vercel shows |

Exact values can vary — **always copy what Vercel shows** for your project.

## 4. Wait for SSL

After DNS propagates (often minutes, sometimes up to 48h), Vercel issues HTTPS for `qsolve.ie` automatically.

## Important

- Pointing DNS to Vercel **replaces** the current WordPress host for `qsolve.ie`. Keep a backup of the WP site until you’re happy with this copy.
- Canonical URLs and `siteUrl` in the HTML are set to **`https://qsolve.ie`**.
- Edit pages later by changing files under `public-site/` (each page is an `index.html` in its folder).
