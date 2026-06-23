import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReadingProgress, ProjectModules } from "@/components/project-modules";
import { getAdjacentProjects, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary ?? "Project detail template."
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <ReadingProgress />
      <article className="pb-24 pt-[var(--nav-height)]">
        <header className="page-x site-grid min-h-[72vh] items-end border-b hairline pb-10 pt-24">
          <div className="col-span-12 md:col-span-8">
            <p className="meta-label">{project.category} / {project.year}</p>
            <h1 className="mt-5 text-6xl leading-none md:text-8xl">{project.title}</h1>
          </div>
          <dl className="col-span-12 grid grid-cols-2 gap-x-8 gap-y-5 md:col-span-3 md:col-start-10">
            {[
              ["Location", project.location],
              ["Status", project.status],
              ["Role", project.role],
              ["Year", project.year]
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="meta-label">{label}</dt>
                <dd className="mt-1 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </header>
        <section className="page-x site-grid py-20">
          <p className="meta-label col-span-12 md:col-span-3">Introduction</p>
          <p className="col-span-12 max-w-4xl text-3xl leading-tight md:col-span-8 md:text-5xl">{project.summary}</p>
        </section>
        <ProjectModules project={project} />
      </article>
      <nav className="page-x site-grid border-t hairline py-10" aria-label="Project navigation">
        <Link href={`/projects/${previous.slug}`} className="focus-ring col-span-6">
          <span className="meta-label inline-flex items-center gap-2"><ArrowLeft size={14} /> Previous</span>
          <p className="mt-2 text-2xl">{previous.title}</p>
        </Link>
        <Link href={`/projects/${next.slug}`} className="focus-ring col-span-6 text-right">
          <span className="meta-label inline-flex items-center gap-2">Next <ArrowRight size={14} /></span>
          <p className="mt-2 text-2xl">{next.title}</p>
        </Link>
      </nav>
    </>
  );
}
