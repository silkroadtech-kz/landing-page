#!/usr/bin/env bash
# Собирает dist/ — то, что заливается в public_html на ps.kz.
# Берёт только ассеты, на которые реально ссылается вёрстка:
# PNG-оригиналы, из которых уже сделаны webp, на сервер не едут.
#
#   ./scripts/build-deploy.sh          собрать dist/
#   ./scripts/build-deploy.sh --zip    собрать и упаковать в deploy.zip

set -euo pipefail
cd "$(dirname "$0")/.."

DIST="dist"
rm -rf "$DIST" deploy.zip
mkdir -p "$DIST"

echo "→ Корневые файлы"
for f in *.html .htaccess robots.txt sitemap.xml site.webmanifest \
         favicon.ico favicon.svg apple-touch-icon.png \
         og-cover.png og-cover.svg burst.svg vector97.svg; do
	[ -e "$f" ] && cp "$f" "$DIST/"
done

echo "→ Вложенные страницы"
for d in blog docs; do
	[ -d "$d" ] && cp -R "$d" "$DIST/"
done

echo "→ Ассеты, на которые есть ссылки"
# Собираем все пути вида assets/... и video/..., упомянутые в вёрстке и стилях.
REFS=$(mktemp)
grep -rhoE '(assets|video)/[A-Za-z0-9_./-]+\.(webp|png|jpg|jpeg|svg|mp4|mp3|css|js|ico|woff2?)' \
	--include="*.html" --include="*.css" --include="*.js" . 2>/dev/null \
	| grep -v node_modules | grep -v '^dist/' | sed 's|^\./||' | sort -u > "$REFS"

COPIED=0
while IFS= read -r ref; do
	if [ -f "$ref" ]; then
		mkdir -p "$DIST/$(dirname "$ref")"
		cp "$ref" "$DIST/$ref"
		COPIED=$((COPIED + 1))
	else
		echo "  ! ссылка в вёрстке, но файла нет: $ref"
	fi
done < "$REFS"
rm -f "$REFS"

# Фоллбэки из <picture>: <source srcset> ловится грепом, но подстрахуемся —
# любой .png/.jpg, лежащий рядом со скопированным .webp и упомянутый в HTML,
# уже попал выше. Отдельная обработка не нужна.

echo "→ Шрифты (если лежат вне assets)"
[ -d fonts ] && cp -R fonts "$DIST/"

SIZE=$(du -sh "$DIST" | cut -f1)
FILES=$(find "$DIST" -type f | wc -l | tr -d ' ')

echo
echo "Готово: $DIST/ — $FILES файлов, $SIZE (ассетов скопировано: $COPIED)"
RAW=$(find . -type f -not -path './node_modules/*' -not -path './dist/*' -not -path './.git/*' \
	-exec stat -f%z {} + 2>/dev/null | awk '{s+=$1} END {printf "%.0f", s/1048576}')
echo "Было в репозитории: ${RAW}M"

if [ "${1:-}" = "--zip" ]; then
	( cd "$DIST" && zip -qr ../deploy.zip . -x '.DS_Store' )
	echo "Архив: deploy.zip ($(du -h deploy.zip | cut -f1)) — заливать в public_html"
fi
