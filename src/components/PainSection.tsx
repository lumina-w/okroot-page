import { useReveal } from "@/hooks/useReveal";

/* ─── SVG Glyphs (atoms) ─────────────────────────────────────────────────── */

function AnxietyGlyph() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 23c2-2 4-2 6-2s4 0 6 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15" cy="17" r="1.2" fill="currentColor" />
      <circle cx="25" cy="17" r="1.2" fill="currentColor" />
    </svg>
  );
}

function SearchGlyph() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M25 25l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 18h8M18 14v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

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
  { n: "01", title: "Ansiedad cada vez que comes fuera de casa", Glyph: AnxietyGlyph },
  { n: "02", title: 'Horas buscando si algo es "seguro" en internet', Glyph: SearchGlyph },
  { n: "03", title: "No saber si confiar en lo que ves en las etiquetas", Glyph: LabelGlyph },
];

export function PainSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--root-cream)" }}>
      <div ref={ref} className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-[720px]">
          <div className="reveal">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
              style={{ background: "rgba(148,51,234,0.10)", color: "var(--root-purple)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--root-violet)" }} />
              El problema
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
            className="reveal mt-4 max-w-[560px] text-[18px] leading-relaxed"
            style={{ color: "var(--root-mute)", ["--reveal-delay" as string]: "80ms" }}
          >
            Vivir con condiciones alimentarias en LATAM significa preguntar dos veces, leer
            etiquetas con lupa y aún así dudar. Lo sabemos porque también lo vivimos.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((p, i) => (
            <PainCard key={p.n} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
