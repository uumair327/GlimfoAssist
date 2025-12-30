/**
 * @file index.ts
 * @description Barrel export for all application data
 * 
 * WHY: Provides a single import point for all static data, separating
 *      content from presentation. This enables:
 *      - Easy content updates without modifying components
 *      - Potential future CMS integration
 *      - Clear separation of concerns
 * 
 * WHAT: Re-exports services, steps, technologies, testimonials, FAQs, and reasons.
 * WHERE: Imported by section components that render this data.
 * HOW: Use `import { services, faqs } from "@/data"`.
 */

export { services } from "./services";
export type { Service } from "./services";

export { steps } from "./steps";
export type { Step } from "./steps";

export { technologies, tools } from "./technologies";

export { testimonials } from "./testimonials";
export type { Testimonial } from "./testimonials";

export { faqs } from "./faqs";
export type { FAQ } from "./faqs";

export { reasons } from "./reasons";
export type { Reason } from "./reasons";
