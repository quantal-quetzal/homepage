import { useEffect } from "react";

function restoreAttribute(
  element: HTMLLinkElement,
  name: string,
  value: string | null,
) {
  if (value === null) {
    element.removeAttribute(name);
  } else {
    element.setAttribute(name, value);
  }
}

export default function useFavicon(href: string) {
  useEffect(() => {
    const icons = [
      ...document.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]'),
    ];
    const originalAttributes = icons.map((icon) => ({
      href: icon.getAttribute("href"),
      type: icon.getAttribute("type"),
      sizes: icon.getAttribute("sizes"),
    }));

    icons.forEach((icon) => {
      icon.setAttribute("href", href);
      icon.setAttribute("type", "image/svg+xml");
      icon.removeAttribute("sizes");
    });

    return () => {
      icons.forEach((icon, index) => {
        const original = originalAttributes[index];
        if (!original) return;

        restoreAttribute(icon, "href", original.href);
        restoreAttribute(icon, "type", original.type);
        restoreAttribute(icon, "sizes", original.sizes);
      });
    };
  }, [href]);
}
