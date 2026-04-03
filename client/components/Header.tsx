import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lightbulb, LogOut, Menu, X } from "lucide-react";

interface User {
  email: string;
  name: string;
}

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

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

        {/* Auth Actions */}
        {!user ? (
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-6 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">{user.name}</span>
                <span className="text-xs text-muted-foreground">{user.email}</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg"
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
            <Link
              to="/"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Projects
            </Link>
            <a
              href="#"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Leaderboard
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              About
            </a>

            <div className="border-t border-border pt-3 mt-3">
              {!user ? (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="block w-full px-4 py-2 text-center text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full px-4 py-2 text-center bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="px-4 py-2 bg-muted rounded-lg">
                    <p className="text-sm font-semibold text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
