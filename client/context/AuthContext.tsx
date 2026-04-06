import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

const DEMO_AUTH_KEY = "demo-auth-user";

type AppUser = Pick<User, "id" | "email" | "user_metadata">;

interface AuthContextValue {
  user: AppUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signInDemo: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      const rawDemoUser = localStorage.getItem(DEMO_AUTH_KEY);
      if (rawDemoUser) {
        try {
          const demoUser = JSON.parse(rawDemoUser) as AppUser;
          setUser(demoUser);
        } catch {
          localStorage.removeItem(DEMO_AUTH_KEY);
        }
      }
      setLoading(false);
      return;
    }

    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      signInDemo: () => {
        const demoUser: AppUser = {
          id: "demo-user-id",
          email: "demo@projexplorer.dev",
          user_metadata: { full_name: "Demo User" },
        };
        localStorage.setItem(DEMO_AUTH_KEY, JSON.stringify(demoUser));
        setUser(demoUser);
      },
      signOut: async () => {
        localStorage.removeItem(DEMO_AUTH_KEY);
        if (!supabase) {
          setUser(null);
          return;
        }
        await supabase.auth.signOut();
      },
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
