import { Link } from "react-router-dom";
import { APP_URL, PORTFOLIO_URL } from "@/lib/utils";

function OkRootLogo() {
  return (
    <span className="flex items-center gap-2">
      <img
        src="/favicon-32.png"
        alt=""
        width={28}
        height={28}
        loading="lazy"
        className="h-[28px] w-[28px]"
      />
      <span
        className="font-display text-[22px] font-extrabold tracking-[-0.04em]"
        style={{ color: "var(--root-ink)" }}
      >
        <span style={{ color: "var(--root-violet)" }}>OK</span>root
      </span>
    </span>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t px-5 pb-10 pt-14 sm:px-6"
      style={{ background: "var(--root-cream)", borderColor: "var(--root-line)" }}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <OkRootLogo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "var(--root-mute)" }}>
              Fotografía la etiqueta. Sabe en segundos si puedes comerla.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium">
            <Link
              to="/legal#privacidad"
              className="transition-colors hover:text-primary"
              style={{ color: "var(--root-ink-2)" }}
            >
              Privacidad
            </Link>
            <a
              href={APP_URL}
              className="transition-colors hover:text-primary"
              style={{ color: "var(--root-ink-2)" }}
            >
              app.okroot.co
            </a>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              style={{ color: "var(--root-ink-2)" }}
            >
              wavival.dev
            </a>
          </nav>
        </div>

        <div
          className="mt-10 border-t pt-6 text-[12.5px]"
          style={{ borderColor: "var(--root-line)", color: "var(--root-mute)" }}
        >
          © 2026 Valentina Ramírez
        </div>
      </div>
    </footer>
  );
}
