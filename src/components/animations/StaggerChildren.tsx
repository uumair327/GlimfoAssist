/**
 * @file StaggerChildren.tsx
 * @description Staggered animation container for child elements
 * 
 * WHY: Creates visually appealing sequential animations for lists/grids.
 *      Staggered animations guide the eye and feel more natural than
 *      simultaneous animations. Centralizes stagger logic for reuse.
 * 
 * WHAT: Container that animates children with incremental delays.
 * WHERE: Used for service grids, tech tags, step lists.
 * HOW: Clones children and applies incremental animation delays.
 */

import { ReactNode, Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import { STAGGER, SCROLL_TRIGGERS, DURATIONS, EASING } from "@/constants";

interface StaggerChildrenProps {
  children: ReactNode;
  /** Delay between each child animation (ms) */
  staggerDelay?: number;
  /** Base delay before first animation (ms) */
  baseDelay?: number;
  /** Animation type */
  animation?: "fadeInUp" | "fadeIn" | "scaleIn" | "fadeInLeft";
  /** Custom className for container */
  className?: string;
}

const StaggerChildren = ({
  children,
  staggerDelay = STAGGER.normal,
  baseDelay = 0,
  animation = "fadeInUp",
  className = "",
}: StaggerChildrenProps) => {
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

  const getAnimationStyle = (index: number) => {
    const delay = baseDelay + index * staggerDelay;
    
    const animations = {
      fadeInUp: {
        initial: { opacity: 0, transform: "translateY(30px)" },
        animate: { opacity: 1, transform: "translateY(0)" },
      },
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      },
      scaleIn: {
        initial: { opacity: 0, transform: "scale(0.8)" },
        animate: { opacity: 1, transform: "scale(1)" },
      },
      fadeInLeft: {
        initial: { opacity: 0, transform: "translateX(-20px)" },
        animate: { opacity: 1, transform: "translateX(0)" },
      },
    };

    const anim = animations[animation];
    const style = isVisible ? anim.animate : anim.initial;

    return {
      ...style,
      transition: `all ${DURATIONS.slow}ms ${EASING.easeOut}`,
      transitionDelay: `${delay}ms`,
    };
  };

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as React.ReactElement<{ style?: React.CSSProperties }>, {
            style: {
              ...(child.props.style || {}),
              ...getAnimationStyle(index),
            },
          });
        }
        return child;
      })}
    </div>
  );
};

export default StaggerChildren;
