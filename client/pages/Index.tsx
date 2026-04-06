import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Layout from "@/components/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import { projects, Category, Difficulty } from "@/lib/projects";
import { useFilters } from "@/hooks/useFilters";
import { useDebounce } from "@/hooks/useDebounce";
import { useProjects } from "@/hooks/useProjects";
import FilterBar from "@/components/FilterBar";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import EmptyState from "@/components/EmptyState";
import { ChevronRight, Zap, BookOpen, Brain, Sun, Moon } from "lucide-react";

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
  Cloud: "☁️",
  DevOps: "🛠️",
  Cybersecurity: "🔐",
  "Game Development": "🎮",
  Blockchain: "⛓️",
  IoT: "📡",
  "AR/VR": "🕶️",
  Automation: "⚡",
  "UI/UX": "🎨",
  "Open Source": "🧩",
};

const ITEMS_PER_PAGE = 9;

export default function Index() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { filters, setFilter, clearFilters } = useFilters();
  const [showMainHome, setShowMainHome] = useState(Boolean(location.state?.showMainHome));
  const [isLoading, setIsLoading] = useState(false);
  const [queryDraft, setQueryDraft] = useState(filters.query);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedQuery = useDebounce(queryDraft, 300);

  const effectiveFilters = useMemo(
    () => ({ ...filters, query: debouncedQuery }),
    [filters, debouncedQuery],
  );
  const { projects: filteredProjects, loading } = useProjects(effectiveFilters);

  useEffect(() => {
    if (location.state?.showMainHome) {
      setShowMainHome(true);
    }
  }, [location.state]);

  useEffect(() => {
    setQueryDraft(filters.query);
  }, [filters.query]);

  useEffect(() => {
    if (debouncedQuery !== filters.query) {
      setFilter("query", debouncedQuery);
    }
  }, [debouncedQuery, filters.query, setFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters.query, filters.difficulty, filters.category, filters.sort]);

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);
    if (!section) return;

    window.requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category))).sort();
  const uniqueDifficulties: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];

  const activeFilterCount = [
    Boolean(filters.query),
    Boolean(filters.difficulty),
    Boolean(filters.category),
    filters.sort !== "newest",
  ].filter(Boolean).length;

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);
  const visiblePageGroupSize = 5;
  const visiblePageStart = Math.floor((safeCurrentPage - 1) / visiblePageGroupSize) * visiblePageGroupSize + 1;
  const visiblePageEnd = Math.min(visiblePageStart + visiblePageGroupSize - 1, totalPages);
  const visiblePageNumbers = Array.from(
    { length: visiblePageEnd - visiblePageStart + 1 },
    (_, index) => visiblePageStart + index,
  );

  if (!showMainHome) {
    return (
      <>
        <Helmet>
          <title>ProjeXplorer | Begin Journey</title>
          <meta
            name="description"
            content="A cinematic digital studio for deep thinkers, bold creators, and quiet rebels."
          />
        </Helmet>

        <main className="cinematic-theme relative min-h-screen overflow-hidden bg-background text-foreground">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              type="video/mp4"
            />
          </video>

          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="px-8 py-6">
              <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                <p
                  className="text-3xl tracking-tight text-foreground"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  ProjeXplorer
                </p>

                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-md hover:bg-muted transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {theme === "dark" ? "Light" : "Dark"}
                </button>
              </nav>
            </header>

            <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-[90px] pt-32 pb-40 text-center">
              <h1
                className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Discover Ideas. <em className="not-italic text-muted-foreground">Learn. Build.</em>
              </h1>

              <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Overcome analysis paralysis. Explore well-structured project ideas with step-by-step guides
                that help you learn meaningful skills while building real applications.
              </p>

              <button
                onClick={() => {
                  navigate("/", { state: { showMainHome: true } });
                  setShowMainHome(true);
                  setIsLoading(true);
                }}
                className="animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full border border-white/30 bg-white/10 px-14 py-5 text-base text-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Begin Journey
              </button>
            </section>
          </div>
        </main>
      </>
    );
  }

  return (
    <div className="home-cinematic min-h-screen bg-background text-foreground">
    <AnimatePresence mode="wait">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
    </AnimatePresence>

    <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease-out" }}>
    <Layout>
      <Helmet>
        <title>ProjeXplorer | Discover, Learn, Build</title>
        <meta
          name="description"
          content="Browse curated project ideas by difficulty, category, and technologies to build your developer portfolio."
        />
      </Helmet>

      <section className="relative overflow-hidden py-12 md:py-20">
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
          </div>

          <div className="mt-8">
            <FilterBar
              filters={{ ...filters, query: queryDraft }}
              categories={uniqueCategories}
              difficulties={uniqueDifficulties}
              onChange={(key, value) => {
                if (key === "query") {
                  setQueryDraft(value);
                  return;
                }
                setFilter(key, value);
              }}
              onClear={() => {
                setQueryDraft("");
                clearFilters();
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {loading
                ? "Searching projects..."
                : filteredProjects.length > 0
                ? `Found ${filteredProjects.length} project${filteredProjects.length !== 1 ? "s" : ""}`
                : "No projects found"}
            </h2>
            <p className="text-muted-foreground mt-1">
              {activeFilterCount > 0
                ? "Try adjusting your filters to find more projects"
                : "Explore all available projects"}
            </p>

            {!loading && filteredProjects.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length}
              </p>
            )}

            {activeFilterCount > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {filters.query && (
                  <span className="px-3 py-1 rounded-full text-xs bg-muted text-foreground">Query: {filters.query}</span>
                )}
                {filters.difficulty && (
                  <span className="px-3 py-1 rounded-full text-xs bg-muted text-foreground">Difficulty: {filters.difficulty}</span>
                )}
                {filters.category && (
                  <span className="px-3 py-1 rounded-full text-xs bg-muted text-foreground">Category: {filters.category}</span>
                )}
              </div>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <ProjectCardSkeleton key={idx} />
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                >
                  <div className="group h-full flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-ring">
                    <div className="flex items-start justify-between mb-4 gap-2">
                      <span className="text-3xl">{categoryIcons[project.category as Category]}</span>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${difficultyConfig[project.difficulty].bgColor} ${difficultyConfig[project.difficulty].color}`}>
                        {difficultyConfig[project.difficulty].icon}
                        {project.difficulty}
                      </span>
                    </div>

                    <Link to={`/project/${project.id}`} className="group h-full flex flex-col">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                        {project.description}
                      </p>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border text-primary font-medium group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={safeCurrentPage === 1}
                    className="px-3 py-2 rounded-lg border border-border text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                  >
                    Prev
                  </button>

                  {visiblePageNumbers.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`min-w-10 px-3 py-2 rounded-lg border text-sm ${
                        pageNumber === safeCurrentPage
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    disabled={safeCurrentPage === totalPages}
                    className="px-3 py-2 rounded-lg border border-border text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div>
              <EmptyState query={filters.query} />
              <button
                onClick={() => {
                  setQueryDraft("");
                  setCurrentPage(1);
                  clearFilters();
                }}
                className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="about-projexplorer" className="py-12 md:py-16 border-t border-border/60">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">About ProjeXplorer</h2>
          <p className="mt-4 max-w-4xl text-muted-foreground leading-7">
            ProjeXplorer is a structured project-building platform that helps developers move from learning concepts to shipping real-world applications.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Problem Statement</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Each project starts with a clear real-world use case so you know what problem you are solving.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Execution Roadmap</p>
              <p className="mt-2 text-sm text-muted-foreground">
                You get a defined roadmap that breaks the build into practical steps from start to finish.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Tech Stack</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Each project suggests a recommended stack so you can choose the right tools for the job.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Portfolio Outcome</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Every project is designed to become a portfolio-ready result you can confidently showcase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="learning-paths" className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Curated Learning Paths</h2>
          <p className="mt-4 max-w-4xl text-muted-foreground leading-7">
            Learning paths are designed as step-by-step skill progression tracks that help you move from beginner projects to advanced builds.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-primary">Level 1 - Beginner</p>
              <p className="mt-2 text-sm text-muted-foreground">Project: Notes App</p>
              <p className="mt-2 text-sm text-muted-foreground">Skills: CRUD, Local Storage, Basic UI</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-primary">Level 2 - Intermediate</p>
              <p className="mt-2 text-sm text-muted-foreground">Project: Auth-Based Blog Platform</p>
              <p className="mt-2 text-sm text-muted-foreground">Skills: JWT Auth, REST APIs, Database Design</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-primary">Level 3 - Advanced</p>
              <p className="mt-2 text-sm text-muted-foreground">Project: SaaS Task Manager</p>
              <p className="mt-2 text-sm text-muted-foreground">Skills: Role-based access, caching, scalability</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Prerequisites</p>
              <p className="mt-2 text-sm text-muted-foreground">Basic JavaScript, React fundamentals, or the baseline skills needed for the project.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Skills Covered</p>
              <p className="mt-2 text-sm text-muted-foreground">Authentication, API design, state management, database design, and deployment.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Time Estimate</p>
              <p className="mt-2 text-sm text-muted-foreground">Most projects include a practical estimate such as 8-12 hours or 1-2 weeks.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Difficulty Tag</p>
              <p className="mt-2 text-sm text-muted-foreground">Beginner, Intermediate, or Advanced to help you choose the right challenge.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">How It Works</h2>
          <p className="mt-4 text-muted-foreground max-w-4xl">
            ProjeXplorer follows a detailed workflow: discover, build, validate, and showcase.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-primary">1. Discover</p>
              <p className="mt-2 text-sm text-muted-foreground">Search and filter by difficulty, domain, tech stack, and keywords to find the right project for your level.</p>
              <p className="mt-3 text-xs text-muted-foreground">Suggested filters: Web, AI, DevOps, React, Node, Python.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-primary">2. Build</p>
              <p className="mt-2 text-sm text-muted-foreground">Every project page includes the problem statement, core features, stack options, and implementation steps.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>Setup project structure</li>
                <li>Build backend APIs</li>
                <li>Design frontend UI</li>
                <li>Connect frontend and backend</li>
                <li>Add testing</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-primary">3. Validate</p>
              <p className="mt-2 text-sm text-muted-foreground">Check the project with testing, documentation, and UX improvements so it feels production-aware.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>Unit testing</li>
                <li>API testing</li>
                <li>End-to-end flow validation</li>
                <li>Architecture diagram</li>
                <li>Database schema</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-primary">4. Showcase</p>
              <p className="mt-2 text-sm text-muted-foreground">Deploy the project, publish the repository, and explain the work in a recruiter-friendly story.</p>
              <p className="mt-3 text-xs text-muted-foreground">Story format: Problem → Approach → Tech Stack → Impact</p>
            </div>
          </div>
        </div>
      </section>

      <section id="learning-blog" className="py-12 md:py-16 border-t border-border/60">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Learning Blog</h2>
          <p className="mt-4 text-muted-foreground max-w-4xl">
            The Learning Blog will cover deeper technical thinking behind projects, the tradeoffs you make while building, and how to explain your work.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Project Breakdowns</p>
              <p className="mt-2 text-sm text-muted-foreground">System architecture, feature prioritization, and scaling strategies.</p>
              <p className="mt-3 text-xs text-muted-foreground">Example topics: Designing a Chat Application, Building a Scalable URL Shortener.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Engineering Guides</p>
              <p className="mt-2 text-sm text-muted-foreground">Writing clean code, API design best practices, and deployment workflows with CI/CD basics.</p>
              <p className="mt-3 text-xs text-muted-foreground">Example guides: How to deploy a full-stack app, common backend bugs and how to fix them.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Career-Focused Insights</p>
              <p className="mt-2 text-sm text-muted-foreground">How to describe your project in resumes, interviews, and portfolios with strong action verbs and impact metrics.</p>
              <p className="mt-3 text-xs text-muted-foreground">Recruiters look for clean UI, working demos, and structured code.</p>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contact</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Want to suggest new project tracks, report an issue, or collaborate on content? Send the details so we can respond with the right context.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Best For</p>
              <p className="mt-2 text-sm text-muted-foreground">Feature requests, bug reports, new project ideas, and collaboration opportunities.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Helpful Details</p>
              <p className="mt-2 text-sm text-muted-foreground">Add the project title, category, expected behavior, and screenshots or links if relevant.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold text-foreground">Response Window</p>
              <p className="mt-2 text-sm text-muted-foreground">Typical response time is 24-72 hours depending on request volume.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:zetfounder@gmail.com"
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Email Us
            </a>
            <a
              href="https://github.com/Sadwik09/project--xplorer"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </Layout>
    </div>
    </div>
  );
}
