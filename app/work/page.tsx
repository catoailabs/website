import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/glass-card";
import { MicroLabel } from "@/components/micro-label";
import { AnimateIn } from "@/components/animate-in";
import { caseStudies, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and proof of impact from Cato Labs. See how we build production-grade AI systems that drive measurable business outcomes.",
  openGraph: {
    title: "Work | Cato Labs",
    description:
      "Case studies and proof of impact from Cato Labs.",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Proof of Impact"
        title="Our Work"
        description="Real results from production AI systems. Every engagement is measured by business outcomes, not just technical milestones."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <AnimateIn key={study.slug} delay={i * 120}>
              <Link href={`/work/${study.slug}`} className="group block h-full">
                <GlassCard hover className="flex h-full flex-col">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {study.services.map((sSlug) => {
                      const svc = services.find((s) => s.slug === sSlug);
                      return (
                        <span
                          key={sSlug}
                          className="rounded-full bg-steel-blue/10 px-3 py-1 text-xs font-medium text-steel-blue"
                        >
                          {svc?.shortTitle || sSlug}
                        </span>
                      );
                    })}
                  </div>

                  <MicroLabel className="mb-2 block">
                    {study.industry}
                  </MicroLabel>

                  <h2 className="heading-subsection mb-3 font-heading text-foreground">
                    {study.title}
                  </h2>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {study.excerpt}
                  </p>

                  {/* Metrics strip */}
                  <div className="grid grid-cols-2 gap-4 border-t border-border/50 pt-5">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-heading text-2xl font-bold text-foreground">
                          {m.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <span className="mt-6 flex items-center gap-2 text-sm font-medium text-steel-blue transition-all duration-micro group-hover:gap-3">
                    Read case study
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </GlassCard>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </Section>
    </>
  );
}
