"use client";

import { useState } from "react";
import { MicroLabel } from "@/components/micro-label";
import { AnswerBlock } from "@/components/answer-block";
import { AnimateIn } from "@/components/animate-in";

interface ProcessNode {
  step: string;
  title: string;
  bullets: string[];
}

const processSteps: ProcessNode[] = [
  {
    step: "01",
    title: "Discover",
    bullets: [
      "Audit existing systems and data infrastructure",
      "Map user journeys and automation opportunities",
      "Define success metrics and evaluation frameworks",
    ],
  },
  {
    step: "02",
    title: "Design",
    bullets: [
      "Architecture blueprints for agent workflows",
      "Data pipeline and retrieval system design",
      "Security threat modeling and compliance mapping",
    ],
  },
  {
    step: "03",
    title: "Build",
    bullets: [
      "Iterative sprints with weekly deployment cadence",
      "Continuous evaluation against defined benchmarks",
      "Integration testing with production-grade tooling",
    ],
  },
  {
    step: "04",
    title: "Deploy",
    bullets: [
      "Zero-downtime production rollout strategies",
      "Observability stack with real-time monitoring",
      "Load testing and failover verification",
    ],
  },
  {
    step: "05",
    title: "Optimize",
    bullets: [
      "Continuous model performance tuning",
      "Cost optimization through intelligent routing",
      "Quarterly strategic reviews and roadmap updates",
    ],
  },
];

function PipelineNode({
  node,
  index,
  isExpanded,
  onToggle,
}: {
  node: ProcessNode;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group relative flex items-start gap-6">
      {/* Rail connector line */}
      <div className="relative flex flex-col items-center">
        {/* Dot / node */}
        <button
          onClick={onToggle}
          className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-cato ${
            isExpanded
              ? "border-steel-blue/60 bg-steel-blue/15 shadow-[0_0_20px_hsl(var(--steel-blue)/0.2)]"
              : "border-border/40 bg-card/50 hover:border-steel-blue/40 hover:bg-card/80"
          }`}
          aria-expanded={isExpanded}
          aria-label={`${node.title} process step`}
        >
          <span className="font-mono text-xs font-medium text-steel-blue">
            {node.step}
          </span>
        </button>
        {/* Connecting rail line */}
        {index < processSteps.length - 1 && (
          <div className="h-full w-px bg-gradient-to-b from-border/40 to-transparent" style={{ minHeight: isExpanded ? "10rem" : "4rem" }} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <button
          onClick={onToggle}
          className="mb-1 text-left"
          aria-expanded={isExpanded}
        >
          <h3 className={`font-heading text-xl font-semibold transition-colors duration-300 ${isExpanded ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
            {node.title}
          </h3>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-cato ${
            isExpanded ? "mt-3 max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2.5">
            {node.bullets.map((bullet, bi) => (
              <li
                key={bi}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-steel-blue/50" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function HomeProcess() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="relative section-padding" id="process">
      <div className="container-site">
        <AnimateIn>
          <div className="mb-16">
            <MicroLabel className="mb-4 block">Chapter 03</MicroLabel>
            <h2 className="heading-section font-heading text-foreground">
              How we build
            </h2>
          </div>
        </AnimateIn>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Pipeline rail */}
          <AnimateIn delay={100}>
            <div className="relative">
              {processSteps.map((node, i) => (
                <PipelineNode
                  key={node.step}
                  node={node}
                  index={i}
                  isExpanded={expandedIndex === i}
                  onToggle={() => setExpandedIndex(expandedIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </AnimateIn>

          {/* Answer Block for AI extraction */}
          <AnimateIn delay={250}>
            <div className="lg:sticky lg:top-32">
              <AnswerBlock
                title="Process Summary"
                items={[
                  "5-phase methodology: Discover, Design, Build, Deploy, Optimize",
                  "Weekly deployment cadence with continuous evaluation",
                  "Production-grade tooling from day one -- no prototypes that never ship",
                  "Zero-downtime rollouts with full observability",
                  "Quarterly strategic reviews to align AI systems with business evolution",
                ]}
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
