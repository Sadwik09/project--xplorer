import { Search } from "lucide-react";

export default function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center py-24 text-muted-foreground text-center">
      <Search className="w-12 h-12 mb-4" />
      <p className="text-lg font-semibold text-foreground">
        No projects found{query ? ` for \"${query}\"` : ""}
      </p>
      <p className="text-sm mt-1">Try different keywords or clear your filters</p>
    </div>
  );
}
