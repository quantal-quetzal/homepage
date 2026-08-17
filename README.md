[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/quantal-quetzal/homepage)

# Homepage

## Development

```sh
pnpm install
pnpm dev
```

Create the production build with `pnpm build` and preview it locally with
`pnpm preview`.

## Social metadata and static route documents

This site is a client-rendered React single-page application. Browsers execute
React and receive route-specific metadata from `src/components/Seo.jsx`, but
many social crawlers do not execute JavaScript. If every URL returned the base
`index.html`, links to `/software`, `/personal-training`, and the publication
pages would all receive the homepage's Open Graph preview.

The `socialRouteDocuments` build plugin in `vite.config.js` solves this without
adding server-side rendering:

1. Vite builds the normal application and writes `dist/index.html`.
2. The plugin reads that built document, applies the metadata returned by
   `getSeoMetadata()` for every entry in `socialRoutes`, and writes a document
   below the corresponding route. For example, `/software` becomes
   `dist/software/index.html`.
3. The explicit rewrites in `netlify.toml` serve those generated documents with
   a `200` response before the final SPA fallback is considered.
4. The generated document still loads the same React bundle, so users see the
   normal application while crawlers can read the correct metadata immediately.

The generated route documents are build artifacts and should not be committed.
The homepage metadata remains directly in `index.html`, which acts as both the
default crawler document and the template used by the build plugin.

### Adding a shareable route

1. Add the page to `src/router.jsx`.
2. Add its metadata to `src/seo.js`. Publication metadata is generated
   automatically from `src/data/publications.js`.
3. Add an exact `200` rewrite from the public route to its generated
   `<route>/index.html` document in `netlify.toml`.
4. Run `pnpm check`, then optionally inspect the generated document in `dist/`
   to confirm its canonical URL and Open Graph values.

Do not remove the build plugin unless route-specific previews are no longer
required or the site moves to an SSR/prerendering framework.

## Regression tests

The project includes regression tests for the main routes and linked PDF
resources. Run them with `pnpm test`. Use `pnpm check` to run the tests followed
by a production build, matching the validation performed in CI.
