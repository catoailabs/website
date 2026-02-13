import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/glass-card";
import { MicroLabel } from "@/components/micro-label";
import { PillButton } from "@/components/pill-button";
import { AnswerBlock } from "@/components/answer-block";
import { AnimateIn } from "@/components/animate-in";
import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { services, caseStudies } from "@/lib/data";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Cato Labs`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedStudies = caseStudies.filter((cs) =>
    cs.services.includes(slug)
  );

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.description,
          url: `https://catolabs.ai/services/${slug}`,
        })}
      />

      <PageHeader
        label="Service"
        title={service.title}
        description={service.description}
        align="left"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-7">
            <AnimateIn>
              <h2 className="heading-subsection mb-6 font-heading text-foreground">
                What We Deliver
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-steel-blue" />
                    <span className="body-large text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn delay={200}>
              <div className="mt-12 flex flex-wrap gap-4">
                <PillButton href="/contact">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </PillButton>
                <PillButton href="/services" variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  All Services
                </PillButton>
              </div>
            </AnimateIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <AnimateIn delay={100}>
              <AnswerBlock items={service.answerBlock} />
            </AnimateIn>

            {/* Related case studies */}
            {relatedStudies.length > 0 && (
              <AnimateIn delay={200}>
                <div className="mt-8">
                  <MicroLabel className="mb-4 block">
                    Related Case Studies
                  </MicroLabel>
                  <div className="space-y-4">
                    {relatedStudies.map((cs) => (
                      <Link
                        key={cs.slug}
                        href={`/work/${cs.slug}`}
                        className="group block"
                      >
                        <GlassCard hover className="p-5">
                          <p className="text-sm font-medium text-foreground transition-colors group-hover:text-steel-blue">
                            {cs.title}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {cs.client} &middot; {cs.industry}
                          </p>
                        </GlassCard>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
