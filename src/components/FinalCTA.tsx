import { useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "./ui/button";
import { SereneCheck } from "./icons";
import { APP_URL } from "@/lib/utils";

export function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent via-accent to-primary px-6 py-20 text-center lg:py-28"
      >
        {/* atmosphere on the dark moment */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full opacity-60 blur-3xl [background:radial-gradient(circle,rgba(148,51,234,0.6),transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full opacity-40 blur-3xl [background:radial-gradient(circle,rgba(250,248,245,0.18),transparent_70%)]"
        />
        <div className="reveal relative mx-auto max-w-2xl">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
            <SereneCheck className="h-10 w-10" />
          </span>
          <h2 className="mt-7 font-display text-4xl font-extrabold leading-[1.0] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            ¿Listo para confiar en
            <br className="hidden sm:block" /> lo que comes?
          </h2>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-accent shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] hover:bg-cream hover:text-accent"
              onClick={() => (window.location.href = APP_URL)}
            >
              Prueba gratis — no requiere tarjeta
            </Button>
            <Button
              size="lg"
              className="border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
              onClick={() => navigate("/faq")}
            >
              Leer FAQ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
