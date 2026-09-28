// Собирает английские страницы в en/ из русских исходников и словаря
// assets/i18n.js. Раньше перевод существовал только в браузере: текст
// подменялся скриптом и хранился в localStorage, отдельных адресов не было,
// поэтому для поисковиков английской версии сайта не существовало.
//
//   node scripts/build-en.mjs
//
// Переводятся только страницы, покрытые словарём целиком. Блог и юридические
// документы остаются русскими: их тексты в словарь не вынесены, и половина
// страницы осталась бы на русском.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://silkroadtech.kz";

// Заголовки и описания в словарь не вынесены — они заданы здесь.
const PAGES = [
	{
		src: "index.html",
		slug: "",
		title: "Software, AI and analytics development — Silk Road Tech",
		description:
			"We build websites, software and mobile apps, integrate AI and analytics, and automate business processes. Based in Astana, Kazakhstan.",
		ogTitle: "Silk Road Tech — software, AI and analytics",
		ogDescription: "From idea and architecture to launch and growth of your product.",
		og: "og/en/home.png",
	},
	{
		src: "cases.html",
		slug: "cases",
		title: "Case studies: development, AI and automation — Silk Road Tech",
		description:
			"Platforms, ERP systems, AI automation and digital services Silk Road Tech built for business and the public sector in Kazakhstan.",
		ogTitle: "Products and systems we shipped",
		ogDescription: "Platforms, AI automation and digital services for business and government.",
		og: "og/en/cases.png",
	},
	{
		src: "about.html",
		slug: "about",
		title: "About us — Silk Road Tech",
		description:
			"The Silk Road Tech team: engineers, analysts and product people. We build software, integrate AI and automate business processes.",
		ogTitle: "A team of engineers, analysts and advisors",
		ogDescription: "Software development, AI integration, data analytics and process automation.",
		og: "og/en/about.png",
	},
	{
		src: "referral.html",
		slug: "referral",
		title: "Partner program — 10% of the contract — Silk Road Tech",
		description:
			"Refer a company that needs a website, a system or AI, and earn 10% of the signed contract. Payouts to Kaspi, Halyk or any bank account in Kazakhstan.",
		ogTitle: "Refer us — earn 10% of the contract",
		ogDescription: "Share a contact — we handle the meetings, the contract and the build.",
		og: "og/en/referral.png",
	},
];

const enUrl = (slug) => `${SITE}/en${slug ? `/${slug}` : "/"}`;
const ruUrl = (slug) => `${SITE}/${slug}`;

// --- словарь из assets/i18n.js ---
function loadTranslations() {
	const src = readFileSync(join(root, "assets/i18n.js"), "utf8");
	const start = src.indexOf("var translations = {");
	if (start < 0) throw new Error("не найден объект translations в assets/i18n.js");
	const open = src.indexOf("{", start);
	let depth = 0;
	let end = -1;
	for (let i = open; i < src.length; i++) {
		if (src[i] === "{") depth++;
		else if (src[i] === "}") {
			depth--;
			if (depth === 0) {
				end = i + 1;
				break;
			}
		}
	}
	return new Function(`return ${src.slice(open, end)}`)();
}

const t = loadTranslations();
const en = (key) => t[key]?.en ?? null;

