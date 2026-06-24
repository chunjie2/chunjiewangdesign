import type { Metadata } from "next";
import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description: "About Chunjie Wang, an architectural designer based in Los Angeles."
};

export default function AboutPage() {
  return (
    <section className="page-x pb-24 pt-32">
      <div className="site-grid items-end border-b hairline pb-12">
        <div className="col-span-12 md:col-span-7">
          <p className="meta-label">About</p>
          <h1 className="mt-4 text-5xl leading-none md:text-7xl">Chunjie Wang is an architectural designer based in Los Angeles.</h1>
        </div>
        <ImageFrame src="/images/profile/portrait.png" alt="Portrait of Chunjie Wang" className="col-span-12 aspect-[4/5] md:col-span-4 md:col-start-9" priority />
      </div>
      <div className="site-grid border-b hairline py-14">
        <p className="meta-label col-span-12 md:col-span-3">Introduction</p>
        <p className="col-span-12 text-3xl leading-tight md:col-span-7">
          I am an architectural designer with experience across conceptual design, schematic design, design development, construction documentation, visualization, and presentation work. My background combines architectural studies in China and the United States with design research, competition work, and professional practice.
        </p>
      </div>
      <ProfileSection
        title="Experience"
        items={[
          "WHY Architecture, Intern / 2025-2026",
          "Louvre Museum Byzantine Route and Islamic Route: spatial design, schematic design, design development, construction documentation, visualization",
          "OMA Venice Studio / 2024"
        ]}
      />
      <ProfileSection
        title="Education"
        items={[
          "SCI-Arc, M.Arch 1 / 2022-2025",
          "Kean University, International Program / 2019-2020",
          "Wenzhou-Kean University, B.A. Architectural Studies / 2018-2022"
        ]}
      />
      <ProfileSection
        title="Selected Work"
        items={[
          "Living Ruins / 2024",
          "Kinder Space / 2024",
          "Denver SingleStairs / 2024",
          "Architecture, Culture and Agriculture: The Challenges of Urbanization / 2020"
        ]}
      />
      <ProfileSection
        title="Skills"
        items={[
          "Design and modeling: Rhino, Revit, AutoCAD, Grasshopper, Cinema 4D, ZBrush",
          "Visualization: D5 Render, Adobe Suite, Midjourney, Runway",
          "Documentation and presentation: construction drawings, diagrams, layouts, Microsoft Office"
        ]}
      />
      <div className="pt-12">
        <Link href="/contact" className="focus-ring inline-block border-b border-ink pb-2 text-lg">
          Contact and resume details
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
