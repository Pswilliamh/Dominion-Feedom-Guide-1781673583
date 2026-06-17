"use client";

import { Shield, Wifi, Radio, Globe, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type ScenarioType = "local" | "whatsapp" | "zoom";

interface SovereignHeaderProps {
  isOffline: boolean;
  onOfflineToggle: (offline: boolean) => void;
  language: "en" | "id";
  onLanguageChange: (lang: "en" | "id") => void;
  scenario: ScenarioType;
  onScenarioChange: (scenario: ScenarioType) => void;
}

export function SovereignHeader({ 
  isOffline, 
  onOfflineToggle, 
  language, 
  onLanguageChange,
  scenario,
  onScenarioChange 
}: SovereignHeaderProps) {
  const scenarioLabels = {
    local: "🏫 Local Classroom (Mesh Layout)",
    whatsapp: "💬 Special-Needs Class (WhatsApp Link)",
    zoom: "🏡 Home Schooling (Zoom Broadcast)"
  };

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
      
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-navigation/50 border-gold/30 hover:bg-navigation/70 flex items-center gap-2"
              style={{ borderColor: "#D4AF37" }}
            >
              <Globe className="w-5 h-5 text-gold" style={{ color: "#D4AF37" }} />
              <span className="text-gold font-semibold" style={{ color: "#D4AF37" }}>
                {language === "en" ? "🇺🇸 English" : "🇮🇩 Indonesian"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onLanguageChange("en")} className="cursor-pointer">
              🇺🇸 English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLanguageChange("id")} className="cursor-pointer">
              🇮🇩 Indonesian
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-navigation/50 border-gold/30 hover:bg-navigation/70 flex items-center gap-2 min-w-[280px]"
                style={{ borderColor: "#D4AF37" }}
              >
                <span className="text-gold font-semibold text-sm" style={{ color: "#D4AF37" }}>
                  Active Scenario: {scenarioLabels[scenario].split(" (")[0]}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[320px]">
              <DropdownMenuItem 
                onClick={() => onScenarioChange("local")} 
                className="cursor-pointer py-3"
              >
                <span className="font-semibold">🏫 Local Classroom (Mesh Layout)</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onScenarioChange("whatsapp")} 
                className="cursor-pointer py-3"
              >
                <span className="font-semibold">💬 Special-Needs Class (WhatsApp Link)</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onScenarioChange("zoom")} 
                className="cursor-pointer py-3"
              >
                <span className="font-semibold">🏡 Home Schooling (Zoom Broadcast)</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="bg-navigation/50 border-gold/30 hover:bg-navigation/70"
                style={{ borderColor: "#D4AF37" }}
              >
                <Info className="w-5 h-5 text-gold" style={{ color: "#D4AF37" }} />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">How This App Works</DialogTitle>
                <DialogDescription className="text-base pt-4 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">🏫 Local Classroom (Mesh Layout)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Connection Path:</strong> Local Peer-to-Peer mesh network using device-to-device communication. 
                      No internet required. Messages route directly between tablets in the same physical space using 
                      Bluetooth or local WiFi mesh protocols.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Use Case:</strong> Classroom environments where students communicate directly with teachers 
                      and peers without internet dependency.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">💬 Special-Needs Class (WhatsApp Link)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Connection Path:</strong> Messages are routed through WhatsApp Web Bridge API. 
                      Requires internet connection. Communication flows through WhatsApp's end-to-end encrypted servers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Use Case:</strong> Special education settings where guardians and support staff monitor 
                      communication remotely via familiar WhatsApp interface.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">🏡 Home Schooling (Zoom Broadcast)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Connection Path:</strong> Integration with Zoom Meeting SDK. Messages are injected into 
                      active Zoom session's chat stream and closed-caption subtitle array in real-time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Use Case:</strong> Home schooling environments where students participate in remote learning. 
                      AAC messages appear instantly in Zoom chat and captions for all participants to see.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

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