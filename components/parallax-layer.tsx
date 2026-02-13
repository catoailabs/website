"use client";

import React from "react"

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // 0 = static, 0.5 = half speed, 1 = full speed
  className?: string;
}

/**
 * CSS-transform based parallax layer.
 * Respects prefers-reduced-motion.
 */
export function ParallaxLayer({
  children,
  speed = 0.3,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) return;

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const delta = (elementCenter - viewportCenter) * speed;
        setOffset(delta);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        transform: prefersReducedMotion
          ? undefined
          : `translateY(${offset * 0.1}px)`,
      }}
    >
      {children}
    </div>
  );
}
