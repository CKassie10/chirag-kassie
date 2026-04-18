export type SkillGroup = {
  title: string;
  description: string;
  skills: { name: string; level?: "core" | "strong" | "working" }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Web",
    description:
      "Full-stack web development with clean front-end / back-end integration.",
    skills: [
      { name: "JavaScript", level: "core" },
      { name: "Python", level: "core" },
      { name: "HTML / CSS", level: "core" },
      { name: "SQL", level: "strong" },
      { name: "OOP", level: "strong" },
      { name: "Responsive / Mobile-first", level: "strong" },
    ],
  },
  {
    title: "Data & Databases",
    description:
      "Relational schema design, data modelling, and day-to-day database management.",
    skills: [
      { name: "Relational DB design", level: "strong" },
      { name: "Schema architecture", level: "strong" },
      { name: "SQL queries", level: "strong" },
      { name: "Database management", level: "strong" },
      { name: "Data Structures & Algorithms", level: "strong" },
    ],
  },
  {
    title: "Infrastructure & Systems",
    description:
      "Practical IT and deployment skills from live client work and UKZN IT support.",
    skills: [
      { name: "Windows Server", level: "strong" },
      { name: "Active Directory (GPOs)", level: "strong" },
      { name: "Networking (routers, firewalls, Wi-Fi)", level: "strong" },
      { name: "VOIP & cloud services", level: "working" },
      { name: "DNS & hosting", level: "strong" },
      { name: "Git / version control", level: "core" },
      { name: "Web deployment", level: "strong" },
    ],
  },
  {
    title: "AI, Security & Methodology",
    description:
      "Fundamentals that keep projects honest: sound design, awareness of risk, delivery discipline.",
    skills: [
      { name: "Machine Learning fundamentals", level: "working" },
      { name: "AI concepts", level: "working" },
      { name: "Cybersecurity fundamentals", level: "working" },
      { name: "SIEM concepts", level: "working" },
      { name: "IT General Controls (ITGCs)", level: "working" },
      { name: "Systems Analysis & Design", level: "strong" },
      { name: "Agile principles", level: "strong" },
    ],
  },
];
