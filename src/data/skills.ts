export type SkillGroup = {
  title: string;
  description: string;
  skills: { name: string; level?: "core" | "strong" | "working" }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast, intentional, and accessible.",
    skills: [
      { name: "TypeScript", level: "core" },
      { name: "React", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "Tailwind CSS", level: "strong" },
      { name: "Framer Motion", level: "strong" },
      { name: "Three.js / R3F", level: "working" },
    ],
  },
  {
    title: "Backend",
    description: "APIs and services designed for clarity and longevity.",
    skills: [
      { name: "Node.js", level: "core" },
      { name: "Python", level: "strong" },
      { name: "PostgreSQL", level: "strong" },
      { name: "REST & GraphQL", level: "strong" },
      { name: "Redis", level: "working" },
      { name: "gRPC", level: "working" },
    ],
  },
  {
    title: "Design",
    description: "A systems mindset for typography, spacing, and motion.",
    skills: [
      { name: "Design Systems", level: "strong" },
      { name: "Figma", level: "strong" },
      { name: "Motion Design", level: "working" },
      { name: "Accessibility (WCAG)", level: "strong" },
    ],
  },
  {
    title: "Infrastructure",
    description: "Shipping software the boring, reliable way.",
    skills: [
      { name: "Docker", level: "strong" },
      { name: "AWS", level: "strong" },
      { name: "Vercel", level: "core" },
      { name: "GitHub Actions", level: "strong" },
      { name: "Terraform", level: "working" },
      { name: "Observability", level: "working" },
    ],
  },
];
