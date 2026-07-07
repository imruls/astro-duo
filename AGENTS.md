# AGENTS.md — Guía para agentes de IA (Cursor, Claude, etc.)

Este archivo documenta las convenciones del proyecto para que cualquier agente de IA
pueda editar el código sin introducir inconsistencias. Leelo antes de hacer cambios.

## Qué es este proyecto

Landing page single-page para **Dúo Studio Digital**, construida con **Astro 5** puro
(sin React/Vue/Svelte, sin Tailwind). Ver [README.md](./README.md) para el detalle
completo de stack, estructura y sistema de diseño.

## Reglas críticas

### 1. Todo el contenido/copy vive en `src/data/dataSite.ts`

**Nunca hardcodees texto, números de teléfono, URLs de contacto o listas de servicios
directamente en un componente `.astro`.** Si necesitás ese dato en un componente,
impórtalo desde `@data/dataSite`.

- Número de WhatsApp → `whatsappNumber` / `whatsappUrl` / `getWhatsappLink()` en
  `dataSite.ts`. No escribas `"5491173636081"` ni `"https://wa.me/..."` a mano en
  ningún otro archivo.
- Email de contacto → `contactEmail` / `contactEmailUrl` en `dataSite.ts`. No
  escribas `"contacto@duostudiodigital.com"` ni `"mailto:..."` a mano.
- Redes sociales (Instagram, TikTok) → `instagramUrl` / `tiktokUrl` en
  `dataSite.ts`. No repitas esas URLs a mano en otros archivos.
- `pnpm check:content` valida en CI que estos tres puntos no se hardcodeen
  fuera de `dataSite.ts`; si agregás un nuevo dato de contacto único (ej. un
  segundo teléfono), sumá también su chequeo en
  `scripts/check-content-drift.mjs`.
- Lista de servicios → `servicios`. El JSON-LD de `Layout.astro` se genera
  **dinámicamente** a partir de este array; si agregás/quitás un servicio no hace
  falta tocar el layout.
- Copy compartido entre secciones (ej. descripción de la empresa) → agregalo como
  constante en `dataSite.ts` y consumilo desde ambos componentes, en vez de
  duplicar el string.

### 2. No es un monorepo

`pnpm-workspace.yaml` existe solo por la configuración de seguridad `allowBuilds`
de pnpm 10+, no define workspaces. Hay un único `package.json` en la raíz.

### 3. Flujo de dependencias con pnpm

El `.npmrc` tiene `frozen-lockfile=true` y `engine-strict=true`. Para agregar una
dependencia usá `pnpm add <paquete>` (actualiza el lockfile automáticamente). Nunca
edites `pnpm-lock.yaml` a mano ni corras `pnpm install` esperando que resuelva un
`package.json` editado manualmente sin lockfile actualizado.

Si un paquete nuevo necesita ejecutar scripts de instalación (`postinstall`, etc.),
agregalo explícitamente a `allowBuilds` en `pnpm-workspace.yaml` después de
auditarlo.

### 4. Patrón de sección autocontenida

Cada componente en `src/components/sections/` contiene su propio markup + `<style>`
(scoped por Astro) + `<script>` inline. Mantené este patrón al crear secciones
nuevas. Para lógica de UI reutilizable entre secciones (ej. carruseles con dots),
extraela a `src/scripts/` y consumila con el alias `@scripts/*`.

### 5. Alias de imports — usalos siempre

Definidos en `tsconfig.json`:

```ts
import { servicios } from "@data/dataSite";
import Layout from "@layouts/Layout.astro";
import Hero from "@sections/Hero.astro";
import Icon from "@ui/Icon.astro";
import logo from "@images/5.png";
import { initScrollDots } from "@scripts/scrollDots";
```

No uses rutas relativas (`../../layouts/Layout.astro`) si existe un alias equivalente.

### 6. Naming en español

Componentes de sección, clases CSS (BEM: `.servicio-card__title`) y variables de
`dataSite.ts` usan nombres en español, siguiendo el idioma del contenido del sitio.
Mantené esa convención.

### 7. Calidad de código

- Corré `pnpm lint` y `pnpm format:check` antes de dar por terminado un cambio.
- El proyecto usa TypeScript estricto (`astro/tsconfigs/strict`). No introduzcas
  `any` implícitos ni desactives el chequeo de tipos para "hacer pasar" un cambio.
- Corré `pnpm check` para validar tipos en archivos `.astro`.

### 8. Antes de tocar `public/images/`

Verificá si un asset se usa realmente en el código (`Grep` por su nombre) antes de
asumir que hay que optimizarlo o de agregarlo sin uso. Las imágenes que sí requieren
optimización van en `src/assets/images/` (procesadas por `sharp` vía `astro:assets`),
no en `public/images/`.

## Scripts disponibles

| Script               | Qué hace                                                                                            |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| `pnpm dev`           | Servidor de desarrollo                                                                              |
| `pnpm build`         | Build de producción                                                                                 |
| `pnpm preview`       | Preview del build                                                                                   |
| `pnpm check`         | Type-check de `.astro`/`.ts`                                                                        |
| `pnpm lint`          | ESLint sobre todo el proyecto                                                                       |
| `pnpm format`        | Formatea con Prettier                                                                               |
| `pnpm format:check`  | Verifica formato sin escribir                                                                       |
| `pnpm check:content` | Verifica que no haya datos de contacto (WhatsApp, email, redes) hardcodeados fuera de `dataSite.ts` |
