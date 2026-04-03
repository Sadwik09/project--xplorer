import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects, Category, Difficulty } from "@/lib/projects";
import { Search, Filter, ChevronRight, Zap, BookOpen, Brain } from "lucide-react";

const difficultyConfig: Record<Difficulty, { color: string; bgColor: string; icon: React.ReactNode }> = {
  Beginner: {
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: <BookOpen className="w-4 h-4" />,
  },
  Intermediate: {
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    icon: <Zap className="w-4 h-4" />,
  },
  Advanced: {
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    icon: <Brain className="w-4 h-4" />,
  },
};

const categoryIcons: Record<Category, React.ReactNode> = {
  "Web Development": "🌐",
  Mobile: "📱",
  "AI/ML": "🤖",
  Backend: "⚙️",
  Desktop: "💻",
  "Data Science": "📊",
};

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = !selectedDifficulty || project.difficulty === selectedDifficulty;
      const matchesCategory = !selectedCategory || project.category === selectedCategory;

      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [searchQuery, selectedDifficulty, selectedCategory]);

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category))).sort();
  const uniqueDifficulties: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-12 md:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Discover Ideas.
              <span className="text-primary"> Learn. Build.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Overcome analysis paralysis. Explore well-structured project ideas with step-by-step guides
              that help you learn meaningful skills while building real applications.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Filter Toggle */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Difficulty Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Difficulty Level</h3>
                  <div className="space-y-2">
                    {uniqueDifficulties.map((difficulty) => (
                      <button
                        key={difficulty}
                        onClick={() =>
                          setSelectedDifficulty(
                            selectedDifficulty === difficulty ? null : difficulty
                          )
                        }
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-3 ${
                          selectedDifficulty === difficulty
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {difficultyConfig[difficulty].icon}
                        {difficulty}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Category</h3>
                  <div className="space-y-2">
                    {uniqueCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() =>
                          setSelectedCategory(selectedCategory === category ? null : category)
                        }
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-3 ${
                          selectedCategory === category
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        <span>{categoryIcons[category as Category]}</span>
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedDifficulty || selectedCategory) && (
                <button
                  onClick={() => {
                    setSelectedDifficulty(null);
                    setSelectedCategory(null);
                  }}
                  className="mt-4 w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {filteredProjects.length > 0
                ? `Found ${filteredProjects.length} project${filteredProjects.length !== 1 ? "s" : ""}`
                : "No projects found"}
            </h2>
            <p className="text-muted-foreground mt-1">
              {searchQuery || selectedDifficulty || selectedCategory
                ? "Try adjusting your filters to find more projects"
                : "Explore all available projects"}
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="group h-full"
                >
                  <div className="h-full flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl">
                        {categoryIcons[project.category as Category]}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${difficultyConfig[project.difficulty].bgColor} ${difficultyConfig[project.difficulty].color}`}>
                        {difficultyConfig[project.difficulty].icon}
                        {project.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border text-primary font-medium group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search query or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty(null);
                  setSelectedCategory(null);
                }}
                className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
