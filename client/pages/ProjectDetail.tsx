import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { projects } from "@/lib/projects";
import {
  ChevronLeft,
  BookOpen,
  Zap,
  Brain,
  Lightbulb,
  Target,
  Rocket,
  Code2,
  FolderTree,
  TriangleAlert,
  Compass,
  Layers3,
  ExternalLink,
} from "lucide-react";

const difficultyConfig = {
  Beginner: { color: "text-green-600", bgColor: "bg-green-100" },
  Intermediate: { color: "text-blue-600", bgColor: "bg-blue-100" },
  Advanced: { color: "text-purple-600", bgColor: "bg-purple-100" },
};

const categoryIcons: Record<string, string> = {
  "Web Development": "🌐",
  Mobile: "📱",
  "AI/ML": "🤖",
  Backend: "⚙️",
  Desktop: "💻",
  "Data Science": "📊",
};

const resourceLinks = [
  { label: "MDN Web Docs", href: "https://developer.mozilla.org/" },
  { label: "React Docs", href: "https://react.dev/" },
  { label: "TypeScript Handbook", href: "https://www.typescriptlang.org/docs/" },
  { label: "Tailwind CSS", href: "https://tailwindcss.com/docs" },
];

function getMetaItems(project: (typeof projects)[number]) {
  const difficultyMap = {
    Beginner: "2-4 days",
    Intermediate: "1-2 weeks",
    Advanced: "2-4 weeks",
  } as const;

  const stackPreview = project.technologies.slice(0, 4).join(" · ");
  const prerequisites =
    project.difficulty === "Beginner"
      ? "HTML, CSS, basic JavaScript"
      : project.difficulty === "Intermediate"
        ? "JavaScript, components, API basics"
        : "React, API design, state management";

  return [
    { label: "Time", value: difficultyMap[project.difficulty] },
    { label: "Difficulty", value: project.difficulty },
    { label: "Category", value: project.category },
    { label: "Prerequisites", value: prerequisites },
    { label: "Tech Stack", value: stackPreview },
  ];
}

function getFolderStructure(project: (typeof projects)[number]) {
  const base = [
    "src/",
    "  components/",
    "  pages/",
    "  hooks/",
    "  lib/",
    "  styles/",
    "  types/",
  ];

  if (project.category === "Backend") {
    return [...base, "  routes/", "  services/", "  controllers/"];
  }

  if (project.category === "Mobile") {
    return ["src/", "  screens/", "  components/", "  services/", "  navigation/"];
  }

  return base;
}

function getMistakes(project: (typeof projects)[number]) {
  const generic = [
    "Skipping the data model before building screens",
    "Mixing too much logic into a single component",
    "Not handling empty, loading, or error states",
    "Leaving filtering and persistence until the end",
  ];

  if (project.category === "Backend") {
    return [
      "No validation on request payloads",
      "Missing error handling around async operations",
      "No logging or observability when requests fail",
      "Hard-coding configuration instead of using environment variables",
    ];
  }

  return generic;
}

function getProgressionPath(project: (typeof projects)[number]) {
  const nextByDifficulty = {
    Beginner: ["Add a backend API", "Add authentication", "Ship a deployed portfolio app"],
    Intermediate: ["Add real-time updates", "Introduce role-based access", "Add analytics and testing"],
    Advanced: ["Split into micro-features", "Add observability", "Scale the data flow and deployment"],
  } as const;

  return nextByDifficulty[project.difficulty];
}