// --- перевод разметки ---
function translate(html, missing) {
	// Текст и разметка внутри элемента.
	html = html.replace(
		/<([a-z0-9]+)((?:[^>"']|"[^"]*"|'[^']*')*?\sdata-i18n(?:-html)?="([^"]+)"(?:[^>"']|"[^"]*"|'[^']*')*)>([\s\S]*?)<\/\1>/gi,
		(match, tag, attrs, key, inner) => {
			const value = en(key);
			if (value === null) {
				missing.add(key);
				return match;
			}
			return `<${tag}${attrs}>${value}</${tag}>`;
		},
	);
	// Подсказки в полях ввода.
	html = html.replace(
		/(<[a-z0-9]+(?:[^>"']|"[^"]*"|'[^']*')*?\sdata-i18n-placeholder="([^"]+)"(?:[^>"']|"[^"]*"|'[^']*')*?)placeholder="[^"]*"/gi,
		(match, head, key) => {
			const value = en(key);
			if (value === null) {
				missing.add(key);
				return match;
			}
			return `${head}placeholder="${value}"`;
		},
	);
	return html;
}

// --- пути ---
// Страницы лежат в en/, поэтому относительные ссылки на ассеты пришлось бы
// поднимать на уровень выше. Делаем их абсолютными от корня — так они не
// зависят от глубины вложенности.
function absolutizeAssets(html) {
	return html.replace(
		/(\s(?:href|src|srcset|content)=")(?!https?:|\/|#|mailto:|tel:|data:)((?:assets|og|video)\/[^"]*|favicon\.(?:ico|svg)|apple-touch-icon\.png|site\.webmanifest|og-cover\.png)"/g,
		'$1/$2"',
	);
}

// Внутренние ссылки ведут на английские страницы там, где они есть.
function relinkInternal(html) {
	const translated = new Map(PAGES.map((p) => [`/${p.slug}`, p.slug ? `/en/${p.slug}` : "/en/"]));
	return html.replace(/(\shref=")(\/[^"#?]*)([^"]*)"/g, (match, head, path, rest) => {
		const target = translated.get(path === "/" ? "/" : path.replace(/\/$/, ""));
		return target ? `${head}${target}${rest}"` : match;
	});
}

// Первый отзыв отрисован в разметке статически, а слайдер подменяет его
// скриптом уже после загрузки. Поисковому роботу без перевода доставался бы
// русский текст, поэтому подставляем английский вариант из того же массива.
function translateFirstReview(html) {
	const block = html.match(/const reviews = \{[\s\S]*?\n\t{4}\};/);
	if (!block) return html;
	const ru = block[0].match(/ru:\s*\[\s*\{([\s\S]*?)\}/);
	const en = block[0].match(/en:\s*\[\s*\{([\s\S]*?)\}/);
	if (!ru || !en) return html;
	const field = (chunk, name) => {
		const m = chunk.match(new RegExp(`${name}:\\s*\n?\\s*"([^"]*)"`));
		return m ? m[1] : null;
	};
	for (const name of ["quote", "name", "role"]) {
		const from = field(ru[1], name);
		const to = field(en[1], name);
		if (!from || !to) continue;
		// В разметке длинные строки перенесены по словам — сверяем без учёта переносов.
		const pattern = from.split(/\s+/).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("\\s+");
		html = html.replace(new RegExp(pattern, "g"), to);
	}
	return html;
}

function head(html, ru, page) {
	const alt = [
		`<link rel="alternate" hreflang="ru" href="${ruUrl(page.slug)}" />`,
		`<link rel="alternate" hreflang="en" href="${enUrl(page.slug)}" />`,
		`<link rel="alternate" hreflang="x-default" href="${ruUrl(page.slug)}" />`,
	].join("\n\t\t");

	// Русский исходник уже связан с английской версией — старые ссылки убираем,
	// иначе после подстановки своих получилось бы по два набора hreflang.
	html = html.replace(/\s*<link\s[^>]*rel="alternate"[^>]*hreflang="[^"]*"[^>]*>/gi, "");

	html = html.replace(/<html([^>]*)\slang="[^"]*"/i, '<html$1 lang="en"');
	html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${page.title}</title>`);
	html = html.replace(
		/(<meta\s[^>]*name="description"[^>]*content=")[^"]*"/i,
		`$1${page.description}"`,
	);
	html = html.replace(/(<meta\s[^>]*property="og:title"[^>]*content=")[^"]*"/i, `$1${page.ogTitle}"`);
	html = html.replace(
		/(<meta\s[^>]*property="og:description"[^>]*content=")[^"]*"/i,
		`$1${page.ogDescription}"`,
	);
	html = html.replace(/(<meta\s[^>]*name="twitter:title"[^>]*content=")[^"]*"/i, `$1${page.ogTitle}"`);
	html = html.replace(
		/(<meta\s[^>]*name="twitter:description"[^>]*content=")[^"]*"/i,
		`$1${page.ogDescription}"`,
	);
	html = html.replace(/(<meta\s[^>]*property="og:url"[^>]*content=")[^"]*"/i, `$1${enUrl(page.slug)}"`);
	html = html.replace(/(<meta\s[^>]*property="og:locale"[^>]*content=")[^"]*"/i, '$1en_US"');
	html = html.replace(
		/(<meta\s[^>]*property="og:image"[^>]*content=")[^"]*"/i,
		`$1${SITE}/${page.og}"`,
	);
	html = html.replace(
		/(<meta\s[^>]*name="twitter:image"[^>]*content=")[^"]*"/i,
		`$1${SITE}/${page.og}"`,
	);
	// canonical английской страницы + перекрёстные hreflang
	html = html.replace(
		/<link\s[^>]*rel="canonical"[^>]*>/i,
		`<link rel="canonical" href="${enUrl(page.slug)}" />\n\t\t${alt}`,
	);
	return html;
}

mkdirSync(join(root, "en"), { recursive: true });
const missing = new Set();

for (const page of PAGES) {
	const ru = readFileSync(join(root, page.src), "utf8");
	let html = translate(ru, missing);
	if (page.src === "index.html") html = translateFirstReview(html);
	html = head(html, ru, page);
	html = absolutizeAssets(html);
	html = relinkInternal(html);
	const out = page.slug ? `en/${page.slug}.html` : "en/index.html";
	writeFileSync(join(root, out), html);
	console.log(`✓ ${out.padEnd(20)} ← ${page.src}`);
}

if (missing.size) {
	console.warn(`\n! без английского перевода осталось ключей: ${missing.size}`);
	for (const key of missing) console.warn(`   ${key}`);
}
console.log(`\nГотово: ${PAGES.length} страниц в en/`);
