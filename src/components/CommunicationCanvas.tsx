"use client";

import { MessageSquare, Radio } from "lucide-react";

interface CommunicationCanvasProps {
  previewMessage?: string;
}

export function CommunicationCanvas({ previewMessage }: CommunicationCanvasProps) {
  return (
    <aside className="w-96 bg-muted/30 border-l border-muted flex flex-col p-6 gap-6">
      <div className="flex-1 bg-white rounded-lg border-2 border-accent/30 shadow-lg p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-muted">
          <MessageSquare className="w-6 h-6 text-accent" />
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
            Live Message Preview
          </h3>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {previewMessage ? (
            <div className="w-full">
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-foreground leading-relaxed">{previewMessage}</p>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground">Message received from Gemini AI</p>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                [LIVE MESSAGE PREVIEW]
              </p>
              <p className="text-4xl font-bold text-accent/20">Aa</p>
              <p className="text-xs text-muted-foreground/60">
                Dynamic font size
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="h-64 bg-white rounded-lg border-2 border-muted shadow-lg p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-muted">
          <Radio className="w-5 h-5 text-financial" />
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
            Receiver Feedback
          </h3>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest text-center">
            [RECEIVER FEEDBACK WINDOW]
          </p>
        </div>
      </div>
    </aside>
  );
}