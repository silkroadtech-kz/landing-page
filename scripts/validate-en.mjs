import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, relative } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
function pages(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? pages(path) : entry.name.endsWith(".html") ? [path] : [];
  });
}
// Translation may change text and inline markup, but must preserve every
// translation target, section, and navigation link, including multiline tags.
function structure(html) {
  const tags = [...html.matchAll(/<([a-z][a-z0-9]*)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi)];
  return tags.flatMap(([, tag, attrs]) => {
    const key = attrs.match(/\bdata-i18n(?:-html|-placeholder)?="([^"]+)"/);
    const id = attrs.match(/\bid="([^"]+)"/);
    return [
      ...(key ? [`translation:${tag}:${key[1]}`] : []),
      ...(tag === "section" ? [`section:${id?.[1] ?? ""}`] : []),
    ];
  });
}
const files = pages(join(root, "en"));
for (const file of files) {
  const source = join(root, relative(join(root, "en"), file));
  assert.deepEqual(structure(readFileSync(file, "utf8")), structure(readFileSync(source, "utf8")),
    `${relative(root, file)} lost or reordered translation targets or sections`);
}
console.log(`English structure matches the source on ${files.length} pages.`);
