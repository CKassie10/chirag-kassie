import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-soft py-10">
      <div className="container flex flex-col items-start justify-between gap-4 text-sm text-muted md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind, and React Three Fiber.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
