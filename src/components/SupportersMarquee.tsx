"use client";
import React, { useEffect, useRef } from "react";

const SECONDS_PER_LOOP = 30;
const DRAG_THRESHOLD_PX = 5;

// Infinite auto-scrolling logo marquee. Renders its children twice for a
// seamless loop, supports pointer dragging (mouse and touch), and resumes
// auto-rotation from wherever the user releases. Rotation only pauses
// while actively dragging; a genuine drag suppresses the click.
const SupportersMarquee = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfRef = useRef(0);
  const draggingRef = useRef(false);
  const draggedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  useEffect(() => {
    const measure = () => {
      halfRef.current = setRef.current?.offsetWidth ?? 0;
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (setRef.current) observer.observe(setRef.current);

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const half = halfRef.current;
      if (half > 0) {
        if (!draggingRef.current) {
          offsetRef.current += (half / SECONDS_PER_LOOP) * dt;
        }
        offsetRef.current = ((offsetRef.current % half) + half) % half;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`overflow-hidden cursor-grab active:cursor-grabbing select-none [touch-action:pan-y] ${className}`}
      onPointerDown={(event) => {
        draggingRef.current = true;
        draggedRef.current = false;
        dragStartXRef.current = event.clientX;
        dragStartOffsetRef.current = offsetRef.current;
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // Pointer capture is a nicety; dragging still works without it.
        }
      }}
      onPointerMove={(event) => {
        if (!draggingRef.current) return;
        const dx = event.clientX - dragStartXRef.current;
        if (Math.abs(dx) > DRAG_THRESHOLD_PX) draggedRef.current = true;
        offsetRef.current = dragStartOffsetRef.current - dx;
      }}
      onPointerUp={() => {
        draggingRef.current = false;
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
      }}
      onPointerLeave={() => {
        draggingRef.current = false;
      }}
      onClickCapture={(event) => {
        if (draggedRef.current) {
          event.preventDefault();
          event.stopPropagation();
          draggedRef.current = false;
        }
      }}
      onDragStart={(event) => event.preventDefault()}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        <div ref={setRef} className="flex items-center gap-12 pr-12 shrink-0">
          {children}
        </div>
        <div
          className="flex items-center gap-12 pr-12 shrink-0"
          aria-hidden="true"
          ref={(element) => {
            if (element) element.inert = true;
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SupportersMarquee;
