import { publicationList } from "./data/publications.js";

export const siteUrl = "https://felix-gehring.de";
export const socialImageUrl = `${siteUrl}/imgs/felix-gehring-og.jpg`;
export const socialImageAlt =
  "Felix Gehring – Softwareentwickler und Personal Trainer";

const defaultMetadata = {
  title: "Felix Gehring | Software & Personal Training",
  description:
    "Felix Gehring: Softwareentwickler und IT-Berater sowie Personal Trainer für Schwimmen, Kraft und Athletik.",
  lang: "de",
  locale: "de_DE",
  path: "/",
};

const routeMetadata = {
  "/": defaultMetadata,
  "/software": {
    title: "Felix Gehring | Software Developer & IT Consultant",
    description:
      "Full-stack developer and IT consultant specializing in TypeScript, React, Java, AWS, AI integration, and pragmatic modernization.",
    lang: "en",
    locale: "en_US",
    path: "/software",
  },
  "/personal-training": {
    title: "Felix Gehring | Personal Trainer in Ochtrup",
    description:
      "Individuelles Personal Training für Schwimmen, Kraft und Athletik in Ochtrup und Umgebung – vom Einstieg bis zum Leistungssport.",
    lang: "de",
    locale: "de_DE",
    path: "/personal-training",
  },
  ...Object.fromEntries(
    publicationList.map((publication) => [
      publication.path,
      {
        title: `${publication.title} | Felix Gehring`,
        description: publication.description,
        lang: "de",
        locale: "de_DE",
        path: publication.path,
        type: "article",
      },
    ]),
  ),
};

export const socialRoutes = Object.keys(routeMetadata).filter(
  (pathname) => pathname !== "/",
);

function normalizePath(pathname) {
  if (pathname === "/index.html") return "/";
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

export function getSeoMetadata(pathname = "/") {
  const normalizedPath = normalizePath(pathname);
  const metadata = routeMetadata[normalizedPath] ?? defaultMetadata;

  return {
    ...metadata,
    canonicalUrl: `${siteUrl}${metadata.path}`,
    imageUrl: socialImageUrl,
    imageAlt: socialImageAlt,
    type: metadata.type ?? "profile",
  };
}
