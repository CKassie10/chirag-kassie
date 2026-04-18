import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title="A record of shipping."
      description="Roles, responsibilities, and what actually moved the needle."
    >
      <ol className="relative border-l border-soft pl-8 md:pl-12">
        {experience.map((e, i) => (
          <Reveal key={`${e.company}-${e.period}`} delay={i * 0.05}>
            <li className="relative pb-12 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-300 to-fuchsia-400 shadow-[0_0_16px_rgba(99,102,241,0.7)] md:-left-[54px]"
              />
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {e.period}
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                {e.role}{" "}
                <span className="text-muted">· {e.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-muted">{e.summary}</p>
              <ul className="mt-4 max-w-2xl list-disc space-y-1.5 pl-5 text-sm text-foreground/90 marker:text-muted">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
