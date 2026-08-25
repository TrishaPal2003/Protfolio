import { skillGroups } from "@/data/skills";
import { SkillGroup } from "@/types";
import {
  BackendIcon,
  CodeIcon,
  DatabaseIcon,
  FrontendIcon,
  ToolsIcon,
} from "./icons";
import Reveal from "./Reveal";

const ICON_MAP: Record<SkillGroup["icon"], React.ComponentType<{ className?: string }>> = {
  code: CodeIcon,
  frontend: FrontendIcon,
  backend: BackendIcon,
  database: DatabaseIcon,
  tools: ToolsIcon,
};

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = ICON_MAP[group.icon];

  return (
    <div className="group rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent-soft/10">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
        <h3 className="font-semibold text-text-primary">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-bg px-3 py-1 text-xs text-text-secondary transition-colors group-hover:border-border/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="mb-8 text-2xl font-bold text-accent md:text-3xl">
          Technical Arsenal
        </h2>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <SkillCard group={group} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
