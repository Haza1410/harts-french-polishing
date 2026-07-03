"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { asset } from "@/lib/asset";

type BeforeAfterProps = {
  /** After (restored) image */
  image: string;
  /** Before image — when omitted, the after image is shown dulled as a demo fallback */
  beforeImage?: string;
  alt: string;
  className?: string;
  /**
   * AFTER image: horizontal shift in pixels (negative = left, positive = right)
   */
  afterX?: number;
  /**
   * AFTER image: vertical shift in pixels (negative = up, positive = down)
   */
  afterY?: number;
  /**
   * AFTER image: scale/zoom (1 = 100%, 1.2 = 120% zoom, 0.8 = 80%)
   */
  afterScale?: number;
  /**
   * BEFORE image: horizontal shift in pixels (negative = left, positive = right)
   */
  beforeX?: number;
  /**
   * BEFORE image: vertical shift in pixels (negative = up, positive = down)
   */
  beforeY?: number;
  /**
   * BEFORE image: scale/zoom (1 = 100%, 1.2 = 120% zoom, 0.8 = 80%)
   */
  beforeScale?: number;
};

/**
 * Interactive before/after slider. Pass `beforeImage` for a real before/after
 * pair; otherwise the after image is duplicated with a dull filter for demo use.
 *
 * Use `beforePosition` and `afterPosition` to fine-tune image alignment.
 */
export default function BeforeAfter({
  image,
  beforeImage,
  alt,
  className = "",
  afterX = 0,
  afterY = 0,
  afterScale = 1,
  beforeX = 0,
  beforeY = 0,
  beforeScale = 1,
}: BeforeAfterProps) {
  const afterSrc = asset(image);
  const beforeSrc = beforeImage ? asset(beforeImage) : afterSrc;
  const useRealBefore = Boolean(beforeImage);
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full touch-none select-none overflow-hidden rounded-2xl ring-1 ring-espresso/10 ${
        useRealBefore ? "aspect-[3/4]" : "aspect-[4/3]"
      } ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Solid background to prevent bleed-through when images are scaled */}
      <div className="absolute inset-0 bg-espresso" />

      {/* After (restored) — full image underneath */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={afterSrc}
          alt={`${alt} — after restoration`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{
            transformOrigin: "center center",
            transform: `scale(${afterScale}) translate(${afterX}px, ${afterY}px)`,
          }}
        />
      </div>
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-espresso/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ivory">
        After
      </span>

      {/* Before — clipped to the left of the handle */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* Solid background for before side */}
        <div className="absolute inset-0 bg-espresso" />
        <Image
          src={beforeSrc}
          alt={`${alt} — before restoration`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${
            useRealBefore
              ? ""
              : "[filter:grayscale(0.65)_brightness(0.62)_contrast(0.9)_sepia(0.25)]"
          }`}
          style={{
            transformOrigin: "center center",
            transform: `scale(${beforeScale}) translate(${beforeX}px, ${beforeY}px)`,
          }}
        />
        <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-espresso/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ivory">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-ivory/90 shadow-[0_0_0_1px_rgba(34,22,16,0.25)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-ivory text-mahogany shadow-lg ring-1 ring-espresso/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
