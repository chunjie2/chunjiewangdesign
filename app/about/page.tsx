import type { Metadata } from "next";
import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description: "About page structure for experience, education, skills, resume, and contact links."
};

export default function AboutPage() {
  return (
    <section className="page-x pb-24 pt-32">
      <div className="site-grid items-end border-b hairline pb-12">
        <div className="col-span-12 md:col-span-7">
          <p className="meta-label">About</p>
          <h1 className="mt-4 text-5xl leading-none md:text-7xl">Designer profile placeholder.</h1>
        </div>
        <ImageFrame src={projects[2].cover} alt="About portrait placeholder" className="col-span-12 aspect-[4/5] md:col-span-4 md:col-start-9" priority />
      </div>
      <div className="site-grid border-b hairline py-14">
        <p className="meta-label col-span-12 md:col-span-3">Introduction</p>
        <p className="col-span-12 text-3xl leading-tight md:col-span-7">
          Placeholder biography text for professional positioning, design interests, technical strengths, and collaborative values.
        </p>
      </div>
      <ProfileSection title="Experience" items={["Studio / Office Placeholder", "Internship Placeholder", "Research Assistant Placeholder"]} />
      <ProfileSection title="Education" items={["Architecture Degree Placeholder", "Exchange Studio Placeholder"]} />
      <ProfileSection title="Skills" items={["Design: Rhino, Revit, Adobe Suite", "Visualization: Rendering, diagrams, models", "Technical: drawings, documentation, coordination"]} />
      <div className="pt-12">
        <Link href="/contact" className="focus-ring inline-block border-b border-ink pb-2 text-lg">
          Resume and contact links
        </Link>
      </div>
    </section>
  );
}

function ProfileSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="site-grid border-b hairline py-10">
      <h2 className="meta-label col-span-12 md:col-span-3">{title}</h2>
      <div className="col-span-12 grid gap-4 md:col-span-7">
        {items.map((item, index) => (
          <div key={item} className="flex justify-between gap-8 border-b border-line/70 pb-3 last:border-b-0">
            <p className="text-xl">{item}</p>
            <p className="meta-label">{String(index + 1).padStart(2, "0")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
