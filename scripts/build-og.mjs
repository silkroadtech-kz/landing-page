// Собирает OG-картинки 1200×630 для всех страниц: HTML-шаблон в стиле сайта
// рендерится headless Chrome, затем PNG пережимается через sharp.
//
//   node scripts/build-og.mjs
//
// Путь к Chrome берётся из CHROME_PATH, иначе ищется в стандартных местах
// (обычный Chrome, Chromium, Chrome for Testing из кэша Playwright).
// Шрифты грузятся с Google Fonts, поэтому нужен интернет.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const asset = (path) => pathToFileURL(join(root, path)).href;

// title: HTML, акцентная часть — в <em> (зелёная, как в hero на главной).
const pages = [
	{
		out: "og-cover.png",
		eyebrow: "Разработка · ИИ · Аналитика",
		title: "<em>Делаем продукты</em> под ваши бизнес процессы",
		subtitle: "От идеи и архитектуры до запуска и роста продукта.",
	},
	{
		out: "og/about.png",
		eyebrow: "О компании",
		title: "Команда инженеров, аналитиков и <em>консультантов</em>",
		subtitle: "Разработка ПО, интеграция ИИ, аналитика данных и автоматизация процессов.",
		photo: "assets/about_hero.webp",
	},
	{
		out: "og/cases.png",
		eyebrow: "Кейсы",
		title: "Продукты и системы, которые мы <em>запустили</em>",
		subtitle: "Платформы, ИИ-автоматизация и цифровые сервисы для бизнеса и госсектора.",
	},
	{
		out: "og/blog.png",
		eyebrow: "Блог",
		title: "Технологии, продукты и бизнес <em>без лишнего шума</em>",
		subtitle: "Делимся опытом разработки, внедрения ИИ и запуска цифровых продуктов.",
	},
	{
		out: "og/referral.png",
		eyebrow: "Партнёрская программа",
		title: "Рекомендуйте нас — получайте <em>10% от договора</em>",
		subtitle: "Передайте контакт — встречи, договор и разработку мы берём на себя.",
	},
	{
		out: "og/contacts-certificates.png",
		eyebrow: "Контакты",
		title: "Контакты, реквизиты и <em>сертификаты</em>",
		subtitle: "ТОО «СилкРоудТех» — участник Astana Hub.",
	},
	{
		out: "og/blog/why-we-audit-first.png",
		eyebrow: "Блог · 7 минут",
		title: "Почему мы перестали брать большие техзадания <em>в работу сразу</em>",
	},
	{
		out: "og/blog/who-we-learn-from.png",
		eyebrow: "Блог · 8 минут",
		title: "У кого мы учимся строить <em>продукты и компанию</em>",
	},
];

function findChrome() {
	if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
	const candidates = [
		"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
		"/Applications/Chromium.app/Contents/MacOS/Chromium",
		"/usr/bin/google-chrome",
		"/usr/bin/chromium",
		"/usr/bin/chromium-browser",
	];
	const playwright = join(homedir(), "Library/Caches/ms-playwright");
	if (existsSync(playwright)) {
		for (const dir of readdirSync(playwright).filter((d) => /^chromium-\d+$/.test(d)).reverse()) {
			candidates.push(
				join(playwright, dir, "chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"),
				join(playwright, dir, "chrome-mac/Chromium.app/Contents/MacOS/Chromium"),
			);
		}
	}
	const found = candidates.find((path) => existsSync(path));
	if (!found) throw new Error("Chrome не найден — укажите путь в CHROME_PATH");
	return found;
}

function render({ eyebrow, title, subtitle, photo }) {
	return `<!doctype html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&display=block" />
<style>
	* { margin: 0; padding: 0; box-sizing: border-box; }
	html, body { width: 1200px; height: 630px; overflow: hidden; }
	body {
		display: flex;
		gap: 56px;
		padding: 64px 72px;
		font-family: "Plus Jakarta Sans", system-ui, sans-serif;
		color: #010205;
		background: #f4f3ee;
	}
	.copy { flex: 1; display: flex; flex-direction: column; min-width: 0; }
	/* В logo.svg слева ~13% пустого поля — сдвигаем, чтобы знак встал по краю текста. */
	.logo { height: 40px; width: auto; align-self: flex-start; margin-left: -22px; }
	.main { margin-top: auto; }
	.eyebrow {
		font-size: 20px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #6f9a3d;
	}
	h1 {
		margin-top: 20px;
		font-size: ${photo ? 60 : 72}px;
		font-weight: 600;
		line-height: 1.06;
		letter-spacing: -0.035em;
		text-wrap: balance;
	}
	h1 em { font-style: normal; color: #9ac763; }
	.subtitle {
		margin-top: 24px;
		max-width: 860px;
		font-size: 24px;
		font-weight: 500;
		line-height: 1.45;
		color: #5c5d5f;
		text-wrap: pretty;
	}
	.foot {
		margin-top: 40px;
		padding-top: 24px;
		border-top: 1px solid rgba(1, 2, 5, 0.1);
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}
	.photo {
		width: 380px;
		flex-shrink: 0;
		margin: -24px -32px -24px 0;
		border-radius: 28px;
		background: url("${photo ? asset(photo) : ""}") center 40% / cover;
	}
</style>
</head>
<body>
	<div class="copy">
		<img class="logo" src="${asset("assets/logo.svg")}" alt="" />
		<div class="main">
			<p class="eyebrow">${eyebrow}</p>
			<h1>${title}</h1>
			${subtitle ? `<p class="subtitle">${subtitle}</p>` : ""}
		</div>
		<p class="foot">silkroadtech.kz</p>
	</div>
	${photo ? `<div class="photo"></div>` : ""}
</body>
</html>`;
}

const chrome = findChrome();
const tmp = mkdtempSync(join(tmpdir(), "srt-og-"));

try {
	for (const page of pages) {
		const html = join(tmp, "page.html");
		const shot = join(tmp, "shot.png");
		writeFileSync(html, render(page));
		execFileSync(chrome, [
			"--headless=new",
			"--disable-gpu",
			"--hide-scrollbars",
			"--allow-file-access-from-files",
			"--force-device-scale-factor=1",
			"--window-size=1200,630",
			"--virtual-time-budget=10000",
			`--screenshot=${shot}`,
			pathToFileURL(html).href,
		], { stdio: "ignore" });

		const out = join(root, page.out);
		mkdirSync(join(out, ".."), { recursive: true });
		await sharp(shot).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(out);
		console.log(`✓ ${page.out}`);
	}
} finally {
	rmSync(tmp, { recursive: true, force: true });
}
