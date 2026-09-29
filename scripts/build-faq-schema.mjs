// Собирает разметку FAQPage из блока «Частые вопросы» на странице.
//
//   node scripts/build-faq-schema.mjs
//
// Вопросы и ответы берутся из самой вёрстки (<details class="faq__item">),
// поэтому разметка не может разойтись с тем, что видит посетитель. Блок
// помечен data-generated="faq" — при повторном запуске он перезаписывается.

import { readFileSync, writeFileSync, globSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const MARKER = ' data-generated="faq"';

const strip = (html) =>
	html
		.replace(/<[^>]+>/g, "")
		.replace(/\s+/g, " ")
		.trim();

function faqItems(html) {
	const items = [];
	for (const m of html.matchAll(/<details[^>]*class="[^"]*faq__item[^"]*"[^>]*>([\s\S]*?)<\/details>/g)) {
		const block = m[1];
		const summary = block.match(/<summary[^>]*>([\s\S]*?)<\/summary>/);
		if (!summary) continue;
		// В summary лежит ещё значок-стрелка — берём только текстовый span.
		const question = strip(summary[1].replace(/<span[^>]*class="faq__icon"[^>]*>[\s\S]*?<\/span>/g, ""));
		const answer = strip(block.replace(/<summary[\s\S]*?<\/summary>/, ""));
		if (question && answer) items.push({ question, answer });
	}
	return items;
}

const pages = [...globSync("*.html", { cwd: root }), ...globSync("en/*.html", { cwd: root })];
let touched = 0;

for (const page of pages) {
	const path = join(root, page);
	let html = readFileSync(path, "utf8");
	const items = faqItems(html);

	// Убираем ранее сгенерированный блок, чтобы не плодить копии.
	const existing = new RegExp(`\\s*<script type="application/ld\\+json"${MARKER}>[\\s\\S]*?</script>`, "g");
	const cleaned = html.replace(existing, "");

	if (items.length === 0) {
		if (cleaned !== html) {
			writeFileSync(path, cleaned);
			console.log(`− ${page}: блок FAQ убран, вопросов на странице нет`);
			touched++;
		}
		continue;
	}

	// Если разметка FAQPage написана руками — не трогаем её.
	if (cleaned.includes('"FAQPage"') || cleaned.includes('"@type": "FAQPage"')) {
		continue;
	}

	const data = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map(({ question, answer }) => ({
			"@type": "Question",
			name: question,
			acceptedAnswer: { "@type": "Answer", text: answer },
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
	console.log(`✓ ${page}: FAQPage, вопросов ${items.length}`);
	touched++;
}

if (touched === 0) console.log("Разметка FAQ уже актуальна");
