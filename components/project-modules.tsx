"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownUp, Shuffle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
      <div className="grid gap-20 md:gap-32">
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
            <ImageFrame src={viewerImage} alt={`${project.title} enlarged image`} className="h-full w-full bg-transparent" fit="contain" />
          </button>
        </div>
      ) : null}
    </>
  );
}

function ratioFrom(value?: string) {
  if (!value) return 1;
  const [width, height] = value.split("/").map(Number);
  return width > 0 && height > 0 ? width / height : 1;
}

function ProjectModuleRenderer({ module, onOpen }: { module: ProjectModule; onOpen: (src: string) => void }) {
  if (module.type === "fullImage") {
    const ratio = ratioFrom(module.aspectRatio);
    const maxWidth = module.maximized || ratio >= 0.92 ? "min(100%, 1600px)" : `min(100%, ${Math.round(ratio * 78 * 10) / 10}vh)`;

    return (
      <figure className="page-x">
        <div className="mx-auto" style={{ maxWidth }}>
          <button className="block w-full focus-ring" type="button" onClick={() => onOpen(module.image)}>
            <ImageFrame
              src={module.image}
              alt={module.caption}
              className={`w-full bg-transparent ${module.maximized ? "" : "max-h-[78vh]"}`}
              fit={module.fit ?? "contain"}
              style={{ aspectRatio: module.aspectRatio ?? "16 / 9" }}
            />
          </button>
          <figcaption className="meta-label mt-3 flex justify-between border-t hairline pt-3">
            <span>{module.caption}</span>
            <span>Open image</span>
          </figcaption>
        </div>
      </figure>
    );
  }

  if (module.type === "twoColumnImages") {
    return (
      <section className="page-x mx-auto w-full max-w-[1680px]">
        {module.heading ? (
          <div className="site-grid mb-10 border-t hairline pt-5">
            <p className="meta-label col-span-12 md:col-span-3">Concept Study</p>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <h2 className="text-3xl md:text-5xl">{module.heading}</h2>
              {module.text ? <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">{module.text}</p> : null}
            </div>
          </div>
        ) : null}
        <div className="grid gap-6 md:grid-cols-2">
          {module.images.map((image) => (
            <figure key={image.src}>
              <button className="block w-full focus-ring" type="button" onClick={() => onOpen(image.src)}>
                <ImageFrame
                  src={image.src}
                  alt={image.caption}
                  className="w-full max-h-[72vh] bg-transparent"
                  fit="contain"
                  style={{ aspectRatio: image.aspectRatio ?? "4 / 5" }}
                />
              </button>
              <figcaption className="meta-label mt-3 border-t hairline pt-3">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }

  if (module.type === "textImage") {
    return (
      <section className="page-x mx-auto w-full max-w-[1680px]">
        <div className="site-grid items-center border-y hairline py-8 md:py-14">
          <div className="col-span-12 md:col-span-4 md:col-start-1">
            <p className="meta-label">Concept / Narrative</p>
            <h2 className="mt-4 text-3xl md:text-5xl">{module.heading}</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted md:text-lg md:leading-8">{module.text}</p>
          </div>
          <button className="col-span-12 block focus-ring md:col-span-7 md:col-start-6" type="button" onClick={() => onOpen(module.image)}>
            <ImageFrame
              src={module.image}
              alt={module.heading}
              className="w-full max-h-[72vh] bg-transparent"
              fit="contain"
              style={{ aspectRatio: module.aspectRatio ?? "5 / 4" }}
            />
          </button>
        </div>
      </section>
    );
  }

  if (module.type === "drawing") {
    return (
      <section className="page-x mx-auto w-full max-w-[1680px]">
        <div className="mb-4 flex items-end justify-between border-b hairline pb-3">
          <h2 className="text-2xl md:text-4xl">{module.title}</h2>
          <p className="meta-label">{module.note}</p>
        </div>
        <button className="block w-full focus-ring" type="button" onClick={() => onOpen(module.image)}>
          <ImageFrame src={module.image} alt={module.title} className="aspect-[16/9] max-h-[78vh] w-full bg-transparent" fit="contain" />
        </button>
      </section>
    );
  }

  if (module.type === "airportDiagram") {
    return <AirportDiagram module={module} onOpen={onOpen} />;
  }

  if (module.type === "simulationVideo") {
    return <SimulationVideo module={module} />;
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
        <div className="relative mx-auto max-w-[1500px]">
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
          <li key={item} className="border-b hairline pb-3 text-lg">{item}</li>
        ))}
      </ul>
    </section>
  );
}

function AirportDiagram({
  module,
  onOpen
}: {
  module: Extract<ProjectModule, { type: "airportDiagram" }>;
  onOpen: (src: string) => void;
}) {
  const [time, setTime] = useState(0);
  const [scale, setScale] = useState(0);
  const index = scale * 3 + time;
  const timeLabels = ["Before transit center", "Current condition", "Extended proposal"];
  const scaleLabels = ["Site", "District", "Urban field"];

  return (
    <section className="page-x mx-auto w-full max-w-[1680px]">
      <div className="border-y hairline py-6 md:py-10">
        <div className="site-grid">
          <div className="col-span-12 flex flex-col justify-between md:col-span-3">
            <div>
              <p className="meta-label">Interactive Atlas / 01</p>
              <h2 className="mt-4 text-3xl md:text-5xl">{module.title}</h2>
              <p className="mt-5 max-w-sm leading-7 text-muted">{module.description}</p>
            </div>
            <div className="mt-8 border-t hairline pt-4">
              <p className="meta-label">Current reading</p>
              <p className="mt-2 text-lg">{scaleLabels[scale]} · {timeLabels[time]}</p>
              <p className="meta-label mt-2">Frame {String(index + 1).padStart(2, "0")} / 09</p>
            </div>
          </div>

          <div className="col-span-12 mt-4 md:col-span-8 md:col-start-5 md:mt-0">
            <div className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:gap-6">
              <div className="flex flex-col items-center justify-between py-2">
                <span className="meta-label [writing-mode:vertical-rl]">Urban field</span>
                <input
                  className="architectural-range architectural-range-vertical"
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={scale}
                  aria-label="Map scale"
                  onChange={(event) => setScale(Number(event.target.value))}
                />
                <span className="meta-label [writing-mode:vertical-rl]">Site</span>
              </div>
              <button className="relative block aspect-square w-full overflow-hidden bg-white focus-ring" type="button" onClick={() => onOpen(module.images[index])}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={module.images[index]}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.24 }}
                  >
                    <ImageFrame src={module.images[index]} alt={`${scaleLabels[scale]}, ${timeLabels[time]}`} className="h-full w-full bg-white" fit="contain" />
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
            <div className="ml-[60px] mt-5 md:ml-[88px]">
              <input
                className="architectural-range w-full"
                type="range"
                min="0"
                max="2"
                step="1"
                value={time}
                aria-label="Project timeline"
                onChange={(event) => setTime(Number(event.target.value))}
              />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {timeLabels.map((label, labelIndex) => (
                  <span key={label} className={`meta-label ${labelIndex === 1 ? "text-center" : labelIndex === 2 ? "text-right" : ""}`}>{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimulationVideo({ module }: { module: Extract<ProjectModule, { type: "simulationVideo" }> }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const queuedPlayback = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prepareResult = () => {
      if (!Number.isFinite(video.duration)) return;

      if (queuedPlayback.current) {
        queuedPlayback.current = false;
        video.currentTime = 0;
        void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        return;
      }

      video.currentTime = Math.max(0, video.duration - 0.05);
      video.pause();
      setIsPlaying(false);
    };

    if (video.readyState >= 1) {
      prepareResult();
    } else {
      video.addEventListener("loadedmetadata", prepareResult, { once: true });
    }

    return () => video.removeEventListener("loadedmetadata", prepareResult);
  }, [current]);

  const randomize = () => {
    if (module.videos.length < 2) return;
    let next = current;
    while (next === current) next = Math.floor(Math.random() * module.videos.length);
    queuedPlayback.current = true;
    setCurrent(next);
  };

  return (
    <section className="page-x mx-auto w-full max-w-[1680px]">
      <div className="site-grid items-end border-y hairline py-6 md:py-10">
        <div className="col-span-12 md:col-span-3">
          <p className="meta-label">Generative Study / 02</p>
          <h2 className="mt-4 text-3xl md:text-5xl">{module.title}</h2>
          <p className="mt-5 max-w-sm leading-7 text-muted">{module.description}</p>
          <div className="mt-8 flex items-center justify-between border-t hairline pt-4">
            <span className="meta-label">Simulation {String(current + 1).padStart(2, "0")} / {String(module.videos.length).padStart(2, "0")}</span>
            <ArrowDownUp size={16} aria-hidden="true" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <div className="relative">
            <video
              key={module.videos[current]}
              ref={videoRef}
              className="simulation-video aspect-video w-full bg-ink object-cover"
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              aria-label={`Simulation ${current + 1} ${isPlaying ? "playing" : "result"}`}
              onEnded={() => setIsPlaying(false)}
              onContextMenu={(event) => event.preventDefault()}
            >
              <source src={module.videos[current]} type="video/mp4" />
            </video>
            <span className="meta-label pointer-events-none absolute right-3 top-3 border border-ink/30 bg-paper/90 px-3 py-2 text-ink">
              {isPlaying ? "Generating" : `Result ${String(current + 1).padStart(2, "0")}`}
            </span>
          </div>
          <button
            className="focus-ring mt-4 inline-flex items-center gap-8 border border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-paper"
            type="button"
            onClick={randomize}
          >
            <span className="meta-label text-current">Generate another result</span>
            <Shuffle size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
