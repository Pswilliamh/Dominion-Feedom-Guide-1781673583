"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ScenarioType } from "./SovereignHeader";

export interface ChatMessage {
  id: string;
  textEn: string;
  textId: string;
  timestamp: Date;
  isZoomCaption?: boolean;
}

interface CommunicationCanvasProps {
  messages: ChatMessage[];
  scenario: ScenarioType;
}

export function CommunicationCanvas({ messages, scenario }: CommunicationCanvasProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleJoinZoom = () => {
    console.log("Simulating Zoom session join...");
    alert("Zoom session joined! Messages will now appear in Zoom chat and captions.");
  };

  return (
    <aside className="w-96 bg-muted/30 border-l border-muted flex flex-col p-6">
      <div className="flex-1 bg-white rounded-lg border-2 border-accent/30 shadow-lg flex flex-col overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-muted bg-accent/5">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-accent" />
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
              Live Message Feed
            </h3>
          </div>
          {scenario === "zoom" && (
            <Button 
              onClick={handleJoinZoom}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              Join Zoom Session
            </Button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-muted/5 to-white">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  No messages yet
                </p>
                <p className="text-xs text-muted-foreground/60">
                  Click an item or type to send
                </p>
                {scenario === "zoom" && (
                  <p className="text-xs text-blue-600 font-semibold mt-2">
                    Messages will route to Zoom chat & captions
                  </p>
                )}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div key={message.id} className="flex justify-end">
                  <div className="max-w-[85%] bg-accent text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md relative">
                    {scenario === "zoom" && (
                      <div className="absolute -top-2 -left-2 bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">
                        ZOOM CHAT
                      </div>
                    )}
                    <p className="text-sm font-medium leading-relaxed">
                      {message.textEn}
                    </p>
                    <p className="text-xs italic opacity-80 mt-1 leading-relaxed">
                      {message.textId}
                    </p>
                    {scenario === "zoom" && (
                      <p className="text-[10px] opacity-70 mt-1 border-t border-white/20 pt-1">
                        📹 Sent to Zoom Captions
                      </p>
                    )}
                    <p className="text-[10px] opacity-60 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>
    </aside>
  );
}