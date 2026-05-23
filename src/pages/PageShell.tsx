import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/icons";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Volver al inicio
      </Link>

      <span className="mt-8 block text-sm font-semibold uppercase tracking-wide text-primary">
        {eyebrow}
      </span>
      <h1 className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
      )}

      <div className="mt-12">{children}</div>
    </div>
  );
}
