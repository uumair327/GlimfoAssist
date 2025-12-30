/**
 * @file sections.ts
 * @description Section numbering and labels for consistent UI badges
 * 
 * WHY: Provides consistent section numbering and labeling across all page sections.
 *      The numbered badges (01, 02, etc.) create visual hierarchy and help users
 *      understand their position in the content flow. Centralizing ensures
 *      renumbering is simple if sections are reordered.
 * 
 * WHAT: Section numbers (displayed in badges) and labels (displayed as text).
 * WHERE: Used in section header badges across all content sections.
 * WHO: Design team for visual consistency, content team for section organization.
 */

/** Numeric identifiers displayed in section badges */
export const SECTION_NUMBERS = {
  about: "02",
  services: "03",
  howItWorks: "04",
  technologies: "05",
  tools: "06",
  whyUs: "07",
  testimonials: "08",
  faq: "09",
  contact: "10",
} as const;

/** Human-readable labels for section badges */
export const SECTION_LABELS = {
  about: "About Us",
  services: "Our Services",
  howItWorks: "Process",
  technologies: "Technologies",
  tools: "Tools",
  whyUs: "Why Us",
  testimonials: "Testimonials",
  faq: "FAQs",
  contact: "Contact",
} as const;
