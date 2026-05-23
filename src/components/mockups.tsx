/* ─── Atoms ─────────────────────────────────────────────────────────────── */

function ConditionBadge({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-[14px] border bg-white px-3 py-2.5" style={{ borderColor: "var(--root-line)" }}>
      <span
        className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full text-xs font-bold"
        style={{ background: "var(--root-violet-soft)", color: "var(--root-violet)" }}
      >
        ✓
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold" style={{ color: "var(--root-ink)" }}>{label}</div>
        <div className="text-[10.5px]" style={{ color: "var(--root-mute)" }}>{detail}</div>
      </div>
    </div>
  );
}

/* ─── Molecules ─────────────────────────────────────────────────────────── */

function PhoneStatusBar() {
  return (
    <div className="flex justify-between px-6 pb-1.5 pt-3.5 text-[11px] font-semibold" style={{ color: "var(--root-ink)" }}>
      <span>9:41</span>
      <span>● ● ●</span>
    </div>
  );
}

function VerdictCard() {
  return (
    <div
      className="mx-4 mt-3.5 rounded-[18px] p-4"
      style={{ background: "linear-gradient(135deg,#9433ea,#7a1fd9)", color: "#fff" }}
    >
      <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">Seguro para ti</div>
      <div
        className="mt-1.5 flex items-center gap-2.5 font-display text-[38px] font-extrabold"
        style={{ letterSpacing: "-0.03em", lineHeight: 1 }}
      >
        <span
          className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-lg"
          style={{ background: "rgba(255,255,255,0.22)" }}
        >
          ✓
        </span>
        Sí
      </div>
      <div className="mt-2 text-xs leading-snug opacity-90">Sin gluten · sin lactosa · IG bajo</div>
    </div>
  );
}

/* ─── Organism: PhoneMock ──────────────────────────────────────────────── */

