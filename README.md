# chirag-kassie

Personal website for [Chirag Kassie](https://github.com/CKassie10) — built for job applications and recruiter review.

Designed to be **dark, fast, and scalable**: new projects are added via a single TypeScript config (`src/data/projects.ts`) and the UI adapts automatically.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a dark-first custom theme
- **React Three Fiber** / **@react-three/drei** for the hero 3D scene (lazy-loaded, `prefers-reduced-motion` aware)
- **Framer Motion** for scroll-based reveals and micro-interactions
- **lucide-react** for icons

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev
# → http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Editing content

All content lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, title, tagline, about paragraphs, contact links, CV URL |
| `projects.ts` | The Projects section (featured/all, filters, links, status, stack) |
| `skills.ts` | Skill groups and per-skill level (`core` / `strong` / `working`) |
| `experience.ts` | Timeline entries (role, company, period, highlights) |

### Adding a new project

Append an entry to the `projects` array in `src/data/projects.ts`:

```ts
{
  slug: "my-new-thing",
  title: "My New Thing",
  tagline: "A one-line hook.",
  description: "What it is, for whom, and why it matters.",
  problem: "The specific problem it solves.",
  solution: "The approach and the interesting trade-offs.",
  stack: ["Next.js", "TypeScript", "Postgres"],
  category: "Web App", // or "Tooling" | "Design System" | "Infrastructure" | "Other"
  year: 2025,
  status: "Live", // or "In Progress" | "Case Study" | "Archived"
  featured: true,
  links: [
    { label: "Live Site", href: "https://…", kind: "live" },
    { label: "Source",    href: "https://github.com/…", kind: "source" },
  ],
  accent: "from-indigo-500/40 via-sky-500/20 to-transparent",
}
```

`featured: true` makes the card appear in the default Projects view; toggle **Show all** on the site to see everything. Categories are derived automatically for the filter bar.

## Deploying to Vercel

1. Import the GitHub repo in [Vercel](https://vercel.com/new).
2. Framework preset: **Next.js** (no extra config needed).
3. Every PR gets an automatic preview URL posted back to the PR.

## Accessibility & performance

- Skip-to-content link
- Semantic landmarks (`<nav>`, `<main>`, `<section>`, `<ol>` timeline)
- Focus-visible styles on all interactive elements
- `prefers-reduced-motion` disables animations
- 3D scene is `dynamic(…, { ssr: false })` and only mounts on the client
- Fonts loaded with `next/font` + `display: swap`

## License

Personal project — content and brand are © Chirag Kassie.
