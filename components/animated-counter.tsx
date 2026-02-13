"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

/**
 * Animates a number counting up when it enters the viewport.
 * Handles values like "50K+", "98%", "12wk" etc.
 */
export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Extract numeric part
          const match = value.match(/^(\d+\.?\d*)/);
          if (!match) return;

          const target = parseFloat(match[1]);
          const suffix = value.slice(match[0].length);
          const duration = 1200;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target * 10) / 10;

            if (Number.isInteger(target)) {
              setDisplayed(Math.round(eased * target) + suffix);
            } else {
              setDisplayed(current.toFixed(1) + suffix);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={cn(className)}>
      {displayed}
    </span>
  );
}
