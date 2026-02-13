import Link from "next/link";
import { CatoLogo } from "@/components/cato-logo";
import { MicroLabel } from "@/components/micro-label";

const footerLinks = {
  services: [
    { href: "/services/ai-product-studio", label: "AI Product Studio" },
    { href: "/services/agentic-systems", label: "Agentic Systems" },
    { href: "/services/llmops-infrastructure", label: "LLMOps Infrastructure" },
    { href: "/services/rag-search-retrieval", label: "RAG & Search" },
    { href: "/services/security-governance", label: "Security & Governance" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container-site section-padding">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2.5"
              aria-label="Cato Labs home"
            >
              <CatoLogo className="h-8 w-8" />
              <span className="font-heading text-base font-light tracking-[0.25em] uppercase text-foreground">
                Cato.Labs
              </span>
            </Link>
            <p className="body-large max-w-sm text-muted-foreground">
              Premium AI consultancy building production-grade intelligent
              systems that drive measurable business outcomes.
            </p>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <MicroLabel className="mb-4 block">Services</MicroLabel>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-micro hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-2">
            <MicroLabel className="mb-4 block">Company</MicroLabel>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-micro hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="lg:col-span-3">
            <MicroLabel className="mb-4 block">Legal</MicroLabel>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-micro hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 lg:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Cato Labs. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/catolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors duration-micro hover:text-foreground"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/catolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors duration-micro hover:text-foreground"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/catolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors duration-micro hover:text-foreground"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
