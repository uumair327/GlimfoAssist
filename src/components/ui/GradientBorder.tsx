/**
 * @file GradientBorder.tsx
 * @description Gradient border wrapper component
 * 
 * WHY: Creates visually striking gradient borders for cards and containers.
 *      CSS gradient borders require a wrapper technique - this abstracts it.
 *      Adds premium feel to important UI elements.
 * 
 * WHAT: Wrapper that creates gradient border effect using pseudo-elements.
 * WHERE: Used for featured cards, CTAs, and highlighted sections.
 */

import { ReactNode } from "react";
import { GRADIENTS } from "@/constants";

interface GradientBorderProps {
  children: ReactNode;
  /** Border width in pixels */
  borderWidth?: number;
  /** Border radius */
  borderRadius?: string;
  /** Additional CSS classes for outer wrapper */
  className?: string;
  /** Enable glow effect */
  glow?: boolean;
}

const GradientBorder = ({
  children,
  borderWidth = 1,
  borderRadius = "1rem",
  className = "",
  glow = false,
}: GradientBorderProps) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        padding: borderWidth,
        borderRadius,
        background: GRADIENTS.borderPrimary,
      }}
    >
      {/* Glow effect */}
      {glow && (
        <div
          className="absolute inset-0 opacity-50 blur-xl -z-10"
          style={{
            background: GRADIENTS.primary,
            borderRadius,
          }}
        />
      )}
      {/* Inner content */}
      <div
        className="relative bg-card h-full"
        style={{ borderRadius: `calc(${borderRadius} - ${borderWidth}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;
