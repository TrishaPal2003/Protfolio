"use client";

import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms — pass index * 80 for lists. */
  delay?: number;
  className?: string;
}

/**
 * Wraps a section/element in a fade-up-on-scroll animation.
 * One mechanism reused everywhere so motion stays consistent instead
 * of every section inventing its own animation.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
