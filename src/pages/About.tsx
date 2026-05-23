import { PageShell } from "./PageShell";

export function About() {
  return (
    <PageShell
      eyebrow="Sobre Lúmina W"
      title="Software hecho desde la experiencia real"
      intro="Lúmina W es el estudio de producto fundado por Valentina Ramírez. Construimos herramientas que resuelven problemas que vivimos en carne propia."
    >
      <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-muted">
        <p>
          Root nació de una frustración concreta: vivir con una condición
          alimentaria y enfrentar la incertidumbre cada vez que toca comer.
          Etiquetas confusas, información contradictoria en internet y la
          ansiedad de no saber qué es seguro.
        </p>
        <p>
          Nuestra apuesta es simple: análisis por condición específica y recetas
          verificadas bajo reglas estrictas. Nada de “apto para” genérico. Si
          Root dice que algo es seguro para ti, es porque lo evaluó según tu
          condición.
        </p>
        <p>
          Estamos en etapa temprana y construimos en abierto, escuchando a la
          comunidad de celíacos, diabéticos e intolerantes a la lactosa de
          Latinoamérica. Si tienes ideas o feedback, queremos escucharte.
        </p>
      </div>
    </PageShell>
  );
}
