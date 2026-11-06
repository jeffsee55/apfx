# APFX — local development & content workflow

This project is a Next.js site powered by TinaCMS. Content lives under content/ (markdown/JSON) and the schema is defined in .tina/schema.ts. The site uses a generated GraphQL client (zeus/) to query Tina documents.

This README adds clear local setup steps to run the site and regenerate the GraphQL client.

Prerequisites
- Node.js 16+ (recommended)
- npm or yarn
- Git

Install dependencies
1. From the project root, install dependencies:
   - yarn: `yarn install`
   - npm: `npm install`

Generate/update the Zeus GraphQL client
- The project uses graphql-zeus (generated client in `zeus/` and `generated/zeus`). After changing the Tina schema (`.tina/schema.ts`) or when setting up locally, regenerate the Zeus client:

  yarn zeus .tina/__generated__/schema.gql --ts

  If you prefer npx or don't have a yarn script, you can run the equivalent CLI that graphql-zeus provides.

Update queries
- If you change collections / block templates in `.tina/schema.ts`, update any queries in `components/page.tsx` (or other components) to request the new fields. Regenerate the zeus client after schema changes.

Run the site locally (Tina-enabled)
- This repo uses the TinaCMS CLI wrapper around Next. The package.json scripts wrap Next via `tinacms server:start`.

1. Start the dev server (recommended):
   - `yarn dev` or `npm run dev`

   This command uses the Tina CLI to start the Tina server and then runs Next in dev mode. The app expects a Tina GraphQL endpoint at `http://localhost:4001/graphql` while editing.

2. If you are developing changes to the Tina monorepo locally (optional):
   - Ensure your local TinaCMS repo has been built (in that repo run `yarn build`).
   - Add the resolutions shown below to this project's package.json to point to your local Tina packages (only needed when actively hacking on Tina itself):

```json
"resolutions": {
  "tinacms": "portal:../tinacms/packages/tinacms",
  "next-tinacms-cloudinary": "portal:../tinacms/packages/next-tinacms-cloudinary",
  "@tinacms/cli": "portal:../tinacms/packages/@tinacms/cli",
  "@tinacms/auth": "portal:../tinacms/packages/@tinacms/auth",
  "@tinacms/scripts": "portal:../tinacms/packages/@tinacms/scripts",
  "@tinacms/graphql": "portal:../tinacms/packages/@tinacms/graphql",
  "@tinacms/toolkit": "portal:../tinacms/packages/@tinacms/toolkit"
}
```

Troubleshooting & notes
- GraphQL endpoint: components/page.tsx queries `http://localhost:4001/graphql` (via the generated Zeus client). If the Tina server is not running, getStaticProps may fail when Next tries to fetch content.
- Regenerating Zeus: keep the generated client in sync with schema changes. Run the Zeus command after editing `.tina/schema.ts`.
- Editing content: content files live under `content/` (pages, news, navigation, footer, theme, localeInfo). Templates are selected via `_template` in markdown frontmatter.
- Admin UI: visit `/admin` for TinaAdmin when the dev server is running.
- Static build: to perform a production build run `yarn build` or `npm run build` (these also run via the Tina CLI wrapper).

If you'd like, I can:
- Open a draft PR with these README improvements.
- Run `yarn install` and attempt to regenerate the Zeus client here and report any errors.
- Add a short troubleshooting checklist for common Tina startup errors.

---

Original short notes:

> Edit the `.tina/schema.ts`
>
> Run `yarn zeus .tina/__generated__/schema.gql --ts` to update the Zues client with the new schema. The updated zues config will be viewable at `zeus/index.ts`.
>
> Update the query at `components/page.tsx` the new changes

