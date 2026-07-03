"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Phase = "loading" | "exit" | "done";

const SESSION_KEY = "hfp-splash-seen";
const MIN_MS = 900;
const MAX_MS = 3200;
const EXIT_MS = 550;

export default function PageLoader() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setPhase("done");
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const start = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;

      const wait = reducedMotion
        ? 0
        : Math.max(0, MIN_MS - (Date.now() - start));

      window.setTimeout(() => {
        setPhase("exit");
        sessionStorage.setItem(SESSION_KEY, "1");
        window.setTimeout(() => setPhase("done"), reducedMotion ? 0 : EXIT_MS);
      }, wait);
    };

    const maxTimer = window.setTimeout(finish, reducedMotion ? 0 : MAX_MS);

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      finished = true;
      window.clearTimeout(maxTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  useEffect(() => {
    const lock = phase === "loading" || phase === "exit";
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`grain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory transition-opacity duration-500 ease-out ${
        phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-center text-center transition-transform duration-500 ease-out ${
          phase === "exit" ? "scale-[0.98]" : "scale-100"
        }`}
      >
        <span
          aria-hidden="true"
          className="flex h-16 w-16 items-center justify-center rounded-full border border-brass/70 font-serif text-3xl leading-none text-brass"
        >
          H
        </span>

        <p className="mt-6 font-serif text-3xl tracking-tight text-espresso">
          Harts
        </p>
        <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-brass">
          French Polishing
        </p>
        <p className="mt-4 text-sm text-muted">{site.tagline}</p>

        <div
          aria-hidden="true"
          className="relative mt-10 h-px w-32 overflow-hidden bg-sand"
        >
          <span className="absolute inset-y-0 left-0 w-full origin-left animate-[loader_1.4s_ease-in-out_infinite] bg-brass" />
        </div>
      </div>
    </div>
  );
}
