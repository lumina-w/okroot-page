import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Where the CTAs point. Swap for the real app URL when it ships.
// TODO: reemplazar con la URL real de la app Root.
export const APP_URL = "https://app.luminaw.co/root";
