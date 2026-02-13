"use client";

import { ArrowRight } from "lucide-react";
import { MicroLabel } from "@/components/micro-label";
import { PillButton } from "@/components/pill-button";

export function HomeHero() {
  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden pb-24 pt-32 lg:items-center lg:pb-0 lg:pt-0"
      aria-label="Hero"
    >
      <div className="container-site relative z-10 flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* ── Left: headline block, top-left aligned ── */}
        <div className="relative z-20 max-w-3xl">
          <div
            className="mb-8"
            style={{
              animation: "fade-in 0.6s cubic-bezier(0.2,0.8,0.2,1) 0.2s forwards",
              opacity: 0,
            }}
          >
            <MicroLabel>Cato Labs / AI Consultancy</MicroLabel>
          </div>

          <h1
            className="heading-hero font-heading text-foreground"
            style={{
              animation: "fade-in-up 1s cubic-bezier(0.2,0.8,0.2,1) 0.3s forwards",
              opacity: 0,
            }}
          >
            <span className="block">Agentic systems</span>
            <span className="block text-steel-blue">that ship.</span>
          </h1>

          <p
            className="body-large mt-8 max-w-lg text-pretty text-muted-foreground"
            style={{
              animation: "fade-in-up 0.9s cubic-bezier(0.2,0.8,0.2,1) 0.6s forwards",
              opacity: 0,
            }}
          >
            We architect and deploy production-grade AI systems for
            companies that refuse to wait.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            style={{
              animation: "fade-in-up 0.9s cubic-bezier(0.2,0.8,0.2,1) 0.85s forwards",
              opacity: 0,
            }}
          >
            <PillButton href="/contact" size="lg">
              Start a build
              <ArrowRight className="h-4 w-4" />
            </PillButton>
            <PillButton href="/work" variant="outline" size="lg">
              View work
            </PillButton>
          </div>
        </div>


      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
