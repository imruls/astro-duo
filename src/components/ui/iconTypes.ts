// Tipo compartido entre Icon.astro y sus consumidores.
// Vive en un .ts separado porque exportar un type union desde el frontmatter
// de un .astro rompe el build de esbuild (aunque `astro check` lo acepta).
export type IconName =
  | "book"
  | "chart"
  | "rocket"
  | "info"
  | "download"
  | "chevron-left"
  | "chevron-right"
  | "star"
  | "clock"
  | "shopping-bag";
