"use client";

import { ArrowRight, Mail } from "lucide-react";
import { MicroLabel } from "@/components/micro-label";
import { PillButton } from "@/components/pill-button";
import { AnimateIn } from "@/components/animate-in";

export function HomeCTA() {
  return (
    <section className="relative section-padding" id="cta">
      <div className="container-site">
        <AnimateIn>
          <div className="mb-6">
            <MicroLabel className="mb-4 block">Chapter 04</MicroLabel>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="relative overflow-hidden rounded-glass border border-border/20 bg-card/30 backdrop-blur-xl">
            {/* Halo glow */}
            <div className="pointer-events-none absolute inset-0 halo-bg opacity-50" />
            <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-steel-blue/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-ice-blue/5 blur-3xl" />

            <div className="relative px-8 py-20 lg:px-20 lg:py-28">
              {/* Massive closing line */}
              <h2 className="heading-hero max-w-4xl font-heading text-foreground">
                Build something that looks{" "}
                <span className="text-steel-blue">inevitable.</span>
              </h2>

              <div className="mt-12 flex flex-wrap gap-4">
                <PillButton href="/contact" size="lg">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </PillButton>
                <PillButton
                  href="mailto:hello@catolabs.ai"
                  variant="outline"
                  size="lg"
                >
                  <Mail className="h-4 w-4" />
                  Email us
                </PillButton>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
