import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" className="pb-40">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-soft bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              05 — Contact
            </div>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s build something that matters.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
              I&apos;m always happy to talk about interesting problems, new
              roles, or collaborations. The fastest way to reach me is email.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
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
