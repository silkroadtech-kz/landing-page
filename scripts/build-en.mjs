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
		crumb: "Case studies",
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
		crumb: "About",
		title: "About us — Silk Road Tech",
		description:
			"The Silk Road Tech team: engineers, analysts and product people. We build software, integrate AI and automate business processes.",
		ogTitle: "A team of engineers, analysts and advisors",
		ogDescription: "Software development, AI integration, data analytics and process automation.",
		og: "og/en/about.png",
	},
	{
		src: "blog.html",
		slug: "blog",
		crumb: "Blog",
		title: "Blog — Silk Road Tech",
		description:
			"Silk Road Tech on software development, AI integration and launching digital products.",
		ogTitle: "Technology, products and business without the noise",
		ogDescription: "What we learned building software, integrating AI and shipping products.",
		og: "og/en/blog.png",
	},
	{
		src: "referral.html",
		slug: "referral",
		crumb: "Partner program",
		title: "Partner program — 10% of the contract — Silk Road Tech",
		description:
			"Refer a company that needs a website, a system or AI, and earn 10% of the signed contract. Payouts to Kaspi, Halyk or any bank account in Kazakhstan.",
		ogTitle: "Refer us — earn 10% of the contract",
		ogDescription: "Share a contact — we handle the meetings, the contract and the build.",
		og: "og/en/referral.png",
	},
];

// Статьи переводятся не словарём интерфейса, а отдельными файлами: их тексты
// в i18n.js не вынесены, да и незачем — в браузере они не переключаются.
// Страницы, текст которых не вынесен в словарь интерфейса: перевод лежит
// рядом, в i18n/pages/. Заменяем по всему документу — меню и подвал у них
// тоже зашиты в разметку.
const TRANSLATED_PAGES = [
	{ src: "contacts-certificates.html", slug: "contacts-certificates", file: "i18n/pages/contacts-certificates.en.json" },
	{ src: "privacy.html", slug: "privacy", file: "i18n/pages/privacy.en.json" },
	{ src: "copyright.html", slug: "copyright", file: "i18n/pages/copyright.en.json" },
];

