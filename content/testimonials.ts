import type { Locale } from "@/i18n/config";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

/**
 * Placeholder testimonials. Replace with real quotes as you collect them.
 * Keep the TestimonialsSection's empty-state handling in mind. If the array
 * for the requested locale is empty, the section will render its placeholder
 * state from the dictionary instead.
 */
const testimonialsByLocale: Record<Locale, Testimonial[]> = {
  en: [],
  sq: [],
  de: [],
  fr: [],
};

export function getTestimonials(locale: Locale): Testimonial[] {
  return testimonialsByLocale[locale];
}
