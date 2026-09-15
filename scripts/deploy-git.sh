#!/usr/bin/env bash
# Публикует собранный сайт в ветку deploy.
#
# main   — исходники (53 МБ мёртвых PNG, node_modules, служебные файлы)
# deploy — только то, что должно лежать в httpdocs, в корне ветки
#
# Plesk следит за веткой deploy и по вебхуку выкладывает её в httpdocs.
#
#   ./scripts/deploy-git.sh              собрать и опубликовать
#   ./scripts/deploy-git.sh --dry-run    собрать и показать, что уйдёт, без пуша

set -euo pipefail
cd "$(dirname "$0")/.."

BRANCH="deploy"
WORKTREE=".deploy-worktree"
DRY_RUN=false
[ "${1:-}" = "--dry-run" ] && DRY_RUN=true

# --- Проверки ---
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
	echo "Ошибка: папка не под git. Сначала: git init"; exit 1; }

REMOTE=$(git remote get-url origin 2>/dev/null) || {
	echo "Ошибка: не задан remote origin"; exit 1; }

if [ -n "$(git status --porcelain)" ]; then
	echo "! В рабочей копии есть незакоммиченные изменения."
	echo "  Собирать буду из файлов как есть, но в main они не попадут."
	echo
fi

# --- Сборка ---
echo "→ Сборка"
./scripts/build-deploy.sh >/dev/null
SIZE=$(du -sh dist | cut -f1)
FILES=$(find dist -type f | wc -l | tr -d ' ')
echo "  dist/: $FILES файлов, $SIZE"

# --- Подготовка ветки deploy ---
echo "→ Подготовка ветки $BRANCH"
rm -rf "$WORKTREE"
git worktree prune

if git show-ref --verify --quiet "refs/remotes/origin/$BRANCH"; then
	git fetch origin "$BRANCH" --quiet
	git worktree add "$WORKTREE" "origin/$BRANCH" --detach --quiet
	( cd "$WORKTREE" && git checkout -B "$BRANCH" --quiet )
elif git show-ref --verify --quiet "refs/heads/$BRANCH"; then
	git worktree add "$WORKTREE" "$BRANCH" --quiet
else
	echo "  ветки нет — создаю пустую (orphan)"
	git worktree add --detach "$WORKTREE" --quiet
	( cd "$WORKTREE" && git checkout --orphan "$BRANCH" --quiet && git rm -rf . --quiet 2>/dev/null || true )
fi

# --- Замена содержимого ---
# Чистим всё, кроме .git, и кладём свежий dist.
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R dist/. "$WORKTREE"/

SRC_COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo "не закоммичено")

cd "$WORKTREE"
git add -A

if git diff --cached --quiet; then
	echo "→ Изменений нет, публиковать нечего"
	cd ..; git worktree remove "$WORKTREE" --force; exit 0
fi

echo
echo "→ Что уйдёт в $BRANCH:"
git diff --cached --stat | tail -15

if [ "$DRY_RUN" = true ]; then
	echo
	echo "--dry-run: пуш не выполняю"
	cd ..; git worktree remove "$WORKTREE" --force; exit 0
fi

git commit -q -m "deploy: сборка из main@${SRC_COMMIT}

Собрано scripts/build-deploy.sh. Ветка содержит только файлы для httpdocs."

echo
echo "→ Пуш в origin/$BRANCH"
git push origin "$BRANCH" --force-with-lease

cd ..
git worktree remove "$WORKTREE" --force

echo
echo "Готово. Plesk подтянет изменения по вебхуку."
echo "Если автодеплой не настроен — в панели: Git → Развернуть."
