"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MicroLabel } from "@/components/micro-label";
import { AnimateIn } from "@/components/animate-in";

/* ─── Capability tile data ─── */
const capabilities = [
  {
    title: "Agentic Systems",
    outcome: "Autonomous agents that reason, plan, and execute multi-step workflows with human-in-the-loop oversight.",
    tag: "orchestration",
    href: "/services/agentic-systems",
  },
  {
    title: "LLMOps & Infrastructure",
    outcome: "Scalable infrastructure for deploying and managing LLMs in production with full observability.",
    tag: "infra",
    href: "/services/llmops-infrastructure",
  },
  {
    title: "RAG & Retrieval",
    outcome: "Semantic retrieval pipelines that ground AI responses in your proprietary knowledge base.",
    tag: "search",
    href: "/services/rag-search-retrieval",
  },
  {
    title: "AI Security & Governance",
    outcome: "Adversarial testing, red teaming, and compliance frameworks for trustworthy AI deployment.",
    tag: "security",
    href: "/services/security-governance",
  },
];

/* ─── Blueprint overlay: thin measurement lines + subtle noise ─── */
function BlueprintOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      {/* Noise texture via repeating gradient */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          backgroundSize: "128px 128px",
        }}
      />
      {/* Thin measurement lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Horizontal datum line */}
        <line x1="16" y1="16" x2="384" y2="16" stroke="hsl(215 100% 71% / 0.2)" strokeWidth="0.5" strokeDasharray="4 6" />
        {/* Vertical datum line */}
        <line x1="16" y1="16" x2="16" y2="184" stroke="hsl(215 100% 71% / 0.2)" strokeWidth="0.5" strokeDasharray="4 6" />
        {/* Dimension arrows */}
        <line x1="16" y1="190" x2="384" y2="190" stroke="hsl(215 100% 71% / 0.15)" strokeWidth="0.5" />
        <line x1="16" y1="186" x2="16" y2="194" stroke="hsl(215 100% 71% / 0.15)" strokeWidth="0.5" />
        <line x1="384" y1="186" x2="384" y2="194" stroke="hsl(215 100% 71% / 0.15)" strokeWidth="0.5" />
        {/* Corner brackets */}
        <path d="M 16 30 L 16 16 L 30 16" stroke="hsl(215 100% 71% / 0.3)" strokeWidth="0.8" />
        <path d="M 384 30 L 384 16 L 370 16" stroke="hsl(215 100% 71% / 0.3)" strokeWidth="0.8" />
        <path d="M 16 170 L 16 184 L 30 184" stroke="hsl(215 100% 71% / 0.3)" strokeWidth="0.8" />
        <path d="M 384 170 L 384 184 L 370 184" stroke="hsl(215 100% 71% / 0.3)" strokeWidth="0.8" />
      </svg>
      {/* Measurement text */}
      <span className="absolute right-4 top-2 font-mono text-[9px] tracking-widest text-steel-blue/30">
        1240 x 320
      </span>
    </div>
  );
}

/* ─── Main Capabilities Section ─── */
export function HomeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative section-padding" id="capabilities">
      <div className="container-site">
        <AnimateIn>
          <div className="mb-20">
            <MicroLabel className="mb-4 block">Chapter 01</MicroLabel>
            <h2 className="heading-section font-heading text-foreground">
              Capabilities as artifacts
            </h2>
            <p className="body-large mt-4 max-w-xl text-muted-foreground">
              Each capability is a system we have shipped. Not a slide deck.
            </p>
          </div>
        </AnimateIn>

        {/* Broken grid: 2 cols, but items have varying heights/spans */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-[auto_auto]">
          {capabilities.map((cap, i) => {
            // Broken grid: first and last tiles are taller
            const isTall = i === 0 || i === 3;

            return (
              <AnimateIn key={cap.tag} delay={i * 80}>
                <Link
                  href={cap.href}
                  className={`group relative block overflow-hidden rounded-glass border border-border/20 bg-card/30 backdrop-blur-sm transition-all duration-500 ease-cato hover:border-steel-blue/20 hover:bg-card/50 hover:shadow-[0_0_40px_hsl(var(--steel-blue)/0.06)] ${
                    isTall ? "min-h-[280px] md:min-h-[340px]" : "min-h-[240px] md:min-h-[280px]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Blueprint overlay on hover */}
                  <BlueprintOverlay />

                  <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-10">
                    <div>
                      {/* Mono tag */}
                      <span className="mb-6 inline-block font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-300 group-hover:text-steel-blue">
                        {cap.tag}
                      </span>

                      {/* Title */}
                      <h3 className="mb-3 font-heading text-xl font-semibold text-foreground lg:text-2xl">
                        {cap.title}
                      </h3>

                      {/* 2-line outcome */}
                      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-base">
                        {cap.outcome}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-steel-blue opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Subtle corner glow */}
                  <div
                    className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500"
                    style={{
                      background: "hsl(215 100% 71% / 0.04)",
                      opacity: hoveredIndex === i ? 1 : 0,
                    }}
                  />
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
