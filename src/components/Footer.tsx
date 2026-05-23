import type { ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/573108283088";

function RootLogo() {
  return (
    <span
      className="inline-block h-[26px] w-[26px] rounded-[8px]"
      style={{ background: "linear-gradient(135deg,#9433ea,#581c87)" }}
    />
  );
}

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <footer
      className="border-t px-5 pb-8 pt-16 sm:px-6"
      style={{ background: "var(--root-cream)", borderColor: "var(--root-line)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <RootLogo />
              <span
                className="font-display text-[26px] font-extrabold tracking-[-0.04em]"
                style={{ color: "var(--root-ink)" }}
              >
                Root
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "var(--root-mute)" }}>
              Nutrición personalizada para celíacos, diabéticos e intolerantes a la lactosa.
            </p>
          </div>

          {/* Producto */}
          <FooterCol title="Producto">
            <FooterButton onClick={() => goToSection("how-it-works")}>Cómo funciona</FooterButton>
            <FooterButton onClick={() => goToSection("pricing")}>Precios</FooterButton>
            <FooterLink to="/faq">FAQ</FooterLink>
          </FooterCol>

          {/* Compañía */}
          <FooterCol title="Compañía">
            <FooterLink to="/about">Sobre Lúmina W</FooterLink>
            <FooterLink to="/contact">Contacto</FooterLink>
          </FooterCol>

          {/* Contacto */}
          <FooterCol title="Contacto">
            <a
              href="mailto:hola@luminaw.co"
              className="text-sm transition-colors hover:text-primary"
              style={{ color: "var(--root-ink-2)" }}
            >
              hola@luminaw.co
            </a>
            <a
              href="tel:+573108283088"
              className="text-sm transition-colors hover:text-primary"
              style={{ color: "var(--root-ink-2)" }}
            >
              +57 310 828 3088
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--root-violet)" }}
            >
              WhatsApp →
            </a>
            <div className="text-sm" style={{ color: "var(--root-mute)" }}>
              Antioquia, Colombia
            </div>
          </FooterCol>
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-[12.5px]"
          style={{ borderColor: "var(--root-line)", color: "var(--root-mute)" }}
        >
          <p>© 2026 Root · Lúmina W. Todos los derechos reservados.</p>
          <nav className="flex gap-5">
            <Link to="/legal#terminos" className="transition-colors hover:text-primary">Términos</Link>
            <Link to="/legal#privacidad" className="transition-colors hover:text-primary">Privacidad</Link>
            <Link to="/legal#habeas-data" className="transition-colors hover:text-primary">Habeas Data</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3
        className="text-[11px] font-bold uppercase tracking-[0.22em]"
        style={{ color: "var(--root-ink)" }}
      >
        {title}
      </h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="w-fit text-sm transition-colors hover:text-primary"
      style={{ color: "var(--root-ink-2)" }}
    >
      {children}
    </Link>
  );
}

function FooterButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="w-fit text-left text-sm transition-colors hover:text-primary"
      style={{ color: "var(--root-ink-2)" }}
    >
      {children}
    </button>
  );
}
