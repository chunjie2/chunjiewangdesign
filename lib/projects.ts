export type ProjectCategory = "housing" | "civic" | "cultural" | "workplace" | "research";

export type ProjectModule =
  | { type: "fullImage"; image: string; caption: string; fit?: "cover" | "contain"; aspectRatio?: string; maximized?: boolean }
  | {
      type: "twoColumnImages";
      heading?: string;
      text?: string;
      images: { src: string; caption: string; aspectRatio?: string }[];
    }
  | { type: "textImage"; heading: string; text: string; image: string; aspectRatio?: string }
  | { type: "drawing"; title: string; image: string; note: string }
  | { type: "gallery"; images: string[] }
  | { type: "video"; title: string; poster: string }
  | { type: "airportDiagram"; title: string; description: string; images: string[] }
  | { type: "simulationVideo"; title: string; description: string; videos: string[] }
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
const airportDiagramImages = Array.from(
  { length: 9 },
  (_, index) => `/interactive/airport-diagram/scale-${String(index + 1).padStart(2, "0")}.jpg`
);
const simulationVideos = Array.from(
  { length: 10 },
  (_, index) => `/interactive/simulations/simulation${index + 1}.mp4`
);

export const projects: Project[] = [
  {
    slug: "project-01",
    title: "Urban Threshold",
    category: "research",
    year: "2024",
    location: "TBD",
    status: "Academic",
    role: "Individual Work",
    featured: true,
    cover: projectImage(urbanFolder, "cover.png"),
    summary: "Urban Threshold is presented through site, massing, model, axonometric, and visualization studies.",
    modules: [
      fullImage(projectImage(urbanFolder, "cover.png"), "Urban Threshold.", "1645 / 1155"),
      fullImage(projectImage(urbanFolder, "site model.png"), "Site model.", "4961 / 3508"),
      {
        type: "airportDiagram",
        title: "Threshold at Three Scales",
        description: "Move across time and scale to compare nine readings of the LAX transit landscape—from the site to the larger urban field.",
        images: airportDiagramImages
      },
      fullImage(projectImage(urbanFolder, "massingconcept.png"), "Massing concept study 01.", "2480 / 3508"),
      fullImage(projectImage(urbanFolder, "massingconcept (2).png"), "Massing concept study 02.", "2481 / 3508"),
      {
        type: "simulationVideo",
        title: "Massing Simulation",
        description: "Each result records a different spatial outcome. Generate another iteration to watch the study resolve into a new form.",
        videos: simulationVideos
      },
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
      {
        type: "twoColumnImages",
        heading: "Gallery Atmospheres",
        text: "A sequence of views studies how vaulted rooms, display cases, and focused lighting shape the visitor's movement through the collection.",
        images: [
          { src: projectImage(louvreFolder, "173.png"), caption: "Gallery view 173.", aspectRatio: "1494 / 940" },
          { src: projectImage(louvreFolder, "174-01.png"), caption: "Gallery view 174.", aspectRatio: "1583 / 992" }
        ]
      },
      {
        type: "twoColumnImages",
        images: [
          { src: projectImage(louvreFolder, "183-01.png"), caption: "Gallery view 183.", aspectRatio: "1583 / 992" },
          { src: projectImage(louvreFolder, "186-02.png"), caption: "Gallery view 186-02.", aspectRatio: "1494 / 940" }
        ]
      },
      fullImage(projectImage(louvreFolder, "art map.png"), "Artwork and display map.", "1494 / 940"),
      {
        type: "twoColumnImages",
        heading: "Display Development",
        text: "Material, lighting, and casework studies refine the relationship between individual artifacts and the larger gallery sequence.",
        images: [
          { src: projectImage(louvreFolder, "186-02-01.png"), caption: "Display study 186-02.", aspectRatio: "1494 / 940" },
          { src: projectImage(louvreFolder, "186-03-01.png"), caption: "Display study 186-03.", aspectRatio: "1494 / 940" }
        ]
      },
      {
        type: "twoColumnImages",
        images: [
          { src: projectImage(louvreFolder, "186-03.png"), caption: "Gallery view 186-03.", aspectRatio: "1494 / 940" },
          { src: projectImage(louvreFolder, "186-04.png"), caption: "Gallery view 186-04.", aspectRatio: "1494 / 940" }
        ]
      },
      fullImage(projectImage(louvreFolder, "188-01.png"), "Gallery view 188-01.", "1494 / 940")
    ]
  },
  {
    slug: "project-03",
    title: "Dancing Theater",
    category: "cultural",
    year: "Fall 2023",
    location: "Pico-Union, Los Angeles",
    status: "Academic",
    role: "Individual Work",
    featured: true,
    cover: projectImage(danceFolder, "cover.png"),
    summary: "LA Dance Project, developed in Devyn Weiser's design studio as an individual project in Pico-Union, Los Angeles.",
    modules: [
      fullImage(projectImage(danceFolder, "cover.png"), "Dancing Theater.", "1050 / 743"),
      {
        type: "textImage",
        heading: "Information Flow",
        text: "The theater begins with movement rather than a fixed object. Dancers, audiences, production crews, and information pass through the building at different speeds; their crossings become a diagram for adjacency, visibility, and exchange.",
        image: projectImage(danceFolder, "concept-information-flow.jpg"),
        aspectRatio: "1071 / 922"
      },
      {
        type: "twoColumnImages",
        heading: "Form as Choreography",
        text: "The concept studies translate rhythm, overlap, pause, and direction into a family of spatial operations. The two drawings are presented as one continuous design argument: first a catalogue of formal assets, then their assembly into a larger composition.",
        images: [
          { src: projectImage(danceFolder, "diagram-form-assets.png"), caption: "Form asset study.", aspectRatio: "2480 / 3508" },
          { src: projectImage(danceFolder, "process-composition-study.png"), caption: "Composition study.", aspectRatio: "2481 / 3508" }
        ]
      },
      {
        type: "twoColumnImages",
        heading: "A Theater in Motion",
        text: "The physical model tests the project as a layered field. Openings, bridges, and rotated volumes build visual relationships between rehearsal, performance, and public circulation.",
        images: [
          { src: projectImage(danceFolder, "model-overview-01.png"), caption: "Physical model overview 01.", aspectRatio: "2480 / 1754" },
          { src: projectImage(danceFolder, "model-overview-02.png"), caption: "Physical model overview 02.", aspectRatio: "2481 / 1754" }
        ]
      },
      fullImage(projectImage(danceFolder, "model-detail-01.png"), "Physical model detail.", "2480 / 1754"),
      {
        type: "textImage",
        heading: "Model as Notation",
        text: "Seen in elevation, the model reads like a score: dense moments hold the main performance spaces while lighter connective pieces register circulation, gathering, and the intervals between events.",
        image: projectImage(danceFolder, "model-elevations-01.png"),
        aspectRatio: "1428 / 1306"
      },
      {
        type: "twoColumnImages",
        heading: "Performance and Public Life",
        text: "The upper floor and lobby drawings show how the project brings performance into everyday circulation. Rather than treating the lobby as leftover space, it becomes an inhabited threshold between the city, rehearsal rooms, and black box theaters.",
        images: [
          { src: projectImage(danceFolder, "plan-top-floor-lobby.png"), caption: "Top floor plan / lobby.", aspectRatio: "2481 / 2481" },
          { src: projectImage(danceFolder, "plan-top-floor-lobby-portfolio.png"), caption: "Top floor plan / portfolio layout.", aspectRatio: "2480 / 2480" }
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
    status: "Academic",
    role: "Individual Work",
    featured: true,
    cover: projectImage("project-04-3-building-in-one", "cover.png"),
    summary: "A civic center developed as three buildings in one, organized around a courtyard.",
    modules: [
      fullImage(projectImage("project-04-3-building-in-one", "cover.png"), "3 Buildings in One + a Courtyard.", "1637 / 1158"),
      {
        type: "twoColumnImages",
        heading: "Courtyard and Massing",
        text: "The civic center is assembled as three distinct volumes whose overlaps frame a shared courtyard and organize movement through the site.",
        images: [
          { src: projectImage("project-04-3-building-in-one", "(1).png"), caption: "Massing and courtyard study.", aspectRatio: "1389 / 1562" },
          { src: projectImage("project-04-3-building-in-one", "(2).png"), caption: "Program and circulation study.", aspectRatio: "1389 / 1562" }
        ]
      },
      {
        type: "twoColumnImages",
        heading: "Plans",
        text: "The plans show how the three-building organization changes floor by floor while maintaining the courtyard as the project's shared center.",
        images: [
          { src: projectImage("project-04-3-building-in-one", "ground floor and 2 floor.png"), caption: "Ground and second floor plans.", aspectRatio: "880 / 1200" },
          { src: projectImage("project-04-3-building-in-one", "3 and 4 floor.png"), caption: "Third and fourth floor plans.", aspectRatio: "881 / 1200" }
        ]
      },
      fullImage(projectImage("project-04-3-building-in-one", "perspective section.png"), "Perspective section through the courtyard.", "1896 / 1200"),
      fullImage(projectImage("project-04-3-building-in-one", "section.png"), "Building section.", "1710 / 1080"),
      {
        type: "twoColumnImages",
        heading: "Physical Model",
        text: "Model views test the relationship between the courtyard, the stepped volumes, and the building envelope at different scales.",
        images: [
          { src: projectImage("project-04-3-building-in-one", "model01.png"), caption: "Physical model 01.", aspectRatio: "1260 / 1700" },
          { src: projectImage("project-04-3-building-in-one", "window(next to model01).png"), caption: "Facade and window study.", aspectRatio: "1260 / 1700" }
        ]
      },
      fullImage(projectImage("project-04-3-building-in-one", "model02.png"), "Physical model 02.", "1580 / 1080")
    ]
  },
  {
    slug: "project-05",
    title: "Denver Single Stair",
    category: "housing",
    year: "2024",
    location: "Denver, Colorado",
    status: "Academic",
    role: "Individual Work",
    featured: true,
    cover: projectImage("project-05-denver-single-stair", "cover.png"),
    summary: "This single-stair housing project is rooted in setbacks that create open areas and private front and back yards for each unit. Masonry units give the building a grounded presence, while a lighter metal-mesh facade supports hanging gardens for shade, cooling, and a stronger connection to the outdoors.",
    modules: [
      fullImage(projectImage("project-05-denver-single-stair", "cover.png"), "Denver Single Stair.", "1440 / 1440"),
      {
        type: "twoColumnImages",
        heading: "Setback as Living Space",
        text: "Early studies use setbacks to carve private yards, shared gardens, and outdoor rooms from a compact single-stair housing block.",
        images: [
          { src: projectImage("project-05-denver-single-stair", "Concept 01.png"), caption: "Setback concept 01.", aspectRatio: "971 / 879" },
          { src: projectImage("project-05-denver-single-stair", "conceopt02.png"), caption: "Setback concept 02.", aspectRatio: "1307 / 902" }
        ]
      },
      {
        type: "twoColumnImages",
        heading: "Envelope and Garden",
        text: "A masonry residential volume is paired with a lighter mesh structure that supports planting, shade, and inhabited outdoor edges.",
        images: [
          { src: projectImage("project-05-denver-single-stair", "(1).png"), caption: "Garden facade interior.", aspectRatio: "1393 / 842" },
          { src: projectImage("project-05-denver-single-stair", "(3).png"), caption: "Garden facade exterior.", aspectRatio: "1395 / 932" }
        ]
      },
      fullImage(projectImage("project-05-denver-single-stair", "(4).png"), "Single-stair organization study.", "1317 / 998"),
      { type: "fullImage", image: projectImage("project-05-denver-single-stair", "plan.png"), caption: "Housing plans and unit organization.", fit: "contain", aspectRatio: "1632 / 1878", maximized: true },
      { type: "fullImage", image: projectImage("project-05-denver-single-stair", "render.png"), caption: "Communal garden facade.", fit: "contain", aspectRatio: "1579 / 1080", maximized: true },
      fullImage(projectImage("project-05-denver-single-stair", "render01.png"), "Street elevation view.", "1035 / 1261"),
      fullImage(projectImage("project-05-denver-single-stair", "render03.png"), "Material and landscape studies.", "1371 / 520"),
      fullImage(projectImage("project-05-denver-single-stair", "detail section.png"), "Facade detail section.", "603 / 401")
    ]
  },
  {
    slug: "project-06",
    title: "Folding City",
    category: "research",
    year: "2024",
    location: "TBD",
    status: "Academic",
    role: "Individual Work",
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
    status: "Academic",
    role: "Group Work",
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
    status: "Competition",
    role: "Group Work",
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
    status: "Academic",
    role: "Individual Work",
    featured: false,
    cover: projectImage("project-09-Art Brut Therapy Center", "cover.png"),
    summary: "Located in Shanghai's historic New Puyu Hall, the project introduces treatment, music, meditation, art therapy, and mutual-aid spaces while preserving the original building. Its central aim is to improve psychological wellbeing through guidance, treatment, and interaction between different user groups.",
    modules: coverProject("project-09-Art Brut Therapy Center", "Art Brut Therapy Center.", "1240 / 877")
  },
  {
    slug: "project-10",
    title: "BJICC Multifamily Housing",
    category: "housing",
    year: "2024",
    location: "TBD",
    status: "Academic",
    role: "Individual Work",
    featured: false,
    cover: projectImage("project-10-BJICC Mutifamily Housing", "cover.png"),
    summary: "A multifamily housing project developed for BJICC.",
    modules: coverProject("project-10-BJICC Mutifamily Housing", "BJICC Multifamily Housing.", "2142 / 1598")
  },
  {
    slug: "project-11",
    title: "Collective Apartment",
    category: "housing",
    year: "2024",
    location: "TBD",
    status: "Academic",
    role: "Individual Work",
    featured: false,
    cover: projectImage("project-11-Collective apartment", "cover.png"),
    summary: "A collective apartment and shared-living design study.",
    modules: coverProject("project-11-Collective apartment", "Collective Apartment.", "1240 / 877")
  },
  {
    slug: "project-12",
    title: "Lower East Side Study Center",
    category: "civic",
    year: "2024",
    location: "Lower East Side, New York",
    status: "Academic",
    role: "Individual Work",
    featured: false,
    cover: projectImage("project-12-Lower east side study center", "cover.png"),
    summary: "A study center proposal for New York's Lower East Side.",
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
