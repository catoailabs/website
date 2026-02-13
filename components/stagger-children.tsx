"use client";

import React from "react"

import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerMs?: number;
  durationMs?: number;
}

/**
 * Staggers the entrance animation of direct children
 * using Intersection Observer for viewport-triggered reveals.
 */
export function StaggerChildren({
  children,
  className,
  staggerMs = 80,
  durationMs = 600,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <div
            className={cn(
              "transition-all ease-cato",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            )}
            style={{
              transitionDuration: `${durationMs}ms`,
              transitionDelay: isVisible ? `${i * staggerMs}ms` : "0ms",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
