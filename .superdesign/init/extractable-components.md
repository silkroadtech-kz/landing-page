# Extractable Components

## NavBar

- Source: `index.html`, `about.html`, `cases.html`
- Category: layout
- Description: Sticky top navigation with logo, links, and theme toggle
- Extractable props: activeItem
- Hardcoded: logo asset, general spacing, blur, border treatment

## Footer

- Source: `index.html`, `about.html`, `cases.html`
- Category: layout
- Description: Shared footer with navigation and company/legal links
- Extractable props: none or page-specific link states
- Hardcoded: typography, spacing, footer structure

## ReviewSlider

- Source: `index.html`
- Category: basic
- Description: Testimonial block with reviewer identity and previous/next controls
- Extractable props: quote, reviewerName, reviewerRole, currentIndex, totalItems
- Hardcoded: circular avatar placeholder style, navigation button styling, decorative quote marks

## ThemeToggle

- Source: `assets/theme.js`
- Category: basic
- Description: Light/dark mode toggle shared across pages
- Extractable props: isDark
- Hardcoded: icon SVGs, localStorage key, Astana Hub image swap behavior
