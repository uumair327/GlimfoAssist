/**
 * @file GradientBackground.tsx
 * @description Gradient background overlay component
 * 
 * WHY: Provides consistent gradient backgrounds across sections.
 *      Creates depth and visual interest without overwhelming content.
 *      Centralizes background styling for easy theme updates.
 * 
 * WHAT: Absolute positioned gradient overlay for sections.
 * WHERE: Used as background for hero, sections, and cards.
 */

import { GRADIENTS } from "@/constants";

interface GradientBackgroundProps {
  /** Gradient variant */
  variant?: "glow" | "mesh" | "radial" | "subtle";
  /** Opacity level (0-100) */
  opacity?: number;
  /** Additional CSS classes */
  className?: string;
}

const GradientBackground = ({
  variant = "glow",
  opacity = 100,
  className = "",
}: GradientBackgroundProps) => {
  const gradientMap = {
    glow: GRADIENTS.sectionGlow,
    mesh: GRADIENTS.meshOverlay,
    radial: GRADIENTS.backgroundRadial,
    subtle: GRADIENTS.primarySubtle,
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: gradientMap[variant],
        opacity: opacity / 100,
      }}
      aria-hidden="true"
    />
  );
};

export default GradientBackground;
