"use client";

import { useState } from "react";
import { SovereignHeader } from "@/components/SovereignHeader";
import { RelationshipToggle, type RelationshipMode } from "@/components/RelationshipToggle";
import { NavigationDock } from "@/components/NavigationDock";
import { CommandMatrix } from "@/components/CommandMatrix";
import { CommunicationCanvas } from "@/components/CommunicationCanvas";
import { GeminiChatbox } from "@/components/GeminiChatbox";
import { TTSAudioBar } from "@/components/TTSAudioBar";
import { SEO } from "@/components/SEO";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Radio } from "lucide-react";

export default function Home() {
  const [isGeminiOpen, setIsGeminiOpen] = useState(false);
  const [previewMessage, setPreviewMessage] = useState<string>("");
  const [relationshipMode, setRelationshipMode] = useState<RelationshipMode>("formal");
  const [isOffline, setIsOffline] = useState(false);

  const handleSendToPreview = (message: string) => {
    let formattedMessage = message;
    
    if (relationshipMode === "formal") {
      formattedMessage = `Sir/Ma'am, ${message}`;
    } else if (relationshipMode === "endearment") {
      formattedMessage = `Dear, ${message}`;
    } else if (relationshipMode === "peer") {
      formattedMessage = `Hey, ${message}`;
    }
    
    setPreviewMessage(formattedMessage);
  };

  const handleCardClick = (message: string) => {
    handleSendToPreview(message);
  };

  return (
    <>
      <SEO 
        title="Dominion Freedom Pad"
        description="Emergency operations tablet interface for critical response and command coordination"
      />
      <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
        <SovereignHeader isOffline={isOffline} onOfflineToggle={setIsOffline} />
        
        {isOffline && (
          <Alert className="rounded-none border-x-0 border-t-0 border-b-4 border-transport bg-transport/10">
            <Radio className="h-5 w-5 text-transport animate-pulse" />
            <AlertDescription className="text-transport font-bold text-base flex items-center gap-2">
              Local Sovereign Network Active - Operating Fully Offline
            </AlertDescription>
          </Alert>
        )}
        
        <RelationshipToggle onModeChange={setRelationshipMode} />
        <div className="flex-1 flex overflow-hidden">
          <NavigationDock onGeminiClick={() => setIsGeminiOpen(true)} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <CommandMatrix onCardClick={handleCardClick} />
            <TTSAudioBar />
          </div>
          <CommunicationCanvas previewMessage={previewMessage} />
          <GeminiChatbox 
            isOpen={isGeminiOpen} 
            onClose={() => setIsGeminiOpen(false)}
            onSendToPreview={handleSendToPreview}
          />
        </div>
      </div>
    </>
  );
}