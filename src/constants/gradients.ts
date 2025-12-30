/**
 * @file gradients.ts
 * @description Centralized gradient definitions for consistent styling
 * 
 * WHY: Centralizes all gradient definitions for brand consistency.
 *      Makes it easy to update the color scheme across the entire app.
 *      Provides both CSS strings and Tailwind-compatible classes.
 * 
 * WHAT: Primary, accent, background, and text gradient definitions.
 * WHERE: Used by GradientText, GradientBackground, and section components.
 * WHO: Designers for brand colors, developers for consistent styling.
 */

/** Primary brand gradients using orange/amber tones */
export const GRADIENTS = {
  /** Main brand gradient - orange to amber */
  primary: "linear-gradient(135deg, hsl(24, 95%, 53%) 0%, hsl(35, 100%, 60%) 100%)",
  /** Reversed primary gradient */
  primaryReverse: "linear-gradient(135deg, hsl(35, 100%, 60%) 0%, hsl(24, 95%, 53%) 100%)",
  /** Subtle primary for backgrounds */
  primarySubtle: "linear-gradient(135deg, hsl(24, 95%, 53%, 0.1) 0%, hsl(35, 100%, 60%, 0.1) 100%)",
  
  /** Accent gradient - warm tones */
  accent: "linear-gradient(135deg, hsl(30, 100%, 65%) 0%, hsl(20, 100%, 55%) 100%)",
  
  /** Dark background gradients */
  backgroundDark: "linear-gradient(180deg, hsl(220, 20%, 6%) 0%, hsl(220, 20%, 4%) 100%)",
  backgroundRadial: "radial-gradient(ellipse at top, hsl(220, 18%, 12%) 0%, hsl(220, 20%, 6%) 70%)",
  
  /** Card/section background gradients */
  cardGlow: "radial-gradient(circle at 50% 0%, hsl(24, 95%, 53%, 0.15) 0%, transparent 50%)",
  sectionGlow: "radial-gradient(ellipse at center top, hsl(24, 95%, 53%, 0.1) 0%, transparent 60%)",
  
  /** Text gradients */
  textPrimary: "linear-gradient(135deg, hsl(24, 95%, 53%) 0%, hsl(35, 100%, 65%) 50%, hsl(24, 95%, 53%) 100%)",
  textShine: "linear-gradient(90deg, hsl(24, 95%, 53%) 0%, hsl(45, 100%, 70%) 50%, hsl(24, 95%, 53%) 100%)",
  
  /** Border gradients */
  borderPrimary: "linear-gradient(135deg, hsl(24, 95%, 53%, 0.5) 0%, hsl(35, 100%, 60%, 0.3) 100%)",
  borderGlow: "linear-gradient(135deg, hsl(24, 95%, 53%, 0.8) 0%, hsl(35, 100%, 60%, 0.4) 100%)",
  
  /** Mesh/overlay gradients */
  meshOverlay: `
    radial-gradient(at 40% 20%, hsl(24, 95%, 53%, 0.15) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsl(35, 100%, 60%, 0.1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsl(24, 95%, 53%, 0.1) 0px, transparent 50%)
  `,
} as const;

/** Tailwind-compatible gradient class names */
export const GRADIENT_CLASSES = {
  /** Primary gradient background */
  bgPrimary: "bg-gradient-to-br from-primary to-amber-400",
  /** Subtle gradient background */
  bgSubtle: "bg-gradient-to-br from-primary/10 to-amber-400/10",
  /** Text gradient */
  textPrimary: "bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent",
  /** Border gradient (requires wrapper) */
  borderPrimary: "bg-gradient-to-br from-primary/50 to-amber-400/30",
} as const;
