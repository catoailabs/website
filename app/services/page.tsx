import React from "react"
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Bot, Server, Search, Shield } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/glass-card";
import { MicroLabel } from "@/components/micro-label";
import { AnswerBlock } from "@/components/answer-block";
import { AnimateIn } from "@/components/animate-in";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Cato Labs AI consulting services: AI Product Studio, Agentic Systems, LLMOps Infrastructure, RAG & Search, and AI Security & Governance.",
  openGraph: {
    title: "Services | Cato Labs",
    description:
      "Full-spectrum AI consulting from product design through production infrastructure.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Bot,
  Server,
  Search,
  Shield,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What We Build"
        title="Services"
        description="Full-spectrum AI consulting from product design through production infrastructure and governance."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <AnimateIn key={service.slug} delay={i * 100}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <GlassCard hover className="flex h-full flex-col">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-steel-blue/10">
                      <Icon className="h-5 w-5 text-steel-blue" />
                    </div>
                    <MicroLabel className="mb-2 block">
                      {service.shortTitle}
                    </MicroLabel>
                    <h2 className="heading-subsection mb-3 font-heading text-foreground">
                      {service.title}
                    </h2>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.excerpt}
                    </p>
                    <span className="flex items-center gap-2 text-sm font-medium text-steel-blue transition-all duration-micro group-hover:gap-3">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </GlassCard>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </Section>

      <Section>
        <AnimateIn>
          <AnswerBlock
            title="Our Services at a Glance"
            items={[
              "AI Product Studio: End-to-end AI product development from concept to production",
              "Agentic Systems: Autonomous multi-agent orchestration with human-in-the-loop oversight",
              "LLMOps Infrastructure: Scalable deployment, monitoring, and optimization of LLMs",
              "RAG & Search: Knowledge-grounded AI with semantic search and retrieval pipelines",
              "Security & Governance: Red teaming, compliance, and responsible AI frameworks",
            ]}
            className="mx-auto max-w-3xl"
          />
        </AnimateIn>
      </Section>
    </>
  );
}
