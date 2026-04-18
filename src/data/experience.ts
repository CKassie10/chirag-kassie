export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Independent / Freelance",
    period: "2024 — Present",
    summary:
      "Partnering with early-stage teams to ship production web apps, design systems, and internal tools.",
    highlights: [
      "Led greenfield Next.js rebuilds that cut page load times by 40% and lifted Lighthouse scores above 95.",
      "Designed data-driven content systems so non-engineers can ship updates without touching code.",
      "Set up CI/CD, preview deployments, and observability from day one.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Early-Stage Startup",
    period: "2022 — 2024",
    summary:
      "Owned end-to-end features across the stack — from schema design to polished UI.",
    highlights: [
      "Shipped a real-time collaboration feature used daily by 10k+ users.",
      "Reduced p95 API latency by 3x by reworking hot paths and adding targeted caching.",
      "Mentored two junior engineers on code review, testing, and system design.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Product Team",
    period: "2021 — 2022",
    summary:
      "Contributed to a customer-facing dashboard used by enterprise clients.",
    highlights: [
      "Rewrote a flaky reporting module, eliminating the top source of weekly on-call pages.",
      "Added integration tests that caught three regressions before they reached production.",
    ],
  },
];
