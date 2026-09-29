// Собирает ItemList с проектами из карточек на странице кейсов.
//
//   node scripts/build-cases-schema.mjs
//
// Раньше страница перечисляла девять проектов, но для поисковиков это был
// просто текст. Список берётся из вёрстки, поэтому не разойдётся с ней.
// Блок помечен data-generated="cases" и при повторном запуске переписывается.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const MARKER = ' data-generated="cases"';
const PAGES = ["cases.html", "en/cases.html"];

const strip = (html) =>
	html
		.replace(/<[^>]+>/g, "")
		.replace(/\s+/g, " ")
		.trim();

function cases(html) {
	const out = [];
	for (const m of html.matchAll(/<article[^>]*class="[^"]*case\b[^"]*"[^>]*>([\s\S]*?)<\/article>/g)) {
		const block = m[1];
		const client = block.match(/class="case__name"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/);
		const title = block.match(/class="case__title"[^>]*>([\s\S]*?)<\/h2>/);
		const desc = block.match(/class="case__desc"[^>]*>([\s\S]*?)<\/p>/);
		if (!title) continue;
		out.push({
			name: strip(title[1]),
			description: desc ? strip(desc[1]) : undefined,
			client: client ? strip(client[2]) : undefined,
			url: client ? client[1] : undefined,
		});
	}
	return out;
}

for (const page of PAGES) {
	const path = join(root, page);
	let html;
	try {
		html = readFileSync(path, "utf8");
	} catch {
		console.warn(`! ${page}: файла нет, пропускаю`);
		continue;
	}

	const existing = new RegExp(`\\s*<script type="application/ld\\+json"${MARKER}>[\\s\\S]*?</script>`, "g");
	const cleaned = html.replace(existing, "");
	const items = cases(cleaned);
	if (items.length === 0) {
		console.warn(`! ${page}: карточек кейсов не найдено`);
		continue;
	}

	const isEn = page.startsWith("en/");
	const data = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"@id": `https://silkroadtech.kz${isEn ? "/en" : ""}/cases#projects`,
		name: isEn ? "Silk Road Tech case studies" : "Кейсы Silk Road Tech",
		numberOfItems: items.length,
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "CreativeWork",
				name: item.name,
				...(item.description ? { description: item.description } : {}),
				...(item.url ? { url: item.url } : {}),
				...(item.client ? { about: { "@type": "Organization", name: item.client } } : {}),
				creator: { "@id": "https://silkroadtech.kz/#organization" },
			},
		})),
	};

	const block = `\n\t\t<script type="application/ld+json"${MARKER}>\n${JSON.stringify(data, null, 1)}\n\t\t</script>`;
	const canonical = cleaned.match(/<link\s[^>]*rel="canonical"[^>]*>/);
	if (!canonical) {
		console.warn(`! ${page}: нет canonical, некуда вставить разметку`);
		continue;
	}
	const at = cleaned.indexOf(canonical[0]) + canonical[0].length;
	writeFileSync(path, cleaned.slice(0, at) + block + cleaned.slice(at));
	console.log(`✓ ${page}: ItemList, проектов ${items.length}`);
}
