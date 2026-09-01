import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold text-text-primary md:text-6xl">
            Featured Projects
          </h1>

          <p className="mt-5 text-base leading-8 text-text-secondary">
            A collection of real-world projects focused on clean interfaces,
            responsive experiences, and practical business requirements.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}