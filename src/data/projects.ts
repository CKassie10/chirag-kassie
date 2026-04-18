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
  accent: string; // tailwind gradient classes — used as fallback when no image
  image?: string; // absolute path under /public; rendered as the card preview when set
  imageFit?: "cover" | "contain"; // defaults to "cover"; use "contain" for logos
};

export const projects: Project[] = [
  {
    slug: "travelling-south-africa",
    title: "Travelling South Africa",
    tagline: "A live travel content platform.",
    description:
      "A production travel content platform I designed, built, and currently maintain as an independent contractor with Industrial Growth Hub — from UI/UX through database, hosting, and DNS.",
    problem:
      "The client needed a credible, mobile-first home for travel content that non-technical staff could keep current without touching code.",
    solution:
      "Shipped a responsive, mobile-first site with a content-management workflow so the client can publish and update content themselves, plus hosting, DNS, and ongoing maintenance.",
    stack: ["JavaScript", "HTML/CSS", "SQL", "Responsive Design", "DNS & Hosting"],
    category: "Web App",
    year: 2025,
    status: "Live",
    featured: true,
    links: [
      {
        label: "Live Site",
        href: "https://travellingsouthafrica.co.za",
        kind: "live",
      },
    ],
    accent: "from-indigo-500/40 via-sky-500/20 to-transparent",
    image: "/images/projects/travelling-south-africa.jpg",
  },
  {
    slug: "easy2find-rentals",
    title: "Easy2Find Rentals",
    tagline: "A live rentals listings website.",
    description:
      "A production rentals website — another live client build under Industrial Growth Hub — where listings are managed by the client through a dynamic content layer.",
    problem:
      "The client wanted a clean, self-manageable listings experience that scales as inventory grows and loads well on phones.",
    solution:
      "Designed the schema, built the responsive UI and listing flows, integrated dynamic content management, and handled deployment + ongoing maintenance.",
    stack: ["JavaScript", "HTML/CSS", "SQL", "Relational DB Design", "Web Deployment"],
    category: "Web App",
    year: 2025,
    status: "Live",
    featured: true,
    links: [
      {
        label: "Live Site",
        href: "https://easy2findrental.co.za",
        kind: "live",
      },
    ],
    accent: "from-emerald-500/40 via-teal-500/20 to-transparent",
    image: "/images/projects/easy2find-rentals.jpg",
  },
  {
    slug: "timesheet-disbursement-system",
    title: "Timesheet & Disbursement System",
    tagline: "A full-stack replacement for a manual payroll workflow.",
    description:
      "A full-stack timesheet and financial disbursement system delivered for a live business client, replacing a manual process with an automated, auditable tool.",
    problem:
      "The client's existing timesheet and disbursement workflow was manual, slow, and error-prone — they needed a system the team could trust.",
    solution:
      "Owned the full SDLC: requirements gathering with the client, database schema, UI, and business logic, then handover — the core trade-off was scope vs. timeline, resolved by cutting non-essential reporting in v1.",
    stack: ["Python", "SQL", "OOP", "Systems Analysis & Design"],
    category: "Web App",
    year: 2024,
    status: "Case Study",
    featured: true,
    links: [],
    accent: "from-fuchsia-500/40 via-purple-500/20 to-transparent",
  },
  {
    slug: "optimult-corporate-website",
    title: "Optimult Corporate Website",
    tagline: "A corporate website, wireframe to deploy.",
    description:
      "Designed and developed a professional corporate website for Optimult, managing the full cycle from wireframing through to deployment.",
    problem:
      "The client needed a credible online presence that reflected their brand and worked well on the devices their prospects actually use.",
    solution:
      "Wireframed the layout, designed the UI, built the front-end, and deployed the site — ending with a clean hand-off and ongoing support.",
    stack: ["HTML/CSS", "JavaScript", "Responsive Design", "Web Deployment"],
    category: "Web App",
    year: 2024,
    status: "Live",
    featured: false,
    links: [],
    accent: "from-amber-500/40 via-orange-500/20 to-transparent",
    image: "/images/projects/optimult.jpg",
    imageFit: "contain",
  },
  {
    slug: "money-heist-quiz-game",
    title: "Story-Based Quiz Game",
    tagline: "An interactive, Money Heist-themed quiz game.",
    description:
      "An interactive story-driven quiz game with custom animations, timed rounds, stage progression, and conditional outcomes.",
    problem:
      "An academic brief that pushed me to combine game-state logic with a polished, narrative UI — not just a straight-line quiz.",
    solution:
      "Built stage progression, timers, and conditional outcomes with custom animations, keeping the game loop feeling tight and the UX intentional.",
    stack: ["JavaScript", "HTML/CSS", "OOP", "Game Logic"],
    category: "Other",
    year: 2023,
    status: "Case Study",
    featured: false,
    links: [],
    accent: "from-rose-500/40 via-pink-500/20 to-transparent",
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
] as const;
