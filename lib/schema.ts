// Cato Labs - JSON-LD structured data helpers
// No JSX in this file - the JsonLd component is in @/components/json-ld.tsx

export type SchemaData = Record<string, unknown>;

export function organizationSchema(): SchemaData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cato Labs",
    url: "https://catolabs.ai",
    logo: "https://catolabs.ai/logo.png",
    description:
      "Premium AI consultancy specializing in agentic systems, LLMOps infrastructure, RAG search & retrieval, and AI security governance.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@catolabs.ai",
    },
    sameAs: [
      "https://twitter.com/catolabs",
      "https://linkedin.com/company/catolabs",
      "https://github.com/catolabs",
    ],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}): SchemaData {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "Organization",
      name: "Cato Labs",
    },
    url: opts.url,
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
}): SchemaData {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      "@type": "Person",
      name: opts.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Cato Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://catolabs.ai/logo.png",
      },
    },
    ...(opts.image ? { image: opts.image } : {}),
  };
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>
): SchemaData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