export function PhoneMock() {
  return (
    <div
      className="relative mx-auto select-none"
      style={{
        width: 280,
        borderRadius: 44,
        background: "var(--root-ink)",
        padding: 8,
        transform: "rotate(3deg)",
        boxShadow: "0 30px 60px -20px rgba(88,28,135,0.35), 0 12px 24px -12px rgba(0,0,0,0.25)",
      }}
    >
      <div
        className="flex h-full flex-col overflow-hidden"
        style={{ background: "var(--root-cream)", borderRadius: 36 }}
      >
        <PhoneStatusBar />

        <div className="px-6 pb-1.5 pt-3">
          <div className="text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--root-mute)" }}>
            Escaneo · ahora
          </div>
          <div
            className="mt-1 font-display text-[22px] font-extrabold"
            style={{ letterSpacing: "-0.03em", color: "var(--root-ink)" }}
          >
            Galletas de avena
          </div>
        </div>

        <VerdictCard />

        <div className="mx-4 mt-3.5 flex flex-col gap-2">
          <ConditionBadge label="Celíaca" detail="Sin gluten verificado" />
          <ConditionBadge label="Diabética" detail="IG: 34 · seguro" />
          <ConditionBadge label="Sin lactosa" detail="Sin trazas" />
        </div>

        <div
          className="mt-auto flex justify-around border-t px-6 pb-[18px] pt-3.5"
          style={{ borderColor: "var(--root-line)" }}
        >
          {["Scan", "Recetas", "Diary", "Tú"].map((t, i) => (
            <div
              key={t}
              className="text-[10px] font-semibold"
              style={{ color: i === 0 ? "var(--root-violet)" : "var(--root-faint)" }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Organism: ScannerIllo ────────────────────────────────────────────── */

export function ScannerIllo() {
  return (
    <div
      className="relative min-h-[280px] overflow-hidden rounded-[20px] border p-8"
      style={{
        background: "linear-gradient(155deg, #ece1ff 0%, #faf8f5 100%)",
        borderColor: "var(--root-line)",
      }}
    >
      {/* Scanner frame corners */}
      {[
        { top: 18, left: 18, borderTop: "2px solid var(--root-violet)", borderLeft: "2px solid var(--root-violet)" },
        { top: 18, right: 18, borderTop: "2px solid var(--root-violet)", borderRight: "2px solid var(--root-violet)" },
        { bottom: 18, left: 18, borderBottom: "2px solid var(--root-violet)", borderLeft: "2px solid var(--root-violet)" },
        { bottom: 18, right: 18, borderBottom: "2px solid var(--root-violet)", borderRight: "2px solid var(--root-violet)" },
      ].map((s, i) => (
        <div key={i} className="absolute h-6 w-6" style={s} />
      ))}

      {/* Label card */}
      <div
        className="relative mx-auto mt-5 max-w-[320px] rounded-[14px] border p-[18px_20px] shadow-[0_8px_24px_-10px_rgba(20,20,20,0.18)]"
        style={{ background: "#fff", borderColor: "var(--root-line)", transform: "rotate(-2deg)" }}
      >
        <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--root-faint)" }}>
          Información nutricional
        </div>
        <div
          className="mt-1.5 font-display text-[17px] font-bold"
          style={{ letterSpacing: "-0.02em", color: "var(--root-ink)" }}
        >
          Galletas de avena
        </div>
        <div className="my-3 h-px" style={{ background: "var(--root-line)" }} />
        {[
          ["Trigo", false],
          ["Lactosa", false],
          ["Azúcar añadida", false],
        ].map(([ing, ok]) => (
          <div
            key={ing as string}
            className="flex justify-between py-1 text-xs"
            style={{ color: "var(--root-ink-2)" }}
          >
            <span>{ing as string}</span>
            <span style={{ color: ok ? "var(--root-violet)" : "#c44a4a" }}>
              {ok ? "✓" : "detectado"}
            </span>
          </div>
        ))}
      </div>

      {/* Verdict pill */}
      <div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-[18px] py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(148,51,234,0.5)]"
        style={{ background: "var(--root-violet)", whiteSpace: "nowrap" }}
      >
        <span
          className="flex h-[18px] w-[18px] items-center justify-center rounded-full text-[11px]"
          style={{ background: "rgba(255,255,255,0.22)" }}
        >
          ✓
        </span>
        Apto · sin gluten · IG bajo
      </div>
    </div>
  );
}

/* ─── Organism: RecipesIllo ────────────────────────────────────────────── */

const RECIPES = [
  { name: "Pan de almendras", tag: "Sin gluten · IG 28", emoji: "🍞", hue: "#ece1ff" },
  { name: "Curry de garbanzos", tag: "Sin lactosa · IG 41", emoji: "🍛", hue: "#f3edff" },
  { name: "Bowl de quinoa", tag: "Apto · IG 35", emoji: "🥗", hue: "#ece1ff" },
];

export function RecipesIllo() {
  return (
    <div
      className="flex min-h-[280px] flex-col gap-3 rounded-[20px] border p-7"
      style={{
        background: "linear-gradient(155deg, #faf8f5 0%, #ece1ff 100%)",
        borderColor: "var(--root-line)",
      }}
    >
      <div className="flex items-center justify-between px-1">
        <div
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "var(--root-purple)" }}
        >
          Para ti · esta semana
        </div>
        <div className="text-[11px] font-semibold" style={{ color: "var(--root-violet)" }}>
          Ver todas →
        </div>
      </div>

      {RECIPES.map((r) => (
        <div
          key={r.name}
          className="flex items-center gap-3 rounded-[14px] border bg-white p-3"
          style={{ borderColor: "var(--root-line)" }}
        >
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] text-[22px]"
            style={{ background: r.hue }}
          >
            {r.emoji}
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold" style={{ color: "var(--root-ink)" }}>{r.name}</div>
            <div className="mt-0.5 text-[11.5px]" style={{ color: "var(--root-mute)" }}>{r.tag}</div>
          </div>
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{ background: "var(--root-violet-soft)", color: "var(--root-violet)" }}
          >
            Verificado
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Organism: InsightsIllo ───────────────────────────────────────────── */

export function InsightsIllo() {
  const bars = [40, 62, 48, 78, 55, 68, 82];
  const days = ["L", "M", "X", "J", "V", "S", "D"];

  return (
    <div
      className="flex min-h-[280px] flex-col gap-3.5 rounded-[20px] border p-7"
      style={{
        background: "linear-gradient(155deg, #ece1ff 0%, #faf8f5 60%)",
        borderColor: "var(--root-line)",
      }}
    >
      {/* Stats row */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-[14px] border bg-white p-3.5" style={{ borderColor: "var(--root-line)" }}>
          <div className="text-[10.5px] uppercase tracking-[0.14em]" style={{ color: "var(--root-mute)" }}>Racha</div>
          <div
            className="mt-1 flex items-baseline gap-1.5 font-display text-[30px] font-extrabold"
            style={{ letterSpacing: "-0.03em", color: "var(--root-ink)" }}
          >
            12
            <span className="text-[13px] font-medium" style={{ color: "var(--root-mute)" }}>días</span>
          </div>
        </div>
        <div className="rounded-[14px] p-3.5 text-white" style={{ background: "var(--root-violet)" }}>
          <div className="text-[10.5px] uppercase tracking-[0.14em] opacity-80">IG promedio</div>
          <div
            className="mt-1 flex items-baseline gap-1.5 font-display text-[30px] font-extrabold"
            style={{ letterSpacing: "-0.03em" }}
          >
            38
            <span className="text-[13px] font-medium opacity-80">bajo</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 rounded-[14px] border bg-white p-4" style={{ borderColor: "var(--root-line)" }}>
        <div className="flex items-baseline justify-between">
          <div className="text-xs font-semibold" style={{ color: "var(--root-ink)" }}>Glucosa · 7 días</div>
          <div className="text-[11px] font-semibold" style={{ color: "var(--root-violet)" }}>Estable ✓</div>
        </div>
        <div className="mt-3.5 flex h-[90px] items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className="w-full rounded-[6px]"
                style={{
                  height: `${h}%`,
                  background:
                    i === bars.length - 1
                      ? "linear-gradient(180deg,#9433ea,#581c87)"
                      : "var(--root-violet-mist)",
                }}
              />
              <div className="text-[10px]" style={{ color: "var(--root-faint)" }}>{days[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Legacy exports (used in other pages) ──────────────────────────────── */

export function PhoneScanMock(_props: { compact?: boolean }) {
  return <PhoneMock />;
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 8l4 4 7-8" />
    </svg>
  );
}

type Recipe = { name: string; tag: string; minutes: number };
const LEGACY_RECIPES: Recipe[] = [
  { name: "Bowl andino de quinoa", tag: "Sin gluten", minutes: 20 },
  { name: "Salmón con vegetales", tag: "Bajo índice glucémico", minutes: 25 },
  { name: "Crema de calabaza", tag: "Sin lactosa", minutes: 30 },
  { name: "Tostadas de garbanzo", tag: "Celíaco · diabético", minutes: 15 },
];

export function RecipeGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {LEGACY_RECIPES.map((r, i) => (
        <div
          key={r.name}
          className="reveal group overflow-hidden rounded-2xl border border-line bg-white"
          style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
        >
          <div
            className="relative h-20 sm:h-24"
            style={{
              background: `linear-gradient(135deg, rgba(148,51,234,${0.85 - i * 0.12}), rgba(88,28,135,${0.9 - i * 0.1}))`,
            }}
          >
            <span className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-accent">
              <Check className="h-3.5 w-3.5" />
            </span>
          </div>
          <div className="p-3">
            <p className="font-display text-sm font-semibold leading-tight text-ink">{r.name}</p>
            <div className="mt-2 flex items-center justify-between text-[11px] text-muted">
              <span className="rounded-full bg-primary/8 px-2 py-0.5 font-medium text-accent">{r.tag}</span>
              <span>{r.minutes} min</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DashboardMock() {
  return <InsightsIllo />;
}

export function FounderAvatar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgb(148,51,234)" />
          <stop offset="1" stopColor="rgb(88,28,135)" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="url(#av-bg)" />
      <g fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M38 50c0-12 9-21 22-21s22 9 22 21" />
        <path d="M38 50c0 8 4 14 9 18" />
        <path d="M82 50c0 8-4 14-9 18" />
        <path d="M60 29c-9 4-15 11-17 21" />
        <path d="M60 29c9 4 15 11 17 21" />
        <circle cx="51" cy="55" r="1.6" fill="white" stroke="none" />
        <circle cx="69" cy="55" r="1.6" fill="white" stroke="none" />
        <path d="M54 64c2 2 4 3 6 3s4-1 6-3" />
        <path d="M40 96c2-11 10-18 20-18s18 7 20 18" />
      </g>
    </svg>
  );
}
