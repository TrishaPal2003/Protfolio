import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">
            A selection of websites and digital experiences I have designed
            and developed for real-world use cases.
          </p>
        </div>
      </Reveal>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}