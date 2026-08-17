import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import { getSeoMetadata, socialRoutes } from "./src/seo.ts";

// Social crawlers commonly read the initial HTML without executing React. This
// build-only plugin creates a metadata-specific HTML shell for every shareable
// SPA route. Netlify serves those files through the exact rewrites in
// netlify.toml; each shell still boots the same client application.

function escapeAttribute(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMetaContent(
  html: string,
  attribute: "name" | "property",
  key: string,
  value: string,
) {
  const tagPattern = new RegExp(
    `<meta(?=[^>]*${attribute}="${key}")[^>]*>`,
    "s",
  );

  return html.replace(tagPattern, (tag) =>
    tag.replace(/content="[^"]*"/, `content="${escapeAttribute(value)}"`),
  );
}

function renderRouteDocument(baseHtml: string, pathname: string) {
  const metadata = getSeoMetadata(pathname);
  let html = baseHtml
    .replace(/lang="[^"]*"/, `lang="${metadata.lang}"`)
    .replace(/<title>.*?<\/title>/s, `<title>${escapeAttribute(metadata.title)}</title>`)
    .replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${metadata.canonicalUrl}$2`,
    );

  const replacements: Array<
    [attribute: "name" | "property", key: string, value: string]
  > = [
    ["name", "description", metadata.description],
    ["property", "og:type", metadata.type],
    ["property", "og:url", metadata.canonicalUrl],
    ["property", "og:title", metadata.title],
    ["property", "og:description", metadata.description],
    ["property", "og:locale", metadata.locale],
    ["name", "twitter:title", metadata.title],
    ["name", "twitter:description", metadata.description],
  ];

  for (const [attribute, key, value] of replacements) {
    html = replaceMetaContent(html, attribute, key, value);
  }

  return html;
}

function socialRouteDocuments(): Plugin {
  let outputDirectory = "";

  return {
    name: "social-route-documents",
    apply: "build",
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      // Start with Vite's final HTML so hashed asset URLs remain correct.
      const baseHtml = readFileSync(resolve(outputDirectory, "index.html"), "utf8");

      for (const pathname of socialRoutes) {
        const outputPath = resolve(
          outputDirectory,
          pathname.slice(1),
          "index.html",
        );
        mkdirSync(dirname(outputPath), { recursive: true });
        writeFileSync(outputPath, renderRouteDocument(baseHtml, pathname));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), socialRouteDocuments()],
});
