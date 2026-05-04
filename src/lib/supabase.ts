import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Used on the client side (browser) — subject to RLS
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Used on the server side only (API routes) — bypasses RLS
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
