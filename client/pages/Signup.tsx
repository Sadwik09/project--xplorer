import { Link, Navigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { isSupabaseConfigured, supabase } from "@/lib/supabaseClient";

export default function Signup() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/saved" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>Sign Up | ProjExplorer</title>
        <meta
          name="description"
          content="Create your ProjExplorer account and save project ideas for your learning roadmap."
        />
      </Helmet>

      <div className="min-h-[calc(100vh-var(--header-height))] flex items-center justify-center py-12 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
              <p className="text-muted-foreground">Join ProjExplorer and build your learning list.</p>
            </div>

            {isSupabaseConfigured() && supabase ? (
              <Auth
                supabaseClient={supabase}
                providers={["google", "github"]}
                appearance={{ theme: ThemeSupa }}
                redirectTo={window.location.origin}
                showLinks={false}
                view="sign_up"
              />
            ) : (
              <div className="rounded-lg border border-amber-400/40 bg-amber-500/10 p-4 text-sm text-foreground">
                Supabase is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.
              </div>
            )}

            <p className="text-center mt-6 text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
