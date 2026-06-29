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

export const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "housing", label: "Housing" },
  { value: "civic", label: "Civic" },
  { value: "cultural", label: "Cultural" },
  { value: "workplace", label: "Workplace" },
  { value: "research", label: "Research" }
];

const projectImage = (folder: string, file: string) => `/images/${folder}/${file}`;

const fullImage = (image: string, caption: string, aspectRatio: string): ProjectModule => ({
  type: "fullImage",
  image,
  caption,
  fit: "contain",
  aspectRatio
});

const coverProject = (folder: string, caption: string, aspectRatio: string): ProjectModule[] => [
  fullImage(projectImage(folder, folder === "project-07-mexico city design school" ? "Cover.png" : "cover.png"), caption, aspectRatio)
];

const urbanFolder = "project-01-urban-threshold";
const louvreFolder = "project-02-the-louvre-byzantine-gallery";
const danceFolder = "project-03-dancing-theater";

export const projects: Project[] = [
  {
    slug: "project-01",
    title: "Urban Threshold",
    category: "research",
    year: "鈥?,
    location: "鈥?,
    status: "Academic Project",
    role: "Design, drawings, physical model, visualization",
    featured: true,
    cover: projectImage(urbanFolder, "cover.png"),
    summary: "Urban Threshold is presented through site, massing, model, axonometric, and visualization studies.",
    modules: [
      fullImage(projectImage(urbanFolder, "cover.png"), "Urban Threshold.", "1645 / 1155"),
      fullImage(projectImage(urbanFolder, "site model.png"), "Site model.", "4961 / 3508"),
      fullImage(projectImage(urbanFolder, "massingconcept.png"), "Massing concept study 01.", "2480 / 3508"),
      fullImage(projectImage(urbanFolder, "massingconcept (2).png"), "Massing concept study 02.", "2481 / 3508"),
      fullImage(projectImage(urbanFolder, "massing model 01.png"), "Massing model.", "1883 / 1168"),
      fullImage(projectImage(urbanFolder, "model01.png"), "Physical model 01.", "1107 / 812"),
      fullImage(projectImage(urbanFolder, "model02.png"), "Physical model 02.", "1026 / 1449"),
      fullImage(projectImage(urbanFolder, "ixomatric.png"), "Axonometric drawing.", "2480 / 3508"),
      fullImage(projectImage(urbanFolder, "render01.png"), "Visualization 01.", "1845 / 1195"),
      fullImage(projectImage(urbanFolder, "render02.png"), "Visualization 02.", "1845 / 1195"),
      fullImage(projectImage(urbanFolder, "(3).png"), "Project drawing 01.", "2480 / 1754"),
      fullImage(projectImage(urbanFolder, "(4).png"), "Project drawing 02.", "2481 / 1754")
    ]
  },
  {
    slug: "project-02",
    title: "The Louvre Byzantine Gallery",
    category: "cultural",
    year: "2026",
    location: "The Louvre Museum, Paris",
    status: "Under Construction",
    role: "Intern, WHY Architecture",
    featured: true,
    cover: projectImage(louvreFolder, "cover.png"),
    summary: "A museum gallery project for the Louvre Museum in Paris, developed at WHY Architecture and currently under construction.",
    modules: [
      fullImage(projectImage(louvreFolder, "cover.png"), "The Louvre Byzantine Gallery.", "1583 / 992"),
      fullImage(projectImage(louvreFolder, "183-01.png"), "Gallery study 01.", "1583 / 992"),
      fullImage(projectImage(louvreFolder, "174-01.png"), "Gallery study 02.", "1583 / 992")
    ]
  },
  {
    slug: "project-03",
    title: "Dancing Theater",
    category: "cultural",
    year: "Fall 2023",
    location: "Pico-Union, Los Angeles",
    status: "Individual Design Studio Project",
    role: "Design, drawings, physical model, visualization",
    featured: true,
    cover: projectImage(danceFolder, "cover.png"),
    summary: "LA Dance Project, developed in Devyn Weiser鈥檚 design studio as an individual project in Pico-Union, Los Angeles.",
    modules: [
      fullImage(projectImage(danceFolder, "cover.png"), "Dancing Theater.", "1050 / 743"),
      {
        type: "textImage",
        heading: "Information Flow",
        text: "A conceptual study of information flow, performance, and spatial organization.",
        image: projectImage(danceFolder, "concept-information-flow.jpg")
      },
      {
        type: "twoColumnImages",
        images: [
          { src: projectImage(danceFolder, "diagram-form-assets.png"), caption: "Form asset study." },
          { src: projectImage(danceFolder, "process-composition-study.png"), caption: "Composition study." }
        ]
      },
      fullImage(projectImage(danceFolder, "model-overview-01.png"), "Physical model overview 01.", "2480 / 1754"),
      fullImage(projectImage(danceFolder, "model-overview-02.png"), "Physical model overview 02.", "2481 / 1754"),
      fullImage(projectImage(danceFolder, "model-detail-01.png"), "Physical model detail.", "2480 / 1754"),
      fullImage(projectImage(danceFolder, "model-elevations-01.png"), "Physical model elevations.", "1428 / 1306"),
      {
        type: "twoColumnImages",
        images: [
          { src: projectImage(danceFolder, "plan-top-floor-lobby.png"), caption: "Top floor plan / lobby." },
          { src: projectImage(danceFolder, "plan-top-floor-lobby-portfolio.png"), caption: "Top floor plan / portfolio layout." }
        ]
      },
      { type: "drawing", title: "Black Box Theaters", image: projectImage(danceFolder, "section-black-box-theaters.png"), note: "Section" }
    ]
  },
  {
    slug: "project-04",
    title: "3 Buildings in One + a Courtyard",
    category: "civic",
    year: "Spring 2023",
    location: "Los Angeles",
    status: "Individual DS1100 Project",
    role: "Design Studio 路 Tutor: Matthew Au",
    featured: true,
    cover: projectImage("project-04-3-building-in-one", "cover.png"),
    summary: "A civic center developed as three buildings in one, organized around a courtyard.",
    modules: coverProject("project-04-3-building-in-one", "3 Buildings in One + a Courtyard.", "1637 / 1158")
  },
  {
    slug: "project-05",
    title: "Denver Single Stair",
    category: "housing",
    year: "鈥?,
    location: "Denver, Colorado",
    status: "Housing Project",
    role: "Design, drawings, visualization",
    featured: true,
    cover: projectImage("project-05-denver-single-stair", "cover.png"),
    summary: "This single-stair housing project is rooted in setbacks that create open areas and private front and back yards for each unit. Masonry units give the building a grounded presence, while a lighter metal-mesh facade supports hanging gardens for shade, cooling, and a stronger connection to the outdoors.",
    modules: coverProject("project-05-denver-single-stair", "Denver Single Stair.", "1440 / 1440")
  },
  {
    slug: "project-06",
    title: "Folding City",
    category: "research",
    year: "鈥?,
    location: "鈥?,
    status: "Design Project",
    role: "Design, drawings, visualization",
    featured: false,
    cover: projectImage("project-06-Folding City", "cover.png"),
    summary: "Folding City explores urban form through an architectural design study.",
    modules: coverProject("project-06-Folding City", "Folding City.", "1637 / 1158")
  },
  {
    slug: "project-07",
    title: "Mexico City Design School",
    category: "civic",
    year: "Spring 2024",
    location: "IMSS, Mexico City",
    status: "Group DS3501 Project",
    role: "Design Studio 路 Tutor: David Freeland",
    featured: false,
    cover: projectImage("project-07-mexico city design school", "Cover.png"),
    summary: "A group design studio project for a design school at IMSS in Mexico City.",
    modules: coverProject("project-07-mexico city design school", "Mexico City Design School.", "1835 / 1187")
  },
  {
    slug: "project-08",
    title: "Kinder Space",
    category: "civic",
    year: "Spring 2024",
    location: "IMSS, Mexico City",
    status: "Group Competition Project",
    role: "Competition 路 Tutor: John Enright",
    featured: false,
    cover: projectImage("project-08-kinder space", "cover.png"),
    summary: "A group competition project developed for the IMSS site in Mexico City.",
    modules: coverProject("project-08-kinder space", "Kinder Space.", "1078 / 809")
  },
  {
    slug: "project-09",
    title: "Art Brut Therapy Center",
    category: "cultural",
    year: "Fall 2021",
    location: "Shanghai",
    status: "Individual ARCH4107 Project",
    role: "Design Studio 路 Tutor: Evan Saarinen",
    featured: false,
    cover: projectImage("project-09-Art Brut Therapy Center", "cover.png"),
    summary: "Located in Shanghai鈥檚 historic New Puyu Hall, the project introduces treatment, music, meditation, art therapy, and mutual-aid spaces while preserving the original building. Its central aim is to improve psychological wellbeing through guidance, treatment, and interaction between different user groups.",
    modules: coverProject("project-09-Art Brut Therapy Center", "Art Brut Therapy Center.", "1240 / 877")
  },
  {
    slug: "project-10",
    title: "BJICC Multifamily Housing",
    category: "housing",
    year: "鈥?,
    location: "鈥?,
    status: "Housing Project",
    role: "Design, drawings, visualization",
    featured: false,
    cover: projectImage("project-10-BJICC Mutifamily Housing", "cover.png"),
    summary: "A multifamily housing project developed for BJICC.",
    modules: coverProject("project-10-BJICC Mutifamily Housing", "BJICC Multifamily Housing.", "2142 / 1598")
  },
  {
    slug: "project-11",
    title: "Collective Apartment",
    category: "housing",
    year: "鈥?,
    location: "鈥?,
    status: "Housing Project",
    role: "Design, drawings, visualization",
    featured: false,
    cover: projectImage("project-11-Collective apartment", "cover.png"),
    summary: "A collective apartment and shared-living design study.",
    modules: coverProject("project-11-Collective apartment", "Collective Apartment.", "1240 / 877")
  },
  {
    slug: "project-12",
    title: "Lower East Side Study Center",
    category: "civic",
    year: "鈥?,
    location: "Lower East Side, New York",
    status: "Design Project",
    role: "Design, drawings, visualization",
    featured: false,
    cover: projectImage("project-12-Lower east side study center", "cover.png"),
    summary: "A study center proposal for New York鈥檚 Lower East Side.",
    modules: coverProject("project-12-Lower east side study center", "Lower East Side Study Center.", "3618 / 2443")
  }
];

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

