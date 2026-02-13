'use client';

import React from "react"

import Link from "next/link";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function PillButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
}: PillButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-pill transition-all duration-micro ease-cato focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-steel-blue text-ink border border-steel-blue/80 hover:bg-steel-blue/90 hover:-translate-y-0.5 hover:shadow-[0_0_20px_hsl(var(--steel-blue)/0.3)]",
    ghost:
      "bg-transparent text-foreground border border-transparent hover:border-border/50 hover:bg-muted/50",
    outline:
      "bg-transparent text-foreground border border-border/60 hover:border-steel-blue/40 hover:bg-steel-blue/5 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "h-9 px-5 text-sm gap-2",
    md: "h-12 px-7 text-sm gap-2.5",
    lg: "h-14 px-9 text-base gap-3",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
