import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/glass-card";
import { MicroLabel } from "@/components/micro-label";
import { PillButton } from "@/components/pill-button";
import { AnswerBlock } from "@/components/answer-block";
import { AnimateIn } from "@/components/animate-in";
import { caseStudies, services } from "@/lib/data";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.excerpt,
    openGraph: {
      title: `${study.title} | Cato Labs`,
      description: study.excerpt,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  const relatedServices = services.filter((s) =>
    study.services.includes(s.slug)
  );

  return (
    <>
      <PageHeader
        label={study.industry}
        title={study.title}
        description={study.excerpt}
        align="left"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-7">
            {/* Metrics grid */}
            <AnimateIn>
              <div className="grid grid-cols-2 gap-6">
                {study.metrics.map((m) => (
                  <GlassCard key={m.label} className="text-center">
                    <p className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
                      {m.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {m.label}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </AnimateIn>

            {/* Narrative placeholder */}
            <AnimateIn delay={100}>
              <div className="mt-12">
                <h2 className="heading-subsection mb-4 font-heading text-foreground">
                  The Challenge
                </h2>
                <p className="body-large text-muted-foreground">
                  This case study details our engagement with {study.client} in the{" "}
                  {study.industry} sector. Full narrative, architecture diagrams, and
                  outcome analysis will be published here.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="mt-12">
                <h2 className="heading-subsection mb-4 font-heading text-foreground">
                  The Solution
                </h2>
                <p className="body-large text-muted-foreground">
                  Our approach combined multiple service areas to deliver a
                  comprehensive solution that exceeded the client{"'"}s
                  expectations across all key metrics.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="mt-12 flex flex-wrap gap-4">
                <PillButton href="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </PillButton>
                <PillButton href="/work" variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  All Case Studies
                </PillButton>
              </div>
            </AnimateIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <AnimateIn delay={100}>
              <AnswerBlock
                title="Project Summary"
                items={[
                  `Client: ${study.client}`,
                  `Industry: ${study.industry}`,
                  ...study.metrics.map(
                    (m) => `${m.label}: ${m.value}`
                  ),
                ]}
              />
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="mt-8">
                <MicroLabel className="mb-4 block">
                  Services Applied
                </MicroLabel>
                <div className="space-y-3">
                  {relatedServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="group block"
                    >
                      <GlassCard hover className="p-4">
                        <p className="text-sm font-medium text-foreground group-hover:text-steel-blue">
                          {svc.title}
                        </p>
                      </GlassCard>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>
    </>
  );
}
