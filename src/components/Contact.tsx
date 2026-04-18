import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" className="pb-28 md:pb-40">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-soft bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 p-6 sm:p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:text-xs">
              05 — Contact
            </div>
            <h2 className="mt-3 text-balance text-[clamp(1.75rem,5vw,3rem)] font-semibold tracking-tight md:mt-4 md:text-5xl">
              Let&apos;s build something that matters.
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-base text-muted md:mt-4 md:text-lg">
              I&apos;m always happy to talk about interesting problems, new
              roles, or collaborations. The fastest way to reach me is email.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex min-h-[48px] max-w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                <span className="truncate">{profile.email}</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-soft bg-soft px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-soft bg-soft px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
