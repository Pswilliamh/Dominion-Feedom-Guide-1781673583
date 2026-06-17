"use client";

import { Shield, Wifi, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SovereignHeaderProps {
  isOffline: boolean;
  onOfflineToggle: (offline: boolean) => void;
}

export function SovereignHeader({ isOffline, onOfflineToggle }: SovereignHeaderProps) {
  return (
    <header className="w-full bg-navigation border-b-4 border-accent px-8 py-4 flex items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <Shield className="w-16 h-16 text-gold" strokeWidth={1.5} style={{ color: "#D4AF37" }} />
        <div className="flex flex-col">
          <h1 className="font-heading font-bold text-3xl tracking-wide" style={{ color: "#D4AF37" }}>
            Dominion Freedom Guide
          </h1>
          <p className="font-sans text-sm tracking-wide" style={{ color: "#D4AF37" }}>
            Ministry of Wellness & Education | Kingdom of Heaven Embassy Governance
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 bg-navigation/50 px-4 py-2 rounded-lg border border-gold/30">
          <Label htmlFor="network-toggle" className="text-gold font-semibold text-sm cursor-pointer" style={{ color: "#D4AF37" }}>
            Network Status:
          </Label>
          <span className="text-gold text-sm font-bold" style={{ color: "#D4AF37" }}>
            {isOffline ? "Local Mesh" : "Online"}
          </span>
          <Switch
            id="network-toggle"
            checked={isOffline}
            onCheckedChange={onOfflineToggle}
            className="data-[state=checked]:bg-transport"
          />
        </div>
        
        <Badge 
          variant="outline" 
          className={`border-2 px-4 py-2 text-sm font-semibold flex items-center gap-2 ${
            isOffline 
              ? "bg-transport/20 border-transport text-transport" 
              : "bg-navigation border-gold"
          }`}
          style={!isOffline ? { borderColor: "#D4AF37", color: "#D4AF37" } : undefined}
        >
          {isOffline ? (
            <>
              <Radio className="w-4 h-4 animate-pulse" />
              Sovereign Local Mode Active
            </>
          ) : (
            <>
              <Wifi className="w-4 h-4" />
              Cloud Connected
            </>
          )}
        </Badge>
      </div>
    </header>
  );
}