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
      <div
        role="toolbar"
        aria-label="Project filters"
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
      >
        <div
          className="-mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
          // Horizontal scroll chip-row on mobile prevents line-wrap + gives
          // a familiar mobile UI without sacrificing larger touch targets.
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={cn(
                "inline-flex min-h-[40px] shrink-0 snap-start items-center rounded-full border px-4 py-2 text-sm transition-colors sm:min-h-[36px] sm:text-xs",
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
          className="inline-flex min-h-[40px] shrink-0 items-center self-start rounded-full border border-soft bg-soft px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:border-white/15 hover:text-foreground sm:self-auto sm:border-0 sm:bg-transparent sm:px-0"
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
