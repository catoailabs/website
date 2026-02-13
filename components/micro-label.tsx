import React from "react"
import { cn } from "@/lib/utils";

interface MicroLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function MicroLabel({ children, className }: MicroLabelProps) {
  return (
    <span className={cn("micro-label", className)}>
      {children}
    </span>
  );
}
