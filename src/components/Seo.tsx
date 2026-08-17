import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { getSeoMetadata } from "../seo";

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const metadata = getSeoMetadata(location.pathname);

    document.title = metadata.title;
    document.documentElement.lang = metadata.lang;

    setMeta('meta[name="description"]', "content", metadata.description);
    setMeta('meta[property="og:url"]', "content", metadata.canonicalUrl);
    setMeta('meta[property="og:type"]', "content", metadata.type);
    setMeta('meta[property="og:title"]', "content", metadata.title);
    setMeta(
      'meta[property="og:description"]',
      "content",
      metadata.description,
    );
    setMeta('meta[property="og:locale"]', "content", metadata.locale);
    setMeta('meta[property="og:image"]', "content", metadata.imageUrl);
    setMeta(
      'meta[property="og:image:secure_url"]',
      "content",
      metadata.imageUrl,
    );
    setMeta('meta[property="og:image:alt"]', "content", metadata.imageAlt);
    setMeta('meta[name="twitter:title"]', "content", metadata.title);
    setMeta(
      'meta[name="twitter:description"]',
      "content",
      metadata.description,
    );
    setMeta('meta[name="twitter:image"]', "content", metadata.imageUrl);
    setMeta(
      'meta[name="twitter:image:alt"]',
      "content",
      metadata.imageAlt,
    );
    setMeta('link[rel="canonical"]', "href", metadata.canonicalUrl);
  }, [location.pathname]);

  return null;
}
