/**
 * @file navigation.ts
 * @description Navigation structure and service options for forms
 * 
 * WHY: Defines the site's navigation structure in one place, enabling:
 *      - Consistent nav items across desktop and mobile menus
 *      - Type-safe tab switching with TabId union type
 *      - Easy addition/removal of pages without touching components
 * 
 * WHAT: Navigation links with tab IDs, and service dropdown options.
 * WHERE: Used by Navbar for menu items, Index for tab routing, ContactSection for form.
 * WHO: UX team for navigation structure, developers for routing logic.
 */

/** Valid tab identifiers for type-safe navigation */
export type TabId = "home" | "about" | "services" | "how-it-works" | "contact";

export interface NavLink {
  /** Display text for the navigation item */
  name: string;
  /** Tab identifier for routing */
  id: TabId;
}

/** Main navigation links - order determines display order */
export const NAV_LINKS: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "How It Works", id: "how-it-works" },
  { name: "Contact", id: "contact" },
];

export interface ServiceOption {
  /** Form value submitted with the request */
  value: string;
  /** User-facing label in dropdown */
  label: string;
}

/** Service options for contact form dropdown - matches offered services */
export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: "Technical Report Writing", label: "Technical Report Writing" },
  { value: "Technical Project", label: "Technical Projects" },
  { value: "Dissertation", label: "Dissertation" },
  { value: "Research Paper", label: "Research Paper" },
  { value: "System Design", label: "System Design" },
  { value: "Documentation", label: "Documentation" },
  { value: "Assignment Help", label: "Assignment Help" },
  { value: "Other", label: "Other" },
];
