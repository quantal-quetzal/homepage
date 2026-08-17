import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { after, before, test } from "node:test";
import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

let vite;
let router;

before(async () => {
  vite = await createServer({
    appType: "custom",
    server: { middlewareMode: true, ws: false },
  });

  ({ router } = await vite.ssrLoadModule("/src/router.jsx"));
});

after(async () => {
  await vite.close();
});

async function renderRoute(path) {
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
    /href="\/resources\/Gehring_Felix_Dropout_Nachwuchsleistungssport\.pdf"/,
  );
  assert.match(html, /Leistungskontrolle im Rettungssport/);
  assert.match(
    html,
    /Trainer-C-Hausarbeit · mit Sabrina Ternes · 14\. November 2017 · PDF/,
  );
  assert.match(
    html,
    /href="\/resources\/Hausarbeit_Trainer_C_Ternes_Gehring\.pdf"/,
  );
});

test("the software route still renders its profile", async () => {
  const html = await renderRoute("/software");

  assert.match(html, /full-stack developer/);
  assert.match(html, /aria-label="Professional experience"/);
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
