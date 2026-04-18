"use client";

import { useMemo, useState } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/cn";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const base = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return showAll ? base : base.filter((p) => p.featured);
  }, [filter, showAll]);

  return (
    <Section
      id="projects"
      eyebrow="03 — Selected Work"
      title="Projects, shipped with intent."
      description="Real problems, real trade-offs. New projects are added via a single config file — this section scales as the work does."
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition-colors",
                filter === cat
                  ? "border-white/25 bg-white/10 text-foreground"
                  : "border-soft bg-soft text-muted hover:border-white/15 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
        >
          {showAll ? "Show featured" : "Show all"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted">
          No projects in this category yet — more soon.
        </p>
      )}
    </Section>
  );
}
