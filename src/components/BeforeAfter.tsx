"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type BeforeAfterProps = {
  image: string;
  alt: string;
  className?: string;
};

/**
 * Interactive before/after slider. For the demo the "before" state is the
 * same photograph shown dulled and desaturated (guaranteeing perfect
 * alignment). Swap `beforeImage` in for the client's real "before" photos.
 */
export default function BeforeAfter({
  image,
  alt,
  className = "",
}: BeforeAfterProps) {
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
      className={`relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl ring-1 ring-espresso/10 ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After (restored) — full image underneath */}
      <Image
        src={image}
        alt={`${alt} — after restoration`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-espresso/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ivory">
        After
      </span>

      {/* Before (dulled) — clipped to the left of the handle */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={image}
          alt={`${alt} — before restoration`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover [filter:grayscale(0.65)_brightness(0.62)_contrast(0.9)_sepia(0.25)]"
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
