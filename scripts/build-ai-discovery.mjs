// Собирает файлы «обнаружения для ИИ»: .well-known/ai.txt, ai/summary.json,
// ai/faq.json и ai/service.json.
//
//   node scripts/build-ai-discovery.mjs
//
// Это не стандарт, а соглашение, которое поддерживают отдельные инструменты
// и агенты; поисковые системы их пока не читают. Содержимое берётся из
// разметки главной страницы, поэтому файлы не могут разойтись с сайтом.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://silkroadtech.kz";

function graph(file) {
	const html = readFileSync(join(root, file), "utf8");
	const out = [];
	for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
		try {
			const data = JSON.parse(m[1]);
			out.push(...(data["@graph"] ?? [data]));
		} catch {
			// битый блок пропускаем
		}
	}
	return out;
}

const ru = graph("index.html");
const en = graph("en/index.html");
const org = ru.find((n) => String(n["@type"]).includes("Organization"));
const faq = ru.find((n) => n["@type"] === "FAQPage");
const faqEn = en.find((n) => n["@type"] === "FAQPage");
const services = ru.find((n) => n["@type"] === "ItemList");
const servicesEn = en.find((n) => n["@type"] === "ItemList");

if (!org) throw new Error("на главной не найдена разметка Organization");

mkdirSync(join(root, "ai"), { recursive: true });
mkdirSync(join(root, ".well-known"), { recursive: true });

// --- .well-known/ai.txt: чем можно пользоваться и к кому идти с вопросами ---
const aiTxt = `# Silk Road Tech — условия для ИИ-агентов и краулеров
# ${SITE}

User-agent: *
Allow: /
Disallow: /api/

Contact: ${org.email}
Organization: ${org.name}
Legal-entity: ${org.legalName}
Location: ${org.address.addressLocality}, ${org.address.addressCountry}
Languages: ru, en

Summary: ${SITE}/ai/summary.json
Services: ${SITE}/ai/service.json
FAQ: ${SITE}/ai/faq.json
Sitemap: ${SITE}/sitemap.xml
Content-guide: ${SITE}/llms.txt

# Материалы сайта защищены авторским правом: ${SITE}/copyright
`;
writeFileSync(join(root, ".well-known/ai.txt"), aiTxt);

// --- ai/summary.json: кто мы ---
const summary = {
	name: org.name,
	legalName: org.legalName,
	url: `${SITE}/`,
	description: org.description,
	languages: ["ru", "en"],
	versions: { ru: `${SITE}/`, en: `${SITE}/en/` },
	location: {
		locality: org.address.addressLocality,
		country: org.address.addressCountry,
		address: org.address.streetAddress,
	},
	contact: { email: org.email, telephone: org.telephone },
	sameAs: org.sameAs,
	resources: {
		sitemap: `${SITE}/sitemap.xml`,
		contentGuide: `${SITE}/llms.txt`,
		blogFeed: `${SITE}/feed.xml`,
		blogFeedEn: `${SITE}/en/feed.xml`,
	},
	updated: new Date().toISOString().slice(0, 10),
};
writeFileSync(join(root, "ai/summary.json"), `${JSON.stringify(summary, null, 2)}\n`);

// --- ai/service.json: что делаем ---
const asService = (list, lang) =>
	(list?.itemListElement ?? []).map((item) => ({
		name: item.name,
		description: item.description,
		language: lang,
	}));
const service = {
	provider: org.name,
	url: `${SITE}/`,
	areaServed: org.areaServed?.name,
	priceFrom: org.priceRange,
	services: [...asService(services, "ru"), ...asService(servicesEn, "en")],
	cases: `${SITE}/cases`,
	updated: summary.updated,
};
writeFileSync(join(root, "ai/service.json"), `${JSON.stringify(service, null, 2)}\n`);

// --- ai/faq.json: вопросы с главной ---
const asFaq = (page, lang) =>
	(page?.mainEntity ?? []).map((q) => ({
		question: q.name,
		answer: q.acceptedAnswer?.text,
		language: lang,
	}));
const faqFile = {
	url: `${SITE}/`,
	questions: [...asFaq(faq, "ru"), ...asFaq(faqEn, "en")],
	updated: summary.updated,
};
writeFileSync(join(root, "ai/faq.json"), `${JSON.stringify(faqFile, null, 2)}\n`);

console.log("Файлы обнаружения для ИИ собраны:");
console.log(`  .well-known/ai.txt`);
console.log(`  ai/summary.json`);
console.log(`  ai/service.json   — услуг: ${service.services.length}`);
console.log(`  ai/faq.json       — вопросов: ${faqFile.questions.length}`);
