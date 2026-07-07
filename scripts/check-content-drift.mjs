#!/usr/bin/env node
/**
 * Chequeo anti-drift: falla si aparece un dato de contacto (WhatsApp, email
 * o redes sociales) hardcodeado fuera de `src/data/dataSite.ts`. Todo el
 * contenido de contacto debe importarse desde ahí (`whatsappUrl`,
 * `getWhatsappLink`, `contactEmail`, `contactEmailUrl`, `instagramUrl`,
 * `tiktokUrl`).
 *
 * Pensado para engancharse a CI o correrse manualmente con:
 *   pnpm check:content
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const srcDir = join(rootDir, "src");
const SOURCE_OF_TRUTH = join("src", "data", "dataSite.ts");
const EXTENSIONS = new Set([".astro", ".ts", ".tsx", ".js"]);

const CHECKS = [
  {
    name: "WhatsApp",
    // Coincide con "wa.me/<numero>" o el número pelado de WhatsApp.
    pattern: /wa\.me\/\+?\d{8,}|5491173636081/,
    hint: "Importá `whatsappUrl` o `getWhatsappLink()` desde @data/dataSite en vez de hardcodear el valor.",
  },
  {
    name: "Email de contacto",
    pattern: /contacto@duostudiodigital\.com/,
    hint: "Importá `contactEmail` o `contactEmailUrl` desde @data/dataSite en vez de hardcodear la dirección.",
  },
  {
    name: "Instagram",
    pattern: /instagram\.com\/duostudio\.digital/,
    hint: "Importá `instagramUrl` desde @data/dataSite en vez de hardcodear la URL.",
  },
  {
    name: "TikTok",
    pattern: /tiktok\.com\/@duo\.studio\.digital/,
    hint: "Importá `tiktokUrl` desde @data/dataSite en vez de hardcodear la URL.",
  },
];

/** @param {string} dir @returns {string[]} */
function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (EXTENSIONS.has(extname(fullPath))) {
      files.push(fullPath);
    }
  }

  return files;
}

function main() {
  /** @type {Map<string, string[]>} */
  const offendersByCheck = new Map();

  for (const filePath of walk(srcDir)) {
    const relativePath = relative(rootDir, filePath);
    if (relativePath === SOURCE_OF_TRUTH) continue;

    const content = readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    lines.forEach((line, i) => {
      for (const check of CHECKS) {
        if (check.pattern.test(line)) {
          const offenders = offendersByCheck.get(check.name) ?? [];
          offenders.push(`${relativePath}:${i + 1}: ${line.trim()}`);
          offendersByCheck.set(check.name, offenders);
        }
      }
    });
  }

  if (offendersByCheck.size > 0) {
    console.error(
      "✖ Se encontró contenido de contacto hardcodeado fuera de " +
        `${SOURCE_OF_TRUTH}:\n`,
    );

    for (const check of CHECKS) {
      const offenders = offendersByCheck.get(check.name);
      if (!offenders) continue;

      console.error(`  [${check.name}]`);
      offenders.forEach((offender) => console.error(`    ${offender}`));
      console.error(`  → ${check.hint}\n`);
    }

    process.exit(1);
  }

  console.log(
    "✔ No hay contenido de contacto hardcodeado fuera de dataSite.ts",
  );
}

main();
