// Minimal Supabase waitlist insert via PostgREST — no SDK, zero bundle cost.
// The anon key is public by design; Row Level Security is what protects the table
// (see supabase/waitlist.sql: anon may INSERT only, never SELECT).

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** True when both env vars are present (otherwise the form runs in demo mode). */
export const supabaseReady = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export type WaitlistEntry = { email: string; conditions: string[] };

export type WaitlistResult = "ok" | "duplicate";

export async function insertWaitlist(entry: WaitlistEntry): Promise<WaitlistResult> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn(
      "[OKRoot] Supabase no configurado (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). Submit simulado.",
      entry,
    );
    return "ok";
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/okroot-waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email: entry.email, conditions: entry.conditions }),
  });

  // Unique email already on the list → treat as success ("you're already in").
  if (res.status === 409) return "duplicate";

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Supabase ${res.status}: ${detail}`);
  }

  return "ok";
}
