import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { AlertCircle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
