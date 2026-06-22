import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Colección de recetas. Astro 5 usa el content layer: el `glob` loader lee los
// .md de src/content/recetas/. El schema valida el frontmatter en build —
// `astro check` falla si una receta no cumple, así nada roto llega a producción.
const recetas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recetas" }),
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    slug: z.string(),
    categoria: z.enum([
      "Desayuno",
      "Almuerzo",
      "Cena",
      "Snack",
      "Postre",
      "Bebida",
    ]),
    tiempo_prep: z.number(), // minutos
    tiempo_coccion: z.number(), // minutos, 0 si no aplica
    porciones: z.number(),
    dificultad: z.enum(["Fácil", "Media", "Avanzada"]),
    restricciones: z.object({
      celiaca: z.boolean(),
      diabetes: z.boolean(),
      lactosa: z.boolean(),
    }),
    // Si alguna restricción requiere verificación del usuario (no es 100% libre
    // sin acción suya) → cada string se muestra como aviso antes de cocinar.
    verificar: z.array(z.string()).optional(),
    ingredientes: z.array(z.string()),
    notas_medicas: z.string().optional(),
    fuente_inspiracion: z.string().optional(),
    publicada: z.boolean().default(true),
    // Una sola receta destacada → ocupa el hero del índice.
    destacada: z.boolean().default(false),
    // Card ancha en el bento del índice (ocupa 2 columnas en desktop).
    ancho: z.boolean().default(false),
  }),
});

export const collections = { recetas };
