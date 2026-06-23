import type { Metadata } from "next";
import { ProjectArchive } from "@/components/project-archive";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project archive with category filtering, grid view, and index view."
};

export default function ProjectsPage() {
  return <ProjectArchive projects={projects} />;
}
