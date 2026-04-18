"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]"
    />
  ),
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div className="absolute inset-0 -z-10" aria-hidden>
        <HeroScene />
      </div>

      <div className="container relative grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-soft bg-soft px-3 py-1 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            {profile.name}.
            <br />
            <span className="bg-gradient-to-br from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              {profile.title}.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-lg text-muted md:text-xl"
          >
            {profile.tagline} I build fast, accessible products with a
            designer&apos;s eye and an engineer&apos;s discipline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </motion.div>
        </div>

        <div className="relative hidden h-[420px] lg:col-span-5 lg:block">
          {/* 3D scene renders behind; this column reserves space and adds a subtle frame */}
          <div className="pointer-events-none absolute inset-6 rounded-3xl border border-soft" />
          <div className="pointer-events-none absolute inset-0 animate-floaty">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted"
        aria-hidden
      >
        scroll
      </div>
    </section>
  );
}
