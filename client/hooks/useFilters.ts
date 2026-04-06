import { useSearchParams } from "react-router-dom";

export type SortMode = "newest" | "title-asc" | "title-desc" | "difficulty";

export interface Filters {
  query: string;
  difficulty: string;
  category: string;
  sort: SortMode;
}

export function useFilters() {
  const [params, setParams] = useSearchParams();

  const filters: Filters = {
    query: params.get("q") ?? "",
    difficulty: params.get("difficulty") ?? "",
    category: params.get("category") ?? "",
    sort: (params.get("sort") as SortMode) ?? "newest",
  };

  const setFilter = (key: keyof Filters, value: string) => {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (!value) next.delete(key);
        else next.set(key, value);
        return next;
      },
      { replace: true },
    );
  };

  const clearFilters = () => {
    setParams({}, { replace: true });
  };

  return { filters, setFilter, clearFilters };
}
