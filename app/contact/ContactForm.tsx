"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg pirateOne hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? "Sending…" : "Send message →"}
    </button>
  );
}

const inputClass =
  "w-full bg-transparent border-b-2 border-black/40 focus:border-red-500 outline-none py-3 text-base md:text-lg placeholder:text-black/40 transition-colors";

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-8 max-w-2xl" noValidate>
      {/* Honeypot */}
      <div aria-hidden className="hidden" style={{ display: "none" }}>
        <label>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
            Your name
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Founder"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
            Service
          </span>
          <select name="service" className={`${inputClass} appearance-none`}>
            <option value="">Select a service…</option>
            <option value="Landing Page in a Day">Landing Page in a Day</option>
            <option value="MVP Sprint">MVP Sprint</option>
            <option value="Web App Development">Web App Development</option>
            <option value="Dev Partnership">Dev Partnership</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className="block">
          <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
            Budget (optional)
          </span>
          <input
            type="text"
            name="budget"
            placeholder="e.g. €2k–5k"
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
          What are you building?
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="A sentence or two on what you need and when. I'll come back with honest advice and a real quote."
          className={`${inputClass} resize-y`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-6">
        <SubmitButton />
        {state.status === "success" && (
          <p
            role="status"
            className="pirateOne text-base text-black"
          >
            ✓ {state.message}
          </p>
        )}
        {state.status === "error" && (
          <p role="alert" className="pirateOne text-base text-red-500">
            ✗ {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
