import React from "react"
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  container?: boolean;
}

export function Section({
  children,
  className,
  id,
  container = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      {container ? (
        <div className="container-site">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
