import type { Metadata } from "next";
import { Target, Zap, Users, Eye } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/glass-card";
import { MicroLabel } from "@/components/micro-label";
import { PillButton } from "@/components/pill-button";
import { AnswerBlock } from "@/components/answer-block";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cato Labs is a premium AI consultancy founded on the belief that AI should be built for production, not just prototypes. Learn about our team, principles, and approach.",
  openGraph: {
    title: "About | Cato Labs",
    description:
      "A premium AI consultancy building production-grade intelligent systems.",
  },
};

const principles = [
  {
    icon: Target,
    title: "Production First",
    description:
      "Every system we build is designed for production from day one. No throwaway prototypes, no proof-of-concepts that never ship.",
  },
  {
    icon: Zap,
    title: "Outcome Driven",
    description:
      "We measure success by business impact, not technical complexity. Our engagements are structured around measurable milestones.",
  },
  {
    icon: Users,
    title: "Embedded Partnership",
    description:
      "We don't hand off and disappear. Our teams embed with yours, transfer knowledge, and build lasting internal capabilities.",
  },
  {
    icon: Eye,
    title: "Responsible by Design",
    description:
      "Security, governance, and ethical AI aren't afterthoughts. They're woven into every architecture decision we make.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Who We Are"
        title="About Cato Labs"
        description="A premium AI consultancy founded on the belief that intelligent systems should be built for production, not just prototypes."
      />

      {/* Principles */}
      <Section>
        <AnimateIn>
          <MicroLabel className="mb-6 block text-center">
            Our Principles
          </MicroLabel>
        </AnimateIn>
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 100}>
              <GlassCard className="flex items-start gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-steel-blue/10">
                  <p.icon className="h-5 w-5 text-steel-blue" />
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimateIn>
              <MicroLabel className="mb-4 block">How We Work</MicroLabel>
              <h2 className="heading-section mb-6 font-heading text-foreground">
                Discovery to Deployment
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Architecture",
                    desc: "Deep technical discovery to understand your data, infrastructure, and objectives. We design the architecture before writing a line of code.",
                  },
                  {
                    step: "02",
                    title: "Build & Iterate",
                    desc: "Rapid iteration cycles with embedded teams. We build, test, and refine in tight feedback loops with your stakeholders.",
                  },
                  {
                    step: "03",
                    title: "Deploy & Monitor",
                    desc: "Production deployment with comprehensive monitoring, alerting, and observability from day one.",
                  },
                  {
                    step: "04",
                    title: "Transfer & Scale",
                    desc: "Knowledge transfer, documentation, and capability building so your team can own, maintain, and scale the system.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="font-mono text-sm font-medium text-steel-blue">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="mb-1 font-heading text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-5">
            <AnimateIn delay={100}>
              <AnswerBlock
                title="Why Cato Labs"
                items={[
                  "Production-first AI systems, not throwaway prototypes",
                  "Outcome-driven engagements with measurable ROI",
                  "Embedded teams that transfer knowledge and build capability",
                  "Responsible AI with security and governance built in",
                  "Full-spectrum expertise from product design to infrastructure",
                ]}
              />
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <AnimateIn>
          <GlassCard glow className="text-center">
            <MicroLabel className="mb-4 block">Ready to Start?</MicroLabel>
            <h2 className="heading-subsection mb-4 font-heading text-foreground">
              {"Let's Build Something Extraordinary"}
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
              Whether you need a strategic partner for a greenfield AI product
              or expert reinforcement for your existing team.
            </p>
            <PillButton href="/contact">Get in Touch</PillButton>
          </GlassCard>
        </AnimateIn>
      </Section>
    </>
  );
}
