"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ImageFrame } from "@/components/image-frame";
import type { Project, ProjectModule } from "@/lib/projects";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="fixed left-0 top-[var(--nav-height)] z-40 h-px bg-ink" style={{ width: `${progress}%` }} />;
}

export function ProjectModules({ project }: { project: Project }) {
  const [viewerImage, setViewerImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-24">
        {project.modules.map((module, index) => (
          <ProjectModuleRenderer key={`${module.type}-${index}`} module={module} onOpen={setViewerImage} />
        ))}
      </div>
      {viewerImage ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-5" role="dialog" aria-modal="true">
          <button className="focus-ring absolute right-5 top-5 text-paper" type="button" aria-label="Close viewer" onClick={() => setViewerImage(null)}>
            <X size={28} />
          </button>
          <button className="relative h-full w-full max-w-7xl" type="button" onClick={() => setViewerImage(null)}>
            <ImageFrame src={viewerImage} alt={`${project.title} enlarged image`} className="h-full w-full bg-transparent" />
          </button>
        </div>
      ) : null}
    </>
  );
}

function ProjectModuleRenderer({ module, onOpen }: { module: ProjectModule; onOpen: (src: string) => void }) {
  if (module.type === "fullImage") {
    return (
      <figure>
        <button className="block w-full focus-ring" type="button" onClick={() => onOpen(module.image)}>
          <ImageFrame src={module.image} alt={module.caption} className="aspect-[16/9]" />
        </button>
        <figcaption className="page-x meta-label mt-3">{module.caption}</figcaption>
      </figure>
    );
  }

  if (module.type === "twoColumnImages") {
    return (
      <div className="page-x grid gap-6 md:grid-cols-2">
        {module.images.map((image) => (
          <figure key={image.src}>
            <button className="block w-full focus-ring" type="button" onClick={() => onOpen(image.src)}>
              <ImageFrame src={image.src} alt={image.caption} className="aspect-[4/5]" />
            </button>
            <figcaption className="meta-label mt-3">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

  if (module.type === "textImage") {
    return (
      <section className="page-x site-grid items-start">
        <div className="col-span-12 md:col-span-4 md:col-start-2">
          <p className="meta-label">Module</p>
          <h2 className="mt-4 text-3xl">{module.heading}</h2>
          <p className="mt-6 max-w-md leading-7 text-muted">{module.text}</p>
        </div>
        <button className="col-span-12 block focus-ring md:col-span-6 md:col-start-7" type="button" onClick={() => onOpen(module.image)}>
          <ImageFrame src={module.image} alt={module.heading} className="aspect-[5/4]" />
        </button>
      </section>
    );
  }

  if (module.type === "drawing") {
    return (
      <section className="page-x">
        <div className="mb-4 flex items-end justify-between border-b hairline pb-3">
          <h2 className="text-2xl">{module.title}</h2>
          <p className="meta-label">{module.note}</p>
        </div>
        <button className="block w-full focus-ring" type="button" onClick={() => onOpen(module.image)}>
          <ImageFrame src={module.image} alt={module.title} className="aspect-[16/10]" />
        </button>
      </section>
    );
  }

  if (module.type === "gallery") {
    return (
      <section className="page-x grid gap-4 md:grid-cols-4">
        {module.images.map((image, index) => (
          <button key={image} className="block focus-ring" type="button" onClick={() => onOpen(image)}>
            <ImageFrame src={image} alt={`Gallery image ${index + 1}`} className="aspect-[3/4]" />
          </button>
        ))}
      </section>
    );
  }

  if (module.type === "video") {
    return (
      <section className="page-x">
        <div className="relative">
          <ImageFrame src={module.poster} alt={module.title} className="aspect-video" />
          <div className="absolute inset-0 grid place-items-center bg-ink/20 text-paper">
            <span className="meta-label border border-paper px-4 py-3 text-paper">Video Placeholder</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-x site-grid border-y hairline py-10">
      <h2 className="col-span-12 text-3xl md:col-span-4">Personal Contribution</h2>
      <ul className="col-span-12 grid gap-3 md:col-span-7 md:col-start-6">
        {module.items.map((item) => (
          <li key={item} className="border-b hairline pb-3 text-lg">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
