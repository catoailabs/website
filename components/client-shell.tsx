"use client";

import React from "react"

import dynamic from "next/dynamic";

// Dynamic import with ssr:false MUST be called from a Client Component.
// This prevents browser extensions from causing hydration mismatches
// by ensuring the header only renders on the client.
const SiteHeader = dynamic(
  () => import("@/components/site-header").then((m) => m.SiteHeader),
  {
    ssr: false,
    loading: () => (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-transparent lg:h-20" />
    ),
  }
);

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      <SiteHeader />
      {children}
    </div>
  );
}
