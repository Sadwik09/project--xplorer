import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Keep app booting in local/dev even before env vars are configured.
const canUseSupabase = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = canUseSupabase
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export function isSupabaseConfigured() {
  return canUseSupabase;
}
