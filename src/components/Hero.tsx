import type { ReactNode, CSSProperties } from "react";
import { PhoneMock } from "./mockups";
import { APP_URL } from "@/lib/utils";

/* ─── Atoms ─────────────────────────────────────────────────────────────── */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
      style={{
        background: "rgba(148,51,234,0.10)",
        color: "var(--root-purple)",
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--root-violet)" }}
      />
      {children}
    </div>
  );
}

function TrustPill() {
  return (
    <div
      className="flex max-w-[560px] items-center gap-3.5 rounded-full border px-[18px] py-3.5"
      style={{ background: "#fff", borderColor: "var(--root-line)" }}
    >
      <div
        className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold text-white"
        style={{ background: "linear-gradient(135deg,#9433ea,#581c87)" }}
      >
        VR
      </div>
      <p className="text-[12.5px] leading-snug" style={{ color: "var(--root-mute)" }}>
        <span className="font-semibold" style={{ color: "var(--root-ink)" }}>
          Hecho por Valentina Ramírez
        </span>
        {" "}— celíaca, diabética e intolerante a la lactosa. Desarrolladora · Fundadora de Lúmina W.
      </p>
    </div>
  );
}

/* ─── Molecule: Floating card ───────────────────────────────────────────── */

function FloatingCard({
  emoji,
  label,
  title,
  style,
}: {
  emoji: string;
  label: string;
  title: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="absolute hidden items-center gap-2.5 rounded-2xl border bg-white p-3 shadow-[0_12px_30px_-12px_rgba(20,20,20,0.18)] lg:flex"
      style={{ borderColor: "var(--root-line)", ...style }}
    >
      <span
        className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-lg"
        style={{ background: "var(--root-violet-soft)" }}
      >
        {emoji}
      </span>
      <div>
        <div className="text-[11px] font-semibold" style={{ color: "var(--root-violet)" }}>
          {label}
        </div>
        <div className="text-[13px] font-semibold" style={{ color: "var(--root-ink)" }}>
          {title}
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section className="px-5 pb-6 pt-0 sm:px-6 lg:px-6">
      {/* Hero card with radial gradient */}
      <div
        className="relative overflow-hidden rounded-[28px] border"
        style={{
          background:
            "radial-gradient(120% 90% at 0% 0%, #ece1ff 0%, #faf8f5 55%, #faf8f5 100%)",
          borderColor: "var(--root-line)",
          minHeight: 600,
        }}
      >
        {/* Decorative blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 h-[360px] w-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(148,51,234,0.18), transparent 70%)",
          }}
        />

        <div className="grid items-center gap-8 px-8 py-20 sm:px-12 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left column */}
          <div className="relative z-10">
            <div className="load-rise" style={{ animationDelay: "0ms" }}>
              <Eyebrow>Pre-lanzamiento LATAM · Cupos limitados</Eyebrow>
            </div>

            <h1
              className="load-rise mt-6 font-display font-extrabold leading-[0.98] tracking-[-0.045em] text-ink"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.75rem)",
                animationDelay: "90ms",
              }}
            >
              Come con
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg,#9433ea,#581c87)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                confianza.
              </span>
            </h1>

            <p
              className="load-rise mt-6 max-w-[500px] text-[18px] leading-relaxed"
              style={{ color: "var(--root-mute)", animationDelay: "220ms" }}
            >
              Cada etiqueta analizada según{" "}
              <strong style={{ color: "var(--root-ink)" }}>TU</strong> condición.
              Recetas verificadas. Sin guesswork.
            </p>

            <div
              className="load-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: "var(--root-violet)",
                  boxShadow: "0 8px 20px -8px rgba(148,51,234,0.5)",
                }}
              >
                Prueba gratis — no requiere tarjeta
              </a>
              <button
                className="rounded-full px-1.5 py-4 text-[15px] font-semibold underline underline-offset-[6px] transition-colors hover:text-primary"
                style={{ color: "var(--root-ink)" }}
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver cómo funciona →
              </button>
            </div>

            <div
              className="load-rise mt-11"
              style={{ animationDelay: "430ms" }}
            >
              <TrustPill />
            </div>
          </div>

          {/* Right column — phone + floating cards */}
          <div
            className="load-rise relative flex justify-center lg:justify-end"
            style={{ animationDelay: "280ms" }}
          >
            <div className="relative">
              <PhoneMock />

              <FloatingCard
                emoji="🍞"
                label="Receta verificada"
                title="Pan sin gluten · IG bajo"
                style={{ top: 80, left: -10, transform: "rotate(-4deg)" }}
              />
              <FloatingCard
                emoji="📊"
                label="Racha · 12 días"
                title="Glucosa estable"
                style={{ bottom: 40, right: -20, transform: "rotate(4deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
