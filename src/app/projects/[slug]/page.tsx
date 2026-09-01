import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Back */}
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
        >
          ← Back to projects
        </Link>

        {/* Header */}
        <div className="mb-10 max-w-4xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Project {String(project.id).padStart(2, "0")}
          </p>

          <h1 className="text-4xl font-bold text-text-primary md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary">
            {project.description}
          </p>
        </div>

        {/* Project Preview */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            width={1600}
            height={1000}
            className="h-auto w-full object-cover object-top"
            priority
          />
        </div>

        {/* Project Information */}
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_280px]">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              About the project
            </h2>

            <p className="max-w-3xl leading-8 text-text-secondary">
              {project.description}
            </p>
          </div>

          <aside className="rounded-2xl border border-border bg-bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Technologies
            </h3>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Visit Live Website ↗
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}