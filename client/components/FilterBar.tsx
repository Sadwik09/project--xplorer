import { useState } from "react";
import { Filter, Search, X } from "lucide-react";
import type { Filters } from "@/hooks/useFilters";

interface FilterBarProps {
  filters: Filters;
  categories: string[];
  difficulties: string[];
  onChange: (key: keyof Filters, value: string) => void;
  onClear: () => void;
}

export default function FilterBar({
  filters,
  categories,
  difficulties,
  onChange,
  onClear,
}: FilterBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const fields = (
    <>
      <label className="relative block flex-1 min-w-[220px]">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          aria-label="Search projects"
          value={filters.query}
          onChange={(e) => onChange("query", e.target.value)}
          placeholder="Search by title, description, or tech"
          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </label>

      <select
        aria-label="Filter by difficulty"
        value={filters.difficulty}
        onChange={(e) => onChange("difficulty", e.target.value)}
        className="px-3 py-2.5 rounded-lg border border-border bg-background min-w-[170px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <option value="">All difficulties</option>
        {difficulties.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>

      <select
        aria-label="Filter by category"
        value={filters.category}
        onChange={(e) => onChange("category", e.target.value)}
        className="px-3 py-2.5 rounded-lg border border-border bg-background min-w-[190px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        aria-label="Sort projects"
        value={filters.sort}
        onChange={(e) => onChange("sort", e.target.value)}
        className="px-3 py-2.5 rounded-lg border border-border bg-background min-w-[150px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <option value="newest">Newest</option>
        <option value="title-asc">Title A-Z</option>
        <option value="title-desc">Title Z-A</option>
        <option value="difficulty">Difficulty</option>
      </select>

      <button
        onClick={onClear}
        className="px-4 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Clear
      </button>
    </>
  );

  return (
    <div className="border border-border rounded-xl bg-card p-3 md:p-4">
      <div className="hidden md:flex flex-wrap gap-3 items-center">{fields}</div>

      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border"
          aria-label="Toggle mobile filters"
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>

        {mobileOpen && (
          <div className="mt-3 space-y-3">
            <div className="flex flex-col gap-3">{fields}</div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-muted"
            >
              <X className="w-4 h-4" />
              Close Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
