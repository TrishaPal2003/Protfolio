
"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!mobileOpen) return;

      const target = event.target as Node;

      if (mobileRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;

      setMobileOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <a
          href="#top"
          className="font-semibold tracking-tight text-text-primary"
        >
          Trisha Pal
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-sm text-text-secondary md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-text-primary after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Resume - Desktop */}
          <a
            href="/images/resume.pdf"
            className="hidden rounded-md bg-accent-soft px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:block"
          >
            Resume
          </a>

          {/* Hamburger - Mobile */}
          <button
            ref={toggleRef}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((previous) => !previous)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            ref={mobileRef}
            className="absolute left-0 right-0 top-full border-b border-border/60 bg-bg/95 shadow-lg backdrop-blur md:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Resume - Mobile */}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md bg-accent-soft px-4 py-3 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
