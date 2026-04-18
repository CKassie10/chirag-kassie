export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Developer (Independent Contractor)",
    company: "Industrial Growth Hub · Remote, South Africa",
    period: "Jan 2025 — Present",
    summary:
      "Designing, building, and maintaining production websites for real clients end-to-end.",
    highlights: [
      "Built and currently maintain two live platforms: travellingsouthafrica.co.za (travel content) and an Easy2Find rentals site — both serving real users.",
      "Own the full SDLC: requirements gathering, UI/UX, front-end, back-end, database design, hosting, DNS, and ongoing maintenance.",
      "Shipped responsive, mobile-first interfaces with content-management workflows so clients can update listings and content themselves.",
      "Collaborate directly with client stakeholders to translate business objectives into working software.",
    ],
  },
  {
    role: "Tutor — Mathematics & English",
    company: "Kumon · Ballito, KwaZulu-Natal",
    period: "Jan 2024 — Mar 2024",
    summary:
      "Coached students across multiple skill levels with individualised learning plans.",
    highlights: [
      "Delivered structured, one-on-one coaching, explaining complex concepts clearly to students at different levels.",
      "Designed and tracked individual learning plans against curriculum benchmarks — measurable progress reporting.",
      "Used early-intervention techniques to catch knowledge gaps — a QA mindset that carries over into software work.",
    ],
  },
  {
    role: "Student IT Support Technician",
    company: "UKZN Westville Campus · Durban, South Africa",
    period: "Feb 2023 — Jul 2023",
    summary:
      "Supported campus infrastructure, identity, and end-user systems across labs and staff.",
    highlights: [
      "Administered Windows Server and Active Directory: user provisioning, Group Policy Objects (GPOs), and routine maintenance.",
      "Configured and maintained network infrastructure — routers, firewalls, and Wi-Fi — for controlled, reliable access.",
      "Provided onsite and remote support across hardware, software, and connectivity issues; handled cloud and VOIP account admin, backups, and call-quality troubleshooting.",
      "Used AI and scripting tools to automate repetitive support workflows and reduce manual effort.",
    ],
  },
];
