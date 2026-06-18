"use client";

import { Wifi, Radio, Globe, Info, HelpCircle } from "lucide-react";
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
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ScenarioType } from "./SovereignHeader";

interface SystemFooterProps {
  isOffline: boolean;
  onOfflineToggle: (offline: boolean) => void;
  language: "en" | "id";
  onLanguageChange: (lang: "en" | "id") => void;
  scenario: ScenarioType;
  onScenarioChange: (scenario: ScenarioType) => void;
}

export function SystemFooter({
  isOffline,
  onOfflineToggle,
  language,
  onLanguageChange,
  scenario,
  onScenarioChange
}: SystemFooterProps) {
  const scenarioLabels = {
    local: "🏫 Local Classroom",
    whatsapp: "💬 Special-Needs Class",
    zoom: "🏡 Home Schooling"
  };

  return (
    <footer className="w-full bg-navigation border-t-2 border-accent px-4 py-2 flex items-center justify-between gap-3 z-50">
      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:bg-white/10 flex items-center gap-2 px-3 py-1"
            >
              <HelpCircle className="w-4 h-4 text-gold" style={{ color: "#D4AF37" }} />
              <span className="text-gold font-semibold text-xs" style={{ color: "#D4AF37" }}>
                ❓ How It Works
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-3xl text-navigation">
                Dominion Freedom Guide: Operational Blueprints
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                Complete guide to using the communication system effectively
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-8 py-6">
              {/* Complete dialog content from header - keeping all the detailed operational guides */}
              <Card className="border-2 border-navigation/30">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-navigation flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    About Us & Governance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base leading-relaxed text-foreground">
                    The Dominion Freedom Guide is developed and authorized under the stewardship of the 
                    <strong> Ministry of Wellness & Education</strong> within the <strong>Kingdom of Heaven Embassy Governance</strong>. 
                    While this platform is intimately designed to help the many struggling and suffering children across the globe, 
                    we believe that every person is an architect of reality, endowed with an inherent right to 
                    <strong> absolute linguistic sovereignty</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>

            <DialogFooter>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
                  Close / Enter Dashboard
                </Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-navigation/50 border-gold/30 hover:bg-navigation/70 flex items-center gap-2 px-3 py-1"
              style={{ borderColor: "#D4AF37" }}
            >
              <Globe className="w-4 h-4 text-gold" style={{ color: "#D4AF37" }} />
              <span className="text-gold font-semibold text-xs" style={{ color: "#D4AF37" }}>
                {language === "en" ? "🇺🇸 EN" : "🇮🇩 ID"}
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
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-navigation/50 border-gold/30 hover:bg-navigation/70 flex items-center gap-2 px-3 py-1"
              style={{ borderColor: "#D4AF37" }}
            >
              <span className="text-gold font-semibold text-xs" style={{ color: "#D4AF37" }}>
                Active Scenario: {scenarioLabels[scenario]}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[280px]">
            <DropdownMenuItem 
              onClick={() => onScenarioChange("local")} 
              className="cursor-pointer py-2"
            >
              <span className="font-semibold text-sm">🏫 Local Classroom</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onScenarioChange("whatsapp")} 
              className="cursor-pointer py-2"
            >
              <span className="font-semibold text-sm">💬 Special-Needs Class</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onScenarioChange("zoom")} 
              className="cursor-pointer py-2"
            >
              <span className="font-semibold text-sm">🏡 Home Schooling</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2 bg-navigation/50 px-3 py-1 rounded-lg border border-gold/30">
          <Label htmlFor="network-toggle-footer" className="text-gold font-semibold text-xs cursor-pointer" style={{ color: "#D4AF37" }}>
            Network:
          </Label>
          <span className="text-gold text-xs font-bold" style={{ color: "#D4AF37" }}>
            {isOffline ? "Local" : "Online"}
          </span>
          <Switch
            id="network-toggle-footer"
            checked={isOffline}
            onCheckedChange={onOfflineToggle}
            className="data-[state=checked]:bg-transport scale-75"
          />
        </div>
        
        <Badge 
          variant="outline" 
          className={`border-2 px-3 py-1 text-xs font-semibold flex items-center gap-1.5 ${
            isOffline 
              ? "bg-transport/20 border-transport text-transport" 
              : "bg-navigation border-gold"
          }`}
          style={!isOffline ? { borderColor: "#D4AF37", color: "#D4AF37" } : undefined}
        >
          {isOffline ? (
            <>
              <Radio className="w-3 h-3 animate-pulse" />
              Local Mode
            </>
          ) : (
            <>
              <Wifi className="w-3 h-3" />
              Cloud Connected
            </>
          )}
        </Badge>
      </div>
    </footer>
  );
}