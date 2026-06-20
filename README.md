<div align="center">

<img src="./src/assets/images/isotipo.png" alt="Dúo Studio Digital — Isotipo" width="120" />

# Dúo Studio Digital

**Sitio web oficial de Dúo Studio Digital** — agencia de marketing digital y branding.
Una landing single-page construida con Astro 5, optimizada para performance, accesibilidad y SEO.

🌐 **[duostudiodigital.com.ar](https://duostudiodigital.com.ar)**

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![pnpm](https://img.shields.io/badge/pnpm-11.1.1-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node](https://img.shields.io/badge/Node-%E2%89%A520.10-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)

</div>

---

<div align="center">
  <img src="./public/og-image.png" alt="Preview del sitio Dúo Studio Digital" width="720" />
</div>

---

## Tabla de contenidos

- [Sobre el proyecto](#sobre-el-proyecto)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Sistema de diseño](#sistema-de-diseño)
- [Secciones de la web](#secciones-de-la-web)
- [Empezando](#empezando)
- [Scripts disponibles](#scripts-disponibles)
- [Editar contenido](#editar-contenido)
- [Configuración y seguridad](#configuración-y-seguridad)
- [Deployment](#deployment)
- [Performance & SEO](#performance--seo)
- [Contacto](#contacto)

---

## Sobre el proyecto

**Dúo Studio Digital** es una agencia argentina especializada en estrategia de marca, contenido y crecimiento digital. Este repositorio contiene el código fuente de su sitio web institucional.

El sitio está diseñado como una **landing single-page** que comunica los servicios individuales (branding, estrategia, diseño web y contenido para redes), un ebook descargable y recursos gratuitos.

**Características principales:**

- 🎨 Diseño 100% custom con sistema de tokens (colores, tipografías, espaciados, radios y motion).
- ⚡ Astro 5 con generación estática (SSG) e imágenes optimizadas con `sharp`.
- ♿ Accesibilidad nativa: roles ARIA, navegación por teclado, focus management.
- 📱 Responsive de mobile-first con scroll-snap horizontal en cards.
- 🔍 SEO + sitemap + Open Graph + JSON-LD listos.
- 📊 Vercel Analytics + Speed Insights integrados.
- 🔐 Supply chain endurecido: pnpm con hash pinning y allowlist de scripts.

---

## Stack tecnológico

| Herramienta | Versión | Rol |
|---|---|---|
| [Astro](https://astro.build) | `^5.x` | Framework SSG/SSR |
| [TypeScript](https://www.typescriptlang.org) | `^5.9` | Tipado estático |
| [pnpm](https://pnpm.io) | `11.1.1` | Package manager (pinned con SHA-512) |
| [Node.js](https://nodejs.org) | `≥20.10` | Runtime |
| [Vercel](https://vercel.com) (`@astrojs/vercel`) | `^9.0` | Hosting + adapter |
| [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | `^3.7` | Generación de `sitemap.xml` |
| [`@astrojs/check`](https://docs.astro.build/en/guides/typescript/) | `^0.9` | Type checking de `.astro` |
| [`sharp`](https://sharp.pixelplumbing.com) | `^0.34` | Optimización nativa de imágenes |
| [`@fontsource/poppins`](https://fontsource.org/fonts/poppins) | `^5.2` | Tipografía body (self-hosted) |
| [`@fontsource/pacifico`](https://fontsource.org/fonts/pacifico) | `^5.2` | Tipografía display (self-hosted) |
| [`@vercel/analytics`](https://vercel.com/docs/analytics) | `^1.6` | Métricas de uso |
| [`@vercel/speed-insights`](https://vercel.com/docs/speed-insights) | `^1.3` | Core Web Vitals reales |

---

## Estructura del proyecto

```
astro-duo/
├── public/                      # Assets estáticos (servidos tal cual)
│   ├── favicon.ico
│   ├── favicon-192.png
│   ├── favicon-512.png
│   ├── og-image.png             # Open Graph / preview en redes
│   ├── robots.txt
│   └── images/                  # Imágenes que NO requieren optimización
│
├── src/
│   ├── assets/
│   │   └── images/              # Imágenes optimizadas por sharp en build
│   │       ├── isotipo.png      # Isotipo (icono de marca)
│   │       ├── 5.png            # Logo desktop
│   │       ├── 2.png            # Hero visual
│   │       ├── PortadaEbook.png
│   │       ├── photo-duo.jpg
│   │       └── ...
│   │
│   ├── components/
│   │   ├── sections/            # Secciones full-width de la home
│   │   │   ├── Navbar.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Servicios.astro
│   │   │   ├── Ebook.astro
│   │   │   ├── Recursos.astro
│   │   │   ├── About.astro
│   │   │   ├── Contacto.astro
│   │   │   └── Footer.astro
│   │   └── ui/                  # Componentes UI reutilizables
│   │       ├── BotonFlotante.astro
│   │       └── Icon.astro
│   │
│   ├── data/
│   │   └── dataSite.ts          # ⚙️ Single source of truth de contenido
│   │
│   ├── layouts/
│   │   └── Layout.astro         # Layout base (head, fonts, JSON-LD, scripts)
│   │
│   ├── pages/
│   │   └── index.astro          # Home — compone todas las secciones
│   │
│   └── styles/
│       └── global.css           # Tokens + reset + utilidades globales
│
├── astro.config.mjs             # Config Astro + adapter Vercel
├── tsconfig.json                # Path aliases (@data, @sections, @ui, @images)
├── package.json                 # Scripts, deps, engines, packageManager pinned
├── pnpm-workspace.yaml          # allowBuilds: lifecycle scripts permitidos
├── pnpm-lock.yaml               # Lockfile reproducible
└── .npmrc                       # Config endurecida (frozen-lockfile, integrity)
```

### Path aliases

Configurados en `tsconfig.json` para evitar imports relativos largos:

```ts
import { servicios } from "@data/dataSite";
import Hero from "@sections/Hero.astro";
import Icon from "@ui/Icon.astro";
import logo from "@images/5.png";
```

---

## Sistema de diseño

Todos los tokens viven en [`src/styles/global.css`](./src/styles/global.css) como CSS custom properties.

### 🎨 Paleta de colores

| Token | Hex | Muestra |
|---|---|---|
| `--olive` | `#7b8b3e` | ![](https://img.shields.io/badge/-7b8b3e-7b8b3e?style=flat-square) |
| `--olive-dark` | `#5c6a2e` | ![](https://img.shields.io/badge/-5c6a2e-5c6a2e?style=flat-square) |
| `--olive-deep` | `#4a5524` | ![](https://img.shields.io/badge/-4a5524-4a5524?style=flat-square) |
| `--pink-light` | `#f2c4ce` | ![](https://img.shields.io/badge/-f2c4ce-f2c4ce?style=flat-square) |
| `--blush` | `#eacfc8` | ![](https://img.shields.io/badge/-eacfc8-eacfc8?style=flat-square) |
| `--tan` | `#c4b9a0` | ![](https://img.shields.io/badge/-c4b9a0-c4b9a0?style=flat-square) |
| `--cream` | `#f0ede4` | ![](https://img.shields.io/badge/-f0ede4-f0ede4?style=flat-square) |
| `--white` | `#fefdfb` | ![](https://img.shields.io/badge/-fefdfb-fefdfb?style=flat-square) |
| `--text-dark` | `#0c0d0d` | ![](https://img.shields.io/badge/-0c0d0d-0c0d0d?style=flat-square) |
| `--text-muted` | `#6b6b5a` | ![](https://img.shields.io/badge/-6b6b5a-6b6b5a?style=flat-square) |

### ✍️ Tipografía

- **Body** — [Poppins](https://fonts.google.com/specimen/Poppins), self-hosted vía `@fontsource/poppins`.
- **Display** — [Pacifico](https://fonts.google.com/specimen/Pacifico), self-hosted vía `@fontsource/pacifico`.

Sin requests externos a Google Fonts → mejor performance y privacidad.

### 📐 Escala de espaciado

| Token | Valor |
|---|---|
| `--space-xs` | `0.5rem` |
| `--space-sm` | `1rem` |
| `--space-md` | `1.5rem` |
| `--space-lg` | `2.5rem` |
| `--space-xl` | `4rem` |
| `--space-2xl` | `6rem` |
| `--space-3xl` | `8rem` |

### 🟫 Radios y motion

Radios desde `--radius-sm` (8px) hasta `--radius-full` (pill). Easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)` aplicado vía `--ease-out`.

---

## Secciones de la web

| # | Sección | Componente | Función |
|---|---|---|---|
| 1 | Navbar | `Navbar.astro` | Logo + navegación + menú móvil |
| 2 | Hero | `Hero.astro` | Headline principal y CTA |
| 3 | Servicios | `Servicios.astro` | Cards de servicios (título, descripción, listado de items y CTA a WhatsApp) — carrusel en mobile, grid de 4 columnas en desktop |
| 4 | Ebook | `Ebook.astro` | Promoción del ebook descargable + reviews |
| 5 | Recursos | `Recursos.astro` | Recursos gratuitos (prompts, plantillas) |
| 6 | About | `About.astro` | Quiénes somos + valores |
| 7 | Contacto | `Contacto.astro` | Canales de contacto |
| 8 | Footer | `Footer.astro` | Cierre + redes |
| ➕ | Botón flotante | `BotonFlotante.astro` | WhatsApp siempre accesible |

---

## Empezando

### Prerrequisitos

- **Node.js** ≥ `20.10.0` ([nvm recomendado](https://github.com/nvm-sh/nvm))
- **pnpm** ≥ `11.1.1` — se autoinstala desde el `packageManager` field si tenés [Corepack](https://nodejs.org/api/corepack.html) habilitado:

  ```bash
  corepack enable
  ```

### Instalación

```bash
git clone https://github.com/<tu-usuario>/astro-duo.git
cd astro-duo
pnpm install
```

> El primer install ejecutará los lifecycle scripts permitidos (`sharp`, `esbuild`) para compilar binarios nativos. Cualquier otro script de instalación de dependencias transitivas queda bloqueado por seguridad.

### Levantar servidor de desarrollo

```bash
pnpm dev
```

Abre `http://localhost:4321` con hot reload.

### Build de producción

```bash
pnpm build
```

Genera `dist/` y `.vercel/output/` con todo optimizado: HTML estático, imágenes en WebP responsive, sitemap, robots.txt.

### Preview del build

```bash
pnpm preview
```

---

## Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `astro dev` | Servidor de desarrollo con HMR |
| `build` | `astro build` | Build de producción |
| `preview` | `astro preview` | Sirve el build localmente |
| `check` | `astro check` | Type check de archivos `.astro` y `.ts` |

---

## Editar contenido

**Toda la copy del sitio vive en [`src/data/dataSite.ts`](./src/data/dataSite.ts)**. Es el único archivo que necesitás tocar para actualizar:

- `whatsappNumber` — número con código de país
- `navLinks` — items del menú
- `servicios` — cards de servicios (título, descripción y listado de items)
- `ebookHref`, `ebookFeatures`, `ebookReviews` — ebook + testimonios
- `values` — valores de la sección About
- `socialLinks` — redes (Instagram, TikTok, WhatsApp, Email)
- `contactChannels` — canales de la sección Contacto
- `recursos` — recursos descargables

### Añadir un nuevo servicio

```ts
// src/data/dataSite.ts
export const servicios: Servicio[] = [
  // ...
  {
    title: "Mi nuevo servicio",
    description: "Descripción breve del servicio.",
    items: ["Item 1", "Item 2", "Item 3"],
  },
];
```

Cada card renderiza automáticamente un CTA **"Más info"** que abre WhatsApp con un mensaje preestablecido basado en el `title` del servicio. En desktop las cards se muestran todas en un grid; en mobile forman un carrusel horizontal con scroll-snap y dots de navegación.

### Añadir una imagen optimizada

1. Coloca el archivo en `src/assets/images/`.
2. Importalo y usá el componente `<Image>` de Astro:

   ```astro
   ---
   import { Image } from "astro:assets";
   import miImagen from "@images/mi-imagen.png";
   ---
   <Image src={miImagen} alt="..." widths={[400, 800]} sizes="100vw" format="webp" />
   ```

`sharp` se encarga de generar variantes WebP responsive en build.

---

## Configuración y seguridad

Este proyecto aplica varias medidas de **supply chain security** para prevenir ataques vía dependencias maliciosas.

### `package.json`

```json
{
  "packageManager": "pnpm@11.1.1+sha512.d1fdf5f7…",
  "engines": {
    "node": ">=20.10.0",
    "pnpm": ">=11.1.1"
  }
}
```

El **hash SHA-512** del binario de pnpm está pineado: Corepack rechaza cualquier ejecutable que no coincida exactamente, mitigando la sustitución del package manager.

### `pnpm-workspace.yaml`

```yaml
allowBuilds:
  esbuild: true
  sharp: true
```

Solo estos paquetes pueden ejecutar `preinstall`/`install`/`postinstall`. Cualquier otra dependencia (incluso transitiva) tiene sus scripts **bloqueados por defecto** → neutraliza el principal vector de ataques de supply chain (postinstall malicioso).

### `.npmrc` (endurecido)

| Setting | Valor | Propósito |
|---|---|---|
| `engine-strict` | `true` | Rechaza Node/pnpm fuera de rango |
| `frozen-lockfile` | `true` | Falla si el lockfile está desincronizado |
| `verify-store-integrity` | `true` | Verifica integridad de tarballs vs lockfile |
| `strict-ssl` | `true` | Solo HTTPS al registry |
| `manage-package-manager-versions` | `true` | pnpm autogestiona su versión vía `packageManager` |
| `auto-install-peers` | `true` | Instala peer deps automáticamente |

### Auditoría rápida

```bash
pnpm audit                # Vulnerabilidades conocidas
pnpm outdated             # Versiones desactualizadas
pnpm licenses list        # Licencias de todas las deps
```

---

## Deployment

El proyecto está configurado para **Vercel** vía [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/).

### Deploy automático

Cualquier push a la rama por defecto despliega automáticamente. Vercel detecta `pnpm` por la presencia de `pnpm-lock.yaml` y respeta el `packageManager` field.

### Deploy manual

```bash
pnpm dlx vercel --prod
```

### Variables de entorno

No requiere variables sensibles para el build (todo el contenido es estático). Si añadís integraciones (formularios, CMS, etc.) usá `.env` (ya está en `.gitignore`).

---

## Performance & SEO

| Característica | Implementación |
|---|---|
| **Imágenes** | Optimización automática vía `sharp` → WebP responsive con `widths` y `sizes` |
| **Fonts** | Self-hosted vía Fontsource → cero requests a Google Fonts |
| **Sitemap** | Generado automáticamente por `@astrojs/sitemap` |
| **Robots** | `public/robots.txt` con referencia al sitemap |
| **Open Graph** | `public/og-image.png` (1200×630) |
| **JSON-LD** | Structured data inyectado en `Layout.astro` |
| **Lazy loading** | Imágenes below-the-fold con `loading="lazy"` |
| **Preload critical** | Hero e isotipo con `loading="eager"` |
| **Reveal animations** | IntersectionObserver con `prefers-reduced-motion` respetado |
| **Web Analytics** | Vercel Analytics + Speed Insights (CWV reales) |

---

## Contacto

<div align="center">

<img src="./src/assets/images/isotipo.png" alt="Dúo Studio Digital" width="80" />

**Dúo Studio Digital**
Agencia de Marketing Digital

[🌐 Web](https://duostudiodigital.com.ar) ·
[📸 Instagram](https://www.instagram.com/duostudio.digital/) ·
[🎵 TikTok](https://www.tiktok.com/@duo.studio.digital) ·
[💬 WhatsApp](https://wa.me/5491173636081) ·
[✉️ Email](mailto:contacto@duostudiodigital.com)

</div>

---

<div align="center">

Hecho con 🫒 por **Dúo Studio Digital**
</div>
