import { Link, Navigate, useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { isSupabaseConfigured, supabase } from "@/lib/supabaseClient";

export default function Login() {
  const navigate = useNavigate();
  const { user, signInDemo } = useAuth();

  if (user) {
    return <Navigate to="/saved" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>Login | ProjExplorer</title>
        <meta
          name="description"
          content="Sign in to ProjExplorer to save project ideas and personalize your discovery feed."
        />
      </Helmet>

      <div className="min-h-[calc(100vh-var(--header-height))] flex items-center justify-center py-12 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to save projects and continue learning.</p>
            </div>

            {isSupabaseConfigured() && supabase ? (
              <Auth
                supabaseClient={supabase}
                providers={["google", "github"]}
                appearance={{ theme: ThemeSupa }}
                redirectTo={window.location.origin}
                showLinks={false}
                view="sign_in"
              />
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg border border-amber-400/40 bg-amber-500/10 p-4 text-sm text-foreground">
                  Supabase is not configured yet. You can use the demo login below, or add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
                </div>

                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-sm font-semibold text-foreground">Demo Login</p>
                  <p className="text-xs text-muted-foreground mt-1">Email: demo@projexplorer.dev</p>
                  <p className="text-xs text-muted-foreground">Password: demo123 (for demo only)</p>
                  <button
                    onClick={() => {
                      signInDemo();
                      toast.success("Signed in with demo account");
                      navigate("/saved", { replace: true });
                    }}
                    className="mt-3 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    Continue as Demo User
                  </button>
                </div>
              </div>
            )}

            <p className="text-center mt-6 text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
