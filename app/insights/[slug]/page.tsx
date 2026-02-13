import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/glass-card";
import { MicroLabel } from "@/components/micro-label";
import { PillButton } from "@/components/pill-button";
import { AnswerBlock } from "@/components/answer-block";
import { AnimateIn } from "@/components/animate-in";
import { articleSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { articles } from "@/lib/data";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Cato Labs Insights`,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          url: `https://catolabs.ai/insights/${slug}`,
          datePublished: article.date,
          authorName: article.author,
        })}
      />

      <PageHeader
        label={article.category}
        title={article.title}
        align="left"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Article body */}
          <article className="lg:col-span-8">
            <AnimateIn>
              <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-border/50 pb-6">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
                <span className="text-sm text-muted-foreground">
                  By {article.author}
                </span>
              </div>

              {/* MDX content placeholder */}
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="body-large text-muted-foreground">
                  {article.excerpt}
                </p>
                <p className="body-large mt-6 text-muted-foreground">
                  This article is MDX-ready. Full content, code examples,
                  diagrams, and interactive components will be rendered here
                  when the MDX pipeline is connected.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="mt-12">
                <PillButton href="/insights" variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  All Articles
                </PillButton>
              </div>
            </AnimateIn>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <AnimateIn delay={100}>
              <AnswerBlock
                title="Article Summary"
                items={[
                  article.excerpt,
                  `Category: ${article.category}`,
                  `Published: ${new Date(article.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
                ]}
              />
            </AnimateIn>

            {otherArticles.length > 0 && (
              <AnimateIn delay={200}>
                <div className="mt-8">
                  <MicroLabel className="mb-4 block">
                    Related Articles
                  </MicroLabel>
                  <div className="space-y-4">
                    {otherArticles.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/insights/${a.slug}`}
                        className="group block"
                      >
                        <GlassCard hover className="p-4">
                          <p className="text-sm font-medium text-foreground group-hover:text-steel-blue">
                            {a.title}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {a.readTime}
                          </p>
                        </GlassCard>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
