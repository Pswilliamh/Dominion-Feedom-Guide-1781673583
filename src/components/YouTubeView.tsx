"use client";

import { Youtube, Lock, User, Play } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function YouTubeView() {
  const mockPlaylists = [
    { id: 1, title: "Emergency Response Training", videos: 12 },
    { id: 2, title: "Communication Protocols", videos: 8 },
    { id: 3, title: "Equipment Operation Guides", videos: 15 },
  ];

  return (
    <div className="flex-1 flex gap-6 bg-background p-8">
      <div className="w-1/3 flex flex-col gap-6">
        <Card className="border-2 border-card-glow/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading">
              <Lock className="w-6 h-6 text-accent" />
              Secure Account Access
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/70">
                Username
              </label>
              <Input
                type="text"
                placeholder="Enter username"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/70">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter password"
                className="w-full"
              />
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-card-glow/30 flex-1">
          <CardHeader>
            <CardTitle className="font-heading">Training Playlists</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockPlaylists.map((playlist) => (
              <button
                key={playlist.id}
                className="w-full p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-left"
              >
                <p className="font-semibold text-sm text-foreground">
                  {playlist.title}
                </p>
                <p className="text-xs text-foreground/60 mt-1">
                  {playlist.videos} videos
                </p>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Youtube className="w-10 h-10 text-red-600" />
          <h2 className="text-3xl font-bold text-foreground font-heading">
            YOUTUBE INTEGRATION
          </h2>
        </div>

        <div className="flex-1 bg-black rounded-lg border-2 border-card-glow/30 shadow-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
          <div className="relative z-10 text-center space-y-6">
            <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mx-auto">
              <Play className="w-16 h-16 text-white ml-2" fill="white" />
            </div>
            <p className="text-xl font-semibold text-white">
              Video Stream Window
            </p>
            <p className="text-sm text-white/70 max-w-md mx-auto">
              In a production environment, this would display an embedded YouTube
              iframe showing training videos, live streams, or instructional content
              for emergency response teams.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Play Video
              </Button>
              <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Full Screen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}