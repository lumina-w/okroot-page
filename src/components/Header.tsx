import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { RootMark } from "./icons";
import { APP_URL } from "@/lib/utils";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
          aria-label="Root — inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <RootMark className="h-6 w-6" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            Root
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollTo("how-it-works")}
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            Cómo funciona
          </button>
          <button
            onClick={() => scrollTo("pricing")}
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            Precios
          </button>
          <button
            onClick={() => scrollTo("historia")}
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            Historia
          </button>
        </nav>

        <Button size="sm" onClick={() => (window.location.href = APP_URL)}>
          Prueba gratis
        </Button>
      </div>
    </header>
  );
}
