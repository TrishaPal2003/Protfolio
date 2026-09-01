import Image from "next/image";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent-soft/10">
      <div className="grid md:grid-cols-[1.1fr_1fr]">
        {/* Project Image */}
        <div className="relative min-h-[240px] overflow-hidden bg-bg">
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Project Content */}
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-3 flex items-start justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Project {String(project.id).padStart(2, "0")}
              </span>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-bg"
                aria-label={`Visit ${project.title}`}
              >
                ↗
              </a>
            </div>

            <h3 className="mb-3 text-xl font-bold text-text-primary md:text-2xl">
              {project.title}
            </h3>

            <p className="mb-6 text-sm leading-7 text-text-secondary">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary transition-colors group-hover:border-accent/30 group-hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}