function getSnippet(project: (typeof projects)[number], stepIndex: number) {
  const normalized = project.title.toLowerCase();

  if (stepIndex === 0) {
    return `const initialState = {\n  items: [],\n  loading: false,\n  error: null\n};`;
  }

  if (stepIndex === 1) {
    return `function save${project.category.replace(/[^a-zA-Z0-9]/g, "")}State(state) {\n  localStorage.setItem("${normalized.replace(/[^a-z0-9]/g, "-")}", JSON.stringify(state));\n}`;
  }

  if (stepIndex === 2) {
    return `const visibleItems = items.filter((item) => {\n  return item.title.toLowerCase().includes(query);\n});`;
  }

  if (stepIndex === 3) {
    return `async function handleSubmit() {\n  try {\n    await api.save(data);\n  } catch (error) {\n    setError("Something went wrong");\n  }\n}`;
  }

  return `// Extend the ${project.category.toLowerCase()} workflow with your own validation and UI states.`;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="container max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            state={{ showMainHome: true }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{project.title} | ProjExplorer</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Header */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
          <Link
            to="/"
            state={{ showMainHome: true }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">{categoryIcons[project.category]}</span>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center px-4 py-2 rounded-full font-semibold ${difficultyConfig[project.difficulty as keyof typeof difficultyConfig].bgColor} ${difficultyConfig[project.difficulty as keyof typeof difficultyConfig].color}`}
                >
                  {project.difficulty}
                </span>
                <span className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
        <section className="mb-16 rounded-3xl border border-border bg-card/70 p-6 md:p-8 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3 mb-5">
            <Compass className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Project Snapshot</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {getMetaItems(project).map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-foreground leading-6">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Layers3 className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Live Preview</h2>
          </div>

          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-secondary/10 to-background p-6 md:p-8 overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">Preview mockup</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                <p className="mt-4 text-muted-foreground leading-7">
                  A polished product-ready interface should show the main action, supporting data, and a clear next step.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-foreground/85">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/10 p-4 md:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <div className="rounded-2xl border border-white/15 bg-black/20 p-5 space-y-4">
                  <div className="h-4 w-24 rounded-full bg-white/30" />
                  <div className="h-8 w-3/4 rounded-xl bg-white/20" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl bg-white/10" />
                    <div className="h-20 rounded-xl bg-white/10" />
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground/85">
                    <span>Primary action</span>
                    <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground font-medium">Start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FolderTree className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Starter Folder Structure</h2>
          </div>

          <div className="rounded-2xl border border-border bg-muted/20 p-5 md:p-6">
            <pre className="overflow-x-auto text-sm leading-7 text-foreground whitespace-pre-wrap">
{getFolderStructure(project).join("\n")}
            </pre>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Overview</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* Why Useful */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Why This Project is Useful</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.whyUseful}
          </p>
        </section>

        {/* Step by Step */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Step-by-Step Guide</h2>
          </div>
          <div className="space-y-4">
            {project.stepByStep.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card/70 p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium">{step}</p>
                    <div className="mt-4 rounded-xl border border-white/15 bg-black/20 p-4">
                      <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        <Code2 className="w-4 h-4" />
                        Code snippet
                      </div>
                      <pre className="overflow-x-auto text-xs md:text-sm text-foreground whitespace-pre-wrap leading-6">
{getSnippet(project, index)}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Technologies & Skills Required</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-primary/10 text-primary font-medium rounded-lg border border-primary/20 text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Core vs Stretch Features</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/8 p-5">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-4">Core</p>
              <ul className="space-y-3">
                {project.keyFeatures.slice(0, Math.max(4, Math.ceil(project.keyFeatures.length / 2))).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-lg text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/8 p-5">
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em] mb-4">Stretch</p>
              <ul className="space-y-3">
                {[
                  "Advanced filtering and search",
                  "Smart empty states and loading feedback",
                  "Keyboard shortcuts and accessibility polish",
                  "Animations and micro-interactions",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="text-lg text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TriangleAlert className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Common Mistakes</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {getMistakes(project).map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-border bg-card/70 p-5">
                <p className="text-foreground font-medium">{mistake}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Resources</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {resourceLinks.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-card/70 p-5 hover:border-primary/30 transition-colors"
              >
                <p className="font-semibold text-foreground">{resource.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">Open reference</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Compass className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Progression Path</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {getProgressionPath(project).map((step, index) => (
              <div key={step} className="rounded-2xl border border-border bg-card/70 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Next {index + 1}</p>
                <p className="mt-2 text-foreground font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expected Outcome */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Expected Outcome</h2>
          </div>
          <div className="p-6 bg-accent/10 border border-accent/30 rounded-lg">
            <p className="text-lg text-foreground leading-relaxed">
              {project.expectedOutcome}
            </p>
          </div>
        </section>

        {/* Real World Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Real-World Impact & Benefits</h2>
          <div className="p-6 bg-secondary/10 border border-secondary/30 rounded-lg">
            <p className="text-lg text-foreground leading-relaxed">
              {project.realWorldImpact}
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
}
