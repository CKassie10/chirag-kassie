import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="Engineering with taste, shipped on time."
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-12">
        <div className="md:col-span-3">
          <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted md:text-xl">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <aside className="md:col-span-2">
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-4">
              <Stat label="Years building" value="4+" />
              <Stat label="Projects shipped" value="20+" />
              <Stat label="Focus" value="Web + Tools" />
              <Stat label="Based" value={profile.location} />
            </dl>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-soft bg-soft p-5">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}
