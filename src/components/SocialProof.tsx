import { useReveal } from "@/hooks/useReveal";
import { SectionLabel } from "./SectionLabel";
import { FounderAvatar } from "./mockups";

export function SocialProof() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="historia" className="py-20 lg:py-28">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10"
      >
        <div className="reveal mb-8">
          <SectionLabel index="04">Por qué existe Root</SectionLabel>
        </div>
        <div className="reveal relative overflow-hidden rounded-3xl border border-line bg-white/70 p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl [background:radial-gradient(circle,rgba(148,51,234,0.16),transparent_70%)]"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
            <div className="flex justify-center">
              <FounderAvatar className="h-32 w-32 sm:h-40 sm:w-40" />
            </div>

            <div>
              <span className="font-display text-5xl leading-none text-primary/30">
                “
              </span>
              <blockquote className="-mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
                Tengo tres condiciones. Cada comida era ruleta rusa — ansiedad,
                búsqueda obsesiva, desconfianza. Root existe porque cansé de
                tener miedo. Ahora confío.
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-ink">Valentina Ramírez</p>
                <p className="text-sm text-muted">
                  Celíaca, diabética e intolerante a la lactosa
                </p>
                <p className="text-sm text-muted">Fundadora · Lúmina W</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
