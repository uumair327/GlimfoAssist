/**
 * @file AnimatedSection.tsx
 * @description Scroll-triggered animation wrapper component
 * 
 * WHY: Provides consistent scroll-triggered animations across sections.
 *      Uses Intersection Observer for performance-efficient detection.
 *      Centralizes animation logic to avoid repetition in each section.
 * 
 * WHAT: Wrapper that animates children when scrolled into view.
 * WHERE: Wraps section content for entrance animations.
 * HOW: Uses IntersectionObserver to detect visibility, applies CSS classes.
 */

import { useEffect, useRef, useState, ReactNode } from "react";
import { SCROLL_TRIGGERS, DURATIONS, EASING } from "@/constants";

interface AnimatedSectionProps {
  children: ReactNode;
  /** Animation variant to apply */
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Custom className */
  className?: string;
}

const AnimatedSection = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: SCROLL_TRIGGERS.threshold,
        rootMargin: SCROLL_TRIGGERS.rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationStyles = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    fadeInUp: {
      initial: { opacity: 0, transform: "translateY(40px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    fadeInDown: {
      initial: { opacity: 0, transform: "translateY(-40px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    fadeInLeft: {
      initial: { opacity: 0, transform: "translateX(-40px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    fadeInRight: {
      initial: { opacity: 0, transform: "translateX(40px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    scaleIn: {
      initial: { opacity: 0, transform: "scale(0.9)" },
      animate: { opacity: 1, transform: "scale(1)" },
    },
  };

  const currentAnimation = animationStyles[animation];
  const style = isVisible ? currentAnimation.animate : currentAnimation.initial;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transition: `all ${DURATIONS.slow}ms ${EASING.easeOut}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
