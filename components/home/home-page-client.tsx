"use client";

import { CatoCanvas } from "@/components/three/cato-canvas";
import { HomeHero } from "@/components/home/hero";
import { HomeServices } from "@/components/home/services";
import { HomeProof } from "@/components/home/proof";
import { HomeProcess } from "@/components/home/process";
import { HomeCTA } from "@/components/home/cta";

/**
 * HomePageClient: orchestrates the fixed Three.js canvas with
 * scroll-driven chapters overlaid as DOM content.
 * The canvas reads window.scrollY to drive camera + scene transitions.
 */
export function HomePageClient() {
  return (
    <div className="relative">
      {/* Fixed 3D canvas behind everything */}
      <CatoCanvas />

      {/* Scroll chapters — DOM content over the canvas */}
      <div className="relative z-10">
        <HomeHero />
        <HomeServices />
        <HomeProof />
        <HomeProcess />
        <HomeCTA />
      </div>
    </div>
  );
}
