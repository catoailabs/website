"use client";

import React from "react"

import { useState } from "react";
import { PillButton } from "@/components/pill-button";
import { MicroLabel } from "@/components/micro-label";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-steel-blue/10">
          <CheckCircle2 className="h-6 w-6 text-steel-blue" />
        </div>
        <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
          Message Received
        </h3>
        <p className="text-sm text-muted-foreground">
          {"We'll be in touch within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <MicroLabel className="mb-2 block">
            <label htmlFor="name">Name</label>
          </MicroLabel>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="h-12 w-full rounded-lg border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-steel-blue focus:outline-none focus:ring-1 focus:ring-steel-blue"
          />
        </div>
        <div>
          <MicroLabel className="mb-2 block">
            <label htmlFor="email">Email</label>
          </MicroLabel>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-12 w-full rounded-lg border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-steel-blue focus:outline-none focus:ring-1 focus:ring-steel-blue"
          />
        </div>
      </div>

      <div>
        <MicroLabel className="mb-2 block">
          <label htmlFor="company">Company</label>
        </MicroLabel>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your company"
          className="h-12 w-full rounded-lg border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-steel-blue focus:outline-none focus:ring-1 focus:ring-steel-blue"
        />
      </div>

      <div>
        <MicroLabel className="mb-2 block">
          <label htmlFor="service">Service Interest</label>
        </MicroLabel>
        <select
          id="service"
          name="service"
          className="h-12 w-full rounded-lg border border-border/60 bg-background px-4 text-sm text-foreground transition-colors focus:border-steel-blue focus:outline-none focus:ring-1 focus:ring-steel-blue"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service area
          </option>
          <option value="ai-product-studio">AI Product Studio</option>
          <option value="agentic-systems">Agentic Systems</option>
          <option value="llmops-infrastructure">LLMOps Infrastructure</option>
          <option value="rag-search-retrieval">RAG & Search</option>
          <option value="security-governance">Security & Governance</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <MicroLabel className="mb-2 block">
          <label htmlFor="message">Tell us about your project</label>
        </MicroLabel>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building? What challenges are you facing?"
          className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-steel-blue focus:outline-none focus:ring-1 focus:ring-steel-blue resize-none"
        />
      </div>

      <PillButton type="submit" size="lg" className="w-full md:w-auto">
        Send Message
        <Send className="h-4 w-4" />
      </PillButton>
    </form>
  );
}
