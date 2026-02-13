import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Cato Labs terms of service. Read the terms governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Terms of Service"
        description="Last updated: February 2026"
        align="left"
      />

      <Section>
        <div className="prose prose-sm max-w-3xl text-muted-foreground">
          <h2 className="heading-subsection mb-4 font-heading text-foreground">
            Acceptance of Terms
          </h2>
          <p className="body-large mb-8 text-muted-foreground">
            By accessing and using the Cato Labs website and services, you
            accept and agree to be bound by the terms and conditions outlined
            in this agreement.
          </p>

          <h2 className="heading-subsection mb-4 font-heading text-foreground">
            Services
          </h2>
          <p className="body-large mb-8 text-muted-foreground">
            Cato Labs provides AI consulting services including but not limited
            to AI product development, agentic systems design, LLMOps
            infrastructure, RAG systems, and AI security governance. Specific
            terms for each engagement are detailed in individual service
            agreements.
          </p>

          <h2 className="heading-subsection mb-4 font-heading text-foreground">
            Intellectual Property
          </h2>
          <p className="body-large mb-8 text-muted-foreground">
            All content on this website, including text, graphics, logos, and
            software, is the property of Cato Labs and is protected by
            applicable intellectual property laws.
          </p>

          <h2 className="heading-subsection mb-4 font-heading text-foreground">
            Contact
          </h2>
          <p className="body-large text-muted-foreground">
            For questions about these terms, please contact us at{" "}
            <a
              href="mailto:legal@catolabs.ai"
              className="text-steel-blue transition-colors hover:text-foreground"
            >
              legal@catolabs.ai
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
