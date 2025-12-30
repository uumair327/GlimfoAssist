/**
 * @file testimonials.ts
 * @description Client testimonials data for social proof
 * 
 * WHY: Social proof is crucial for conversion. Real testimonials from
 *      satisfied clients build trust and credibility. Separating this
 *      data allows easy addition of new testimonials without code changes.
 * 
 * WHAT: Array of testimonial objects with quote, author name, and role.
 * WHERE: Rendered by TestimonialsSection as testimonial cards.
 * WHO: Marketing team for testimonial collection and curation.
 */

export interface Testimonial {
  /** The client's feedback or review */
  quote: string;
  /** Client's name for attribution */
  author: string;
  /** Client's role/position and institution for credibility */
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "My final year project worked flawlessly and the documentation was extremely clear.",
    author: "Jai Joisar",
    role: "CS, B.Tech Final Year, Mumbai",
  },
  {
    quote: "Got the multiple fine-tuned models done, and it was a huge success.",
    author: "Abhishek Pal",
    role: "MSc Data Science, Leicester University",
  },
  {
    quote: "Helped me understand my assignment logic, not just submit it.",
    author: "Sahil Padwal",
    role: "MSc Data Science, Leicester University",
  },
];
