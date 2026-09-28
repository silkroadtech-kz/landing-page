// Собирает RSS-ленту блога (feed.xml) из статей в blog/.
// Заголовок, описание и даты берутся из разметки BlogPosting самой статьи,
// чтобы лента не разъезжалась с содержимым страницы.
//
//   node scripts/build-feed.mjs

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://silkroadtech.kz";

const escape = (s) =>
	String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Все JSON-LD со страницы, развёрнутые из @graph.
function nodes(html) {
	const out = [];
	for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
		try {
			const parsed = JSON.parse(m[1]);
			out.push(...(parsed["@graph"] ?? [parsed]));
		} catch {
			// битый блок пропускаем: лента не должна падать из-за одной страницы
		}
	}
	return out;
}

// Английские заголовки и описания статей лежат рядом с переводами.
function enMeta(slug) {
	try {
		return JSON.parse(readFileSync(join(root, `i18n/blog/${slug}.en.json`), "utf8")).meta;
	} catch {
		return null;
	}
}

const posts = readdirSync(join(root, "blog"))
	.filter((f) => f.endsWith(".html"))
	.map((file) => {
		const html = readFileSync(join(root, "blog", file), "utf8");
		const post = nodes(html).find((n) => n["@type"] === "BlogPosting");
		if (!post) return null;
		const slug = file.replace(/\.html$/, "");
		return {
			slug,
			en: enMeta(slug),
			url: `${SITE}/blog/${slug}`,
			title: post.headline ?? "",
			description: post.description ?? "",
			published: post.datePublished,
			updated: post.dateModified ?? post.datePublished,
		};
	})
	.filter(Boolean)
	.sort((a, b) => (a.published < b.published ? 1 : -1));

if (posts.length === 0) {
	console.error("В blog/ не нашлось статей с разметкой BlogPosting");
	process.exit(1);
}

const rfc822 = (date) => new Date(`${date}T09:00:00+06:00`).toUTCString();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Блог Silk Road Tech</title>
		<link>${SITE}/blog</link>
		<description>Опыт разработки программного обеспечения, внедрения ИИ и запуска цифровых продуктов.</description>
		<language>ru</language>
		<lastBuildDate>${rfc822(posts[0].updated)}</lastBuildDate>
		<atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${posts
	.map(
		(p) => `		<item>
			<title>${escape(p.title)}</title>
			<link>${p.url}</link>
			<guid isPermaLink="true">${p.url}</guid>
			<description>${escape(p.description)}</description>
			<pubDate>${rfc822(p.published)}</pubDate>
		</item>`,
	)
	.join("\n")}
	</channel>
</rss>
`;

writeFileSync(join(root, "feed.xml"), xml);
console.log(`feed.xml собран: ${posts.length} статей`);
for (const p of posts) console.log(`  ${p.published}  ${p.title}`);

// Английская лента — только из статей, у которых есть перевод.
const enPosts = posts.filter((p) => p.en);
if (enPosts.length) {
	const enXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Silk Road Tech blog</title>
		<link>${SITE}/en/blog</link>
		<description>Software development, AI integration and shipping digital products.</description>
		<language>en</language>
		<lastBuildDate>${rfc822(enPosts[0].updated)}</lastBuildDate>
		<atom:link href="${SITE}/en/feed.xml" rel="self" type="application/rss+xml" />
${enPosts
	.map(
		(p) => `		<item>
			<title>${escape(p.en.ogTitle)}</title>
			<link>${SITE}/en/blog/${p.slug}</link>
			<guid isPermaLink="true">${SITE}/en/blog/${p.slug}</guid>
			<description>${escape(p.en.description)}</description>
			<pubDate>${rfc822(p.published)}</pubDate>
		</item>`,
	)
	.join("\n")}
	</channel>
</rss>
`;
	mkdirSync(join(root, "en"), { recursive: true });
	writeFileSync(join(root, "en/feed.xml"), enXml);
	console.log(`en/feed.xml собран: ${enPosts.length} статей`);
}
