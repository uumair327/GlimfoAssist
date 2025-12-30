/**
 * @file GradientText.tsx
 * @description Gradient text component for highlighted headings
 * 
 * WHY: Creates eye-catching gradient text for important headings.
 *      Centralizes gradient text styling for consistency.
 *      Supports animation for extra visual impact.
 * 
 * WHAT: Text wrapper that applies gradient coloring.
 * WHERE: Used in headings, CTAs, and highlighted text.
 */

import { ReactNode } from "react";
import { GRADIENTS } from "@/constants";

interface GradientTextProps {
  children: ReactNode;
  /** Gradient variant to use */
  variant?: "primary" | "shine";
  /** Enable shimmer animation */
  animate?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** HTML tag to render */
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

const GradientText = ({
  children,
  variant = "primary",
  animate = false,
  className = "",
  as: Tag = "span",
}: GradientTextProps) => {
  const gradientMap = {
    primary: GRADIENTS.textPrimary,
    shine: GRADIENTS.textShine,
  };

  return (
    <Tag
      className={`inline-block bg-clip-text text-transparent ${animate ? "animate-gradient bg-[length:200%_auto]" : ""} ${className}`}
      style={{
        backgroundImage: gradientMap[variant],
      }}
    >
      {children}
    </Tag>
  );
};

export default GradientText;
