# Céim — Irish Career Pathways

An interactive web app that helps Irish secondary-school students explore career
options. Pick a career and see the full journey mapped out — from **first year
(Junior Cycle)** through the **Leaving Certificate**, into **college (with CAO
points)**, **postgraduate study**, and the **jobs at the end** — as both an
interactive **flow chart** and a **network graph**.

## Features

- **Career picker** — searchable, category-filtered grid of careers.
- **Pathway flow chart** — left-to-right stages: Junior Cycle → Leaving Cert
  subjects → College/CAO → Postgrad → Roles (built with React Flow).
- **Network graph** — radial web linking each career to its subjects, courses,
  roles and related careers (click a related career to jump across).
- **Leaving Cert subject guide** — student-friendly descriptions and how
  essential each subject is for the chosen career.
- **CAO points table** — indicative course points, codes, duration and extra
  requirements (HPAT, portfolio, etc.).
- **Postgrad & roles** — masters/professional training and the job roles, with
  indicative salary ranges.

## Tech stack

- [Vite](https://vitejs.dev/) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [React Flow (`@xyflow/react`)](https://reactflow.dev/) for the diagrams
- [React Router](https://reactrouter.com/)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Data & accuracy

The dataset in `src/data/` is **indicative and for guidance only**:

- **CAO points are 2024 Round 1 figures** and change every year. Always confirm
  the latest entry requirements on [cao.ie](https://www.cao.ie) and each
  college's website.
- Subject requirements, salaries and pathways are summaries — verify with
  official sources (CAO, the colleges, Qualifax, CareersPortal) before making
  decisions.

The data is structured (`src/data/careers.ts`, `src/data/subjects.ts`) so new
careers and subjects can be added easily.
