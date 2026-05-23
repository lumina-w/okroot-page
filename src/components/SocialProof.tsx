import { useReveal } from "@/hooks/useReveal";

/* ─── Molecule: Founder Portrait ─────────────────────────────────────────── */

function FounderPortrait() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl sm:w-[300px] sm:shrink-0"
      style={{
        background: "linear-gradient(135deg,#9433ea,#581c87)",
        aspectRatio: "300 / 380",
        maxWidth: 300,
      }}
    >
      {/* Large VR initials as watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center font-display font-extrabold"
        style={{
          fontSize: 140,
          color: "rgba(255,255,255,0.22)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
        aria-hidden
      >
        VR
      </div>
      {/* Frosted pill */}
      <div
        className="absolute bottom-4 left-4 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white"
        style={{ background: "rgba(255,255,255,0.16)", backdropFilter: "blur(8px)" }}
      >
        Valentina Ramírez
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function SocialProof() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="historia"
      className="py-24 lg:py-32"
      style={{ background: "var(--root-cream-warm)" }}
    >
      <div ref={ref} className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div
          className="reveal grid items-center gap-10 overflow-hidden rounded-[28px] border p-8 sm:flex-row sm:p-14 lg:grid-cols-[300px_1fr] lg:gap-14"
          style={{
            background: "linear-gradient(135deg, #ece1ff 0%, #faf8f5 100%)",
            borderColor: "var(--root-line)",
          }}
        >
          {/* Portrait */}
          <div className="flex justify-center lg:justify-start">
            <FounderPortrait />
          </div>

          {/* Quote */}
          <div>
            {/* Decorative opening quote */}
            <div
              className="font-display font-extrabold leading-[0.4]"
              style={{ fontSize: 72, color: "var(--root-violet)", marginLeft: -6, marginBottom: 16 }}
              aria-hidden
            >
              "
            </div>

            <blockquote
              className="font-display font-semibold leading-snug tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 2.125rem)", color: "var(--root-ink)", margin: 0 }}
            >
              Tengo tres condiciones. Cada comida era ruleta rusa — ansiedad, búsqueda obsesiva,
              desconfianza. Root existe porque cansé de tener miedo.{" "}
              <span style={{ fontStyle: "italic", color: "var(--root-violet)" }}>Ahora confío.</span>
            </blockquote>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div className="h-px w-8" style={{ background: "var(--root-ink)" }} />
              <div>
                <p className="font-semibold" style={{ fontSize: 16, color: "var(--root-ink)" }}>
                  Valentina Ramírez
                </p>
                <p className="mt-0.5 text-[13px]" style={{ color: "var(--root-mute)" }}>
                  Celíaca · Diabética · Intolerante a la lactosa
                </p>
                <p className="mt-0.5 text-[13px]" style={{ color: "var(--root-mute)" }}>
                  Fundadora · Lúmina W
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
