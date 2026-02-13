"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MicroLabel } from "@/components/micro-label";
import { PillButton } from "@/components/pill-button";
import { AnimateIn } from "@/components/animate-in";
import { caseStudies, services } from "@/lib/data";

const oversizedNumbers = ["01", "02", "03"];

export function HomeProof() {
  return (
    <section className="relative section-padding" id="selected-work">
      <div className="container-site">
        <AnimateIn>
          <div className="mb-20">
            <MicroLabel className="mb-4 block">Chapter 02</MicroLabel>
            <h2 className="heading-section font-heading text-foreground">
              Selected work
            </h2>
          </div>
        </AnimateIn>

        {/* Editorial asymmetric layout */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {caseStudies.map((study, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimateIn key={study.slug} delay={i * 120}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group block"
                >
                  <div className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Oversized number */}
                    <div className={`flex-shrink-0 ${isEven ? "lg:text-left" : "lg:text-right"}`}>
                      <span
                        className="font-heading text-[8rem] font-bold leading-none tracking-tighter text-foreground/[0.04] lg:text-[12rem]"
                        aria-hidden="true"
                      >
                        {oversizedNumbers[i]}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="-mt-16 flex-1 lg:-mt-8">
                      {/* Service chips */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {study.services.map((sSlug) => {
                          const svc = services.find((s) => s.slug === sSlug);
                          return (
                            <span
                              key={sSlug}
                              className="rounded-full border border-steel-blue/20 bg-steel-blue/5 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-steel-blue"
                            >
                              {svc?.shortTitle || sSlug}
                            </span>
                          );
                        })}
                      </div>

                      <h3 className="mb-3 font-heading text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-steel-blue lg:text-3xl">
                        {study.title}
                      </h3>

                      <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted-foreground lg:text-base">
                        {study.excerpt}
                      </p>

                      {/* Metric chips */}
                      <div className="flex flex-wrap gap-3">
                        {study.metrics.slice(0, 3).map((m) => (
                          <div
                            key={m.label}
                            className="rounded-lg border border-border/40 bg-card/40 px-4 py-2.5 backdrop-blur-sm"
                          >
                            <p className="font-heading text-lg font-bold text-foreground">
                              {m.value}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Arrow indicator */}
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-steel-blue opacity-0 transition-all duration-300 group-hover:opacity-100">
                        Read case study
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={400}>
          <div className="mt-20 text-center">
            <PillButton href="/work" variant="outline">
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </PillButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
