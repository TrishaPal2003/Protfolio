import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "narayanpur-high-school-website",
    title: "Narayanpur High School Website",
    description:
      "Led and delivered the frontend for a 500-student school portal, covering registration, student lists, routines, notice boards, and a gallery. Architected modular React components with a Tailwind system for maintainable, responsive layouts, integrated with backend REST APIs.",
    tags: ["React", "Tailwind CSS", "REST APIs"],
    icon: "school",
  },
  {
    slug: "blood-bank-management-system",
    title: "Blood Bank Management System",
    description:
      "Ongoing project delivering end-to-end CRUD functionality, search, and dynamic interactions. Implemented Google OAuth for secure login and JWT verification.",
    tags: ["Django", "DRF", "React", "Tailwind CSS"],
    icon: "blood",
  },
  {
    slug: "legal-advisor-portal",
    title: "Legal Advisor Portal",
    description:
      "A web application built for a practicing lawyer to manage client interactions, case schedules, and legal resources, with secure document sharing and appointment booking.",
    tags: ["React", "Tailwind CSS", "Django"],
    icon: "legal",
  },
  {
    slug: "dental-care-management",
    title: "Dental Care Management",
    description:
      "A management system for a dental clinic covering patient records, appointment scheduling, treatment tracking, and billing for a streamlined administrative workflow.",
    tags: ["React", "Tailwind CSS", "Django"],
    icon: "dental",
  },
];
