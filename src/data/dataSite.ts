// ─── WhatsApp ────────────────────────────────────────────

export const whatsappNumber = "5491173636081";

// ─── Navbar ──────────────────────────────────────────────

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Ebook", href: "#ebook" },
  { label: "Recursos", href: "#recursos" },
  { label: "Nosotras", href: "#about" },
];

// ─── Servicios ──────────────────────────────────────────

export interface Servicio {
  title: string;
  description: string;
  items: string[];
}

export const servicios: Servicio[] = [
  {
    title: "Branding",
    description:
      "Construimos una identidad visual que haga que tu marca sea coherente, profesional y memorable",
    items: [
      "Logos",
      "Tipografías",
      "Plantillas",
      "Paleta de colores",
      "Manual de marca",
      "Dirección visual",
    ],
  },
  {
    title: "Estrategia",
    description:
      "Dejamos de publicar “porque sí” y armamos contenido con intención",
    items: [
      "Banco de ideas",
      "Diagnóstico de tus redes",
      "Pilares de contenido",
      "Calendario mensual",
      "Formatos",
    ],
  },
  {
    title: "Diseño Web",
    description: "Webs que no solo se ven lindas. También convierten",
    items: [
      "Landing Pages",
      "SEO básico",
      "Optimización Mobile",
      "Tiendas Online",
      "Integraciones",
      "Diseños UX/UI",
    ],
  },
  {
    title: "Contenido para redes",
    description:
      "Creamos contenido pensado para conectar, vender y hacer crecer tu comunidad.",
    items: [
      "Carruseles",
      "Reels",
      "Diseño Canva",
      "Historias",
      "Copywriting",
      "Edición",
    ],
  },
];

// ─── Ebook ───────────────────────────────────────────────

export const ebookHref =
  "https://duo-studio-digital.tiendup.com/p/ebook-el-abc-de-las-redes";

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

// ─── Social Links ───────────────────────────────────────

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/duostudio.digital/",
    external: true,
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg>`,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@duo.studio.digital",
    external: true,
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.55a8.28 8.28 0 004.76 1.51V6.69h-1z"></path></svg>`,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5491173636081",
    external: true,
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>`,
  },
  {
    label: "Email",
    href: "mailto:contacto@duostudiodigital.com",
    external: false,
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 4L12 13 2 4"></path></svg>`,
  },
];

// ─── Contacto ───────────────────────────────────────────

export const contactChannels = [
  {
    name: "WhatsApp",
    description: "Escribinos directo y te respondemos al toque.",
    href: "https://wa.me/5491173636081",
  },
  {
    name: "Email",
    description: "Para consultas, propuestas o lo que necesites.",
    href: "mailto:contacto@duostudiodigital.com",
  },
  {
    name: "Instagram",
    description: "Seguinos y mirá nuestro día a día creativo.",
    href: "https://www.instagram.com/duostudio.digital/",
  },
  {
    name: "TikTok",
    description: "Tips, tendencias y detrás de escena.",
    href: "https://www.tiktok.com/@duo.studio.digital",
  },
];

// ─── Recursos ────────────────────────────────────────────

export const recursos = [
  {
    tag: "Gratis",
    preview: "prompts-chatgpt",
    imagePosition: "center",
    title: "10 Prompts para ChatGPT",
    excerpt:
      "Prompts listos para usar que te van a ayudar a crear contenido, planificar y optimizar tu presencia digital.",
    linkText: "Descargar PDF",
    href: "https://duo-studio-digital.tiendup.com/p/pack-de-10-prompts-para-chatgpt-especial-emprendedores",
  },
  {
    tag: "Gratis",
    preview: "modelo-presupuesto",
    title: "Modelo de Presupuesto",
    excerpt:
      "Una plantilla de presupuesto profesional para que puedas presentar tus servicios de forma clara y organizada.",
    linkText: "Descargar PDF",
    href: "https://duo-studio-digital.tiendup.com/p/presupuesto-basico-community-manager-emprendedor",
  },
];
