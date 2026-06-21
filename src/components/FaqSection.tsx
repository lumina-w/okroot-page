import { useReveal } from "@/hooks/useReveal";

const FAQS = [
  {
    q: "¿Necesito descargarla?",
    a: "No. Es una PWA: se instala directo desde el navegador, sin pasar por la App Store ni Play Store.",
  },
  {
    q: "¿Funciona sin internet?",
    a: "Sí. El diario es 100% offline y sincroniza solo cuando vuelves a tener señal.",
  },
  {
    q: "¿Es gratis?",
    a: "El early access es gratuito para quienes están en la lista de espera.",
  },
  {
    q: "¿Qué pasa con mis datos de salud?",
    a: "Tu perfil vive en tu dispositivo. No lo vendemos ni lo compartimos.",
  },
  {
    q: "¿Solo funciona para las tres condiciones?",
    a: "Hoy: celiaquía, diabetes tipo 2 e intolerancia a la lactosa. Más condiciones vienen en el roadmap.",
  },
];

export function FaqSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-24 lg:py-32" style={{ background: "var(--root-cream-warm)" }}>
      <div ref={ref} className="mx-auto w-full max-w-[760px] px-5 sm:px-8">
        <div className="reveal text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
            style={{ background: "rgba(148,51,234,0.10)", color: "var(--root-purple)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--root-violet)" }} />
            Preguntas frecuentes
          </div>
          <h2
            className="mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em]"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "var(--root-ink)" }}
          >
            Antes de que preguntes
          </h2>
        </div>

        <dl className="mt-12 flex flex-col gap-3.5">
          {FAQS.map(({ q, a }, i) => (
            <details
              key={q}
              className="reveal group rounded-2xl border bg-white p-5 sm:p-6"
              style={{ borderColor: "var(--root-line)", ["--reveal-delay" as string]: `${i * 60}ms` }}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[17px] font-semibold tracking-[-0.01em]"
                style={{ color: "var(--root-ink)" }}
              >
                {q}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-200 group-open:rotate-45"
                  style={{ background: "var(--root-violet-soft)", color: "var(--root-violet)" }}
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <dd className="mt-3 text-[15.5px] leading-relaxed" style={{ color: "var(--root-mute)" }}>
                {a}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
