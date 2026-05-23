import { Button } from "./ui/button";
import { ArrowDown, ArrowRight } from "./icons";
import { PhoneScanMock } from "./mockups";
import { APP_URL } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-50 blur-3xl [background:radial-gradient(circle,rgba(148,51,234,0.22),transparent_70%)]"
      />
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="max-w-xl">
          <span
            className="load-rise inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-accent"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Celíacos · diabéticos · intolerantes a la lactosa
          </span>

          <h1
            className="load-rise mt-6 font-display text-[3.5rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink sm:text-7xl lg:text-[5.5rem]"
            style={{ animationDelay: "90ms" }}
          >
            Come con
            <br />
            <span className="relative inline-block text-primary">
              confianza
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 320 24"
                fill="none"
                aria-hidden
                preserveAspectRatio="none"
              >
                <path
                  className="underline-draw"
                  d="M4 16C58 8 132 6 196 9C238 11 286 14 316 12"
                  stroke="var(--color-accent)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="load-rise mt-7 max-w-md text-lg leading-relaxed text-muted"
            style={{ animationDelay: "220ms" }}
          >
            Cada etiqueta analizada según TU condición. Recetas verificadas.
            Sin guesswork.
          </p>

          <div
            className="load-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <Button
              size="lg"
              onClick={() => (window.location.href = APP_URL)}
            >
              Prueba gratis — no requiere tarjeta
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver cómo funciona
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          <div
            className="load-rise mt-10 flex items-center gap-3 border-t border-line pt-6"
            style={{ animationDelay: "430ms" }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
              VR
            </span>
            <p className="text-sm leading-snug text-muted">
              Hecho por{" "}
              <span className="font-semibold text-ink">Valentina Ramírez</span>,
              celíaca, diabética e intolerante a la lactosa.
            </p>
          </div>
        </div>

        <div
          className="load-rise relative flex justify-center lg:justify-end"
          style={{ animationDelay: "280ms" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 m-auto h-72 w-72 rounded-full opacity-60 blur-3xl [background:radial-gradient(circle,rgba(88,28,135,0.18),transparent_70%)]"
          />
          <div className="relative">
            <PhoneScanMock />
            <button
              onClick={() =>
                document
                  .getElementById("scanner")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-accent shadow-sm transition-colors hover:text-primary sm:inline-flex"
            >
              Foto → resultado en segundos
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
