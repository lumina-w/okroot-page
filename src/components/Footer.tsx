import type { ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { RootMark, MailIcon, PhoneIcon, WhatsAppIcon, PinIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/573108283088";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Anchor links only work on the landing route; otherwise go home first.
  const goToSection = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <RootMark className="h-6 w-6" />
              </span>
              <span className="font-display text-xl font-bold text-ink">
                Root
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Nutrición personalizada para celíacos, diabéticos e intolerantes
              a la lactosa.
            </p>
          </div>

          {/* Producto */}
          <FooterCol title="Producto">
            <FooterButton onClick={() => goToSection("how-it-works")}>
              Cómo funciona
            </FooterButton>
            <FooterButton onClick={() => goToSection("pricing")}>
              Precios
            </FooterButton>
            <FooterLink to="/faq">FAQ</FooterLink>
          </FooterCol>

          {/* Compañía */}
          <FooterCol title="Compañía">
            <FooterLink to="/about">Sobre Lúmina W</FooterLink>
            <FooterLink to="/contact">Contacto</FooterLink>
          </FooterCol>

          {/* Contacto */}
          <FooterCol title="Contacto">
            <FooterAnchor href="mailto:hola@luminaw.co" Icon={MailIcon}>
              hola@luminaw.co
            </FooterAnchor>
            <FooterAnchor href="tel:+573108283088" Icon={PhoneIcon}>
              +57 310 828 3088
            </FooterAnchor>
            <FooterAnchor
              href={WHATSAPP_URL}
              Icon={WhatsAppIcon}
              external
            >
              WhatsApp
            </FooterAnchor>
            <span className="flex items-center gap-2 text-sm text-muted">
              <PinIcon className="h-4 w-4 shrink-0 text-primary" />
              Antioquia, Colombia
            </span>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Root · Lúmina W. Todos los derechos reservados.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/legal#terminos" className="transition-colors hover:text-primary">
              Términos
            </Link>
            <Link to="/legal#privacidad" className="transition-colors hover:text-primary">
              Privacidad
            </Link>
            <Link to="/legal#habeas-data" className="transition-colors hover:text-primary">
              Habeas Data
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
        {title}
      </h3>
      <div className="mt-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="w-fit text-sm text-muted transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}

function FooterButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="w-fit text-left text-sm text-muted transition-colors hover:text-primary"
    >
      {children}
    </button>
  );
}

function FooterAnchor({
  href,
  Icon,
  children,
  external = false,
}: {
  href: string;
  Icon: (p: { className?: string }) => ReactNode;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
    >
      <Icon className="h-4 w-4 shrink-0 text-primary" />
      {children}
    </a>
  );
}
