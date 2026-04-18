export type ProjectStatus = "Live" | "In Progress" | "Case Study" | "Archived";

export type ProjectLink = {
  label: string;
  href: string;
  kind?: "live" | "source" | "demo" | "writeup";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  category: "Web App" | "Tooling" | "Design System" | "Infrastructure" | "Other";
  year: number;
  status: ProjectStatus;
  featured: boolean;
  links: ProjectLink[];
  accent: string; // tailwind gradient classes
};

export const projects: Project[] = [
  {
    slug: "atlas-analytics",
    title: "Atlas Analytics",
    tagline: "A self-hosted product analytics platform.",
    description:
      "A privacy-first analytics platform that teams can run on their own infrastructure — with sub-second dashboards and zero third-party trackers.",
    problem:
      "Small teams wanted product insights without shipping user data to third parties or paying per-seat SaaS pricing.",
    solution:
      "Designed an ingest pipeline on top of ClickHouse with a React dashboard, feature flags, and a CLI for self-hosted deployment in under 5 minutes.",
    stack: ["Next.js", "TypeScript", "ClickHouse", "Node.js", "Docker", "Terraform"],
    category: "Web App",
    year: 2025,
    status: "Live",
    featured: true,
    links: [
      { label: "Live Site", href: "https://example.com/atlas", kind: "live" },
      { label: "Source", href: "https://github.com/CKassie10", kind: "source" },
      { label: "Case Study", href: "#", kind: "writeup" },
    ],
    accent: "from-indigo-500/40 via-sky-500/20 to-transparent",
  },
  {
    slug: "prism-design-system",
    title: "Prism Design System",
    tagline: "A tokens-first design system for product teams.",
    description:
      "A component library and token pipeline shared across web and mobile, with automated accessibility checks and visual regression testing built in.",
    problem:
      "Multiple product surfaces were drifting apart visually, and small UI changes kept breaking accessibility.",
    solution:
      "Built a token pipeline (Figma → JSON → code), a React + React Native component library, and a Storybook with automated a11y and visual tests.",
    stack: ["React", "TypeScript", "Storybook", "Style Dictionary", "Playwright"],
    category: "Design System",
    year: 2024,
    status: "Live",
    featured: true,
    links: [
      { label: "Live Docs", href: "https://example.com/prism", kind: "live" },
      { label: "Source", href: "https://github.com/CKassie10", kind: "source" },
    ],
    accent: "from-fuchsia-500/40 via-purple-500/20 to-transparent",
  },
  {
    slug: "signal-cli",
    title: "Signal CLI",
    tagline: "A developer tool for tracing flaky tests.",
    description:
      "A command-line tool that fingerprints test failures across CI runs, surfacing the flakiest specs before they erode trust in the suite.",
    problem:
      "Engineering teams were losing hours a week re-running flaky CI builds with no clear picture of which tests were actually unreliable.",
    solution:
      "Built a CLI that ingests JUnit reports, clusters failure signatures, and produces a ranked dashboard — with a GitHub Action for drop-in integration.",
    stack: ["Go", "PostgreSQL", "GitHub Actions", "React"],
    category: "Tooling",
    year: 2024,
    status: "In Progress",
    featured: true,
    links: [
      { label: "Source", href: "https://github.com/CKassie10", kind: "source" },
      { label: "Write-up", href: "#", kind: "writeup" },
    ],
    accent: "from-emerald-500/40 via-teal-500/20 to-transparent",
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
] as const;
