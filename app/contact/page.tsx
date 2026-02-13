import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/glass-card";
import { MicroLabel } from "@/components/micro-label";
import { AnimateIn } from "@/components/animate-in";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cato Labs. Let's discuss how we can help you build production-grade AI systems.",
  openGraph: {
    title: "Contact | Cato Labs",
    description: "Start a conversation about your AI project.",
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@catolabs.ai",
    href: "mailto:hello@catolabs.ai",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Start a Conversation"
        title="Contact Us"
        description="Tell us about your project and we'll get back to you within 24 hours."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <AnimateIn>
              <GlassCard>
                <ContactForm />
              </GlassCard>
            </AnimateIn>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-5">
            <AnimateIn delay={100}>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <GlassCard key={info.label} className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-steel-blue/10">
                      <info.icon className="h-5 w-5 text-steel-blue" />
                    </div>
                    <div>
                      <MicroLabel className="mb-1 block">{info.label}</MicroLabel>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-foreground transition-colors hover:text-steel-blue"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <GlassCard className="mt-6">
                <MicroLabel className="mb-3 block">What Happens Next</MicroLabel>
                <ol className="space-y-3">
                  {[
                    "We review your submission within 24 hours",
                    "A team lead schedules a 30-minute discovery call",
                    "We prepare a tailored engagement proposal",
                    "If aligned, we kick off with a discovery sprint",
                  ].map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 font-mono text-xs font-medium text-steel-blue">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </GlassCard>
            </AnimateIn>
          </div>
        </div>
      </Section>
    </>
  );
}
