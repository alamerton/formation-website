"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const SECONDS_PER_LOOP = 30;
const DRAG_THRESHOLD_PX = 5;
const EDGE_PADDING_PX = 16;

type ActivePointer = {
  id: number;
  startX: number;
  startOffset: number;
  dragging: boolean;
};

// Logo row that becomes an infinite auto-scrolling marquee only when the
// logos can't all fit on screen in a single static row. In marquee mode it
// renders enough copies to always fill the width, and can be moved by mouse
// drag, touch swipe, or horizontal trackpad/shift+wheel scrolling;
// auto-rotation resumes from wherever the user leaves it. A genuine drag
// suppresses the click that follows it, so links still open on a plain
// click or tap.
const LogoMarquee = ({
  children,
  staticClassName = "",
  className = "",
}: {
  children: React.ReactNode;
  staticClassName?: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [marquee, setMarquee] = useState(false);
  const [copies, setCopies] = useState(2);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const pointerRef = useRef<ActivePointer | null>(null);
  const suppressClickRef = useRef(false);

  const applyOffset = useCallback(() => {
    const setWidth = setWidthRef.current;
    if (setWidth <= 0 || !trackRef.current) return;
    offsetRef.current = ((offsetRef.current % setWidth) + setWidth) % setWidth;
    trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  }, []);

  // The hidden probe always holds one row in the static layout, so its
  // width is exactly what the static row needs regardless of current mode.
  useEffect(() => {
    const container = containerRef.current;
    const probe = probeRef.current;
    if (!container || !probe) return;
    const decide = () => {
      const available = container.clientWidth - EDGE_PADDING_PX * 2;
      setMarquee(probe.offsetWidth > available);
    };
    decide();
    const observer = new ResizeObserver(decide);
    observer.observe(container);
    observer.observe(probe);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!marquee) return;
    const measure = () => {
      // Fractional width: offsetWidth rounds, which would make the track hop
      // by a sub-pixel amount every time the loop wraps.
      const setWidth = firstSetRef.current?.getBoundingClientRect().width ?? 0;
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      setWidthRef.current = setWidth;
      // The track must span the container plus one extra set, or a blank
      // strip shows at the trailing edge just before the loop wraps.
      if (setWidth > 0) {
        setCopies(Math.max(2, Math.ceil(containerWidth / setWidth) + 1));
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (firstSetRef.current) observer.observe(firstSetRef.current);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [marquee]);

  useEffect(() => {
    if (!marquee) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      // Clamp so returning to a backgrounded tab doesn't lurch the track.
      const elapsed = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!pointerRef.current?.dragging && !reducedMotion.matches) {
        offsetRef.current += (setWidthRef.current / SECONDS_PER_LOOP) * elapsed;
      }
      applyOffset();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [marquee, applyOffset]);

  useEffect(() => {
    const container = containerRef.current;
    if (!marquee || !container) return;
    // Registered natively because React's wheel listener is passive, and
    // horizontal swipes must preventDefault to stop the browser treating
    // them as back/forward navigation.
    const onWheel = (event: WheelEvent) => {
      const dx =
        event.shiftKey && event.deltaX === 0 ? event.deltaY : event.deltaX;
      const dy = event.shiftKey ? 0 : event.deltaY;
      if (Math.abs(dx) <= Math.abs(dy)) return;
      event.preventDefault();
      const unit =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? container.offsetWidth
          : 1;
      offsetRef.current += dx * unit;
      applyOffset();
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [marquee, applyOffset]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track
      .querySelectorAll("a, img")
      .forEach((element) => element.setAttribute("draggable", "false"));
    // Copies slide in from off-screen, so lazy loading and async decoding
    // would let a logo arrive blank before it pops in.
    track.querySelectorAll("img").forEach((image) => {
      image.loading = "eager";
      image.decoding = "sync";
    });
  }, [marquee, copies]);

  const endPointer = () => {
    pointerRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${
        marquee
          ? "cursor-grab active:cursor-grabbing select-none [touch-action:pan-y] [-webkit-touch-callout:none]"
          : ""
      } ${className}`}
      onPointerDown={
        marquee
          ? (event) => {
              if (event.pointerType === "mouse" && event.button !== 0) return;
              suppressClickRef.current = false;
              pointerRef.current = {
                id: event.pointerId,
                startX: event.clientX,
                startOffset: offsetRef.current,
                dragging: false,
              };
            }
          : undefined
      }
      onPointerMove={
        marquee
          ? (event) => {
              const pointer = pointerRef.current;
              if (!pointer || pointer.id !== event.pointerId) return;
              const dx = event.clientX - pointer.startX;
              if (!pointer.dragging) {
                if (Math.abs(dx) < DRAG_THRESHOLD_PX) return;
                pointer.dragging = true;
                suppressClickRef.current = true;
                // Capture only once it's a real drag, so plain clicks and
                // taps keep targeting the link underneath.
                try {
                  event.currentTarget.setPointerCapture(event.pointerId);
                } catch {
                  // Capture is a nicety; dragging still works without it.
                }
              }
              offsetRef.current = pointer.startOffset - dx;
              applyOffset();
            }
          : undefined
      }
      onPointerUp={marquee ? endPointer : undefined}
      onPointerCancel={marquee ? endPointer : undefined}
      onLostPointerCapture={marquee ? endPointer : undefined}
      onClickCapture={
        marquee
          ? (event) => {
              if (suppressClickRef.current) {
                event.preventDefault();
                event.stopPropagation();
                suppressClickRef.current = false;
              }
            }
          : undefined
      }
      onDragStart={marquee ? (event) => event.preventDefault() : undefined}
    >
      <div
        ref={(element) => {
          probeRef.current = element;
          if (element) element.inert = true;
        }}
        aria-hidden="true"
        className={`absolute left-0 top-0 invisible pointer-events-none flex w-max items-center ${staticClassName}`}
      >
        {children}
      </div>
      {marquee ? (
        <div ref={trackRef} className="flex w-max will-change-transform">
          {Array.from({ length: copies }, (_, index) => (
            <div
              key={index}
              ref={
                index === 0
                  ? firstSetRef
                  : (element) => {
                      if (element) element.inert = true;
                    }
              }
              aria-hidden={index === 0 ? undefined : true}
              className="flex items-center gap-12 pr-12 shrink-0"
            >
              {children}
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`flex justify-center items-center px-4 ${staticClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default LogoMarquee;
