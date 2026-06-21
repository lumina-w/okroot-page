import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

/* ─── Atom: feature glyphs ──────────────────────────────────────────────── */

function ScanGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M5 11V8a3 3 0 013-3h3M27 11V8a3 3 0 00-3-3h-3M5 21v3a3 3 0 003 3h3M27 21v3a3 3 0 01-3 3h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 16h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function ProfileGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 26c1.5-5 5-7.5 9-7.5s7.5 2.5 9 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function RecipeGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="8" y="5" width="16" height="22" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 11h8M12 15h8M12 19h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function OfflineGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M9 20a6 6 0 011.5-11.8A7 7 0 0124 11a5 5 0 011 9.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 22l4 4M18 22l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Molecule: FeatureCard ─────────────────────────────────────────────── */

function FeatureCard({
  Glyph,
  title,
  body,
  delay,
}: {
  Glyph: () => React.ReactElement;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <div
      className="reveal flex flex-col gap-4 rounded-3xl border bg-white p-7 sm:p-8"
      style={{ borderColor: "var(--root-line)", borderRadius: 16, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: "var(--root-violet-soft)", color: "var(--root-violet)" }}
      >
        <Glyph />
      </div>
      <h3
        className="font-display text-[19px] font-bold leading-tight tracking-[-0.02em]"
        style={{ color: "var(--root-ink)" }}
      >
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed" style={{ color: "var(--root-mute)" }}>
        {body}
      </p>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

const FEATURES = [
  { Glyph: ScanGlyph, title: "Scanner IA", body: "Fotografías. La IA identifica ingredientes ocultos bajo nombres técnicos." },
  { Glyph: ProfileGlyph, title: "Perfil persistente", body: "Tu condición viaja contigo. No repites tu perfil en cada sesión." },
  { Glyph: RecipeGlyph, title: "Recetas curadas", body: "Solo ves recetas que puedes comer. Sin filtrar manualmente." },
  { Glyph: OfflineGlyph, title: "Diario offline", body: "Registras lo que comiste aunque no tengas señal. Sincroniza solo." },
];

function MultiConditionHighlight({ children }: { children?: ReactNode }) {
  return (
    <div
      className="reveal relative flex flex-col justify-center gap-3 overflow-hidden rounded-3xl p-8 text-white sm:col-span-2 sm:p-10"
      style={{
        background: "linear-gradient(155deg,#9433ea 0%,#581c87 100%)",
        borderRadius: 16,
        ["--reveal-delay" as string]: "200ms",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-20 h-[280px] w-[280px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)" }}
      />
      <div className="relative text-[11px] font-bold uppercase tracking-[0.18em] opacity-80">
        Solo en OKRoot
      </div>
      <h3 className="relative font-display text-[26px] font-extrabold leading-tight tracking-[-0.03em]">
        Multi-condición
      </h3>
      <p className="relative max-w-[460px] text-[16px] leading-relaxed opacity-95">
        Celiaquía + diabetes + lactosa.{" "}
        <span style={{ color: "#e9d4ff", fontWeight: 700 }}>Juntas. No por separado.</span> Otras
        apps validan una restricción a la vez — OKRoot las cruza todas en cada escaneo.
      </p>
      {children}
    </div>
  );
}

export function Features() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="funcionalidades"
      className="py-24 lg:py-32"
      style={{ background: "var(--root-cream-warm)" }}
    >
      <div ref={ref} className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-[640px]">
          <div className="reveal">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
              style={{ background: "rgba(148,51,234,0.10)", color: "var(--root-purple)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--root-violet)" }} />
              Qué incluye
            </div>
          </div>
          <h2
            className="reveal mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", color: "var(--root-ink)" }}
          >
            No una lista de features.
            <br />
            <span style={{ fontStyle: "italic", color: "var(--root-violet)" }}>Promesas.</span>
          </h2>
        </div>

        {/* Grid: 2 cols desktop, 1 mobile */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 80} />
          ))}
          <MultiConditionHighlight />
        </div>
      </div>
    </section>
  );
}
