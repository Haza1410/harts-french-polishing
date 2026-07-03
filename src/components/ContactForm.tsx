"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";
import Icon from "./Icon";

type Status = "idle" | "submitting" | "success";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please tell us a little about your project.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    // Demo only — no backend yet. Wire to an email service (e.g. Resend,
    // Formspree or a serverless route) before go-live.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-espresso/8 bg-cream p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mahogany text-ivory">
          <Icon name="check" size={30} />
        </span>
        <h3 className="mt-5 text-2xl">Thank you</h3>
        <p className="mt-3 max-w-sm text-muted">
          Your enquiry has been received. We&rsquo;ll be in touch very soon —
          usually within one working day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-mahogany link-underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border bg-ivory px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-mahogany focus:ring-2 focus:ring-brass/30";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-walnut">
            Name <span className="text-mahogany">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={`${inputBase} ${errors.name ? "border-red-400" : "border-espresso/15"}`}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-walnut">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`${inputBase} border-espresso/15`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-walnut">
          Email <span className="text-mahogany">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={`${inputBase} ${errors.email ? "border-red-400" : "border-espresso/15"}`}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-walnut">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          className={`${inputBase} border-espresso/15`}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-walnut">
          Your project <span className="text-mahogany">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your piece and what you'd like done…"
          className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-espresso/15"}`}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-mahogany px-6 py-3.5 text-sm font-semibold text-ivory shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-walnut disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
        {status !== "submitting" && <Icon name="arrowRight" size={18} />}
      </button>
    </form>
  );
}
