import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Lightbulb className="w-6 h-6 text-primary" />
          <span className="text-foreground">Project Ideas</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Browse Projects
          </Link>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Leaderboard
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </a>
        </nav>

        <button className="hidden md:inline-flex px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
          Sign In
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 hover:bg-muted rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
