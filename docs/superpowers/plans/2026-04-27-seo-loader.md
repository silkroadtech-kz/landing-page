# SEO + Loader Improvement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix SEO metadata (real domain, structured data) and replace the animated bars loader with a progress-bar-style preloader (overlay + thin green bar at top).

**Architecture:** All changes are in a single file — `index.html`. Three logical sections: `<head>` SEO tags, `<style>` loader CSS, and the loader `<script>` block at the bottom.

**Tech Stack:** Vanilla HTML/CSS/JS, no build step.

---

### Task 1: Fix SEO URLs in `<head>`

**Files:**
- Modify: `index.html:15-49`

- [ ] **Step 1: Replace canonical URL (line 17)**

Replace:
```html
href="https://silk-road-tech-placeholder.vercel.app/"
```
With:
```html
href="https://silkroadtech.kz/"
```

- [ ] **Step 2: Replace og:url (line 31)**

Replace:
```html
content="https://silk-road-tech-placeholder.vercel.app/"
```
With (og:url context — find the one right after `og:url`):
```html
content="https://silkroadtech.kz/"
```

- [ ] **Step 3: Replace og:image URL (line 35)**

Replace:
```html
content="https://silk-road-tech-placeholder.vercel.app/og-cover.svg"
```
With:
```html
content="https://silkroadtech.kz/og-cover.svg"
```

- [ ] **Step 4: Replace twitter:image URL (line 48)**

Replace:
```html
content="https://silk-road-tech-placeholder.vercel.app/og-cover.svg"
```
With (twitter:image context):
```html
content="https://silkroadtech.kz/og-cover.svg"
```

- [ ] **Step 5: Add og:site_name after the twitter:image tag (after line 49)**

After the `<meta name="twitter:image" ...>` closing `/>`, add:
```html
		<meta property="og:site_name" content="Silk Road Tech" />
```

- [ ] **Step 6: Verify — grep for placeholder**

Run:
```bash
grep "silk-road-tech-placeholder" index.html
```
Expected output: no results (empty).

- [ ] **Step 7: Commit**

```bash
git add index.html
git commit -m "fix: update SEO URLs to silkroadtech.kz, add og:site_name"
```

---

### Task 2: Add JSON-LD structured data

**Files:**
- Modify: `index.html` — add `<script type="application/ld+json">` just before `</head>`

- [ ] **Step 1: Find the closing `</head>` tag**

Run:
```bash
grep -n "</head>" index.html
```
Note the line number (approximately line 1849).

- [ ] **Step 2: Insert JSON-LD block before `</head>`**

Insert this entire block immediately before `</head>` (on its own line):
```html
		<script type="application/ld+json">
		[
			{
				"@context": "https://schema.org",
				"@type": "Organization",
				"name": "Silk Road Tech",
				"url": "https://silkroadtech.kz",
				"logo": "https://silkroadtech.kz/og-cover.svg"
			},
			{
				"@context": "https://schema.org",
				"@type": "WebSite",
				"url": "https://silkroadtech.kz",
				"potentialAction": {
					"@type": "SearchAction",
					"target": "https://silkroadtech.kz/?q={search_term_string}",
					"query-input": "required name=search_term_string"
				}
			}
		]
		</script>
```

- [ ] **Step 3: Verify JSON-LD is valid**

Run:
```bash
grep -c "application/ld+json" index.html
```
Expected: `1`

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add JSON-LD Organization and WebSite structured data"
```

---

### Task 3: Update loader CSS — remove bars/label, add progress bar

**Files:**
- Modify: `index.html:543-585` (CSS section inside `<style>`)

- [ ] **Step 1: Remove `.site-preloader__label` CSS block (lines 543–549)**

Remove this entire block:
```css
			.site-preloader__label {
				font-family: "Plus Jakarta Sans", sans-serif;
				font-size: 0.95rem;
				line-height: 1.7;
				color: rgba(1, 2, 5, 0.64);
				max-width: 24rem;
			}
