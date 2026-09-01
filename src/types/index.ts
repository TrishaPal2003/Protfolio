export type ProjectIcon = "school" | "blood" | "legal" | "dental";

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  live: string;
  href?: string;
  icon: ProjectIcon;
  tags: string[];
};

export interface SkillGroup {
  title: string;
  icon: "code" | "frontend" | "backend" | "database" | "tools";
  items: string[];
}
