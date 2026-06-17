"use client";

import { MapPin, Search, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function GoogleMapsView() {
  return (
    <div className="flex-1 flex flex-col bg-background p-8 gap-6">
      <div className="flex items-center gap-4">
        <MapPin className="w-10 h-10 text-accent" />
        <h2 className="text-3xl font-bold text-foreground font-heading">
          GOOGLE MAPS INTEGRATION
        </h2>
      </div>

      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Search for a location..."
          className="flex-1 text-lg"
        />
        <Button size="lg" className="bg-accent hover:bg-accent/90">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
        <Button size="lg" variant="outline">
          <Navigation className="w-5 h-5 mr-2" />
          My Location
        </Button>
      </div>

      <div className="flex-1 bg-muted rounded-lg border-2 border-card-glow/30 shadow-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50" />
        <div className="relative z-10 text-center space-y-4">
          <MapPin className="w-24 h-24 text-accent mx-auto" />
          <p className="text-xl font-semibold text-foreground/70">
            Interactive Map Framework
          </p>
          <p className="text-sm text-foreground/50 max-w-md">
            In a production environment, this would display an embedded Google Maps iframe
            or use the Google Maps JavaScript API to show an interactive map with markers,
            directions, and location search capabilities.
          </p>
          <div className="flex gap-3 justify-center pt-4">
            <div className="px-4 py-2 bg-white rounded-lg shadow text-sm">
              <span className="font-semibold">Latitude:</span> 0.0000
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow text-sm">
              <span className="font-semibold">Longitude:</span> 0.0000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}