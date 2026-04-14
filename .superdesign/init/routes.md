# Routes

Framework: static HTML site

Meta-framework: none

Routing: file-based at deployment level via Vercel static hosting with `cleanUrls: true`

## Route Map

- `/` -> `index.html`
- `/about` -> `about.html`
- `/cases` -> `cases.html`
- `/privacy` -> `privacy.html`
- `/copyright` -> `copyright.html`

## Hosting Config

Source: `vercel.json`

```json
{
  "cleanUrls": true
}
```

## Key Page Summaries

- `/`: main marketing landing with hero, services, process, testimonials, FAQ, and contact CTA
- `/about`: company background, team, and advisory board
- `/cases`: case study listing and project showcase
- `/privacy`: legal privacy text page
- `/copyright`: copyright notice page
