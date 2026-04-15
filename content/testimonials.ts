export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

/**
 * Placeholder testimonials. Replace with real quotes as you collect them.
 * Keep the TestimonialsSection's empty-state handling in mind. If this array
 * is empty, the section will render a "What clients say" placeholder instead.
 */
export const testimonials: Testimonial[] = [];
