import type { ReactNode } from "react";
import { Check } from "./icons";

/* Phone showing a label scan resolving to a per-condition verdict. */
export function PhoneScanMock({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative mx-auto ${compact ? "w-[230px]" : "w-[270px]"} select-none`}
    >
      <div className="relative rounded-[2.4rem] border border-line bg-white p-3 shadow-[0_30px_60px_-25px_rgba(88,28,135,0.35)]">
        <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cream-deep" />
        <div className="overflow-hidden rounded-[1.8rem] bg-cream-deep">
          {/* Camera / scan stage */}
          <div className="relative h-44 bg-gradient-to-br from-accent to-primary">
            <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
            {/* mock food label */}
            <div className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-md bg-white/95 p-2.5 shadow-lg">
              <div className="mb-1 h-1.5 w-10 rounded-full bg-ink/70" />
              <div className="space-y-1">
                <div className="h-1 w-full rounded-full bg-ink/15" />
                <div className="h-1 w-4/5 rounded-full bg-ink/15" />
                <div className="h-1 w-full rounded-full bg-ink/15" />
                <div className="h-1 w-2/3 rounded-full bg-ink/15" />
              </div>
            </div>
            {/* scanner frame */}
            <div className="animate-scanner-pulse absolute left-1/2 top-1/2 h-28 w-40 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute left-0 top-0 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-white" />
              <span className="absolute right-0 top-0 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-white" />
              <span className="absolute bottom-0 left-0 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-white" />
              <span className="absolute bottom-0 right-0 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-white" />
              <span className="animate-scanner-line absolute inset-x-2 top-0 h-px bg-white/90 shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]" />
            </div>
          </div>

          {/* Verdict */}
          <div className="space-y-2.5 p-3.5">
            <div className="flex items-center gap-2 rounded-xl bg-primary/10 px-3 py-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold leading-none text-accent">
                  Seguro para ti
                </p>
                <p className="mt-1 text-[10px] leading-none text-muted">
                  Sin gluten · apto celíaco
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge tone="ok">Gluten 0</Badge>
              <Badge tone="watch">Azúcar media</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "ok" | "watch";
}) {
  const styles =
    tone === "ok"
      ? "bg-primary/10 text-accent"
      : "bg-amber-100 text-amber-700";
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${styles}`}
    >
      {children}
    </span>
  );
}

type Recipe = {
  name: string;
  tag: string;
  minutes: number;
};

// TODO: reemplazar con recetas reales desde la API de Root.
const RECIPES: Recipe[] = [
  { name: "Bowl andino de quinoa", tag: "Sin gluten", minutes: 20 },
  { name: "Salmón con vegetales", tag: "Bajo índice glucémico", minutes: 25 },
  { name: "Crema de calabaza", tag: "Sin lactosa", minutes: 30 },
  { name: "Tostadas de garbanzo", tag: "Celíaco · diabético", minutes: 15 },
];

export function RecipeGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {RECIPES.map((r, i) => (
        <div
          key={r.name}
          className="reveal group overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(88,28,135,0.4)]"
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
            <p className="font-display text-sm font-semibold leading-tight text-ink">
              {r.name}
            </p>
            <div className="mt-2 flex items-center justify-between text-[11px] text-muted">
              <span className="rounded-full bg-primary/8 px-2 py-0.5 font-medium text-accent">
                {r.tag}
              </span>
              <span>{r.minutes} min</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DashboardMock() {
  // TODO: reemplazar con métricas reales del usuario.
  const bars = [42, 58, 36, 70, 52, 64, 80];
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_24px_50px_-30px_rgba(88,28,135,0.35)]">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted">Esta semana</p>
          <p className="font-display text-xl font-semibold text-ink">
            Tu patrón
          </p>
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-accent">
          Racha 6 días
        </span>
      </div>

      <div className="flex h-32 items-end justify-between gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-full w-full items-end">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-accent to-primary"
                style={{ height: `${h}%` }}
              />
            </div>
            <span className="text-[10px] text-muted">{days[i]}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4">
        <Stat label="Carbohidratos" value="48%" />
        <Stat label="Proteína" value="27%" />
        <Stat label="Grasas" value="25%" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-lg font-semibold text-accent">{value}</p>
      <p className="text-[11px] text-muted">{label}</p>
    </div>
  );
}

/* Illustrated avatar — no stock photo. */
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
      <g
        fill="none"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
