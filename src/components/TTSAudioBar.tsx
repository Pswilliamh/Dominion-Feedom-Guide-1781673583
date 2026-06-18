"use client";

import { useState, useRef } from "react";
import { Mic, MicOff, Volume2, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignLanguageKeyboard } from "@/components/SignLanguageKeyboard";

interface TTSAudioBarProps {
  onSendMessage?: (text: string) => void;
  language: "en" | "id";
}

export function TTSAudioBar({ onSendMessage, language }: TTSAudioBarProps) {
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const recognitionRef = useRef<any>(null);

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = language === "en" ? "en-US" : "id-ID";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleTextToSpeech = () => {
    if (!inputText.trim()) return;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(inputText);
      utterance.lang = language === "en" ? "en-US" : "id-ID";
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
      
      if (onSendMessage) {
        onSendMessage(inputText);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTextToSpeech();
    }
  };

  const handleLetterClick = (letter: string) => {
    if (letter === "BACKSPACE") {
      setInputText((prev) => prev.slice(0, -1));
    } else {
      setInputText((prev) => prev + letter);
    }
  };

  return (
    <>
      <div className="border-t-2 border-accent/20 bg-white p-3 md:p-4 flex items-center gap-2 md:gap-3">
        <Button
          onClick={handleVoiceInput}
          variant={isListening ? "default" : "outline"}
          size="sm"
          className={`${isListening ? "bg-emergency text-white animate-pulse" : "border-accent/40 text-accent hover:bg-accent/10"}`}
        >
          {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </Button>

        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type or speak your message..."
          className="flex-1 border-accent/40 focus:border-accent text-base"
        />

        <Button
          onClick={() => setShowKeyboard(!showKeyboard)}
          variant="outline"
          size="sm"
          className={`${showKeyboard ? "bg-accent text-white" : "border-accent/40 text-accent hover:bg-accent/10"}`}
        >
          <Hand className="h-4 w-4 mr-1" />
          <span className="hidden md:inline">🤟 Sign</span>
        </Button>

        <Button
          onClick={handleTextToSpeech}
          disabled={!inputText.trim()}
          variant="default"
          size="sm"
          className="bg-accent hover:bg-accent/90 text-white font-bold"
        >
          <Volume2 className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline">Send</span>
        </Button>
      </div>

      {showKeyboard && (
        <SignLanguageKeyboard
          onLetterClick={handleLetterClick}
          onClose={() => setShowKeyboard(false)}
        />
      )}
    </>
  );
}