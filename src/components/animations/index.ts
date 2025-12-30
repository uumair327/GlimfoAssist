/**
 * @file index.ts
 * @description Barrel export for animation components
 * 
 * WHY: Provides single import point for all animation components.
 *      Simplifies imports and maintains clean component architecture.
 * 
 * HOW: Use `import { Card3D, AnimatedSection } from "@/components/animations"`.
 */

export { default as AnimatedSection } from "./AnimatedSection";
export { default as Card3D } from "./Card3D";
export { default as StaggerChildren } from "./StaggerChildren";
export { default as FloatingElement } from "./FloatingElement";
export { default as ParallaxLayer } from "./ParallaxLayer";
