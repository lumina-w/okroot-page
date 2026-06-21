import { useReveal } from "@/hooks/useReveal";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const ROWS: { others: string; root: string }[] = [
  { others: "Una restricción a la vez", root: "Celiaquía + diabetes + lactosa, juntas" },
  { others: "Base de datos estática", root: "IA que lee la etiqueta real" },
  { others: "Requiere conexión", root: "100% offline" },
  { others: "Solo escanea", root: "Escanea + recetas + diario" },
];

/* ─── Atoms ─────────────────────────────────────────────────────────────── */

function CrossGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path d="M5 12.5l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function Comparison() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="diferenciador"
      className="py-24 lg:py-32"
      style={{ background: "var(--root-cream-warm)" }}
    >
      <div ref={ref} className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="reveal max-w-[640px]">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
            style={{ background: "rgba(148,51,234,0.10)", color: "var(--root-purple)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--root-violet)" }} />
            La diferencia
          </div>
          <h2
            className="mt-5 font-display font-extrabold leading-[1.04] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--root-ink)" }}
          >
            Las otras apps validan{" "}
            <span style={{ fontStyle: "italic", color: "var(--root-violet)" }}>una</span> cosa.
            <br className="hidden sm:block" /> OKRoot valida las tres.
          </h2>
        </div>

        {/* Two-column comparison */}
        <div className="reveal mt-12 grid gap-5 lg:grid-cols-2" style={{ ["--reveal-delay" as string]: "120ms" }}>
          {/* Others */}
          <div
            className="flex flex-col rounded-[28px] border bg-white p-8 sm:p-10"
            style={{ borderColor: "var(--root-line)" }}
          >
            <div
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--root-faint)" }}
            >
              Otras apps
            </div>
            <ul className="mt-6 flex flex-col gap-px">
              {ROWS.map((r) => (
                <li
                  key={r.others}
                  className="flex items-start gap-3 border-b py-4 text-[15.5px] leading-snug last:border-0"
                  style={{ borderColor: "var(--root-line)", color: "var(--root-mute)" }}
                >
                  <span style={{ color: "var(--root-faint)" }}>
                    <CrossGlyph />
                  </span>
                  {r.others}
                </li>
              ))}
            </ul>
          </div>

          {/* OKRoot — highlighted */}
          <div
            className="relative flex flex-col overflow-hidden rounded-[28px] p-8 text-white sm:p-10"
            style={{ background: "linear-gradient(160deg,#9433ea 0%,#581c87 100%)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-16 h-[240px] w-[240px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)" }}
            />
            <div className="relative z-10 text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: "#e9d4ff" }}>
              OKRoot
            </div>
            <ul className="relative z-10 mt-6 flex flex-col gap-px">
              {ROWS.map((r) => (
                <li
                  key={r.root}
                  className="flex items-start gap-3 border-b py-4 text-[15.5px] font-semibold leading-snug last:border-0"
                  style={{ borderColor: "rgba(255,255,255,0.16)" }}
                >
                  <span style={{ color: "#e9d4ff" }}>
                    <CheckGlyph />
                  </span>
                  {r.root}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
