
import Image from "next/image";
import Reveal from "./Reveal";

const highlights = [
  {
    label: "Education",
    value: "B.Sc. in CSE",
  },
  {
    label: "Focus",
    value: "Full-Stack & Backend",
  },
  {
    label: "Core Stack",
    value: "React · Django · Python",
  },
  {
    label: "Currently Learning",
    value: "AI / ML & System Design",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      {/* Section heading */}
      <Reveal>
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Building with purpose.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="overflow-hidden rounded-2xl border border-border bg-bg-card">
          <div className="grid md:grid-cols-[280px_1fr]">
            {/* Profile Image */}
            <div className="relative min-h-[320px] bg-bg">
              <Image
                src="/images/trisha.jpg"
                alt="Trisha Pal"
                fill
                sizes="(min-width: 768px) 280px, 100vw"
                className="object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="max-w-3xl">
                <p className="text-lg font-medium leading-8 text-text-primary md:text-xl">
                  I&apos;m a Computer Science &amp; Engineering student focused
                  on building reliable backend systems and thoughtful
                  full-stack experiences.
                </p>

                <div className="mt-6 space-y-4 text-sm leading-7 text-text-secondary">
                  <p>
                    I&apos;m currently pursuing my B.Sc. in Computer Science
                    &amp; Engineering at CCN University of Science &amp;
                    Technology, Bangladesh. My foundation in algorithms and
                    problem-solving strongly influences the way I approach
                    software development.
                  </p>

                  <p>
                    My primary interests are backend engineering and
                    full-stack development. I work with technologies such as
                    Python, Django, React, JavaScript, and SQL to turn ideas
                    into practical, user-focused applications.
                  </p>

                  <p>
                    Alongside development, I regularly practice competitive
                    programming and explore AI/ML, system design, and software
                    engineering practices. I&apos;m continuously improving my
                    ability to design, build, test, and ship better software.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="bg-bg-card p-5 transition-colors hover:bg-bg"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-text-primary">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
