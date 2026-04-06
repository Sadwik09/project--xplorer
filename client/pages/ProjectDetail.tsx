import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Layout from "@/components/Layout";
import { projects } from "@/lib/projects";
import { useSavedProjects } from "@/hooks/useSavedProjects";
import { ChevronLeft, BookOpen, Zap, Brain, Lightbulb, Target, Rocket, Heart } from "lucide-react";

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

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const { isSaved, toggleSaved, canSave } = useSavedProjects();

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
                <button
                  onClick={() => {
                    if (!canSave) {
                      toast.error("Sign in to save projects");
                      return;
                    }
                    const next = toggleSaved(project.id);
                    toast.success(next ? "Project saved" : "Project removed");
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border ${isSaved(project.id) ? "text-red-500" : "text-foreground"}`}
                >
                  <Heart className={`w-4 h-4 ${isSaved(project.id) ? "fill-current" : ""}`} />
                  {isSaved(project.id) ? "Saved" : "Save"}
                </button>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
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
                className="flex gap-4 p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-foreground">{step}</p>
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
            <h2 className="text-3xl font-bold text-foreground">Key Features to Implement</h2>
          </div>
          <ul className="space-y-3">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
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
