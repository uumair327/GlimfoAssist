/**
 * @file app.ts
 * @description Core application configuration and branding constants
 * 
 * WHY: Centralizes all brand identity and app-wide configuration in one place.
 *      This ensures consistency across the application and makes rebranding or
 *      configuration changes simple - update once, reflect everywhere.
 * 
 * WHAT: Contains brand name, tagline, description, API endpoints, and SEO settings.
 * WHERE: Used by Navbar, Footer, SEOHead, ContactSection, and meta tags.
 * WHO: Marketing team for branding, developers for configuration.
 */

export const BRAND = {
  /** Full brand name used in titles and formal references */
  name: "GlimfoAssist",
  /** Split brand name for styled logo rendering (first part + highlighted second part) */
  nameParts: {
    first: "Glimfo",
    second: "Assist",
  },
  /** Primary tagline for marketing and hero sections */
  tagline: "Technology Reports, Projects & Research Done Right",
  /** Meta description for SEO and social sharing */
  description: "Your trusted partner for technology-focused academic & professional work. High-quality technical writing, projects, documentation, and assignments.",
} as const;

export const APP_CONFIG = {
  /** Maximum content width for consistent layout across pages */
  maxWidth: "1400px",
  /** Email service API endpoint for contact form submissions */
  apiEndpoint: "/api/send-email",
} as const;

export const SEO_CONFIG = {
  /** Default page title for search engines */
  title: `${BRAND.name} - Technology Reports, Projects & Research`,
  /** Meta description for search engine results */
  description: BRAND.description,
  /** Target keywords for SEO optimization */
  keywords: "technical writing, project help, research paper, dissertation, thesis, system design, documentation, assignment help, CS projects, IT projects, AI ML projects, data science, programming help, academic writing, technical documentation",
  /** Canonical URL for the website */
  url: "https://glimfoassist.com",
  /** Open Graph image for social media sharing */
  ogImage: "https://glimfoassist.com/og-image.png",
  /** Twitter handle for social cards */
  twitterHandle: "@GlimfoAssist",
} as const;
