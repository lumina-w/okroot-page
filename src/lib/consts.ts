// Runtime-config constants — edit these, not scattered literals.

// Where the "Entrar a la app" CTA points (the live PWA).
export const APP_URL = "https://app.okroot.co";

// Founder portfolio — used as social proof in the founder section + footer.
export const PORTFOLIO_URL = "https://wavival.dev";

// Early-access scarcity shown on the waitlist to drive action.
// MUST be a real number — a false count erodes trust the moment it's noticed.
// Set to 0 to hide the scarcity line entirely.
export const EARLY_ACCESS_SPOTS = 17;

// ── Precios ──────────────────────────────────────────────────────────────
// Modelo Free + Pro. `free` es gratis para siempre (con límites); `pro` es el
// plan de pago, con prueba gratis de `pruebaDias` días. Editá estos números y
// la sección de precios se actualiza sola. `usd` es aproximado (relación
// ~4000:1); si la tasa cambia, ajustá a mano. `ahorroPct` se muestra en anual.
export const PRICING = {
  moneda: { cop: "COP", usd: "USD" },
  // Versión gratuita permanente. Sin tarjeta, sin caducidad.
  free: {
    nombre: "Gratis",
    // Beneficios del free (sin claims médicos ni nombres de tecnología).
    beneficios: [
      "Escaneo de etiquetas para empezar",
      "Un perfil para tus tres condiciones a la vez",
      "Alertas de ingredientes según tu perfil",
    ],
  },
  // Plan Pro: todo sin límites. `pruebaDias` = prueba gratis antes de cobrar.
  pro: {
    nombre: "Pro",
    pruebaDias: 7,
    mensual: { cop: 59900, usd: 15 },
    anual: { cop: 449000, usd: 112, ahorroPct: 38 },
    // Se muestran sobre "Todo lo de Gratis, y además:". Solo lo que suma Pro.
    extra: [
      "Escaneo ilimitado de etiquetas",
      "Recetas verificadas para tus restricciones",
      "Funciona sin conexión",
    ],
  },
} as const;
