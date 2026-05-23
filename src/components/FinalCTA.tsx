import { useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "./ui/button";
import { SereneCheck } from "./icons";
import { APP_URL } from "@/lib/utils";

export function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section className="bg-cream-deep/60 py-20 lg:py-28">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10"
      >
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <SereneCheck className="h-10 w-10" />
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            ¿Listo para confiar en lo que comes?
          </h2>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={() => (window.location.href = APP_URL)}>
              Prueba gratis — no requiere tarjeta
            </Button>
            <Button
              variant="secondary"
              size="lg"
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
