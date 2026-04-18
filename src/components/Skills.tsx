import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/cn";

const levelStyles: Record<string, string> = {
  core: "bg-indigo-400/15 text-indigo-200 ring-indigo-400/30",
  strong: "bg-sky-400/10 text-sky-200 ring-sky-400/20",
  working: "bg-white/5 text-muted ring-white/10",
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="A deep toolkit, used in anger."
      description="Grouped by discipline. Levels reflect real production use — not tutorials."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-soft bg-soft p-5 transition-colors hover:bg-white/[0.05] sm:p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-opacity group-hover:opacity-100"
              />
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                {group.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{group.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs ring-1 transition-transform hover:-translate-y-0.5",
                      levelStyles[s.level ?? "working"],
                    )}
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
