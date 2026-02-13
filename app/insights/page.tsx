import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/glass-card";
import { MicroLabel } from "@/components/micro-label";
import { AnimateIn } from "@/components/animate-in";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Deep-dive articles, guides, and analysis from Cato Labs on AI engineering, LLMOps, agentic systems, and production AI infrastructure.",
  openGraph: {
    title: "Insights | Cato Labs",
    description:
      "Expert articles on AI engineering, LLMOps, and production AI systems.",
  },
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        label="Knowledge & Analysis"
        title="Insights"
        description="Deep-dive articles, practitioner guides, and strategic analysis from the Cato Labs team."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article, i) => (
            <AnimateIn key={article.slug} delay={i * 100}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block h-full"
              >
                <GlassCard hover className="flex h-full flex-col">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-steel-blue/10 px-3 py-1 text-xs font-medium text-steel-blue">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="mb-3 font-heading text-lg font-semibold leading-tight text-foreground">
                    {article.title}
                  </h2>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-border/50 pt-4">
                    <span className="text-xs text-muted-foreground">
                      {article.author} &middot;{" "}
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <ArrowRight className="h-4 w-4 text-steel-blue transition-transform duration-micro group-hover:translate-x-1" />
                  </div>
                </GlassCard>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </Section>
    </>
  );
}
