export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  icon: "school" | "blood" | "legal" | "dental";
  href?: string;
}

export interface SkillGroup {
  title: string;
  icon: "code" | "frontend" | "backend" | "database" | "tools";
  items: string[];
}
