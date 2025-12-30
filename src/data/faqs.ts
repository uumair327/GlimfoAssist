/**
 * @file faqs.ts
 * @description Frequently Asked Questions data
 * 
 * WHY: FAQs address common concerns and objections, reducing support
 *      inquiries and building trust. They also improve SEO through
 *      structured data (FAQ schema). Separating allows easy updates
 *      based on actual customer questions.
 * 
 * WHAT: Array of FAQ objects with question and answer pairs.
 * WHERE: Rendered by FAQSection as an accordion, also used in SEO schema.
 * WHO: Support team for common questions, marketing for objection handling.
 */

export interface FAQ {
  /** The question being addressed */
  question: string;
  /** The answer/explanation */
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Is the work plagiarism-free?",
    answer: "Yes, all content is written from scratch and checked using plagiarism detection tools to ensure 100% originality.",
  },
  {
    question: "Do you maintain confidentiality?",
    answer: "Absolutely. Your data and identity are completely secure. We never share client information with third parties.",
  },
  {
    question: "Will I get code and documentation?",
    answer: "Yes, complete deliverables are provided including source code, documentation, reports, and any additional materials as per your requirements.",
  },
  {
    question: "Do you help after delivery?",
    answer: "Yes, limited post-delivery support is included to help you understand the work, make minor adjustments, and prepare for presentations or vivas.",
  },
];
