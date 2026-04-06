import { Link } from "react-router-dom";
import { AtSign, Globe, Mail, MapPin, Share2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-muted/25">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                P
              </div>
              <h3 className="text-2xl font-bold text-foreground">ProjExplorer</h3>
            </div>

            <p className="mt-6 text-muted-foreground text-base leading-7 max-w-sm">
              Build portfolio-ready projects with clear paths, practical scope, and modern engineering standards.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/Sadwik09/project--xplorer"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Open project website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Sadwik09/project--xplorer"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/15 transition-colors"
                aria-label="Share project"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@projexplorer.dev"
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Email ProjExplorer"
              >
                <AtSign className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.18em] font-semibold text-foreground/80 uppercase mb-6">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/#about-projexplorer" className="hover:text-primary transition-colors">About ProjExplorer</Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/#learning-blog" className="hover:text-primary transition-colors">Learning Blog</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.18em] font-semibold text-foreground/80 uppercase mb-6">Explore</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">All Projects</Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-primary transition-colors">Saved Projects</Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Categories</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Difficulty Levels</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.18em] font-semibold text-foreground/80 uppercase mb-6">Legal</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-muted-foreground">
          <p className="text-sm">© {currentYear} ProjExplorer Inc. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-7 text-sm">
            <p className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Guntur,  Andhra Pradesh
            </p>
            <a href="mailto:hello@projexplorer.dev" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
               zetfounder@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
