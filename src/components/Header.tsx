import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { APP_URL } from "@/lib/utils";

/** OKRoot logo — icon mark + "OK" violet / "root" ink wordmark. */
function OkRootLogo() {
  return (
    <span className="flex items-center gap-2">
      <img
        src="/favicon-32.png"
        alt=""
        width={26}
        height={26}
        className="h-[26px] w-[26px]"
      />
      <span
        className="font-display text-xl font-extrabold tracking-[-0.04em]"
        style={{ color: "var(--root-ink)" }}
      >
        <span style={{ color: "var(--root-violet)" }}>OK</span>root
      </span>
    </span>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLanding = location.pathname === "/";

  const goToSection = (id: string) => {
    if (onLanding) scrollToId(id);
    else navigate("/", { state: { scrollTo: id } });
  };

  const navItem = (label: string, id: string) =>
    onLanding ? (
      <button
        key={id}
        onClick={() => scrollToId(id)}
        className="text-sm font-medium transition-colors hover:text-primary"
        style={{ color: "var(--root-ink-2)" }}
      >
        {label}
      </button>
    ) : (
      <Link
        key={id}
        to={`/#${id}`}
        className="text-sm font-medium transition-colors hover:text-primary"
        style={{ color: "var(--root-ink-2)" }}
      >
        {label}
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 px-5 py-4 sm:px-6">
      <div
        className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between rounded-full border px-5 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250,248,245,0.88)" : "#fff",
          borderColor: "var(--root-line)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href={onLanding ? "#top" : "/"}
          onClick={(e) => {
            if (onLanding) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center"
          aria-label="OKRoot — inicio"
        >
          <OkRootLogo />
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItem("Cómo funciona", "como-funciona")}
          {navItem("Sobre mí", "fundadora")}
          <a
            href={APP_URL}
            className="text-sm font-medium transition-colors hover:text-primary"
            style={{ color: "var(--root-ink-2)" }}
          >
            Entrar a la app
          </a>
        </nav>

        {/* Sticky CTA → waitlist form */}
        <button
          onClick={() => goToSection("waitlist")}
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--root-violet)" }}
        >
          Quiero acceso
        </button>
      </div>
    </header>
  );
}
