import type { ReactNode } from "react";
import { PageShell } from "./PageShell";
import { MailIcon, PhoneIcon, WhatsAppIcon, PinIcon } from "@/components/icons";

type Channel = {
  Icon: (p: { className?: string }) => ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const CHANNELS: Channel[] = [
  {
    Icon: MailIcon,
    label: "Correo",
    value: "hola@luminaw.co",
    href: "mailto:hola@luminaw.co",
  },
  {
    Icon: PhoneIcon,
    label: "Teléfono",
    value: "+57 310 828 3088",
    href: "tel:+573108283088",
  },
  {
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Escríbenos por WhatsApp",
    href: "https://wa.me/573108283088",
    external: true,
  },
  {
    Icon: PinIcon,
    label: "Ubicación",
    value: "Antioquia, Colombia",
  },
];

export function Contact() {
  return (
    <PageShell
      eyebrow="Contacto"
      title="Hablemos"
      intro="¿Dudas, ideas o quieres colaborar? Estos son nuestros canales directos."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {CHANNELS.map(({ Icon, label, value, href, external }) => {
          const inner = (
            <>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {label}
                </p>
                <p className="mt-0.5 font-medium text-ink">{value}</p>
              </div>
            </>
          );
          const classes =
            "flex items-center gap-4 rounded-2xl border border-line bg-white/70 p-5 transition-colors";
          return href ? (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`${classes} hover:border-primary`}
            >
              {inner}
            </a>
          ) : (
            <div key={label} className={classes}>
              {inner}
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
