import { Project } from "@/types";
import { DropletIcon, SchoolIcon, ScaleIcon, ToothIcon } from "./icons";

const ICON_MAP: Record<Project["icon"], React.ComponentType<{ className?: string }>> = {
  school: SchoolIcon,
  blood: DropletIcon,
  legal: ScaleIcon,
  dental: ToothIcon,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = ICON_MAP[project.icon];

  return (
    <article className="group grid gap-6 rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent-soft/10 md:grid-cols-[220px_1fr]">
      <div className="flex h-40 items-center justify-center rounded-lg bg-bg md:h-full">
        <Icon className="h-10 w-10 text-text-secondary/60 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent/70" />
      </div>

      <div>
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="font-semibold text-text-primary">{project.title}</h3>
          {project.href && (
            <a
              href={project.href}
              className="text-text-secondary transition-colors hover:text-accent"
              aria-label={`Open ${project.title}`}
            >
              ↗
            </a>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-accent">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
