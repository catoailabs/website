import Link from "next/link";

/**
 * SEO content section: fully accessible, semantically rich content
 * below the cinematic scroll experience. Uses natural language with
 * internal links for search engine comprehension.
 */
export function HomeSEOContent() {
  return (
    <section
      className="border-t border-border/20 section-padding"
      aria-label="About Cato Labs"
    >
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-heading text-2xl font-semibold text-foreground">
            About Cato Labs
          </h2>

          <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Cato Labs is a premium AI consultancy that architects and deploys
              production-grade intelligent systems. We partner with
              forward-thinking companies to build{" "}
              <Link href="/services/agentic-systems" className="text-steel-blue underline underline-offset-4 hover:text-foreground">
                agentic AI systems
              </Link>{" "}
              that autonomously reason, plan, and execute complex workflows
              while maintaining human oversight and control.
            </p>

            <p>
              Our engineering team specializes in{" "}
              <Link href="/services/llmops-infrastructure" className="text-steel-blue underline underline-offset-4 hover:text-foreground">
                LLMOps infrastructure
              </Link>{" "}
              for deploying and managing large language models at scale,{" "}
              <Link href="/services/rag-search-retrieval" className="text-steel-blue underline underline-offset-4 hover:text-foreground">
                retrieval augmented generation
              </Link>{" "}
              for knowledge-grounded AI, and{" "}
              <Link href="/services/security-governance" className="text-steel-blue underline underline-offset-4 hover:text-foreground">
                AI security and governance
              </Link>{" "}
              frameworks that ensure safe, compliant, and trustworthy AI
              deployment.
            </p>

            <p>
              From concept to production, our{" "}
              <Link href="/services/ai-product-studio" className="text-steel-blue underline underline-offset-4 hover:text-foreground">
                AI Product Studio
              </Link>{" "}
              delivers end-to-end product development with a 5-phase methodology:
              Discover, Design, Build, Deploy, and Optimize. We have delivered
              AI systems for{" "}
              <Link href="/work" className="text-steel-blue underline underline-offset-4 hover:text-foreground">
                Fortune 500 retailers, fintech companies, and healthtech startups
              </Link>
              , consistently achieving measurable business outcomes like 60%
              cost reduction, 75% faster compliance reviews, and 94% automated
              resolution rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
