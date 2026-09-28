// Проставляет в ссылках на CSS и JS версию, посчитанную по содержимому файла.
//
//   node scripts/stamp-assets.mjs
//
// Зачем: nginx на сервере отдаёт статику с кэшем на десять лет и делает это
// в обход .htaccess, поэтому правка site.css или i18n.js не доедет до тех,
// кто уже был на сайте. Адрес с новой версией браузер считает новым файлом.
//
// Версия — первые восемь символов SHA-1 содержимого: меняется ровно тогда,
// когда меняется файл, и не зависит от того, вспомнил ли кто-то её обновить.

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS = ["assets/site.css", "assets/i18n.js"];

const version = (file) =>
	createHash("sha1").update(readFileSync(join(root, file))).digest("hex").slice(0, 8);

const versions = new Map(ASSETS.map((file) => [file, version(file)]));

const pages = globSync("*.html", { cwd: root }).concat(
	globSync("blog/*.html", { cwd: root }),
);

let changed = 0;
for (const page of pages) {
	const path = join(root, page);
	const before = readFileSync(path, "utf8");
	let after = before;
	for (const [file, hash] of versions) {
		const name = file.replace("assets/", "");
		// Ссылка бывает относительной из подкаталога: assets/… или ../assets/…
		after = after.replace(
			new RegExp(`((?:\\.\\./)?assets/${name.replace(".", "\\.")})(\\?v=[^"']*)?`, "g"),
			`$1?v=${hash}`,
		);
	}
	if (after !== before) {
		writeFileSync(path, after);
		changed++;
	}
}

console.log(`Версии проставлены в ${changed} файлах:`);
for (const [file, hash] of versions) console.log(`  ${file} → ?v=${hash}`);
