# SEO + Loader Improvement Design

**Date:** 2026-04-27  
**Status:** Approved

---

## SEO

### Changes to `<head>`

1. Replace all occurrences of `silk-road-tech-placeholder.vercel.app` with `silkroadtech.kz` in:
   - `<link rel="canonical">`
   - `<meta property="og:url">`
   - `<meta property="og:image">`
   - `<meta name="twitter:image">`

2. Add `<meta property="og:site_name" content="Silk Road Tech" />`

3. Add JSON-LD structured data block before `</head>`:
   - `Organization`: name, url, logo
   - `WebSite` + `SearchAction`: enables Google Sitelinks Searchbox

### JSON-LD structure

```json
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
```

---

## Loader

### Markup changes (`site-preloader` div)

- Remove `site-preloader__bars` (3 animated spans)
- Remove `site-preloader__label` (Russian text paragraph)
- Add `<div class="site-preloader__progress"></div>` inside `.site-preloader` (not inside `__inner`), positioned `top: 0; left: 0; right: 0`

### CSS changes

- Remove styles for `.site-preloader__bars`, `.site-preloader__bars span`, `@keyframes preloadPulse`
- Remove styles for `.site-preloader__label`
- Add `.site-preloader__progress`:
  - `position: absolute; top: 0; left: 0; height: 3px; width: 0%`
  - `background: linear-gradient(90deg, #9ac763, #c6e69e)`
  - `transition: width 2.4s cubic-bezier(0.1, 0.05, 0.2, 1)`
  - `border-radius: 0 999px 999px 0`
- Add `.site-preloader__progress.is-running { width: 85% }`
- Add `.site-preloader__progress.is-complete { width: 100%; transition: width 0.2s ease }`

### JS changes (in the preloader script block)

- On `DOMContentLoaded`: add class `is-running` to progress bar (triggers CSS animation to 85%)
- Replace `revealPage` logic:
  1. Add `is-complete` to progress bar
  2. After 300ms: remove `preload-pending` from body, add `is-hidden` to preloader
  3. After 650ms: remove preloader from DOM
- Reduce fallback timeout: `3200ms → 2500ms`
