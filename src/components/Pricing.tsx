import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "./icons";
import { APP_URL } from "@/lib/utils";

const FREE = [
  "10 escaneos al mes",
  "Recetas filtradas por tu condición",
  "Registra tu comida (Diary)",
  "Insights básicos (macros)",
];

const PRO = [
  "Escaneos ilimitados",
  "Recomendaciones personalizadas",
  "Health logs (glucosa / piel / energía)",
  "Insights completos (glucémico, racha, agua)",
  "Lista de compra semanal",
];

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="bg-cream-deep/60 py-20 lg:py-28">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10"
      >
        <div className="reveal max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Precios
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Empieza gratis. Sube cuando quieras.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* FREE */}
          <Card
            className="reveal flex flex-col p-7 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:shadow-[0_28px_55px_-30px_rgba(88,28,135,0.45)] sm:p-9"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Empieza aquí
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-display text-4xl font-bold text-ink">
                Free
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">No requiere tarjeta.</p>

            <ul className="mt-7 flex flex-1 flex-col gap-3.5">
              {FREE.map((f) => (
                <Feature key={f} muted>
                  {f}
                </Feature>
              ))}
            </ul>

            <Button
              variant="secondary"
              size="lg"
              className="mt-8 w-full"
              onClick={() => (window.location.href = APP_URL)}
            >
              Empezar
            </Button>
          </Card>

          {/* PRO */}
          <Card className="reveal relative flex flex-col overflow-hidden border-primary/30 bg-gradient-to-br from-accent to-primary p-7 text-white shadow-[0_28px_60px_-30px_rgba(88,28,135,0.7)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] sm:p-9">
            <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              Más confianza
            </span>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Pro
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-display text-4xl font-bold">$19.900</span>
              <span className="pb-1 text-sm text-white/80">COP / mes</span>
            </div>
            <p className="mt-2 text-sm text-white/80">
              Menos que un café diario.
            </p>

            <ul className="mt-7 flex flex-1 flex-col gap-3.5">
              {PRO.map((f) => (
                <Feature key={f}>{f}</Feature>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-8 w-full bg-white text-accent shadow-none hover:bg-cream hover:text-accent"
              onClick={() => (window.location.href = APP_URL)}
            >
              Suscribirse
            </Button>
          </Card>
        </div>

        <p
          className="reveal mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted"
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          ¿Dudas? Todas las features de Pro se desbloquean automáticamente cuando
          subes de plan desde la app.{" "}
          <span className="font-semibold text-ink">
            0 penalización por cambiar.
          </span>
        </p>
      </div>
    </section>
  );
}

function Feature({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <li className="flex items-start gap-3 text-[15px]">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          muted ? "bg-primary/12 text-primary" : "bg-white/20 text-white"
        }`}
      >
        <Check className="h-3.5 w-3.5" />
      </span>
      <span className={muted ? "text-ink/80" : "text-white"}>{children}</span>
    </li>
  );
}
