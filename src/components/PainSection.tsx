import { useReveal } from "@/hooks/useReveal";

/* ─── SVG Glyphs (atoms) ─────────────────────────────────────────────────── */

function LabelGlyph() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="10" y="12" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 17h12M14 21h8M14 25h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="27" cy="13" r="4" fill="var(--root-cream)" stroke="currentColor" strokeWidth="1.4" />
      <path d="M27 11.5v1.5l1 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function DecodeGlyph() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M25 25l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 16.5c0-2 1.5-3.5 3.5-3.5s3.3 1.4 3.3 3.1c0 2.4-3 2.6-3 4.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="18.6" cy="24" r="0.9" fill="currentColor" />
    </svg>
  );
}

function StackGlyph() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M20 9l11 5.5L20 20 9 14.5 20 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 20l11 5.5L31 20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 25.5L20 31l11-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Molecule: PainCard ─────────────────────────────────────────────────── */

function PainCard({
  n,
  title,
  Glyph,
  delay,
}: {
  n: string;
  title: string;
  Glyph: () => React.ReactElement;
  delay: number;
}) {
  return (
    <div
      className="reveal flex min-h-[280px] flex-col gap-5 rounded-3xl border bg-white p-7 sm:p-8"
      style={{
        borderColor: "var(--root-line)",
        ["--reveal-delay" as string]: `${delay}ms`,
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: "var(--root-violet-soft)", color: "var(--root-purple)" }}
        >
          <Glyph />
        </div>
        <div
          className="font-display text-sm font-bold tracking-[0.04em]"
          style={{ color: "var(--root-faint)" }}
        >
          {n}
        </div>
      </div>
      <div
        className="mt-auto font-display text-[22px] font-bold leading-snug"
        style={{ letterSpacing: "-0.025em", color: "var(--root-ink)" }}
      >
        {title}
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────────── */

const PAINS = [
  { n: "01", title: "Leer cada etiqueta en el súper.", Glyph: LabelGlyph },
  { n: "02", title: 'Descifrar "almidón modificado" a las 8pm con hambre.', Glyph: DecodeGlyph },
  { n: "03", title: "Buscar recetas que cumplan celiaquía Y diabetes al mismo tiempo.", Glyph: StackGlyph },
];

export function PainSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="problema" className="py-24 lg:py-32" style={{ background: "var(--root-cream-warm)" }}>
      <div ref={ref} className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-[720px]">
          <div className="reveal">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
              style={{ background: "rgba(148,51,234,0.10)", color: "var(--root-purple)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--root-violet)" }} />
              Lo que vives cada día
            </div>
          </div>

          <h2
            className="reveal mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", color: "var(--root-ink)" }}
          >
            ¿Te suena{" "}
            <span style={{ fontStyle: "italic", color: "var(--root-violet)" }}>familiar</span>?
          </h2>

          <p
            className="reveal mt-6 text-[clamp(1.05rem,2vw,1.3rem)] font-semibold leading-snug"
            style={{ color: "var(--root-ink)", ["--reveal-delay" as string]: "80ms" }}
          >
            Equivocarse con la etiqueta no es molesto.{" "}
            <span style={{ color: "var(--root-violet)" }}>Para nosotros, es enfermarse.</span>
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((p, i) => (
            <PainCard key={p.n} {...p} delay={i * 100} />
          ))}
        </div>

        {/* Resolution line */}
        <p
          className="reveal mt-12 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-snug tracking-[-0.03em]"
          style={{ color: "var(--root-ink)" }}
        >
          → Root lo hace por ti.{" "}
          <span style={{ fontStyle: "italic", color: "var(--root-violet)" }}>En una foto.</span>
        </p>
      </div>
    </section>
  );
}
