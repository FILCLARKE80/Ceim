# Pathfinder — Irish Career Pathways

An interactive web app that helps Irish secondary-school students explore career
options. Pick a career and see the full journey mapped out — from **first year
(Junior Cycle)** through the **Leaving Certificate**, into **college (with CAO
points)**, **postgraduate study**, and the **jobs at the end** — as an
interactive **flow chart**.

## Features

- **Career picker** — searchable, category-filtered grid of 48 careers.
- **Pathway flow chart** — left-to-right stages: Junior Cycle → Leaving Cert
  subjects → College/CAO (with course names) → Postgrad → Roles.
- **Leaving Cert subject guide** — student-friendly descriptions and how
  essential each subject is.
- **CAO points table** — course points, codes, duration and extra requirements,
  verified against the official 2025 CAO tables.
- **Postgrad clarity** — each career is flagged as *required*, *recommended* or
  *optional* for postgraduate study, so students know when a masters is actually
  needed.
- **Salaries vs the average** — pay shown as a percentage of the ≈ €50k Irish
  average wage.

## Tech stack

- [Vite](https://vitejs.dev/) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) — Apple-inspired theme
- [React Flow (`@xyflow/react`)](https://reactflow.dev/) for the diagrams
- [React Router](https://reactrouter.com/) (hash routing)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Deployment (Cloudflare Pages)

The repo is Cloudflare-Pages ready:

- **Framework preset:** None / Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** pinned to 20 via `.nvmrc`

Supporting files:

- `wrangler.toml` — sets `pages_build_output_dir = "dist"`.
- `public/_redirects` — SPA fallback (`/* /index.html 200`).
- `public/_headers` — basic security headers.

To deploy: connect the repository in the Cloudflare Pages dashboard (production
branch `main`) or run `npx wrangler pages deploy dist`. The app serves at the
domain root with clean URLs (`/career/<id>`); `public/_redirects` provides the
SPA fallback so deep links resolve.

## Data, attributions & licence

Information is **indicative and for educational purposes** — always confirm with
official sources. Full attributions are on the in-app **Data & Sources** page.

- **CAO points & courses** — 2025 Round 1 figures from the
  [Central Applications Office](https://www.cao.ie); property of the CAO and the
  respective institutions. Not affiliated with or endorsed by the CAO.
- **Salaries** — expressed against the Irish average wage (≈ €50k, based on
  [CSO](https://www.cso.ie) average annual earnings); indicative estimates only.
- **Subjects** — summarise the NCCA curriculum
  ([curriculumonline.ie](https://www.curriculumonline.ie)).

**Licence:** source code is released under the [MIT Licence](./LICENSE). Factual
data remains the property of its original sources under their terms. Pathfinder
is an independent project, not affiliated with the CAO, CSO, the Department of
Education, or any university or college.

The dataset is structured (`src/data/careers.ts`, `src/data/subjects.ts`) so new
careers and subjects can be added easily.
