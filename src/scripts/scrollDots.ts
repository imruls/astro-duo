/**
 * Lógica compartida para carruseles con scroll-snap horizontal + dots de
 * navegación (usada por Servicios.astro y Ebook.astro). Centralizarla acá
 * evita mantener dos implementaciones divergentes del mismo patrón.
 */

export interface ScrollDotsOptions {
  /** Elemento con overflow-x que contiene los items (root del IntersectionObserver). */
  container: HTMLElement;
  /** Items dentro del carrusel, en el mismo orden que los dots. */
  items: HTMLElement[];
  /** Dots/indicadores a sincronizar con el item visible. */
  dots: HTMLElement[];
}

/**
 * Sincroniza dots con el item más visible del carrusel y agrega navegación
 * por click en cada dot. Marca el dot activo con la clase `active` y con
 * `aria-current="true"` para cubrir ambos estilos usados en el sitio.
 */
export function initScrollDots({ container, items, dots }: ScrollDotsOptions) {
  if (!items.length || dots.length !== items.length) return;

  const setActive = (index: number) => {
    dots.forEach((dot, i) => {
      const isActive = i === index;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      items[i]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActive(items.indexOf(visible.target as HTMLElement));
      }
    },
    { root: container, threshold: [0.5, 0.75, 1] },
  );

  items.forEach((item) => observer.observe(item));

  return setActive;
}
