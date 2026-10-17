# APFX

APFX's existing website rebuilt with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 and shadcn/ui (Radix Button and Sheet). The original dark branding, logos, photography, page content, regional account destinations, offices and legal text are retained.

## Development

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Visit http://localhost:3000. Run `npm run build` for the production build and `npm run typecheck` for TypeScript validation. Pages are prerendered by Next.js, with server-side homepage region detection through `proxy.ts`. The repository remains compatible with its existing Vercel connection. No secrets or CMS server are required.

## Editing content

The original Markdown files under `content/` remain the source of truth. Edit frontmatter in `content/pages/` for page sections, `content/news/` for articles, `content/navigation/main.md` for navigation, `content/footer/main.md` for offices and legal copy, and `content/localeInfo/main.md` for regional registration and sign-in links. A rebuild publishes changes. The legacy TinaCMS admin and generated GraphQL code have been replaced with direct Markdown loading; `/admin` is no longer an editing interface.

Pages include Home, Corporate Clients, Private Clients, News & Insights, Privacy Policy, and every repository news article. All routes also work with `/en-au`, `/en-us`, and `/en-gb` prefixes. The homepage detects supported browser locales (AU, US, UK), with Australia as the fallback. A manual country selection is saved in the NEXT_LOCALE cookie for one year and takes priority on future homepage visits. Explicit regional URLs are respected, and country switching preserves the current page, query string, and fragment. Detection runs on the server before the page is served. Country switching uses client navigation and preserves scroll position. Components are in `components/`, shadcn primitives in `components/ui/`, and site styling in `app/globals.css`.

Images are cached under `public/assets/`, with original URLs mapped in `lib/assets.json`. One original Ebury article image returned 404; that article uses APFX's existing city photograph instead. Original article text, publication-era claims, and legal copy have been retained for editorial review.

## Vercel

Use the Next.js framework preset and `npm run build`, leaving the output directory at Vercel’s default. `npm start` serves the production build locally. Homepage redirects run in Next.js Proxy; pages remain prerendered. No form submissions, authentication, or payment handling has been added. Existing external registration, login, contact and LinkedIn links retain their destinations. Production includes the existing HubSpot portal 9348530 and LinkedIn partner 3408244 tracking scripts; development previews omit them. Deploy through the existing repository connection as usual.
