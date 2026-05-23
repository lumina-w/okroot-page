import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { APP_URL } from "@/lib/utils";

/* ─── Atoms ─────────────────────────────────────────────────────────────── */

function CheckMark({ pro = false }: { pro?: boolean }) {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
      style={{
        background: pro ? "rgba(255,255,255,0.22)" : "var(--root-violet-soft)",
        color: pro ? "#fff" : "var(--root-violet)",
        marginTop: 1,
      }}
    >
      ✓
    </span>
  );
}

function FeatureItem({ children, pro = false }: { children: ReactNode; pro?: boolean }) {
  return (
    <li className="flex items-start gap-3 text-[14.5px]">
      <CheckMark pro={pro} />
      <span style={{ color: pro ? "#fff" : "var(--root-ink-2)" }}>{children}</span>
    </li>
  );
}

/* ─── Molecules: Cards ──────────────────────────────────────────────────── */

function FreeCard() {
  return (
    <div
      className="reveal flex min-h-[580px] flex-col rounded-3xl border bg-white p-9 sm:p-10"
      style={{ borderColor: "var(--root-line)" }}
    >
      <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--root-mute)" }}>
        Free
      </div>
      <div
        className="mt-2 font-display text-[28px] font-bold tracking-[-0.025em]"
        style={{ color: "var(--root-ink)" }}
      >
        Empieza aquí
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span
          className="font-display font-extrabold leading-none"
          style={{ fontSize: 64, letterSpacing: "-0.035em", color: "var(--root-ink)" }}
        >
          $0
        </span>
        <span className="text-sm" style={{ color: "var(--root-mute)" }}>siempre</span>
      </div>

      <p className="mt-3.5 text-sm leading-snug" style={{ color: "var(--root-mute)" }}>
        Lo esencial para empezar a comer con confianza.
      </p>

      <ul className="mt-7 flex flex-1 flex-col gap-3.5">
        {["10 escaneos al mes", "Recetas filtradas", "Registra tu comida (Diary)", "Insights básicos (macros)"].map(
          (f) => <FeatureItem key={f}>{f}</FeatureItem>
        )}
      </ul>

      <a
        href={APP_URL}
        className="mt-7 flex items-center justify-center rounded-full border px-5 py-3.5 text-[15px] font-semibold transition-colors hover:border-primary hover:text-primary"
        style={{ borderColor: "var(--root-ink)", color: "var(--root-ink)" }}
      >
        Prueba gratis
      </a>
    </div>
  );
}

function ProCard() {
  return (
    <div
      className="reveal relative flex min-h-[580px] flex-col overflow-hidden rounded-3xl p-9 text-white sm:p-10"
      style={{
        background: "linear-gradient(155deg,#9433ea 0%,#581c87 100%)",
      }}
    >
      {/* Decorative light orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-20 h-[280px] w-[280px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)" }}
      />

      <div className="relative flex items-center justify-between">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] opacity-80">Pro</div>
        <span
          className="rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.06em]"
          style={{ background: "rgba(255,255,255,0.16)", borderColor: "rgba(255,255,255,0.3)" }}
        >
          RECOMENDADO
        </span>
      </div>

      <div className="relative mt-2 font-display text-[28px] font-bold tracking-[-0.025em]">
        Más confianza
      </div>

      <div className="relative mt-4 flex items-baseline gap-2">
        <span
          className="font-display font-extrabold leading-none"
          style={{ fontSize: 64, letterSpacing: "-0.035em" }}
        >
          $19.900
        </span>
        <span className="text-sm opacity-80">COP / mes</span>
      </div>

      <p className="relative mt-3 text-[13.5px] leading-snug italic opacity-90">
        Menos que un café diario. Más que tu paz mental.
      </p>

      <ul className="relative mt-6 flex flex-1 flex-col gap-3.5">
        {[
          "Escaneos ilimitados",
          "Recomendaciones personalizadas",
          "Health logs (glucosa · piel · energía)",
          "Insights completos (glycemic · streak · water)",
          "Lista de compras semanal",
        ].map((f) => (
          <FeatureItem key={f} pro>
            {f}
          </FeatureItem>
        ))}
      </ul>

      <a
        href={APP_URL}
        className="relative mt-7 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-bold transition-opacity hover:opacity-90"
        style={{ background: "#fff", color: "var(--root-purple)" }}
      >
        Suscribirse →
      </a>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="py-24 lg:py-32" style={{ background: "var(--root-cream)" }}>
      <div ref={ref} className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[640px] text-center">
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-1.5 text-xs font-semibold"
            style={{ borderColor: "var(--root-line)", color: "var(--root-violet)" }}
          >
            Precios simples
          </div>
          <h2
            className="reveal mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", color: "var(--root-ink)" }}
          >
            Empieza gratis.
            <br />
            Crece cuando{" "}
            <span style={{ fontStyle: "italic", color: "var(--root-violet)" }}>quieras</span>.
          </h2>
          <p
            className="reveal mt-4 text-[17px] leading-relaxed"
            style={{ color: "var(--root-mute)" }}
          >
            Sin trucos. Sin tarjeta para empezar. Cancela en un tap.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-[1000px] gap-5 md:grid-cols-2">
          <FreeCard />
          <ProCard />
        </div>

        {/* Info banner */}
        <div
          className="reveal mx-auto mt-9 flex max-w-[1000px] items-start gap-3.5 rounded-2xl border p-5 sm:p-6"
          style={{
            background: "rgba(148,51,234,0.06)",
            borderColor: "var(--root-violet-mist)",
          }}
        >
          <span
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ background: "var(--root-violet)" }}
          >
            ?
          </span>
          <p className="text-sm leading-relaxed" style={{ color: "var(--root-ink-2)" }}>
            <strong>¿Dudas?</strong> Todas las features de Pro desbloquean automáticamente cuando
            subes de plan desde la app.{" "}
            <span className="font-semibold" style={{ color: "var(--root-violet)" }}>
              0 penalización por cambiar.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
