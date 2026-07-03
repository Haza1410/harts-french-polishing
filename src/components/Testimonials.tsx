"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site";
import Icon from "./Icon";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + count) % count);

  // Gentle auto-advance.
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(t);
  }, [count]);

  const active = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-6 flex justify-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={20} className="fill-gold" />
        ))}
      </div>

      <div className="relative min-h-[13rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="font-serif text-2xl leading-relaxed text-ivory sm:text-3xl">
              &ldquo;{active.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brass">
              {active.name}
              <span className="mx-2 text-ivory/30">&mdash;</span>
              <span className="text-ivory/60">{active.location}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 rotate-180 items-center justify-center rounded-full border border-ivory/25 text-ivory/80 transition-colors hover:border-brass hover:bg-brass hover:text-espresso"
        >
          <Icon name="arrowRight" size={18} />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brass" : "w-2 bg-ivory/30"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory/80 transition-colors hover:border-brass hover:bg-brass hover:text-espresso"
        >
          <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </div>
  );
}