```

- [ ] **Step 2: Remove `.site-preloader__bars` CSS blocks and `@keyframes preloadPulse` (lines 550–585)**

Remove this entire block:
```css
			.site-preloader__bars {
				display: flex;
				align-items: flex-end;
				gap: 0.45rem;
				height: 42px;
			}
			.site-preloader__bars span {
				width: 8px;
				border-radius: 999px;
				background: linear-gradient(180deg, #c6e69e 0%, #9ac763 100%);
				animation: preloadPulse 1s ease-in-out infinite;
				transform-origin: bottom;
			}
			.site-preloader__bars span:nth-child(1) {
				height: 16px;
				animation-delay: 0s;
			}
			.site-preloader__bars span:nth-child(2) {
				height: 28px;
				animation-delay: 0.14s;
			}
			.site-preloader__bars span:nth-child(3) {
				height: 38px;
				animation-delay: 0.28s;
			}
			@keyframes preloadPulse {
				0%,
				100% {
					transform: scaleY(0.68);
					opacity: 0.72;
				}
				50% {
					transform: scaleY(1);
					opacity: 1;
				}
			}
```

- [ ] **Step 3: Add progress bar CSS in place of removed blocks**

In the same location (after `.site-preloader__text { ... }` block, around line 543), add:
```css
			.site-preloader__progress {
				position: absolute;
				top: 0;
				left: 0;
				height: 3px;
				width: 0%;
				background: linear-gradient(90deg, #9ac763, #c6e69e);
				border-radius: 0 999px 999px 0;
				transition: width 2.4s cubic-bezier(0.1, 0.05, 0.2, 1);
			}
			.site-preloader__progress.is-running {
				width: 85%;
			}
			.site-preloader__progress.is-complete {
				width: 100%;
				transition: width 0.2s ease;
			}
```

- [ ] **Step 4: Remove responsive `.site-preloader__label` rule (around line 1823)**

Find and remove:
```css
				.site-preloader__label {
					font-size: 0.88rem;
				}
```

- [ ] **Step 5: Verify CSS — no bars/label/pulse references remain**

Run:
```bash
grep -n "preloader__bars\|preloader__label\|preloadPulse" index.html
```
Expected: no results.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "refactor: replace loader bars/label CSS with progress bar CSS"
```

---

### Task 4: Update loader HTML markup

**Files:**
- Modify: `index.html:1850–1864` (the `site-preloader` div in `<body>`)

- [ ] **Step 1: Remove `site-preloader__bars` div and `site-preloader__label` paragraph**

Find this block:
```html
		<div class="site-preloader" id="sitePreloader" aria-hidden="true">
			<div class="site-preloader__inner">
				<div class="site-preloader__mark">
					<span class="site-preloader__text">SRT</span>
				</div>
				<div class="site-preloader__bars" aria-hidden="true">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<p class="site-preloader__label">
```

Replace the entire `site-preloader` div with:
```html
		<div class="site-preloader" id="sitePreloader" aria-hidden="true">
			<div class="site-preloader__progress" id="sitePreloaderBar"></div>
			<div class="site-preloader__inner">
				<div class="site-preloader__mark">
					<span class="site-preloader__text">SRT</span>
				</div>
			</div>
		</div>
```

- [ ] **Step 2: Verify markup — no bars/label in preloader**

Run:
```bash
grep -n "preloader__bars\|preloader__label" index.html
```
Expected: no results.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "refactor: replace loader bars/label markup with progress bar element"
```

---

### Task 5: Update loader JavaScript

**Files:**
- Modify: `index.html:3731–3752` (preloader script block at bottom)

- [ ] **Step 1: Replace the preloader script block**

Find:
```js
			const pagePreloader = document.getElementById("sitePreloader");
			let pageUnlocked = false;

			const revealPage = () => {
				if (pageUnlocked) return;
				pageUnlocked = true;
				document.body.classList.remove("preload-pending");
				if (pagePreloader) {
					pagePreloader.classList.add("is-hidden");
					window.setTimeout(() => {
						pagePreloader.remove();
					}, 650);
				}
			};

			window.addEventListener("load", revealPage, { once: true });
			if (document.readyState === "complete") {
				revealPage();
			}
			window.setTimeout(revealPage, 3200);
```

Replace with:
```js
			const pagePreloader = document.getElementById("sitePreloader");
			const pagePreloaderBar = document.getElementById("sitePreloaderBar");
			let pageUnlocked = false;

			if (pagePreloaderBar) {
				window.setTimeout(() => pagePreloaderBar.classList.add("is-running"), 50);
			}

			const revealPage = () => {
				if (pageUnlocked) return;
				pageUnlocked = true;
				if (pagePreloaderBar) {
					pagePreloaderBar.classList.remove("is-running");
					pagePreloaderBar.classList.add("is-complete");
				}
				window.setTimeout(() => {
					document.body.classList.remove("preload-pending");
					if (pagePreloader) {
						pagePreloader.classList.add("is-hidden");
						window.setTimeout(() => pagePreloader.remove(), 600);
					}
				}, 300);
			};

			window.addEventListener("load", revealPage, { once: true });
			if (document.readyState === "complete") {
				revealPage();
			}
			window.setTimeout(revealPage, 2500);
```

- [ ] **Step 2: Verify — open the page in a browser and watch the loader**

Open `index.html` locally (or run a local server):
```bash
npx serve . -p 3000
```
Then open `http://localhost:3000` in a browser. Expected behavior:
- White overlay appears with SRT logo in center
- Thin green bar crawls from left across the top of the screen
- When page loads, bar snaps to 100% then overlay fades out
- Total time: under 2.5s on fast connection

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: progress-bar loader with top green bar + faster reveal"
```

---

## Self-Review

**Spec coverage:**
- ✅ Replace placeholder URLs → Task 1
- ✅ Add og:site_name → Task 1 Step 5
- ✅ JSON-LD Organization + WebSite → Task 2
- ✅ Remove bars/label CSS → Task 3
- ✅ Add progress bar CSS → Task 3 Step 3
- ✅ Remove bars/label markup → Task 4
- ✅ Add `site-preloader__progress` div → Task 4 Step 1
- ✅ JS: trigger bar on DOMContentLoaded → Task 5 Step 1
- ✅ JS: complete bar then reveal → Task 5 Step 1
- ✅ Fallback timeout 2500ms → Task 5 Step 1

**Placeholder scan:** None found.

**Type consistency:** `sitePreloaderBar` / `pagePreloaderBar` / `is-running` / `is-complete` — consistent across Task 3, 4, and 5.
