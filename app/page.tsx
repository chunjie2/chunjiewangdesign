import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageFrame } from "@/components/image-frame";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <section className="page-x flex min-h-screen items-end pb-10 pt-[var(--nav-height)]">
        <div className="site-grid w-full items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="meta-label">Junior Architectural Designer</p>
            <h1 className="mt-5 text-6xl leading-[0.94] md:text-8xl lg:text-9xl">Selected architectural works and spatial research.</h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <ImageFrame src={featured[0].cover} alt={`${featured[0].title} cover image`} className="aspect-[4/5] md:aspect-[3/4]" priority />
          </div>
        </div>
      </section>

      <section className="page-x py-24">
        <SectionHeading eyebrow="Selected Work" title="An editorial overview of studio, competition, research, and professional projects." />
        <div className="mt-12 grid gap-12 md:grid-cols-12">
          {featured.map((project, index) => (
            <ScrollReveal key={project.slug} className={index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5 md:pt-24" : "md:col-span-4"}>
              <ProjectCard project={project} index={index} featured={index === 0} />
            </ScrollReveal>
          ))}
        </div>
        <Link href="/projects" className="focus-ring mt-14 inline-flex items-center gap-3 border-b border-ink pb-2 text-lg">
          View full project archive <ArrowRight size={18} />
        </Link>
      </section>

      <section className="page-x pb-24">
        <div className="site-grid border-t hairline pt-8">
          <p className="meta-label col-span-12">About Preview</p>
          <ImageFrame
            src="/images/profile/avatar.png"
            alt="Illustrated portrait of Chunjie Wang"
            className="col-span-5 aspect-square bg-transparent md:col-span-2"
            fit="contain"
          />
          <div className="col-span-12 md:col-span-7 md:col-start-4">
            <p className="text-3xl leading-tight md:text-5xl">
              Hi, I’m Chunjie Wang, an architectural designer based in Los Angeles and trained at SCI-Arc. I explore how architecture can shape experience, identity, and the way we engage with the world.
            </p>
            <Link href="/about" className="meta-label mt-8 inline-block border-b border-ink pb-2 text-ink">
              More about practice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
