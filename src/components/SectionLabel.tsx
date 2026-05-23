export function SectionLabel({
  index,
  children,
  tone = "light",
}: {
  index: string;
  children: string;
  tone?: "light" | "dark";
}) {
  const num = tone === "dark" ? "text-white/70" : "text-primary";
  const rule = tone === "dark" ? "bg-white/30" : "bg-primary/30";
  const label = tone === "dark" ? "text-white/80" : "text-accent";
  return (
    <div className="flex items-center gap-3">
      <span className={`font-display text-sm font-bold tabular-nums ${num}`}>
        {index}
      </span>
      <span className={`h-px w-8 ${rule}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${label}`}
      >
        {children}
      </span>
    </div>
  );
}
