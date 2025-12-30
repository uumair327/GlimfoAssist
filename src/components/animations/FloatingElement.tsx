/**
 * @file FloatingElement.tsx
 * @description Floating animation wrapper with 3D depth
 * 
 * WHY: Adds subtle motion to static elements, creating visual interest.
 *      The floating effect suggests lightness and modernity.
 *      3D rotation adds depth perception to the animation.
 * 
 * WHAT: Wrapper that applies continuous floating animation.
 * WHERE: Used for hero images, decorative elements, icons.
 * HOW: CSS keyframe animation with 3D transforms.
 */

import { ReactNode } from "react";
import { DURATIONS } from "@/constants";

interface FloatingElementProps {
  children: ReactNode;
  /** Animation duration in seconds */
  duration?: number;
  /** Vertical float distance in pixels */
  distance?: number;
  /** Enable 3D rotation during float */
  rotate3D?: boolean;
  /** Animation delay in seconds */
  delay?: number;
  /** Custom className */
  className?: string;
}

const FloatingElement = ({
  children,
  duration = 6,
  distance = 15,
  rotate3D = false,
  delay = 0,
  className = "",
}: FloatingElementProps) => {
  const animationName = rotate3D ? "float3D" : "float";
  
  return (
    <div
      className={className}
      style={{
        animation: `${animationName} ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        // CSS custom properties for the animation
        ["--float-distance" as string]: `${distance}px`,
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
