/**
 * @file messages.ts
 * @description All user-facing text content and copy
 * 
 * WHY: Centralizes all UI text to enable:
 *      - Easy content updates without touching component code
 *      - Consistent messaging across the application
 *      - Future internationalization (i18n) support
 *      - A/B testing of marketing copy
 *      - Content review by non-developers
 * 
 * WHAT: All strings displayed to users - headings, descriptions, buttons, toasts.
 * WHERE: Used by every component that displays text content.
 * WHO: Marketing team for copy updates, translators for i18n.
 */

import { BRAND } from "./app";

export const MESSAGES = {
  /** Hero section - first impression, key value proposition */
  hero: {
    badge: "Trusted by 1000+ Students & Professionals",
    title: ["Technology Reports,", "Projects & Research", "Done Right"],
    subtitle: "Your trusted partner for technology-focused academic & professional work. We deliver high-quality technical writing, projects, documentation, and assignments.",
    features: [
      "100% Original & Plagiarism-Free",
      "Industry-Oriented",
      "Complete Documentation + Code",
      "Confidential & Secure",
    ],
    cta: "Upload Requirements",
    /** Hidden text for SEO - not visible but indexed by search engines */
    seoText: `${BRAND.name} provides expert technical writing services, final year project help, dissertation writing, research paper assistance, system design, and documentation for computer science, IT, AI/ML, data science, and emerging technology students and professionals.`,
  },

  /** About section - builds trust and credibility */
  about: {
    title: ["Built by Engineers.", "Trusted by Tech Minds."],
    description: `${BRAND.name} is powered by a team of software engineers and technical writers with hands-on industry and academic experience. We understand how technology is evaluated—whether by professors, reviewers, clients, or technical teams.`,
    mission: "Our mission is to help you learn, submit, present, and succeed with technically sound and well-documented work.",
    stats: [
      { value: "1000+", label: "Students Helped" },
      { value: "100+", label: "Projects Delivered" },
      { value: "99%", label: "Success Rate" },
    ],
  },

  /** Services section - showcases offerings */
  services: {
    title: "Complete Tech Solutions",
    subtitle: "From technical writing to full project development, we cover all your technology-focused academic and professional needs.",
  },

  /** How it works section - explains the process */
  howItWorks: {
    title: "How It Works",
    subtitle: "Simple, transparent, and efficient process to get your tech work done right.",
  },

  /** Technologies section - demonstrates technical expertise */
  technologies: {
    title: "Technologies We Work With",
    toolsTitle: "Tools & Tech Stack",
  },

  /** Why choose section - differentiators and USPs */
  whyChoose: {
    title: `Why Choose ${BRAND.name}`,
  },

  /** Testimonials section - social proof */
  testimonials: {
    title: "What Our Clients Say",
  },

  /** FAQ section - addresses common concerns */
  faq: {
    title: "Frequently Asked Questions",
  },

  /** Contact section - conversion point */
  contact: {
    title: ["Get Your Tech Project", "Done Right"],
    subtitle: "Ready to start? Share your requirements and let our expert team help you succeed.",
    formTitle: "Upload Your Requirements",
    emailLabel: "Email Us",
    phoneLabel: "Contact Us",
    submitButton: "Submit Requirements",
    submittingButton: "Submitting...",
  },

  /** Form placeholders - guide user input */
  form: {
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    servicePlaceholder: "Select a service",
    detailsPlaceholder: "Describe your requirements...",
  },

  /** Toast messages - user feedback for actions */
  toast: {
    success: "Requirements submitted successfully! We'll get back to you soon.",
    error: "Failed to submit requirements. Please try again or contact us directly.",
    validationError: "Please fill in all fields",
    emailError: "Please enter a valid email address",
  },

  /** Footer - legal and branding */
  footer: {
    copyright: `© ${new Date().getFullYear()} ${BRAND.name}. All Rights Reserved.`,
  },

  /** CTA buttons - action triggers */
  cta: {
    getStarted: "Get Started",
  },
} as const;
