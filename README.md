# Laiba Afzal — Full-Stack Developer Portfolio

A premium, dark-themed static portfolio built with React + Vite.

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## What to edit before publishing

| File | What to change |
|---|---|
| `src/data/socialLinks.js` | GitHub, LinkedIn, Fiverr, and email links |
| `src/data/projects.js` | Live demo / GitHub repo URLs for WorkHub & Picks4Tips |
| `src/components/ProjectCard.jsx` | Swap the placeholder screenshot panel for real `<img>` screenshots (see comments in the file) |
| `index.html` | Open Graph image path (`/og-image.png`) if you add a social preview image |

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, ProjectCard, Reveal, BrandIcons
  sections/     One file per page section (Hero, About, Skills, Projects...)
  data/         All editable content — projects, skills, services, links
  styles/       Design tokens (variables.css) + global styles
  hooks/        useReveal — scroll-in animation hook
```

Built as a static site: no backend, no database. Content lives in the `src/data/*.js` files so you can add new projects or skills without touching the components.