const ARTICLES = [
	{ src: "blog/why-we-audit-first.html", slug: "blog/why-we-audit-first" },
	{ src: "blog/who-we-learn-from.html", slug: "blog/who-we-learn-from" },
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

// Русский текст → английский. Нужен для разметки: в JSON-LD лежат те же
// фразы, что и на странице, но без ключей data-i18n.
const ruToEn = new Map(
	Object.values(t)
		.filter((pair) => pair.ru && pair.en)
		.map((pair) => [pair.ru.replace(/<[^>]*>/g, "").trim(), pair.en.replace(/<[^>]*>/g, "").trim()]),
);
const translateText = (value) =>
	typeof value === "string" ? (ruToEn.get(value.trim()) ?? value) : value;

// --- перевод разметки ---
function translate(html, missing) {
	// Текст и разметка внутри элемента. Закрывающий тег может содержать
	// перенос строки перед >; иначе совпадение поглотит соседние элементы.
	html = html.replace(
		/<([a-z0-9]+)((?:[^>"']|"[^"]*"|'[^']*')*?\sdata-i18n(?:-html)?="([^"]+)"(?:[^>"']|"[^"]*"|'[^']*')*)>([\s\S]*?)<\/\1\s*>/gi,
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

// Заменяет текст внутри <main> по словарю статьи. Работаем на уровне
// текстовых узлов, а не элементов: иначе замена целого абзаца стирала бы
// ссылки и выделения внутри него.
function translateNodes(html, strings, used, scope = "main") {
	const replace = (chunk) =>
		chunk.replace(/>([^<]+)</g, (match, text) => {
			const key = text.replace(/\s+/g, " ").trim();
			if (!key || !/[А-Яа-яЁё]/.test(key)) return match;
			const value = strings[key];
			if (value === undefined) return match;
			used.add(key);
			// Пробелы по краям сохраняем: они разделяют текст и соседние теги.
			const before = text.match(/^\s*/)[0];
			const after = text.match(/\s*$/)[0];
			return `>${before}${value}${after}<`;
		});

	if (scope === "document") {
		// Обходим весь документ, но не трогаем содержимое script и style:
		// там лежат JSON-LD и данные, их переводить нельзя.
		return html
			.split(/(<(?:script|style)\b[\s\S]*?<\/(?:script|style)>)/)
			.map((part, index) => (index % 2 ? part : replace(part)))
			.join("");
	}

	const start = html.indexOf("<main");
	const end = html.indexOf("</main>");
	if (start < 0 || end < 0) return html;
	return html.slice(0, start) + replace(html.slice(start, end)) + html.slice(end);
}

// --- пути ---
// Страницы лежат в en/, поэтому относительные ссылки на ассеты пришлось бы
// поднимать на уровень выше. Делаем их абсолютными от корня — так они не
// зависят от глубины вложенности.
function absolutizeAssets(html) {
	// Учитываем и «../assets/…»: статьи блога лежат на уровень глубже, и в
	// английской версии такой путь указывал бы на /en/assets/, которого нет.
	return html.replace(
		/(\s(?:href|src|srcset|content)=")(?!https?:|\/|#|mailto:|tel:|data:)(?:\.\.\/)*((?:assets|og|video)\/[^"]*|favicon\.(?:ico|svg)|apple-touch-icon\.png|site\.webmanifest|og-cover\.png)"/g,
		'$1/$2"',
	);
}

// Внутренние ссылки ведут на английские страницы там, где они есть.
function relinkInternal(html) {
	const translated = new Map([
		...PAGES.map((p) => [`/${p.slug}`, p.slug ? `/en/${p.slug}` : "/en/"]),
		...ARTICLES.map((a) => [`/${a.slug}`, `/en/${a.slug}`]),
		...TRANSLATED_PAGES.map((p) => [`/${p.slug}`, `/en/${p.slug}`]),
	]);
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

// Названия в хлебных крошках короткие и повторяются на всех страницах.
const CRUMBS = {
	"Главная": "Home",
	"Блог": "Blog",
	"Кейсы": "Case studies",
	"О нас": "About",
	"О компании": "About",
	"Партнёрам": "Partners",
	"Партнёрская программа": "Partner program",
	"Контакты": "Contacts",
	"Контакты и сертификаты": "Contacts and certificates",
	"Политика конфиденциальности": "Privacy policy",
	"Авторские права": "Copyright",
};

// Разметка JSON-LD собрана для русской страницы: заголовок, описание, адрес
// и язык нужно заменить, иначе поисковики получат английскую страницу
// с русскими данными.
function localizeSchema(html, page) {
	const url = enUrl(page.slug);
	return html.replace(
		/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g,
		(match, open, body, close) => {
			let data;
			try {
				data = JSON.parse(body);
			} catch {
				return match;
			}
			// Вопросы и ответы, названия услуг: тот же текст, что на странице.
			const localizeDeep = (value) => {
				if (Array.isArray(value)) return value.map(localizeDeep);
				if (value && typeof value === "object") {
					for (const field of ["name", "text", "description", "headline"]) {
						if (typeof value[field] === "string") value[field] = translateText(value[field]);
					}
					for (const key of Object.keys(value)) {
						if (typeof value[key] === "object") value[key] = localizeDeep(value[key]);
					}
				}
				return value;
			};

			const nodes = data["@graph"] ?? [data];
			for (const node of nodes) {
				const kind = String(node["@type"]);
				if (kind.includes("FAQPage") || kind.includes("ItemList")) localizeDeep(node);
				const type = String(node["@type"]);
				if (node.inLanguage) node.inLanguage = "en";
				if (type.includes("BlogPosting") || type.includes("Article")) {
					node.headline = page.ogTitle;
					node.description = page.description;
					node.url = url;
					node.inLanguage = "en";
					if (node.mainEntityOfPage) node.mainEntityOfPage = url;
					if (node.image) node.image = `${SITE}/${page.og}`;
				}
				if (type === "WebPage" || type === "CollectionPage") {
					node.name = page.ogTitle;
					node.description = page.ogDescription ?? page.description;
					if (node.url) node.url = url;
					node.inLanguage = "en";
				}
				// Хлебные крошки: промежуточные пункты берём из короткого словаря,
				// последний — это сама страница, её адрес меняем на английский.
				if (type === "BreadcrumbList" && Array.isArray(node.itemListElement)) {
					const items = node.itemListElement;
					items.forEach((item, index) => {
						if (CRUMBS[item.name]) item.name = CRUMBS[item.name];
						if (index === items.length - 1) {
							item.name = page.crumb ?? item.name;
							item.item = url;
						} else if (item.item === `${SITE}/blog`) {
							item.item = `${SITE}/en/blog`;
						}
					});
				}
			}
			return `${open}\n${JSON.stringify(data, null, 1)}\n${close}`;
		},
	);
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

mkdirSync(join(root, "en/blog"), { recursive: true });
const missing = new Set();
// Ключи, которые действительно пригодились: один и тот же текст встречается
// и в статье, и в карточке на странице блога, поэтому считаем по всем сборкам.
const usedStrings = new Set();

// Словари статей нужны и самим статьям, и списку блога: на нём стоят
// заголовки и даты тех же публикаций.
const articleStrings = new Map(
	ARTICLES.map((a) => [
		a.slug,
		JSON.parse(readFileSync(join(root, `i18n/${a.slug}.en.json`), "utf8")),
	]),
);
const allArticleStrings = Object.assign(
	{},
	...[...articleStrings.values()].map((a) => a.strings),
);

function build(page, extraStrings) {
	const ru = readFileSync(join(root, page.src), "utf8");
	let html = translate(ru, missing);
	if (page.src === "index.html") html = translateFirstReview(html);
	if (extraStrings) html = translateNodes(html, extraStrings, usedStrings, page.scope);
	html = head(html, ru, page);
	html = localizeSchema(html, page);
	html = absolutizeAssets(html);
	// Английские страницы ссылаются на английскую ленту.
	html = html
		.replace(`${SITE}/feed.xml`, `${SITE}/en/feed.xml`)
		.replace('title="Блог Silk Road Tech"', 'title="Silk Road Tech blog"');
	html = relinkInternal(html);
	const out = page.slug ? `en/${page.slug}.html` : "en/index.html";
	writeFileSync(join(root, out), html);
	console.log(`✓ ${out.padEnd(32)} ← ${page.src}`);
}

for (const page of PAGES) {
	// Список блога показывает заголовки и даты статей — берём их из переводов статей.
	build(page, page.slug === "blog" ? allArticleStrings : null);
}

for (const article of ARTICLES) {
	const { meta, strings } = articleStrings.get(article.slug);
	build({ ...article, ...meta }, strings);
}

for (const page of TRANSLATED_PAGES) {
	const { meta, strings } = JSON.parse(readFileSync(join(root, page.file), "utf8"));
	build({ ...page, ...meta, scope: "document" }, strings);
}

const staleKeys = Object.keys(allArticleStrings).filter((key) => !usedStrings.has(key));
if (staleKeys.length) {
	console.warn(`\n! переводы, которым не нашлось места в разметке: ${staleKeys.length}`);
	for (const key of staleKeys) console.warn(`   ${key.slice(0, 90)}`);
}

if (missing.size) {
	console.warn(`\n! без английского перевода осталось ключей: ${missing.size}`);
	for (const key of missing) console.warn(`   ${key}`);
}
console.log(`\nГотово: ${PAGES.length + ARTICLES.length + TRANSLATED_PAGES.length} страниц в en/`);
