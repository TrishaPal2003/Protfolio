import Reveal from "./Reveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="mb-8 text-2xl font-bold text-accent md:text-3xl">About</h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="rounded-xl border border-border bg-bg-card p-8 transition-colors hover:border-accent/40">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
  <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-lg bg-border/40 md:mx-0 md:h-52 md:w-52">
    <Image
      src="/images/trisha1.jpg"
      alt="Trisha Pal"
      fill
      sizes="(min-width: 768px) 208px, 192px"
      className="object-cover"
    />
  </div>
            <div className="space-y-4 text-text-secondary">
              <p>
                I&apos;m a Computer Science &amp; Engineering student (2023&ndash;2027)
                at CCN University of Science &amp; Technology, Bangladesh, currently
                in my 6th semester. My coursework is grounded in problem-solving and
                algorithmic thinking, which carries directly into how I build
                production software.
              </p>
              <p>
                I focus on the intersection of solid backend logic and clean user
                experience &mdash; shipping full-stack features with React and
                Django, and sharpening my skills through a 4-month AI/ML course and
                problem solving on LeetCode and Codeforces.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
