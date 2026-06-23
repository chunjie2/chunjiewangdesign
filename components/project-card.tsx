import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block focus-ring">
      <ImageFrame
        src={project.cover}
        alt={`${project.title} cover image`}
        className={featured ? "aspect-[4/5] md:aspect-[16/10]" : "aspect-[4/5]"}
        priority={index < 2}
      />
      <div className="mt-4 flex items-start justify-between gap-4 border-t hairline pt-3">
        <div>
          <p className="text-lg leading-tight">{project.title}</p>
          <p className="meta-label mt-2">{project.location}</p>
        </div>
        <p className="meta-label">{String(index + 1).padStart(2, "0")}</p>
      </div>
    </Link>
  );
}
