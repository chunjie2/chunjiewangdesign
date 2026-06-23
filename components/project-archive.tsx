"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ImageFrame } from "@/components/image-frame";
import { categories, type Project, type ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ViewMode = "grid" | "index";

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [view, setView] = useState<ViewMode>("grid");
  const [hovered, setHovered] = useState<Project | null>(null);
  const filtered = useMemo(() => projects.filter((project) => category === "all" || project.category === category), [category, projects]);

  return (
    <section className="page-x pb-24 pt-32">
      <div className="site-grid border-b hairline pb-8">
        <div className="col-span-12 md:col-span-7">
          <p className="meta-label">Archive</p>
          <h1 className="mt-4 text-5xl leading-none md:text-7xl">Projects</h1>
        </div>
        <div className="col-span-12 flex flex-wrap items-end gap-3 md:col-span-5 md:justify-end">
          {categories.map((item) => (
            <button
              key={item.value}
              className={cn("focus-ring meta-label border-b border-transparent pb-1 transition-colors", category === item.value && "border-ink text-ink")}
              type="button"
              onClick={() => setCategory(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="my-6 flex justify-end gap-2">
        {(["grid", "index"] as ViewMode[]).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setView(mode)}
            className={cn("focus-ring meta-label border px-3 py-2", view === mode ? "border-ink text-ink" : "border-line")}
          >
            {mode}
          </button>
        ))}
      </div>
      {view === "grid" ? (
        <motion.div layout className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <motion.div key={project.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Link href={`/projects/${project.slug}`} className="group block focus-ring">
                  <ImageFrame src={project.cover} alt={`${project.title} cover image`} className="aspect-[4/5]" />
                  <div className="mt-4 flex justify-between border-t hairline pt-3">
                    <div>
                      <p>{project.title}</p>
                      <p className="meta-label mt-2">{project.category} / {project.year}</p>
                    </div>
                    <p className="meta-label">{String(index + 1).padStart(2, "0")}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="relative">
          <div className="hidden md:pointer-events-none md:fixed md:right-12 md:top-1/2 md:z-20 md:block md:h-72 md:w-96 md:-translate-y-1/2">
            {hovered ? <ImageFrame src={hovered.cover} alt={`${hovered.title} preview`} className="h-full w-full" /> : null}
          </div>
          <div className="border-t hairline">
            {filtered.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                onMouseEnter={() => setHovered(project)}
                onMouseLeave={() => setHovered(null)}
                className="site-grid focus-ring border-b hairline py-5 transition-colors hover:bg-white/45"
              >
                <p className="meta-label col-span-2 md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
                <p className="col-span-10 text-2xl md:col-span-5">{project.title}</p>
                <p className="meta-label col-span-6 md:col-span-2">{project.category}</p>
                <p className="meta-label col-span-3 md:col-span-2">{project.location}</p>
                <p className="meta-label col-span-3 text-right md:col-span-2">{project.year}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
