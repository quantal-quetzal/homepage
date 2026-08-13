import { useEffect } from "react";

export default function useFavicon(href) {
  useEffect(() => {
    const icons = [...document.querySelectorAll('link[rel~="icon"]')];
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
        icon.setAttribute("href", original.href);
        icon.setAttribute("type", original.type);
        icon.setAttribute("sizes", original.sizes);
      });
    };
  }, [href]);
}
