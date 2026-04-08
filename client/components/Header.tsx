import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Lightbulb, Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" state={{ showMainHome: true }} className="flex items-center gap-2 font-bold text-xl">
          <Lightbulb className="w-6 h-6 text-primary" />
          <span className="text-foreground">ProjeXplorer</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-border hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container max-w-7xl mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full px-4 py-2 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "Switch to light" : "Switch to dark"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
