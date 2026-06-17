"use client";

import { useState } from "react";
import { X, Send, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface GeminiChatboxProps {
  isOpen: boolean;
  onClose: () => void;
  onSendToPreview: (message: string) => void;
}

const mockConversation: Message[] = [
  { role: "assistant", content: "Hello! I'm Gemini AI. How can I assist you with your operations today?" },
  { role: "user", content: "Show me the current transport status" },
  { role: "assistant", content: "I've retrieved the transport data. All active routes are operating normally. Route Alpha-7 is at 92% capacity, Route Beta-3 at 78%, and Route Gamma-1 at 65%. Would you like detailed metrics?" },
  { role: "user", content: "What about the security alerts?" },
  { role: "assistant", content: "Current security status: 2 low-priority alerts in Sector 4, resolved 15 minutes ago. No active threats. All perimeter sensors are operational. The last routine check was completed at 14:45." },
];

export function GeminiChatbox({ isOpen, onClose, onSendToPreview }: GeminiChatboxProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(mockConversation);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage: Message = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  const handleSendToPreview = () => {
    if (!input.trim()) return;
    onSendToPreview(input);
    setInput("");
  };

  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-screen w-96 bg-white shadow-2xl border-l-2 border-gemini transform transition-transform duration-300 ease-in-out z-50",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="h-full flex flex-col">
        <div className="bg-gemini px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-gemini font-bold text-sm">G</span>
            </div>
            <h2 className="text-white font-bold text-lg font-heading">GEMINI AI CHAT</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/10">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "flex gap-3",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 bg-gemini rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
              )}
              <div
                className={cn(
                  "max-w-[75%] rounded-lg px-4 py-3 text-sm",
                  msg.role === "user"
                    ? "bg-accent text-white"
                    : "bg-white border border-muted shadow-sm"
                )}
              >
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">U</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-muted space-y-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your message..."
            className="resize-none min-h-[80px] font-sans"
          />
          <div className="flex gap-2">
            <Button
              onClick={handleSend}
              className="flex-1 bg-gemini hover:bg-gemini/90 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
            <Button
              onClick={handleSendToPreview}
              variant="outline"
              className="flex-1 border-accent text-accent hover:bg-accent hover:text-white"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Send to Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}