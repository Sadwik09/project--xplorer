export default function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-border p-5 space-y-3 bg-card">
      <div className="h-5 bg-muted rounded w-3/4" />
      <div className="h-3 bg-muted/70 rounded w-full" />
      <div className="h-3 bg-muted/70 rounded w-5/6" />
      <div className="flex gap-2 pt-2">
        <div className="h-6 w-20 bg-primary/20 rounded-full" />
        <div className="h-6 w-24 bg-secondary/20 rounded-full" />
      </div>
    </div>
  );
}
