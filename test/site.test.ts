import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { after, before, test } from "node:test";
import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import type { ViteDevServer } from "vite";
import type { router as appRouter } from "../src/router";

let vite: ViteDevServer;
let router: typeof appRouter;

before(async () => {
  vite = await createServer({
    appType: "custom",
    server: { middlewareMode: true, ws: false },
  });

  ({ router } = await vite.ssrLoadModule("/src/router.tsx"));
});

after(async () => {
  await vite.close();
});

async function renderRoute(path: string) {
  router.update({
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  await router.load();

  return renderToStaticMarkup(createElement(RouterProvider, { router }));
}

test("the profile chooser links to both sections", async () => {
  const html = await renderRoute("/");

  assert.match(html, /aria-label="Profil auswählen"/);
  assert.match(html, /href="\/software"/);
  assert.match(html, /href="\/personal-training"/);
});

test("the personal-training route exposes both trainer papers", async () => {
  const html = await renderRoute("/personal-training");

  assert.match(html, /Dein Ziel gibt die Richtung vor\./);
  assert.match(html, /Hausarbeiten aus der Trainerausbildung/);
  assert.match(html, /Drop-out im Nachwuchsleistungssport/);
  assert.match(html, /Trainer-B-Hausarbeit · 17\. August 2026 · PDF/);
  assert.match(
    html,
    /href="\/publikationen\/drop-out-nachwuchsleistungssport"/,
  );
  assert.match(html, /Leistungskontrolle im Rettungssport/);
  assert.match(
    html,
    /Trainer-C-Hausarbeit · mit Sabrina Ternes · 14\. November 2017 · PDF/,
  );
  assert.match(
    html,
    /href="\/publikationen\/leistungskontrolle-im-rettungssport"/,
  );
});

test("both publication pages present a cover and direct PDF actions", async () => {
  const dropout = await renderRoute(
    "/publikationen/drop-out-nachwuchsleistungssport",
  );
  const performance = await renderRoute(
    "/publikationen/leistungskontrolle-im-rettungssport",
  );

  assert.match(dropout, /Einflussfaktoren, Entwicklungsumfeld/);
  assert.match(dropout, /src="\/imgs\/publikation-drop-out\.webp"/);
  assert.match(
    dropout,
    /href="\/resources\/Gehring_Felix_Dropout_Nachwuchsleistungssport\.pdf"/,
  );
  assert.match(performance, /Critical Swim Speed/);
  assert.match(
    performance,
    /src="\/imgs\/publikation-critical-swim-speed\.webp"/,
  );
  assert.match(
    performance,
    /href="\/resources\/Hausarbeit_Trainer_C_Ternes_Gehring\.pdf"/,
  );
});

test("the software route still renders its profile", async () => {
  const html = await renderRoute("/software");

  assert.match(html, /full-stack developer/);
  assert.match(html, /aria-label="Professional experience"/);
});

test("the document includes complete social-sharing metadata", async () => {
  const html = await readFile("index.html", "utf8");

  assert.match(html, /rel="canonical" href="https:\/\/felix-gehring\.de\/"/);
  assert.match(html, /property="og:type" content="profile"/);
  assert.match(html, /property="og:image:width" content="1200"/);
  assert.match(html, /property="og:image:height" content="630"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /type="application\/ld\+json"/);

  const image = await readFile("public/imgs/felix-gehring-og.jpg");
  assert.ok(image.length > 50_000, "the social image should not be empty");
  assert.deepEqual([...image.subarray(0, 3)], [0xff, 0xd8, 0xff]);
});

test("route metadata has canonical URLs and localized copy", async () => {
  const { getSeoMetadata } = await vite.ssrLoadModule("/src/seo.ts");
  const software = getSeoMetadata("/software/");
  const training = getSeoMetadata("/personal-training");
  const publication = getSeoMetadata(
    "/publikationen/drop-out-nachwuchsleistungssport",
  );

  assert.equal(software.canonicalUrl, "https://felix-gehring.de/software");
  assert.equal(software.lang, "en");
  assert.match(software.title, /Software Developer/);
  assert.equal(
    training.canonicalUrl,
    "https://felix-gehring.de/personal-training",
  );
  assert.equal(training.lang, "de");
  assert.match(training.description, /Schwimmen, Kraft und Athletik/);
  assert.equal(publication.type, "article");
  assert.equal(
    publication.canonicalUrl,
    "https://felix-gehring.de/publikationen/drop-out-nachwuchsleistungssport",
  );
  assert.match(publication.title, /Drop-out im Nachwuchsleistungssport/);
});

test("the production build prerenders metadata for shareable routes", async () => {
  const config = await readFile("vite.config.ts", "utf8");
  const netlify = await readFile("netlify.toml", "utf8");

  assert.match(config, /socialRouteDocuments\(\)/);
  assert.match(config, /getSeoMetadata, socialRoutes/);
  assert.match(netlify, /from = "\/software"/);
  assert.match(netlify, /to = "\/software\/index\.html"/);
  assert.match(netlify, /from = "\/personal-training"/);
  assert.match(netlify, /to = "\/personal-training\/index\.html"/);
  assert.match(
    netlify,
    /from = "\/publikationen\/drop-out-nachwuchsleistungssport"/,
  );
  assert.match(
    netlify,
    /from = "\/publikationen\/leistungskontrolle-im-rettungssport"/,
  );
});

test("both linked resources are valid PDF files", async () => {
  const resources = [
    "public/resources/Gehring_Felix_Dropout_Nachwuchsleistungssport.pdf",
    "public/resources/Hausarbeit_Trainer_C_Ternes_Gehring.pdf",
  ];

  for (const resource of resources) {
    const file = await readFile(resource);

    assert.ok(file.length > 10_000, `${resource} should not be empty`);
    assert.equal(file.subarray(0, 5).toString(), "%PDF-");
  }
});

test("both publication cover previews are valid WebP images", async () => {
  const covers = [
    "public/imgs/publikation-drop-out.webp",
    "public/imgs/publikation-critical-swim-speed.webp",
  ];

  for (const cover of covers) {
    const file = await readFile(cover);

    assert.ok(file.length > 10_000, `${cover} should not be empty`);
    assert.equal(file.subarray(0, 4).toString(), "RIFF");
    assert.equal(file.subarray(8, 12).toString(), "WEBP");
  }
});
