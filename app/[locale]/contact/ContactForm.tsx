"use client";

import { useFormState, useFormStatus } from "react-dom";
import { site } from "@/content/site";
import { interpolate, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import {
  submitContactForm,
  type ContactState,
  type ContactStatusCode,
} from "./actions";

const initialState: ContactState = { code: "idle" };

function SubmitButton({
  idle,
  sending,
}: {
  idle: string;
  sending: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg pirateOne hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? sending : idle}
    </button>
  );
}

const inputClass =
  "w-full bg-transparent border-b-2 border-black/40 focus:border-red-500 outline-none py-3 text-base md:text-lg placeholder:text-black/40 transition-colors";

export default function ContactForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const form = dict.contact.form;
  const [state, formAction] = useFormState(submitContactForm, initialState);

  function messageFor(code: ContactStatusCode): string | null {
    switch (code) {
      case "success":
        return form.successDefault;
      case "missingFields":
        return form.errorMissingFields;
      case "invalidEmail":
        return form.errorInvalidEmail;
      case "sendFailed":
        return form.errorSendFailed;
      case "notWiredUp":
        return interpolate(form.errorNotWiredUp, {
          email: site.contact.email,
        });
      default:
        return null;
    }
  }

  const statusMessage = messageFor(state.code);
  const isSuccess = state.code === "success";
  const isError = statusMessage !== null && !isSuccess;

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
            {form.nameLabel}
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder={form.namePlaceholder}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
            {form.emailLabel}
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={form.emailPlaceholder}
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
            {form.serviceLabel}
          </span>
          <select name="service" className={`${inputClass} appearance-none`}>
            <option value="">{form.servicePlaceholder}</option>
            <option value="Landing Page in a Day">Landing Page in a Day</option>
            <option value="MVP Sprint">MVP Sprint</option>
            <option value="Web App Development">Web App Development</option>
            <option value="Dev Partnership">Dev Partnership</option>
            <option value="Not sure yet">{form.serviceNotSure}</option>
          </select>
        </label>
        <label className="block">
          <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
            {form.budgetLabel}
          </span>
          <input
            type="text"
            name="budget"
            placeholder={form.budgetPlaceholder}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60">
          {form.messageLabel}
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder={form.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-6">
        <SubmitButton idle={form.submit} sending={form.sending} />
        {isSuccess && (
          <p role="status" className="pirateOne text-base text-black">
            ✓ {statusMessage}
          </p>
        )}
        {isError && (
          <p role="alert" className="pirateOne text-base text-red-500">
            ✗ {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
