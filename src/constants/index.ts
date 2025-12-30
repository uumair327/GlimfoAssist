/**
 * @file index.ts
 * @description Barrel export for all application constants
 * 
 * WHY: Provides a single import point for all constants, simplifying imports
 *      throughout the application. Instead of importing from multiple files,
 *      components can import everything from "@/constants".
 * 
 * WHAT: Re-exports all constants from individual constant files.
 * WHERE: Imported by components, pages, and utilities across the app.
 * HOW: Use `import { BRAND, CONTACT_INFO } from "@/constants"`.
 */

export { APP_CONFIG, BRAND, SEO_CONFIG } from "./app";
export { CONTACT_INFO, SOCIAL_LINKS } from "./contact";
export { NAV_LINKS, SERVICE_OPTIONS } from "./navigation";
export type { NavLink, ServiceOption, TabId } from "./navigation";
export { SECTION_NUMBERS, SECTION_LABELS } from "./sections";
export { MESSAGES } from "./messages";
export { 
  DURATIONS, 
  STAGGER, 
  EASING, 
  TRANSFORMS_3D, 
  SCROLL_TRIGGERS, 
  ANIMATION_VARIANTS 
} from "./animations";
export type { AnimationVariant } from "./animations";
export { GRADIENTS, GRADIENT_CLASSES } from "./gradients";
