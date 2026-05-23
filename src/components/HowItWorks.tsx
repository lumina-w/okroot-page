import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "./ui/button";
import { ScanIcon, BowlCheck, TrendIcon, ArrowRight } from "./icons";
import { PhoneScanMock, RecipeGrid, DashboardMock } from "./mockups";
import { APP_URL } from "@/lib/utils";

export function HowItWorks() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10"
      >
        <div className="reveal max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Cómo funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            De la incertidumbre a la confianza, en tres pasos
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-20 lg:gap-28">
          {/* Feature 1 — Scanner */}
          <Feature
            Icon={ScanIcon}
            kicker="Scanner"
            title="Analiza en segundos"
            copy="Fotografía la etiqueta. Nuestro análisis te dice si es seguro PARA TI, según tu condición."
            visual={<PhoneScanMock compact />}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (window.location.href = APP_URL)}
            >
              Prueba el scanner
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Feature>

          {/* Feature 2 — Recetas verificadas */}
          <Feature
            Icon={BowlCheck}
            kicker="Recetas verificadas"
            title="Menú que confías"
            copy="Recetas curadas específicamente para celíacos, diabéticos e intolerantes a la lactosa. No es “apto para”… es verificado."
            visual={<RecipeGrid />}
            reverse
            wideVisual
          />

          {/* Feature 3 — Insights */}
          <Feature
            Icon={TrendIcon}
            kicker="Insights"
            title="Entiende tu patrón"
            copy="Ve cómo tu cuerpo responde. Macros, racha, alertas personalizadas (Pro)."
            visual={<DashboardMock />}
          />
        </div>
      </div>
    </section>
  );
}

function Feature({
  Icon,
  kicker,
  title,
  copy,
  visual,
  children,
  reverse = false,
  wideVisual = false,
}: {
  Icon: (p: { className?: string }) => ReactNode;
  kicker: string;
  title: string;
  copy: string;
  visual: ReactNode;
  children?: ReactNode;
  reverse?: boolean;
  wideVisual?: boolean;
}) {
  return (
    <div
      className={`reveal grid items-center gap-10 lg:gap-16 ${
        wideVisual
          ? "lg:grid-cols-[0.85fr_1.15fr]"
          : "lg:grid-cols-2"
      }`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </span>
        <span className="mt-5 block text-sm font-semibold uppercase tracking-wide text-primary">
          {kicker}
        </span>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">
          {copy}
        </p>
        {children && <div className="mt-5">{children}</div>}
      </div>

      <div
        className={`flex justify-center ${reverse ? "lg:order-1 lg:justify-start" : "lg:justify-end"}`}
      >
        {visual}
      </div>
    </div>
  );
}
