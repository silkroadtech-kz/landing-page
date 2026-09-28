// Проставляет в sitemap.xml дату последнего изменения каждой страницы,
// беря её из git — из коммита, которым правился соответствующий HTML-файл.
//
//   node scripts/update-sitemap.mjs           обновить даты
//   node scripts/update-sitemap.mjs --check    только проверить, ничего не писать
//
// Руками эти даты не поддерживались и устаревали: поисковики считали
// страницы неизменными и реже их переобходили.

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = join(root, "sitemap.xml");
const check = process.argv.includes("--check");

// Адрес → файл, из которого он собирается.
const fileFor = (url) => {
	const path = url.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "");
	return path === "" ? "index.html" : `${path.slice(1)}.html`;
};

const gitDate = (file) => {
	try {
		const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
			cwd: root,
			encoding: "utf8",
		}).trim();
		return out || null;
	} catch {
		return null;
	}
};

let xml = readFileSync(sitemapPath, "utf8");
const changes = [];

xml = xml.replace(
	/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g,
	(match, url, current) => {
		const file = fileFor(url);
		if (!existsSync(join(root, file))) {
			console.warn(`! файла нет, дату не трогаю: ${url} → ${file}`);
			return match;
		}
		const fresh = gitDate(file);
		if (!fresh || fresh === current) return match;
		changes.push({ url, from: current, to: fresh });
		return match.replace(`<lastmod>${current}</lastmod>`, `<lastmod>${fresh}</lastmod>`);
	},
);

if (changes.length === 0) {
	console.log("sitemap.xml: даты актуальны");
	process.exit(0);
}

for (const { url, from, to } of changes) {
	console.log(`${from} → ${to}  ${url}`);
}

if (check) {
	console.error(`\nsitemap.xml устарел: ${changes.length} дат. Запустите без --check.`);
	process.exit(1);
}

writeFileSync(sitemapPath, xml);
console.log(`\nsitemap.xml обновлён: ${changes.length} дат`);
