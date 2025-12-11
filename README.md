# CAMS Website (Astro)

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Cloudflare Pages

- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables**:
  - `PUBLIC_FORMSPREE_ENDPOINT`: Formspree endpoint URL for the contact form

## Content management (data-driven)

Add or edit content via:

- `src/data/services.ts` (Leistungen)
- `src/data/projects.ts` (Projekte)
- `src/data/company.ts` (Firma, Navigation, SEO Defaults)

## Routes

- `/` Startseite
- `/leistungen` + `/leistungen/[slug]`
- `/projekte`
- `/ueber-uns`
- `/kontakt`
- `/sitemap.xml` (generated)
- `/robots.txt`
