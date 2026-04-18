"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, FileText } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project, ProjectLink } from "@/data/projects";
import { cn } from "@/lib/cn";

const statusStyle: Record<Project["status"], string> = {
  Live: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30",
  "In Progress": "bg-amber-400/10 text-amber-200 ring-amber-400/30",
  "Case Study": "bg-sky-400/10 text-sky-200 ring-sky-400/30",
  Archived: "bg-white/5 text-muted ring-white/10",
};

const linkIcon = (kind?: ProjectLink["kind"]) => {
  switch (kind) {
    case "source":
      return <GithubIcon className="h-3.5 w-3.5" />;
    case "demo":
      return <PlayCircle className="h-3.5 w-3.5" aria-hidden />;
    case "writeup":
      return <FileText className="h-3.5 w-3.5" aria-hidden />;
    default:
      return <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />;
  }
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-soft bg-soft backdrop-blur-sm"
    >
      {/* Preview area with animated gradient accent */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            project.accent,
          )}
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.15),transparent_45%)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(6,8,15,0.9)_100%)]" aria-hidden />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] ring-1",
              statusStyle[project.status],
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
            {project.status}
          </span>
          <span className="rounded-full bg-black/40 px-2.5 py-1 font-mono text-[11px] text-white/70 ring-1 ring-white/10">
            {project.year}
          </span>
        </div>
        <div className="absolute inset-0 flex items-end p-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
              {project.category}
            </div>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/80">{project.tagline}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <dl className="mt-5 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Problem
            </dt>
            <dd className="mt-1 text-foreground/90">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Solution
            </dt>
            <dd className="mt-1 text-foreground/90">{project.solution}</dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <li
              key={t}
              className="rounded-md border border-soft bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-soft bg-white/[0.03] px-3 py-1.5 text-xs transition-colors hover:border-white/20 hover:bg-white/10"
              >
                {linkIcon(l.kind)}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 transition-opacity group-hover:ring-white/15"
      />
    </motion.article>
  );
}
