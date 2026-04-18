"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open; close on Escape.
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the sheet if the viewport grows past the md breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "pt-[env(safe-area-inset-top)]",
        scrolled || open
          ? "border-b border-soft bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex min-h-[44px] items-center gap-2 font-mono text-sm"
          aria-label="Home"
        >
          <span
            className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-transform group-hover:scale-110"
            aria-hidden
          />
          <span className="tracking-tight">
            {profile.name
              .split(" ")
              .map((p) => p[0])
              .join("")
              .toLowerCase()}
            <span className="text-muted">.dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-[44px] items-center rounded-full border border-soft bg-soft px-4 py-2 text-sm transition-colors hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-soft bg-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile sheet: full-viewport overlay so the whole nav feels deliberate on touch */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="md:hidden"
      >
        {/* Backdrop — tap to dismiss */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-16 -z-10 bg-background/60 backdrop-blur-sm"
          tabIndex={-1}
        />
        <div className="border-t border-soft bg-background/95 backdrop-blur-xl pb-[max(env(safe-area-inset-bottom),0.75rem)]">
          <ul className="container flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-[48px] rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-white/5 hover:text-foreground active:bg-white/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-medium text-black"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
