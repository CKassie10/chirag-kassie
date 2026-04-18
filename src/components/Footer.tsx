import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-soft py-8 pb-[max(env(safe-area-inset-bottom),2rem)] md:py-10">
      <div className="container flex flex-col items-start justify-between gap-4 text-sm text-muted md:flex-row md:items-center">
        <p className="text-pretty">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind, and React Three Fiber.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-[44px] items-center hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
