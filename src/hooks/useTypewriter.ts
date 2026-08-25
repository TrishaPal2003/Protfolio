"use client";

import { useEffect, useState } from "react";

interface Options {
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

/**
 * Cycles through a list of strings with a type/pause/delete loop.
 * Used once, in the hero terminal line — not reused elsewhere, so it
 * reads as a deliberate accent rather than a site-wide gimmick.
 */
export function useTypewriter(words: string[], options: Options = {}) {
  const { typingSpeedMs = 55, deletingSpeedMs = 30, pauseMs = 1400 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setText(words[0] ?? "");
      return;
    }

    const currentWord = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const t = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          typingSpeedMs
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), pauseMs);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), pauseMs / 3);
      return () => clearTimeout(t);
    }

    // deleting
    if (text.length > 0) {
      const t = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deletingSpeedMs
      );
      return () => clearTimeout(t);
    }
    setWordIndex((i) => (i + 1) % words.length);
    setPhase("typing");
  }, [text, phase, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return text;
}
