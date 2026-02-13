import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientShell } from "@/components/client-shell";
import { SiteFooter } from "@/components/site-footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cato Labs | Premium AI Consultancy",
    template: "%s | Cato Labs",
  },
  description:
    "Cato Labs is a premium AI consultancy specializing in agentic systems, LLMOps infrastructure, RAG search & retrieval, and AI security governance.",
  metadataBase: new URL("https://catolabs.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cato Labs",
    title: "Cato Labs | Premium AI Consultancy",
    description:
      "Cato Labs is a premium AI consultancy specializing in agentic systems, LLMOps infrastructure, RAG search & retrieval, and AI security governance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cato Labs | Premium AI Consultancy",
    description:
      "Premium AI consultancy specializing in agentic systems, LLMOps, RAG, and AI governance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#05070D" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var origError = console.error;
                console.error = function() {
                  var msg = arguments[0];
                  if (!msg) return origError.apply(console, arguments);
                  var str = typeof msg === 'string' ? msg : (msg.message || String(msg));
                  if (str.toLowerCase().includes('hydrat')) return;
                  if (str.includes('did not match')) return;
                  if (str.includes('server rendered HTML')) return;
                  origError.apply(console, arguments);
                };
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <ClientShell>
              <main className="flex-1">{children}</main>
            </ClientShell>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
