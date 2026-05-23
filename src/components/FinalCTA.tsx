import { useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { APP_URL } from "@/lib/utils";

export function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section className="px-5 py-12 sm:px-6 lg:py-16">
      <div ref={ref} className="mx-auto w-full max-w-[1100px]">
        <div
          className="reveal relative overflow-hidden rounded-[32px] px-8 py-20 text-center lg:px-16 lg:py-24"
          style={{ background: "var(--root-purple-ink)", color: "var(--root-cream)" }}
        >
          {/* Decorative orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-28 h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(148,51,234,0.45), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(148,51,234,0.25), transparent 65%)",
            }}
          />

          <div className="relative mx-auto max-w-[780px]">
            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.04em]"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--root-violet)" }}
              />
              Pre-lanzamiento · LATAM
            </div>

            <h2
              className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.045em]"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)",
                color: "var(--root-cream)",
                margin: "24px 0 0",
              }}
            >
              ¿Listo para confiar
              <br className="hidden sm:block" />
              en lo que{" "}
              <span style={{ fontStyle: "italic", color: "#c896ff" }}>comes</span>?
            </h2>

            <p
              className="mx-auto mt-5 max-w-[560px] text-[18px] leading-relaxed"
              style={{ color: "rgba(250,248,245,0.78)" }}
            >
              Hecho por alguien que vive con las mismas tres condiciones que tú. Empieza gratis hoy.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-4.5 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: "var(--root-violet)",
                  boxShadow: "0 12px 28px -10px rgba(148,51,234,0.7)",
                  padding: "18px 28px",
                }}
              >
                Prueba gratis — no requiere tarjeta →
              </a>
              <button
                className="rounded-full border px-7 py-4.5 text-[16px] font-semibold transition-colors hover:border-white hover:bg-white/10"
                style={{
                  background: "transparent",
                  color: "var(--root-cream)",
                  borderColor: "rgba(255,255,255,0.3)",
                  padding: "18px 24px",
                }}
                onClick={() => navigate("/faq")}
              >
                Leer FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
