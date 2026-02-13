import React from "react"
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-surface p-6 lg:p-8",
        hover &&
          "transition-all duration-300 ease-cato hover:-translate-y-1 hover:border-steel-blue/20",
        glow && "animate-glow-pulse",
        className
      )}
    >
      {children}
    </div>
  );
}
