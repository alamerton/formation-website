"use client";
import { useEffect } from "react";

// A footnote number in the text links to its note; a note's number (and,
// in the footnotes list, its trailing arrow) links back to the reference.
const LINK_TYPES = [
  { selector: "a[data-sidenote-link]", toReference: false },
  { selector: "a[data-sidenote-backlink]", toReference: true },
];
const NOTE_HIGHLIGHT = "sidenote-highlight";
// Breathing room kept between a target and the fixed header / window bottom.
const EDGE_MARGIN = 12;

function highlightNote(note: HTMLElement) {
  note.classList.remove(NOTE_HIGHLIGHT);
  // Reading layout here restarts the animation if it's already running.
  void note.offsetWidth;
  note.classList.add(NOTE_HIGHLIGHT);
  note.addEventListener(
    "animationend",
    () => note.classList.remove(NOTE_HIGHLIGHT),
    { once: true },
  );
  note.focus({ preventScroll: true });
}

// Tints the whole line of text a reference sits on, which is far easier to
// spot than the small number alone. Lines aren't elements, so a temporary
// band is laid over the line, found from where an empty marker lands.
function highlightLine(reference: HTMLElement) {
  const sup = reference.closest("sup") ?? reference;
  const block = sup.parentElement?.closest<HTMLElement>(
    "p, li, td, th, figcaption, blockquote",
  );
  if (!block) return;
  const marker = document.createElement("span");
  sup.before(marker);
  const markerBox = marker.getBoundingClientRect();
  marker.remove();

  const style = getComputedStyle(block);
  const lineHeight = parseFloat(style.lineHeight);
  const blockBox = block.getBoundingClientRect();
  const contentTop =
    blockBox.top +
    parseFloat(style.borderTopWidth) +
    parseFloat(style.paddingTop);
  if (!lineHeight || !markerBox.height) return;
  const line = Math.floor(
    (markerBox.top + markerBox.height / 2 - contentTop) / lineHeight,
  );

  // Starts a little left of the text so its softened edge doesn't dim the
  // first letters.
  const lead = 6;
  const band = document.createElement("div");
  band.className = "reference-line-highlight";
  band.setAttribute("aria-hidden", "true");
  Object.assign(band.style, {
    top: `${contentTop + line * lineHeight + window.scrollY}px`,
    left: `${blockBox.left - lead + window.scrollX}px`,
    width: `${blockBox.width + lead}px`,
    height: `${lineHeight}px`,
  });
  document.body.appendChild(band);
  const remove = () => band.remove();
  band.addEventListener("animationend", remove, { once: true });
  window.setTimeout(remove, 4000);
}

// On small screens the margin notes are hidden and the footnotes list at
// the end of the post stands in for them, so an id may point at a hidden
// note; resolve it to whichever copy is showing.
function resolveTarget(id: string) {
  return [
    document.getElementById(id),
    ...Array.from(
      document.querySelectorAll<HTMLElement>(
        `[data-note-copy~="${CSS.escape(id)}"]`,
      ),
    ),
  ].find((element) => element && element.getClientRects().length > 0);
}

// Highlights the target (a note, or a reference's line), first scrolling it
// into view only if it isn't already fully on screen.
function goTo(target: HTMLElement, toReference: boolean) {
  const arrive = () => {
    if (toReference) {
      target.focus({ preventScroll: true });
      highlightLine(target);
    } else {
      highlightNote(target);
    }
  };
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
    "(prefers-reduced-motion: reduce)",
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
}

// Handles clicks on footnote links, plus footnote addresses reached without
// a click (a shared #fn-N link, or a tap before this script loaded), since
// the browser can't jump to a note that's hidden at this screen size.
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
        clicked?.closest(linkType.selector),
      );
      const link = type && clicked?.closest<HTMLAnchorElement>(type.selector);
      const target = link && resolveTarget(link.hash.slice(1));
      if (!type || !target) return;
      event.preventDefault();
      goTo(target, type.toReference);
    };

    const onHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!/^fn(ref)?-/.test(id)) return;
      const target = resolveTarget(id);
      if (!target) return;
      goTo(target, id.startsWith("fnref-"));
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return null;
};

export default SidenoteLinks;
