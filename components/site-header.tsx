"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { PillButton } from "@/components/pill-button";
import { CatoLogo } from "@/components/cato-logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-cato",
        isScrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container-site flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex items-center gap-2.5 transition-opacity duration-micro hover:opacity-80"
          aria-label="Cato Labs home"
        >
          <CatoLogo className="h-9 w-9" />
          <span className="font-heading text-base font-light tracking-[0.25em] uppercase text-foreground">
            Cato.Labs
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-micro",
                pathname.startsWith(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              {pathname.startsWith(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-steel-blue" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <PillButton href="/contact" size="sm">
            Get in Touch
          </PillButton>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-transparent"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="h-4 w-4 text-foreground" />
            ) : (
              <Menu className="h-4 w-4 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-site flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-heading text-3xl font-semibold transition-colors duration-micro",
                  pathname.startsWith(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <PillButton href="/contact" size="lg" className="mt-4">
              Get in Touch
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
