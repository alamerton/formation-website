"use client";
import { useEffect } from "react";

// A footnote number in the text links to its note; the number at the start
// of a note links back to the reference.
const LINK_TYPES = [
  { selector: "a[data-sidenote-link]", highlightClass: "sidenote-highlight" },
  {
    selector: "a[data-sidenote-backlink]",
    highlightClass: "sidenote-ref-highlight",
  },
];
// Breathing room kept between a target and the fixed header / window bottom.
const EDGE_MARGIN = 12;

function highlight(target: HTMLElement, className: string) {
  target.classList.remove(className);
  // Reading layout here restarts the animation if it's already running.
  void target.offsetWidth;
  target.classList.add(className);
  target.addEventListener(
    "animationend",
    () => target.classList.remove(className),
    { once: true }
  );
  target.focus({ preventScroll: true });
}

// Clicking a footnote link highlights its target, first scrolling it into
// view only if it isn't already fully on screen. Without JavaScript the
// links still jump to their target.
const SidenoteLinks = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const clicked = event.target as Element | null;
      const type = LINK_TYPES.find((linkType) =>
        clicked?.closest(linkType.selector)
      );
      const link = type && clicked?.closest<HTMLAnchorElement>(type.selector);
      const target = link && document.getElementById(link.hash.slice(1));
      if (!type || !target) return;
      event.preventDefault();
      const arrive = () => highlight(target, type.highlightClass);

      const headerBottom =
        document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
      const visibleTop = Math.max(headerBottom, 0) + EDGE_MARGIN;
      const visibleBottom = window.innerHeight - EDGE_MARGIN;
      const box = target.getBoundingClientRect();
      if (box.top >= visibleTop && box.bottom <= visibleBottom) {
        arrive();
        return;
      }

      // Centre the target in the visible area, or align its top if it's taller.
      const room = visibleBottom - visibleTop;
      const offset = box.height < room ? (room - box.height) / 2 : 0;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      window.scrollTo({
        top: window.scrollY + box.top - visibleTop - offset,
        // "auto" would still animate: the site sets scroll-behavior: smooth.
        behavior: reduceMotion ? "instant" : "smooth",
      });
      if (reduceMotion) {
        arrive();
        return;
      }
      // Highlight once the scroll settles, so the fade isn't spent mid-scroll.
      let arrived = false;
      const finish = () => {
        if (arrived) return;
        arrived = true;
        window.removeEventListener("scrollend", finish);
        arrive();
      };
      window.addEventListener("scrollend", finish, { once: true });
      window.setTimeout(finish, 900);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
};

export default SidenoteLinks;
