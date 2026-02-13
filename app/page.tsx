import type { Metadata } from "next";
import { organizationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { HomePageClient } from "@/components/home/home-page-client";
import { HomeSEOContent } from "@/components/home/seo-content";

export const metadata: Metadata = {
  title: "Cato Labs | Premium AI Consultancy",
  description:
    "Cato Labs is a premium AI consultancy building production-grade intelligent systems. We specialize in agentic systems, LLMOps, RAG, and AI governance.",
  openGraph: {
    title: "Cato Labs | Premium AI Consultancy",
    description:
      "Premium AI consultancy building production-grade intelligent systems.",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <HomePageClient />
      <HomeSEOContent />
    </>
  );
}
