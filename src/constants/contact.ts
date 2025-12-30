/**
 * @file contact.ts
 * @description Contact information and social media links
 * 
 * WHY: Centralizes all contact details to ensure consistency across the site.
 *      When contact info changes, update here once instead of hunting through
 *      multiple components. Also enables easy A/B testing of contact methods.
 * 
 * WHAT: Email addresses, phone numbers, WhatsApp, and social media links.
 * WHERE: Used in ContactSection, Footer, WhatsAppFloat, and email templates.
 * WHO: Business owners for contact updates, support team for inquiries.
 */

export const CONTACT_INFO = {
  /** All business email addresses for form submissions */
  emails: ["help.glimfo@gmail.com"],
  /** Primary email displayed prominently */
  primaryEmail: "help.glimfo@gmail.com",
  /** Phone numbers for direct contact */
  phones: ["+91 9049116748", "+91 **********"],
  /** Main phone number for primary display */
  primaryPhone: "+91 9049116748",
  /** WhatsApp number without + symbol for wa.me links */
  whatsapp: "919049116748",
} as const;

export const SOCIAL_LINKS = {
  /** LinkedIn company page URL */
  linkedin: "https://www.linkedin.com/in/uumair327",
  /** Twitter/X profile URL */
  twitter: "https://twitter.com/uumair327",
  /** GitHub repository URL */
  github: "https://github.com/uumair327/GlimfoAssist",
} as const;
