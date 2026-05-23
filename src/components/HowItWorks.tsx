import { useReveal } from "@/hooks/useReveal";
import { ScannerIllo, RecipesIllo, InsightsIllo } from "./mockups";

/* ─── Atom: Feature number badge + eyebrow ──────────────────────────────── */

function FeatureLabel({ idx, eyebrow }: { idx: string; eyebrow: string }) {
  return (
    <div className="flex items-center gap-3.5">
      <div
        className="flex h-[38px] w-[38px] items-center justify-center rounded-xl font-display text-sm font-extrabold"
        style={{ background: "var(--root-violet-soft)", color: "var(--root-violet)" }}
      >
        {idx}
      </div>
      <div
        className="text-[11px] font-bold uppercase tracking-[0.22em]"
        style={{ color: "var(--root-violet)" }}
      >
        {eyebrow}
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function HowItWorks() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32"
      style={{ background: "var(--root-cream-warm)" }}
    >
      <div ref={ref} className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[620px]">
            <div className="reveal">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
                style={{ background: "rgba(148,51,234,0.10)", color: "var(--root-purple)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--root-violet)" }} />
                Cómo funciona
              </div>
            </div>
            <h2
              className="reveal mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", color: "var(--root-ink)" }}
            >
              Tres pasos.
              <br />
              Cero{" "}
              <span style={{ fontStyle: "italic", color: "var(--root-violet)" }}>guesswork</span>.
            </h2>
          </div>
          <p
            className="reveal max-w-[280px] text-sm leading-relaxed"
            style={{ color: "var(--root-mute)" }}
          >
            Diseñado para celíacos, diabéticos e intolerantes a la lactosa. Funciona desde el primer escaneo.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {/* 01 Scanner */}
          <div
            className="reveal grid min-h-[380px] items-center gap-8 overflow-hidden rounded-[28px] border bg-white p-10 sm:p-12"
            style={{ borderColor: "var(--root-line)", ["--reveal-delay" as string]: "0ms" }}
          >
            <div>
              <FeatureLabel idx="01" eyebrow="Scanner" />
              <h3
                className="mt-6 font-display font-extrabold leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.75rem)", color: "var(--root-ink)" }}
              >
                Analiza en segundos
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "var(--root-mute)" }}>
                Fotografía la etiqueta. Nuestro análisis te dice si es seguro{" "}
                <strong style={{ color: "var(--root-ink)" }}>PARA TI</strong>, según tu condición.
              </p>
            </div>
            <ScannerIllo />
          </div>

          {/* 02 Recetas */}
          <div
            className="reveal grid min-h-[380px] items-center gap-8 overflow-hidden rounded-[28px] border bg-white p-10 sm:p-12"
            style={{ borderColor: "var(--root-line)", ["--reveal-delay" as string]: "100ms" }}
          >
            <RecipesIllo />
            <div>
              <FeatureLabel idx="02" eyebrow="Recetas verificadas" />
              <h3
                className="mt-6 font-display font-extrabold leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.75rem)", color: "var(--root-ink)" }}
              >
                Menú que confías
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "var(--root-mute)" }}>
                Recetas curadas para celíacos, diabéticos e intolerantes a la lactosa. No es{" "}
                <em style={{ fontStyle: "normal", color: "var(--root-violet)" }}>"apto para"</em>… es verificado.
              </p>
            </div>
          </div>

          {/* 03 Insights — full width */}
          <div
            className="reveal grid min-h-[320px] items-center gap-8 overflow-hidden rounded-[28px] border bg-white p-10 sm:p-12 lg:col-span-2 lg:grid-cols-2 lg:gap-14"
            style={{ borderColor: "var(--root-line)", ["--reveal-delay" as string]: "200ms" }}
          >
            <div>
              <FeatureLabel idx="03" eyebrow="Insights" />
              <h3
                className="mt-6 font-display font-extrabold leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.75rem)", color: "var(--root-ink)" }}
              >
                Entiende tu patrón
              </h3>
              <p className="mt-4 max-w-[460px] text-[17px] leading-relaxed" style={{ color: "var(--root-mute)" }}>
                Ve cómo tu cuerpo responde. Macros, racha, alertas personalizadas{" "}
                <span className="font-semibold" style={{ color: "var(--root-violet)" }}>(Pro)</span>.
              </p>
            </div>
            <InsightsIllo />
          </div>
        </div>
      </div>
    </section>
  );
}
