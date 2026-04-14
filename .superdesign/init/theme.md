# Theme

Framework: none

CSS approach: inline CSS in HTML plus shared `assets/theme.css`

Typography: Google Fonts loaded directly in each page

## Global Tokens

Source: `index.html`

```css
:root {
  --green: #9ac763;
  --green-2: #99cf63;
  --dark: #010205;
  --muted: #878c91;
}
html {
  scroll-behavior: smooth;
}
html,
body {
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  color: #010205;
  background-color: #efefef;
  background-image: url("assets/bg_noise.png");
  background-repeat: repeat;
  background-size: 1440px auto;
  background-attachment: fixed;
}
.font-jakarta {
  font-family: "Plus Jakarta Sans", sans-serif;
}
.font-manrope {
  font-family: "Manrope", sans-serif;
}
.font-inter {
  font-family: "Inter", sans-serif;
}
.font-sora {
  font-family: "Sora", sans-serif;
}
.font-roboto {
  font-family: "Roboto", sans-serif;
}
```

## Dark Theme Overrides

Source: `assets/theme.css`

```css
html.dark {
  color-scheme: dark;
}

html.dark body {
  background-color: #111111 !important;
  color: #efefef !important;
}

html.dark .bg-white,
html.dark .bg-\[\#fafafa\],
html.dark .bg-\[\#efefef\],
html.dark section.bg-white {
  background-color: #111111 !important;
}

html.dark .noise {
  opacity: 0.04 !important;
}

html.dark header {
  background: rgba(10, 10, 10, 0.88) !important;
  border-bottom-color: rgba(255,255,255,0.07) !important;
}

html.dark footer {
  background-color: #0d0d0d !important;
}
```

## Visual Direction

- Light textured background with subtle noise
- Strong black typography on warm gray background
- Accent green used sparingly for highlights
- Rounded controls and soft glassy header blur
- Heavy use of large type and generous section spacing
