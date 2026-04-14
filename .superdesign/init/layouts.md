# Layouts

The site uses page-local layout blocks instead of shared layout files. The common shell is:

- sticky header / navbar
- large section-based marketing body
- footer

## Main Page Layout Snippet

Source: `index.html`

```html
<!-- ============ NAVBAR ============ -->
<header class="fixed top-0 left-0 right-0 z-50 bg-[rgba(239,239,239,0.82)] backdrop-blur-[20px] border-b border-black/5">
  ...
</header>

<!-- ============ HOOK / HERO ============ -->
<section id="hero" class="relative overflow-hidden pt-[120px]">
  ...
</section>

<!-- ============ HOW WE WORK (From task to result) ============ -->
<section id="how-we-work" class="relative bg-transparent overflow-hidden" style="height:662px">
  ...
</section>

<!-- ============ SERVICES ============ -->
<section id="services" class="relative bg-transparent py-24 overflow-hidden">
  ...
</section>

<!-- ============ PROCESS ============ -->
<section id="process" class="relative bg-black overflow-hidden py-32">
  ...
</section>

<!-- ============ TESTIMONIALS ============ -->
<section id="reviews" class="relative bg-transparent overflow-hidden" style="min-height:543px">
  ...
</section>

<!-- ============ FAQ ============ -->
<section id="faq" class="bg-transparent p-4 py-16">
  ...
</section>

<!-- ============ CONTACT ============ -->
<section id="contact" class="relative py-20">
  ...
</section>

<!-- ============ FOOTER ============ -->
<footer class="relative">
  ...
</footer>
```

## About Page Shared Shell

Source: `about.html`

```html
<!-- ============ NAVBAR ============ -->
<header>...</header>

<!-- ============ HERO: WHO ARE WE? ============ -->
<section id="hero">...</section>

<!-- ============ TEAM ============ -->
<section id="team">...</section>

<!-- ============ ADVISORY BOARD ============ -->
<section id="advisory">...</section>

<!-- ============ FOOTER ============ -->
<footer>...</footer>
```

## Cases Page Shared Shell

Source: `cases.html`

```html
<!-- ============ NAVBAR ============ -->
<header>...</header>

<!-- ============ CASES SECTION ============ -->
<section id="cases">...</section>

<!-- ============ FOOTER ============ -->
<footer>...</footer>
```
