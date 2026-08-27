"use client";

import { useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

const EMAIL = "trishapal160@gmail.com";
const ROLES = [
  "Full-Stack Developer",
  "Competitive Programmer",
  "React & Django Engineer",
  "ICPC 2024 Dhaka Regional",
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const typed = useTypewriter(ROLES);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail without permissions; fail silently.
    }
  }

  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-20 pt-20 md:pt-28"
    >
      {/* Signature element: faint animated grid + drifting glow, evokes an
          IDE minimap rather than literal decoration. Confined to the hero
          so the rest of the page stays quiet. */}
      

      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
        Trisha Pal
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
        Building scalable web applications and solving complex problems with code.
        Bridging the gap between robust engineering and intuitive design.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent-soft px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:opacity-90"
        >
          View Projects
        </a>
        <a
          // type="button"
          // onClick={handleCopyEmail}
          href="#contact"
          className="rounded-md border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent"
        >
          {/* {copied ? "Copied!" : "Copy Email"} */}
          Contact me
        </a>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
        <div className="absolute left-1/4 top-0 h-72 w-72 animate-drift rounded-full bg-accent-soft/20 blur-3xl motion-reduce:animate-none" />
      </div>

      {/* Terminal card — the one bold move on this page. Everything else
          around it stays plain text and flat buttons. */}
      <div className="mb-5 mt-10 max-w-lg animate-fade-up rounded-lg border border-border bg-bg-card/80 font-mono text-sm shadow-lg shadow-black/30 backdrop-blur">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 text-xs text-text-secondary">whoami.sh</span>
        </div>
        <div className="px-4 py-4 text-text-secondary">
          <p>
            <span className="text-accent">trisha@dev</span>
            <span className="text-text-secondary">:~$ </span>
            whoami
          </p>
          <p className="mt-1 text-text-primary">
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle text-transparent">
              |
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
