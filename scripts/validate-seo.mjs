import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const root = new URL("../", import.meta.url);

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "video") continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(path));
    else if (entry.name.endsWith(".html") && !/^(google|yandex).+\.html$/.test(entry.name)) files.push(path);
  }
  return files;
}

const errors = [];
const files = await htmlFiles(root.pathname);

for (const file of files) {
  const html = await readFile(file, "utf8");
  const name = relative(root.pathname, file);
  const required = [
    [/<title>[^<]+<\/title>/s, "title"],
    [/<meta\s+name="description"\s+content="[^"]+"\s*\/>/s, "meta description"],
    [/<link\s+rel="canonical"\s+href="https:\/\/silkroadtech\.kz\/[^"]*"\s*\/>/s, "canonical URL"],
    [/<h1(?:\s|>)/s, "H1"]
  ];
  for (const [pattern, label] of required) {
    if (!pattern.test(html)) errors.push(`${name}: missing ${label}`);
  }

  const scripts = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const [index, match] of scripts.entries()) {
    try { JSON.parse(match[1]); }
    catch (error) { errors.push(`${name}: invalid JSON-LD block ${index + 1} (${error.message})`); }
  }
}

const sitemap = await readFile(new URL("../sitemap.xml", import.meta.url), "utf8");
for (const file of files) {
  const name = relative(root.pathname, file);
  const route = name === "index.html" ? "/" : `/${name.replace(/\.html$/, "")}`;
  if (!sitemap.includes(`<loc>https://silkroadtech.kz${route}</loc>`)) {
    errors.push(`${name}: missing from sitemap.xml`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`SEO validation passed for ${files.length} HTML files.`);
