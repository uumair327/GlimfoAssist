/**
 * @file animations.ts
 * @description Centralized animation constants and configurations
 * 
 * WHY: Centralizes all animation settings for consistency across the app.
 *      Makes it easy to adjust timing, easing, and effects globally.
 *      Enables cohesive motion design language throughout the UI.
 * 
 * WHAT: Animation durations, delays, easing functions, and 3D transform values.
 * WHERE: Used by animation components and CSS classes.
 * WHO: Developers for consistent animations, designers for motion tuning.
 */

/** Animation duration presets in milliseconds */
export const DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 700,
  slowest: 1000,
} as const;

/** Stagger delay for sequential animations */
export const STAGGER = {
  fast: 50,
  normal: 100,
  slow: 150,
} as const;

/** Easing functions for different animation feels */
export const EASING = {
  /** Smooth deceleration - good for entrances */
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  /** Smooth acceleration - good for exits */
  easeIn: "cubic-bezier(0.55, 0, 1, 0.45)",
  /** Smooth both ways - good for hover states */
  easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  /** Bouncy feel - good for playful interactions */
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  /** Spring-like - good for 3D transforms */
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

/** 3D transform values for depth effects */
export const TRANSFORMS_3D = {
  /** Perspective for 3D container */
  perspective: "1000px",
  /** Subtle tilt angles */
  tiltLight: "5deg",
  tiltMedium: "10deg",
  tiltHeavy: "15deg",
  /** Z-axis translations for depth */
  zNear: "50px",
  zFar: "-50px",
  /** Scale values for depth perception */
  scaleUp: 1.05,
  scaleDown: 0.95,
} as const;

/** Scroll-triggered animation thresholds */
export const SCROLL_TRIGGERS = {
  /** Percentage of element visible before triggering */
  threshold: 0.1,
  /** Root margin for earlier/later triggers */
  rootMargin: "-50px",
} as const;

/** Animation variant names for components */
export const ANIMATION_VARIANTS = {
  fadeIn: "fadeIn",
  fadeInUp: "fadeInUp",
  fadeInDown: "fadeInDown",
  fadeInLeft: "fadeInLeft",
  fadeInRight: "fadeInRight",
  scaleIn: "scaleIn",
  rotateIn: "rotateIn",
  slideUp: "slideUp",
  float: "float",
  pulse: "pulse",
  tilt3D: "tilt3D",
  cardHover3D: "cardHover3D",
} as const;

export type AnimationVariant = keyof typeof ANIMATION_VARIANTS;
