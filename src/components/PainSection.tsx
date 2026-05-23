import { useReveal } from "@/hooks/useReveal";
import { SectionLabel } from "./SectionLabel";
import { WorriedFace, SearchClock, LabelDoubt } from "./icons";

const PAINS = [
  {
    Icon: WorriedFace,
    title: "Ansiedad cada vez que comes fuera de casa",
    body: "Cada menú es una pregunta sin respuesta. Comer deja de ser placer y se vuelve cálculo.",
  },
  {
    Icon: SearchClock,
    title: "Horas buscando si algo es “seguro” en internet",
    body: "Foros, listas, opiniones contradictorias. Investigás como si fuera tu segundo trabajo.",
  },
  {
    Icon: LabelDoubt,
    title: "No saber si confiar en lo que ves en las etiquetas",
    body: "“Puede contener trazas”. “Elaborado en una planta que…”. La duda nunca se va del todo.",
  },
];

export function PainSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-cream-deep/60 py-20 lg:py-28">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10"
      >
        <div className="reveal">
          <SectionLabel index="01">El problema</SectionLabel>
        </div>
        <h2 className="reveal mt-5 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          ¿Te suena familiar?
        </h2>
        <p
          className="reveal mt-4 max-w-md text-lg text-muted"
          style={{ ["--reveal-delay" as string]: "80ms" }}
        >
          Si vives con una condición alimentaria, conoces este peso. No es
          exageración: es tu día a día.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          {PAINS.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className="reveal flex items-start gap-5 rounded-2xl border border-line bg-white/70 p-6 sm:p-7"
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  {title}
                </h3>
                <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-muted">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
