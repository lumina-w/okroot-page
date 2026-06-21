import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Where the "Entrar a la app" CTA points (the live PWA).
export const APP_URL = "https://app.okroot.co";

// Founder portfolio — used as social proof in the founder section + footer.
export const PORTFOLIO_URL = "https://wavival.dev";

// Early-access scarcity shown on the hero + waitlist to drive action.
// MUST be a real number — a false count erodes trust the moment it's noticed.
// Set to 0 to hide the scarcity line entirely.
export const EARLY_ACCESS_SPOTS = 47;
