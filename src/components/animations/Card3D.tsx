/**
 * @file Card3D.tsx
 * @description 3D tilt effect card component
 * 
 * WHY: Adds depth and interactivity to cards with mouse-tracking 3D tilt.
 *      Creates a premium, modern feel that engages users.
 *      The effect responds to cursor position for natural interaction.
 * 
 * WHAT: Card wrapper with 3D perspective tilt on hover.
 * WHERE: Used for service cards, testimonial cards, stat cards.
 * HOW: Tracks mouse position, calculates tilt angles, applies 3D transforms.
 */

import { useState, useRef, ReactNode, MouseEvent } from "react";
import { TRANSFORMS_3D, DURATIONS, EASING } from "@/constants";

interface Card3DProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Intensity of the tilt effect (1-20) */
  intensity?: number;
  /** Enable/disable the glow effect */
  glowEffect?: boolean;
}

const Card3D = ({
  children,
  className = "",
  intensity = 10,
  glowEffect = true,
}: Card3DProps) => {
  const [transform, setTransform] = useState("");
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setTransform(
      `perspective(${TRANSFORMS_3D.perspective}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );

    // Update glow position
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || "perspective(1000px) rotateX(0) rotateY(0)",
        transition: transform 
          ? `transform ${DURATIONS.fast}ms ${EASING.easeOut}` 
          : `transform ${DURATIONS.normal}ms ${EASING.easeOut}`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow effect overlay */}
      {glowEffect && transform && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-50"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, hsl(24 95% 53% / 0.3) 0%, transparent 60%)`,
            transition: `opacity ${DURATIONS.fast}ms`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default Card3D;
