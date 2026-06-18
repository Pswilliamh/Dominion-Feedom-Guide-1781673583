"use client";

import { Shield } from "lucide-react";

export type ScenarioType = "local" | "whatsapp" | "zoom";

export function SovereignHeader() {
  return (
    <header className="w-full bg-navigation border-b-2 border-accent px-4 py-2 flex items-center gap-3">
      <Shield className="w-8 h-8 text-gold flex-shrink-0" strokeWidth={1.5} style={{ color: "#D4AF37" }} />
      <h1 className="font-heading font-bold text-base tracking-wide leading-tight" style={{ color: "#D4AF37" }}>
        Dominion Freedom Guide | Ministry of Wellness & Education | Kingdom of Heaven Embassy Governance
      </h1>
    </header>
  );
}