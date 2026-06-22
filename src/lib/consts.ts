// Runtime-config constants — edit these, not scattered literals.

// Where the "Entrar a la app" CTA points (the live PWA).
export const APP_URL = "https://app.okroot.co";

// Founder portfolio — used as social proof in the founder section + footer.
export const PORTFOLIO_URL = "https://wavival.dev";

// Early-access scarcity shown on the waitlist to drive action.
// MUST be a real number — a false count erodes trust the moment it's noticed.
// Set to 0 to hide the scarcity line entirely.
export const EARLY_ACCESS_SPOTS = 17;

// Acceso gratis para early users hasta esta fecha; después es pago.
// `FREE_UNTIL_ISO` alimenta el atributo <time datetime>; `FREE_UNTIL_LABEL` es
// el texto visible. Dejar la fecha en pasado oculta el aviso automáticamente
// (ver `isFreeWindowOpen`).
export const FREE_UNTIL_ISO = "2026-07-30";
export const FREE_UNTIL_LABEL = "30 de julio de 2026";

// El aviso de gratis-por-tiempo-limitado solo se muestra mientras la ventana
// siga abierta. Comparación por fecha (no hora) para evitar parpadeos de zona.
export const isFreeWindowOpen = (now: Date = new Date()): boolean => {
  const end = new Date(`${FREE_UNTIL_ISO}T23:59:59-05:00`); // hora Colombia
  return now <= end;
};

// ── Precios ──────────────────────────────────────────────────────────────
// Planes que entran en vigor después de `FREE_UNTIL`. Editá estos números y la
// sección de precios se actualiza sola. `usd` es aproximado (relación ~4000:1);
// si la tasa cambia, ajustá a mano. `ahorroPct` se muestra en el plan anual.
export const PRICING = {
  moneda: { cop: "COP", usd: "USD" },
  mensual: { cop: 59900, usd: 15 },
  anual: { cop: 449000, usd: 112, ahorroPct: 38 },
  // Beneficios del plan (sin claims médicos ni nombres de tecnología).
  beneficios: [
    "Escaneo ilimitado de etiquetas",
    "Un perfil para tus tres condiciones a la vez",
    "Alertas de ingredientes según tu perfil",
    "Recetas verificadas para tus restricciones",
    "Funciona sin conexión",
  ],
} as const;
