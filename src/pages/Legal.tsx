import { PageShell } from "./PageShell";

// Placeholder legal copy — TODO: reemplazar con textos legales definitivos
// revisados por asesoría jurídica antes del lanzamiento público.
const SECTIONS = [
  {
    id: "terminos",
    title: "Términos y condiciones",
    body: "Al usar Root aceptas estos términos. Root entrega información orientativa sobre alimentos según la condición que selecciones; no sustituye el consejo de un profesional de la salud. Esta es una versión preliminar y será actualizada antes del lanzamiento público.",
  },
  {
    id: "privacidad",
    title: "Política de privacidad",
    body: "Tratamos tus datos con el único fin de operar el servicio y personalizar tu experiencia. No vendemos tu información. Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento escribiendo a hola@luminaw.co.",
  },
  {
    id: "habeas-data",
    title: "Habeas Data",
    body: "Conforme a la Ley 1581 de 2012 de Colombia, tienes derecho a conocer, actualizar, rectificar y suprimir tus datos personales, así como a revocar la autorización otorgada. Para ejercer estos derechos, contáctanos en hola@luminaw.co.",
  },
];

export function Legal() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Términos, privacidad y datos"
      intro="Documentos legales de Root, operado por Lúmina W."
    >
      <div className="flex flex-col gap-10">
        {SECTIONS.map(({ id, title, body }) => (
          <section key={id} id={id} className="scroll-mt-24">
            <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{body}</p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
