// ─── Navbar ──────────────────────────────────────────────

export const navLinks = [
  { label: "Planes", href: "#planes" },
  { label: "Ebook", href: "#ebook" },
  { label: "Recursos", href: "#recursos" },
  { label: "Nosotras", href: "#about" },
];

// ─── Planes ──────────────────────────────────────────────

export const plans = [
  {
    name: "Basic",
    price: "200.000",
    priceUsd: "140",
    features: [
      { text: "Optimización de perfil" },
      { text: "4 Publicaciones mensuales (1 reels, 3 post)" },
      { text: "4 conjuntos de historias mensuales" },
      { text: "Planificación y calendario mensual de contenido" },
      { text: "Diseño grafico y copywriting" },
      { text: "Reporte de métricas trimestral" },
      { text: "Uso de material provistas por la marca" },
      { text: "Carpeta compartida en Google Drive" },
    ],
  },
  {
    name: "Medium",
    price: "380.000",
    priceUsd: "270",
    featured: true,
    features: [
      { text: "Optimización de perfil" },
      { text: "8 Publicaciones mensuales (2 reels, 6 post)" },
      { text: "6 conjuntos de historias mensuales" },
      { text: "1 grabación de contenido mensual (4 horas)" },
      { text: "Planificación y calendario mensual de contenido" },
      { text: "Diseño grafico y copywriting" },
      { text: "Reporte de métricas mensual" },
      { text: "1 grabación de contenido por 4 hs" },
      { text: "Uso de material provistas por la marca" },
      { text: "Carpeta compartida en Google Drive" },
    ],
  },
  {
    name: "Full",
    price: "520.000",
    priceUsd: "360",
    features: [
      { text: "Optimización de perfil" },
      { text: "10 Publicaciones mensuales (3 reels, 7 post)" },
      { text: "8 conjuntos de historias mensuales" },
      { text: "1 grabación de contenido mensual (4 horas)" },
      { text: "Planificación y calendario mensual de contenido" },
      { text: "Diseño grafico y copywriting" },
      { text: "Reporte de métricas mensual" },
      { text: "1 grabación de contenido por 4 hs" },
      {
        text: "Uso de material provisto por la marca y material generado en grabación",
      },
      { text: "Carpeta compartida en Google Drive" },
    ],
  },
  {
    name: "Pro",
    price: "670.000",
    priceUsd: "460",
    features: [
      { text: "Optimización de perfil" },
      { text: "12 Publicaciones mensuales (4 reels, 8 post)" },
      { text: "10 conjuntos de historias mensuales" },
      { text: "2 grabaciones de contenido mensuales (4 horas cada una)" },
      { text: "Material generado con edición incluida" },
      { text: "Planificación y calendario mensual de contenido" },
      { text: "Diseño grafico y copywriting" },
      { text: "Reporte de métricas mensual" },
      { text: "Carpeta compartida en Google Drive" },
    ],
  },
];

export const extraService = {
  price: "200.000",
  priceUsd: "140",
};

export const contentShootService = {
  price: "60.000",
  priceUsd: "45",
};

// ─── Ebook ───────────────────────────────────────────────

export const ebookFeatures = [
  { icon: "book", text: "+40 páginas de contenido práctico" },
  { icon: "chart", text: "Estrategias probadas con resultados" },
  { icon: "rocket", text: "Plan de acción de 4 semanas" },
  { icon: "info", text: "Tips exclusivos de nuestro equipo" },
];

export const ebookReviews = [
  {
    name: "German",
    user: "@vitalmeals.arg",
    text: "Por fin entendí qué publicar y por qué. Dejé de subir cosas al azar y empecé a tener orden.",
    stars: 5,
  },
  {
    name: "Ornella",
    user: "@nutri.ocolangelo",
    text: "Es práctico de verdad. Lo leí y ya esa semana pude aplicarlo en mis redes.",
    stars: 5,
  },
  {
    name: "Tomas",
    user: "@catu3d",
    text: "Me encantó porque está explicado simple, sin palabras técnicas ni vueltas.",
    stars: 5,
  },
  {
    name: "Ignacio",
    user: "@mignoliperformance",
    text: "Los recursos editables valen más que el ebook. Me ahorraron horas de trabajo",
    stars: 5,
  },
  {
    name: "Karina",
    user: "@mesalibre.ok",
    text: "Ideal si sentís que hacés mucho en redes pero no ves resultados. Me dio claridad.",
    stars: 5,
  },
  {
    name: "Morena",
    user: "@skinstudio.ms",
    text: "Se nota que está hecho desde la experiencia real, no desde el marketing humo.",
    stars: 5,
  },
];

// ─── About ───────────────────────────────────────────────

export const values = [
  {
    icon: "smile",
    title: "Cercanía",
    description:
      "Trabajamos codo a codo con cada cliente, como parte de su equipo.",
  },
  {
    icon: "bulb",
    title: "Creatividad",
    description: "Cada idea nace con propósito. Creamos contenido que enamora.",
  },
  {
    icon: "pulse",
    title: "Resultados",
    description:
      "Medimos todo. Cada acción está orientada a objetivos concretos.",
  },
  {
    icon: "people",
    title: "Comunidad",
    description:
      "No buscamos seguidores, construimos comunidades que perduran.",
  },
];

// ─── Recursos ────────────────────────────────────────────

export const recursos = [
  {
    tag: "Guía",
    bgClass: "bg-1",
    iconPath:
      "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    title: "Cómo crear contenido que conecte",
    excerpt:
      "Aprendé a comunicar tu esencia de marca a través de contenido auténtico que genera comunidad.",
    linkText: "Leer más",
  },
  {
    tag: "Template",
    bgClass: "bg-2",
    iconPath:
      "M3 3h18v18H3zM8.5 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 15l-5-5L5 21",
    title: "Pack de plantillas para Instagram",
    excerpt:
      "Plantillas editables para stories, posts y reels que mantienen la coherencia visual de tu marca.",
    linkText: "Descargar",
  },
  {
    tag: "Checklist",
    bgClass: "bg-3",
    iconPath: "M12 20V10M18 20V4M6 20v-4",
    title: "Auditoría express de redes sociales",
    excerpt:
      "Una checklist completa para evaluar y optimizar el rendimiento de tus perfiles en redes.",
    linkText: "Obtener",
  },
  {
    tag: "Video",
    bgClass: "bg-4",
    iconPath:
      "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10 8l6 4-6 4V8z",
    title: "Masterclass: Ads para principiantes",
    excerpt:
      "Aprendé a configurar tu primera campaña publicitaria en Meta Ads paso a paso.",
    linkText: "Ver ahora",
  },
];
