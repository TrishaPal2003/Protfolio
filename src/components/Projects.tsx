import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="mb-8 text-2xl font-bold text-accent md:text-3xl">
          Featured Projects
        </h2>
      </Reveal>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
