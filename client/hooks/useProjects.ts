import { useEffect, useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import type { Filters } from "@/hooks/useFilters";

const difficultyRank: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

export function useProjects(filters: Filters) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 250);
    return () => window.clearTimeout(timer);
  }, [filters.query, filters.difficulty, filters.category, filters.sort]);

  const filteredProjects = useMemo(() => {
    const q = filters.query.trim().toLowerCase();

    const list = projects.filter((project) => {
      const matchesQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.join(" ").toLowerCase().includes(q);

      const matchesDifficulty = !filters.difficulty || project.difficulty === filters.difficulty;
      const matchesCategory = !filters.category || project.category === filters.category;

      return matchesQuery && matchesDifficulty && matchesCategory;
    });

    if (filters.sort === "title-asc") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (filters.sort === "title-desc") {
      return [...list].sort((a, b) => b.title.localeCompare(a.title));
    }

    if (filters.sort === "difficulty") {
      return [...list].sort((a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty]);
    }

    return list;
  }, [filters]);

  return { projects: filteredProjects, loading };
}
