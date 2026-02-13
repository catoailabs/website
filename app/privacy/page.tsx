import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cato Labs privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        description="Last updated: February 2026"
        align="left"
      />

      <Section>
        <div className="prose prose-sm max-w-3xl text-muted-foreground">
          <h2 className="heading-subsection mb-4 font-heading text-foreground">
            Information We Collect
          </h2>
          <p className="body-large mb-8 text-muted-foreground">
            We collect information you provide directly to us, such as when you
            fill out a contact form, request a consultation, or communicate with
            us via email. This may include your name, email address, company
            name, and project details.
          </p>

          <h2 className="heading-subsection mb-4 font-heading text-foreground">
            How We Use Your Information
          </h2>
          <p className="body-large mb-8 text-muted-foreground">
            We use the information we collect to respond to your inquiries,
            provide our services, improve our website, and communicate with
            you about our services. We do not sell your personal information
            to third parties.
          </p>

          <h2 className="heading-subsection mb-4 font-heading text-foreground">
            Data Security
          </h2>
          <p className="body-large mb-8 text-muted-foreground">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="heading-subsection mb-4 font-heading text-foreground">
            Contact Us
          </h2>
          <p className="body-large text-muted-foreground">
            If you have questions about this privacy policy, please contact us
            at{" "}
            <a
              href="mailto:privacy@catolabs.ai"
              className="text-steel-blue transition-colors hover:text-foreground"
            >
              privacy@catolabs.ai
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
