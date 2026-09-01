
"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

const ROLES = [
  "Full-Stack Developer",
  "Backend Engineer",
  "Competitive Programmer",
  "ICPC 2024 Dhaka Regional",
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

        <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent-soft/20 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg)_75%)]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-6 py-20 md:py-28">
        <div className="w-full">
          {/* Availability */}
          <div className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span>Open to opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I&apos;m{" "}
            <span className="text-accent">Trisha Pal.</span>
          </h1>

          {/* Positioning */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
            I build scalable web applications, reliable backend systems, and
            intuitive digital experiences — turning complex problems into
            practical software.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent-soft px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-accent-soft/20"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Terminal */}
          <div className="mt-12 max-w-xl overflow-hidden rounded-xl border border-border bg-bg-card/90 font-mono text-sm shadow-2xl shadow-black/20 backdrop-blur">
            {/* Terminal header */}
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

              <span className="ml-2 text-xs text-text-secondary">
                trisha@portfolio ~
              </span>
            </div>

            {/* Terminal body */}
            <div className="space-y-2 px-5 py-5">
              <p className="text-text-secondary">
                <span className="text-accent">trisha@dev</span>
                <span>:~$ </span>
                whoami
              </p>

              <p className="text-text-primary">
                {typed}
                <span
                  aria-hidden="true"
                  className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle text-transparent"
                >
                  |
                </span>
              </p>

              <p className="pt-2 text-text-secondary">
                <span className="text-accent">trisha@dev</span>
                <span>:~$ </span>
                <span className="text-text-secondary/60">
                  building something meaningful...
                </span>
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-accent"
          >
            <span>Scroll to explore</span>
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

