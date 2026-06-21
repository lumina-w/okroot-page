import type { ReactNode, CSSProperties } from "react";
import { PhoneMock } from "./mockups";

/* ─── Atoms ─────────────────────────────────────────────────────────────── */

function Badge({ children }: { children: ReactNode }) {
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
        {" "}— celíaca, diabética e intolerante a la lactosa. Full Stack Developer.
      </p>
    </div>
  );
}

/* ─── Molecule: Floating verdict chip ───────────────────────────────────── */

function VerdictChip({
  verdict,
  label,
  detail,
  style,
}: {
  verdict: "ok" | "no";
  label: string;
  detail: string;
  style?: CSSProperties;
}) {
  const ok = verdict === "ok";
  return (
    <div
      className="absolute hidden items-center gap-2.5 rounded-2xl border bg-white p-3 shadow-[0_12px_30px_-12px_rgba(20,20,20,0.18)] lg:flex"
      style={{ borderColor: "var(--root-line)", ...style }}
    >
      <span
        className="flex h-[38px] w-[38px] items-center justify-center rounded-full text-base font-bold text-white"
        style={{ background: ok ? "var(--root-violet)" : "#c44a4a" }}
      >
        {ok ? "✓" : "✗"}
      </span>
      <div>
        <div
          className="text-[11px] font-bold uppercase tracking-[0.08em]"
          style={{ color: ok ? "var(--root-violet)" : "#c44a4a" }}
        >
          {label}
        </div>
        <div className="text-[13px] font-semibold" style={{ color: "var(--root-ink)" }}>
          {detail}
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section id="hero" className="px-5 pb-6 pt-0 sm:px-6 lg:px-6">
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
              <Badge>Creado con Claude API · IA real, no base de datos</Badge>
            </div>

            <h1
              className="load-rise mt-6 font-display font-extrabold leading-[1.0] tracking-[-0.045em] text-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.4vw, 4.25rem)",
                animationDelay: "90ms",
              }}
            >
              Fotografía la etiqueta.
              <br />
              Sabe en segundos si{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg,#9433ea,#581c87)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                puedes comerla.
              </span>
            </h1>

            <p
              className="load-rise mt-6 max-w-[520px] text-[18px] leading-relaxed"
              style={{ color: "var(--root-mute)", animationDelay: "220ms" }}
            >
              Para quien tiene celiaquía, diabetes o intolerancia a la lactosa —{" "}
              <strong style={{ color: "var(--root-ink)" }}>o las tres a la vez.</strong>
            </p>

            <div
              className="load-rise mt-9 flex flex-col items-start gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("waitlist")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: "var(--root-violet)",
                  boxShadow: "0 8px 20px -8px rgba(148,51,234,0.5)",
                }}
              >
                Quiero comer sin adivinar →
              </button>
              <p className="text-[13px]" style={{ color: "var(--root-faint)" }}>
                <strong style={{ color: "var(--root-mute)" }}>Análisis en menos de 3 segundos</strong>
                {" · "}Sin tarjeta · Funciona offline.
              </p>
            </div>

            <div className="load-rise mt-11" style={{ animationDelay: "430ms" }}>
              <TrustPill />
            </div>
          </div>

          {/* Right column — phone + floating verdict chips */}
          <div
            className="load-rise relative flex justify-center lg:justify-end"
            style={{ animationDelay: "280ms" }}
          >
            <div className="relative">
              <PhoneMock />

              <VerdictChip
                verdict="ok"
                label="OK"
                detail="Sin gluten · IG bajo"
                style={{ top: 80, left: -10, transform: "rotate(-4deg)" }}
              />
              <VerdictChip
                verdict="no"
                label="No"
                detail="Contiene lactosa"
                style={{ bottom: 40, right: -20, transform: "rotate(4deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
