import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import EmptyState from "@/components/EmptyState";
import { projects } from "@/lib/projects";
import { useSavedProjects } from "@/hooks/useSavedProjects";

export default function SavedProjects() {
  const { savedIds } = useSavedProjects();
  const savedProjects = projects.filter((project) => savedIds.includes(project.id));

  return (
    <Layout>
      <Helmet>
        <title>Saved Projects | ProjExplorer</title>
        <meta name="description" content="Your saved project ideas in ProjExplorer." />
      </Helmet>

      <section className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Saved Projects</h1>
        <p className="mt-2 text-muted-foreground">Keep your favorite ideas in one place.</p>

        {savedProjects.length === 0 ? (
          <EmptyState query="saved projects" />
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h2 className="font-semibold text-lg text-foreground">{project.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                <div className="mt-4 text-xs text-primary font-medium">Open details</div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
