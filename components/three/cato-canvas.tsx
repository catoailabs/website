"use client";

import React from "react"

import { Suspense, lazy, useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { updateSceneState } from "@/components/three/cato-scene";

const CatoSceneLazy = lazy(() =>
  import("@/components/three/cato-scene").then((mod) => ({
    default: mod.CatoScene,
  }))
);

interface CatoCanvasProps {
  className?: string;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Full-viewport Three.js canvas with scroll + cursor binding.
 * Fixed position behind all DOM content.
 * Degrades to static gradient on reduced-motion or SSR.
 */
export function CatoCanvas({ className, scrollContainerRef }: CatoCanvasProps) {
  const [mounted, setMounted] = useState(false);
  const rafId = useRef<number>(0);
  const scrollVal = useRef(0);
  const cursorXRef = useRef(0);
  const cursorYRef = useRef(0);

  const handleMouse = useCallback((e: MouseEvent) => {
    cursorXRef.current = (e.clientX / window.innerWidth) * 2 - 1;
    cursorYRef.current = (e.clientY / window.innerHeight) * 2 - 1;
    updateSceneState(scrollVal.current, cursorXRef.current, cursorYRef.current);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollContainer = scrollContainerRef?.current;
    if (scrollContainer) {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      scrollVal.current = scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0;
    } else {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollVal.current = scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0;
    }
    updateSceneState(scrollVal.current, cursorXRef.current, cursorYRef.current);
  }, [scrollContainerRef]);

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setMounted(true);
      return;
    }

    // Delay mount slightly for better CWV
    const timer = setTimeout(() => setMounted(true), 80);

    window.addEventListener("mousemove", handleMouse, { passive: true });
    const scrollTarget = scrollContainerRef?.current || window;
    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouse);
      scrollTarget.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleMouse, handleScroll, scrollContainerRef]);

  // Always render the same static shell on server AND initial client render.
  // The 3D canvas only mounts after useEffect fires (client-only).
  const showCanvas = mounted && typeof window !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className={cn("fixed inset-0 -z-10", className)}
      aria-hidden="true"
      suppressHydrationWarning
    >
      <div className="absolute inset-0 depth-gradient" />
      <div className="absolute inset-0 halo-bg" />

      {showCanvas && (
        <Suspense fallback={null}>
          <CatoSceneLazy />
        </Suspense>
      )}
    </div>
  );
}
