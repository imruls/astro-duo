#!/usr/bin/env node
/**
 * Chequeo anti-drift: falla si aparece un número/URL de WhatsApp hardcodeado
 * fuera de `src/data/dataSite.ts`. Todo el contenido de contacto debe
 * importarse desde ahí (`whatsappNumber`, `whatsappUrl`, `getWhatsappLink`).
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
// Coincide con "wa.me/<numero>" o el número pelado de WhatsApp.
const OFFENDING_PATTERN = /wa\.me\/\+?\d{8,}|5491173636081/;

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
  const offenders = [];

  for (const filePath of walk(srcDir)) {
    const relativePath = relative(rootDir, filePath);
    if (relativePath === SOURCE_OF_TRUTH) continue;

    const content = readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    lines.forEach((line, i) => {
      if (OFFENDING_PATTERN.test(line)) {
        offenders.push(`${relativePath}:${i + 1}: ${line.trim()}`);
      }
    });
  }

  if (offenders.length > 0) {
    console.error(
      "✖ Se encontraron URLs/números de WhatsApp hardcodeados fuera de " +
        `${SOURCE_OF_TRUTH}:\n`,
    );
    offenders.forEach((offender) => console.error(`  ${offender}`));
    console.error(
      "\nImportá `whatsappUrl` o `getWhatsappLink()` desde " +
        "@data/dataSite en vez de hardcodear el valor.",
    );
    process.exit(1);
  }

  console.log(
    "✔ No hay contenido de WhatsApp hardcodeado fuera de dataSite.ts",
  );
}

main();
