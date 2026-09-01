import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "narayanpur-high-school",
    title: "Narayanpur High School",
    description:
      "A modern school website built to centralize academic and institutional information, featuring class routines, teacher profiles, notices, school history, photo galleries, and essential contact information for students, parents, and visitors.",
    image: "/images/School.png",
    live: "https://www.narayanpurhighschool.edu.bd/",
    icon: "school",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: 2,
    slug: "advocate-depankar-chakraborty",
    title: "Advocate Depankar Chakraborty",
    description:
      "A modern legal-services platform built to establish professional credibility and generate client enquiries, with structured practice areas, case results, legal content, advocate profiles, and consultation workflows.",
    image: "/images/Advocate.png",
    live: "https://portfolio1-depankar-chakraborty-adv.vercel.app",
    icon: "legal",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
  },
  {
    id: 3,
    slug: "sanjoy-dental-care",
    title: "Sanjoy Dental Care",
    description:
      "A modern dental clinic website designed to build patient trust and drive appointment bookings, featuring comprehensive dental services, treatment information, patient testimonials, clinic details, working hours, and clear contact and appointment call-to-actions.",
    image: "/images/Dental.png",
    live: "https://portfolio2-sanjay-paul-dentist.vercel.app/",
    icon: "dental",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
  },
];