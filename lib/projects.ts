export type ProjectCategory = "housing" | "civic" | "cultural" | "workplace" | "research";

export type ProjectModule =
  | { type: "fullImage"; image: string; caption: string; fit?: "cover" | "contain"; aspectRatio?: string }
  | { type: "twoColumnImages"; images: { src: string; caption: string }[] }
  | { type: "textImage"; heading: string; text: string; image: string }
  | { type: "drawing"; title: string; image: string; note: string }
  | { type: "gallery"; images: string[] }
  | { type: "video"; title: string; poster: string }
  | { type: "contribution"; items: string[] };

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  location: string;
  status: string;
  role: string;
  featured: boolean;
  cover: string;
  summary: string;
  modules: ProjectModule[];
};

const images = [
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
];

export const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "housing", label: "Housing" },
  { value: "civic", label: "Civic" },
  { value: "cultural", label: "Cultural" },
  { value: "workplace", label: "Workplace" },
  { value: "research", label: "Research" }
];

const dancingTheaterImage = (file: string) => `/images/project-03-dancing-theater/${file}`;

const dancingTheater: Project = {
  slug: "project-03",
  title: "Dancing Theater",
  category: "cultural",
  year: "TBD",
  location: "Location TBD",
  status: "Academic Project",
  role: "Design, drawings, physical model, visualization",
  featured: true,
  cover: dancingTheaterImage("cover.png"),
  summary: "Project introduction placeholder. Final project description and design narrative will be added later.",
  modules: [
    {
      type: "fullImage",
      image: dancingTheaterImage("cover.png"),
      caption: "Exterior visualization.",
      fit: "contain",
      aspectRatio: "1050 / 743"
    },
    {
      type: "textImage",
      heading: "Information Flow",
      text: "Placeholder text for the project's research, performance typologies, and spatial concept.",
      image: dancingTheaterImage("concept-information-flow.jpg")
    },
    {
      type: "twoColumnImages",
      images: [
        { src: dancingTheaterImage("diagram-form-assets.png"), caption: "Form asset study." },
        { src: dancingTheaterImage("process-composition-study.png"), caption: "Composition study." }
      ]
    },
    {
      type: "fullImage",
      image: dancingTheaterImage("model-overview-01.png"),
      caption: "Physical model overview 01."
    },
    {
      type: "fullImage",
      image: dancingTheaterImage("model-overview-02.png"),
      caption: "Physical model overview 02."
    },
    {
      type: "fullImage",
      image: dancingTheaterImage("model-detail-01.png"),
      caption: "Physical model detail."
    },
    {
      type: "fullImage",
      image: dancingTheaterImage("model-elevations-01.png"),
      caption: "Physical model elevations.",
      fit: "contain",
      aspectRatio: "1428 / 1306"
    },
    {
      type: "twoColumnImages",
      images: [
        { src: dancingTheaterImage("plan-top-floor-lobby.png"), caption: "Top floor plan / lobby." },
        { src: dancingTheaterImage("plan-top-floor-lobby-portfolio.png"), caption: "Top floor plan / portfolio layout." }
      ]
    },
    {
      type: "drawing",
      title: "Black Box Theaters",
      image: dancingTheaterImage("section-black-box-theaters.png"),
      note: "Section"
    },
    {
      type: "contribution",
      items: ["Concept development", "Physical and digital modeling", "Drawings and presentation package"]
    }
  ]
};

export const projects: Project[] = Array.from({ length: 12 }, (_, index) => {
  if (index === 2) return dancingTheater;

  const category = categories[(index % (categories.length - 1)) + 1].value as ProjectCategory;
  return {
    slug: `project-${String(index + 1).padStart(2, "0")}`,
    title: `Project Placeholder ${String(index + 1).padStart(2, "0")}`,
    category,
    year: `${2021 + (index % 5)}`,
    location: ["Los Angeles", "Chicago", "New York", "Seattle"][index % 4],
    status: ["Academic", "Competition", "Built Study"][index % 3],
    role: "Design, drawings, model, visualization",
    featured: index < 5,
    cover: images[index % images.length],
    summary: "Placeholder project summary for layout testing, editorial hierarchy, and responsive behavior.",
    modules: [
      { type: "fullImage", image: images[index % images.length], caption: "Full-width image placeholder." },
      {
        type: "twoColumnImages",
        images: [
          { src: images[(index + 1) % images.length], caption: "Process image placeholder." },
          { src: images[(index + 2) % images.length], caption: "Material study placeholder." }
        ]
      },
      {
        type: "textImage",
        heading: "Design Framework",
        text: "Placeholder text describing design intent, constraints, spatial strategy, and architectural logic.",
        image: images[(index + 3) % images.length]
      },
      { type: "drawing", title: "Drawing Module", image: images[(index + 4) % images.length], note: "Plan, section, diagram, or detail placeholder." },
      { type: "gallery", images: [images[0], images[1], images[2], images[3]] },
      { type: "video", title: "Video Module", poster: images[(index + 5) % images.length] },
      { type: "contribution", items: ["Concept development", "Physical and digital modeling", "Drawings and presentation package"] }
    ]
  };
});

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length]
  };
}
