import { createClient } from "@supabase/supabase-js";

export function createServerClient() {
  return createClient(
    process.env.SUPABASE_URL!, // Ganti dari NEXT_PUBLIC_SUPABASE_URL
    process.env.SUPABASE_SERVICE_ROLE_KEY! // Pakai service role key untuk backend
  );
}
