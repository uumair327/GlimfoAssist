/**
 * @file ParallaxLayer.tsx
 * @description Parallax scrolling effect component
 * 
 * WHY: Creates depth and immersion through differential scroll speeds.
 *      Parallax effects make the UI feel more dynamic and engaging.
 *      Different layers moving at different speeds create 3D illusion.
 * 
 * WHAT: Container that moves at a different rate than scroll.
 * WHERE: Used for background elements, decorative shapes.
 * HOW: Listens to scroll events, applies transform based on scroll position.
 */

import { useEffect, useState, ReactNode, useRef } from "react";
import { EASING } from "@/constants";

interface ParallaxLayerProps {
  children: ReactNode;
  /** Speed multiplier (0.1 = slow, 1 = normal, 2 = fast) */
  speed?: number;
  /** Direction of parallax movement */
  direction?: "up" | "down";
  /** Custom className */
  className?: string;
}

const ParallaxLayer = ({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxLayerProps) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const relativeScroll = scrolled - elementTop + window.innerHeight;
      
      const movement = relativeScroll * speed * (direction === "up" ? -1 : 1);
      setOffset(movement);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset * 0.1}px)`,
        transition: `transform 0.1s ${EASING.easeOut}`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
