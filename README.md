# ProjeXplorer

ProjeXplorer is a full-stack learning platform that helps developers discover practical project ideas, filter by skill level, and follow structured implementation guides.

## What It Does

- Curates 62 project ideas across beginner, intermediate, and advanced levels.
- Supports filtering by category, difficulty, and search query.
- Includes dedicated detail pages with build guidance for each project.
- Lets authenticated users save favorite projects for later.
- Provides URL-synced filters for shareable discovery views.

## Project Categories

The platform includes projects from these categories:

- Web Development
- Mobile
- AI/ML
- Backend
- Desktop
- Data Science
- Cloud
- DevOps
- Cybersecurity
- Game Development
- Blockchain
- IoT
- AR/VR
- Automation
- UI/UX
- Open Source

## Project Detail Model

Each project card links to a detailed page with:

- Overview: what the project is and what you will build.
- Why Useful: real-world relevance and learning value.
- Step-by-Step Guide: implementation plan broken into actionable stages.
- Technologies: suggested stack and tooling.
- Key Features: high-value capabilities to include.
- Expected Outcome: what you should achieve by completion.
- Real-World Impact: portfolio and career relevance.

## Core Features

- Smart filtering by text, difficulty, and category.
- Deterministic sorting options for discovery workflows.
- Skeleton loading states for smoother UX.
- Empty states with guidance when no results match.
- Save/unsave support for authenticated users.
- Responsive layout for desktop and mobile.

## Tech Stack

- Frontend: React 18, TypeScript, React Router 6, TailwindCSS 3, Framer Motion
- Backend: Express (integrated with Vite dev server)
- Shared Types: TypeScript interfaces in shared modules
- Tooling: Vite, Vitest, pnpm

## Local Development

```bash
pnpm install
pnpm dev
```

App runs on http://localhost:8080 in development.

## Scripts

```bash
pnpm dev        # run frontend + backend in dev mode
pnpm build      # production build
pnpm start      # run production server
pnpm test       # run tests
pnpm typecheck  # run TypeScript checks
```

## Why This Project Is Useful

ProjeXplorer reduces project selection friction for learners and provides structured implementation details so users can go from idea to portfolio-ready build with less uncertainty.
