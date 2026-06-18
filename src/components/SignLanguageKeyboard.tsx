"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// ASL Fingerspelling Hand Gesture SVG Icons (A-Z)
const ASLHandGestures = {
  A: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="50" r="15" fill="#0B3C5D" />
      <path d="M 35 40 L 35 25 L 40 25" strokeLinecap="round" />
      <path d="M 42 26 L 42 20" strokeLinecap="round" />
      <path d="M 48 26 L 48 18" strokeLinecap="round" />
      <path d="M 54 26 L 54 18" strokeLinecap="round" />
      <path d="M 60 26 L 60 20" strokeLinecap="round" />
    </svg>
  ),
  B: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 40 70 L 40 25 L 45 25 L 45 70" strokeLinecap="round" fill="#0B3C5D" />
      <path d="M 50 25 L 50 70" strokeLinecap="round" />
      <path d="M 56 25 L 56 70" strokeLinecap="round" />
      <path d="M 62 25 L 62 70" strokeLinecap="round" />
    </svg>
  ),
  C: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 60 25 Q 40 25, 40 50 Q 40 75, 60 75" strokeLinecap="round" />
      <path d="M 42 35 L 42 65" strokeLinecap="round" />
    </svg>
  ),
  D: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="40" r="8" fill="#0B3C5D" />
      <path d="M 50 48 L 50 75" strokeLinecap="round" />
      <path d="M 38 30 L 38 60" strokeLinecap="round" />
      <path d="M 44 28 L 44 62" strokeLinecap="round" />
      <path d="M 56 28 L 56 62" strokeLinecap="round" />
      <path d="M 62 30 L 62 60" strokeLinecap="round" />
    </svg>
  ),
  E: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <ellipse cx="50" cy="50" rx="18" ry="12" fill="#0B3C5D" />
      <path d="M 35 38 Q 30 35, 28 30" strokeLinecap="round" />
      <path d="M 42 36 Q 38 32, 36 26" strokeLinecap="round" />
      <path d="M 50 35 Q 47 30, 46 23" strokeLinecap="round" />
      <path d="M 58 36 Q 56 31, 56 24" strokeLinecap="round" />
      <path d="M 65 38 Q 65 34, 66 28" strokeLinecap="round" />
    </svg>
  ),
  F: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="48" cy="35" r="10" strokeLinecap="round" />
      <path d="M 50 45 L 50 75" strokeLinecap="round" />
      <path d="M 56 25 L 56 70" strokeLinecap="round" />
      <path d="M 62 25 L 62 70" strokeLinecap="round" />
      <path d="M 38 25 L 38 50" strokeLinecap="round" />
    </svg>
  ),
  G: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 35 50 L 65 50" strokeLinecap="round" strokeWidth="3" />
      <path d="M 50 35 L 50 50" strokeLinecap="round" strokeWidth="3" />
      <circle cx="38" cy="55" r="3" fill="#0B3C5D" />
      <circle cx="62" cy="55" r="3" fill="#0B3C5D" />
    </svg>
  ),
  H: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 35 50 L 65 50" strokeLinecap="round" strokeWidth="3.5" />
      <path d="M 45 35 L 45 50" strokeLinecap="round" strokeWidth="3.5" />
      <path d="M 55 35 L 55 50" strokeLinecap="round" strokeWidth="3.5" />
    </svg>
  ),
  I: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="50" r="12" fill="#0B3C5D" />
      <path d="M 50 38 L 50 25" strokeLinecap="round" strokeWidth="3" />
      <path d="M 38 45 L 38 60" strokeLinecap="round" />
      <path d="M 44 42 L 44 62" strokeLinecap="round" />
      <path d="M 56 42 L 56 62" strokeLinecap="round" />
      <path d="M 62 45 L 62 60" strokeLinecap="round" />
    </svg>
  ),
  J: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="40" r="8" fill="#0B3C5D" />
      <path d="M 50 48 L 50 65 Q 50 75, 42 75" strokeLinecap="round" strokeWidth="3" />
    </svg>
  ),
  K: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 45 25 L 45 70" strokeLinecap="round" strokeWidth="3" />
      <path d="M 52 25 L 52 70" strokeLinecap="round" strokeWidth="3" />
      <path d="M 58 40 L 58 60" strokeLinecap="round" />
      <circle cx="40" cy="50" r="4" fill="#0B3C5D" />
    </svg>
  ),
  L: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 50 25 L 50 70" strokeLinecap="round" strokeWidth="3.5" />
      <path d="M 50 25 L 65 25" strokeLinecap="round" strokeWidth="3.5" />
      <circle cx="40" cy="50" r="5" fill="#0B3C5D" />
    </svg>
  ),
  M: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="55" r="18" fill="#0B3C5D" />
      <path d="M 40 38 L 40 25" strokeLinecap="round" />
      <path d="M 46 36 L 46 22" strokeLinecap="round" />
      <path d="M 52 36 L 52 22" strokeLinecap="round" />
    </svg>
  ),
  N: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="55" r="18" fill="#0B3C5D" />
      <path d="M 42 38 L 42 25" strokeLinecap="round" />
      <path d="M 50 36 L 50 22" strokeLinecap="round" />
    </svg>
  ),
  O: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="50" r="18" strokeLinecap="round" />
      <path d="M 42 38 Q 38 35, 36 30" strokeLinecap="round" />
      <path d="M 50 35 Q 48 30, 47 24" strokeLinecap="round" />
      <path d="M 58 38 Q 60 34, 62 29" strokeLinecap="round" />
    </svg>
  ),
  P: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 45 35 L 45 75" strokeLinecap="round" strokeWidth="3" />
      <path d="M 52 35 L 52 75" strokeLinecap="round" strokeWidth="3" />
      <path d="M 48 35 L 48 20" strokeLinecap="round" />
      <circle cx="40" cy="55" r="5" fill="#0B3C5D" />
    </svg>
  ),
  Q: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 45 35 L 45 75" strokeLinecap="round" strokeWidth="3" />
      <path d="M 52 35 L 52 75" strokeLinecap="round" strokeWidth="3" />
      <path d="M 48 75 L 48 85" strokeLinecap="round" />
      <circle cx="58" cy="55" r="5" fill="#0B3C5D" />
    </svg>
  ),
  R: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 45 25 L 45 70" strokeLinecap="round" strokeWidth="3" />
      <path d="M 52 25 L 52 70" strokeLinecap="round" strokeWidth="3" />
      <path d="M 48 40 L 56 32" strokeLinecap="round" />
      <circle cx="40" cy="50" r="5" fill="#0B3C5D" />
    </svg>
  ),
  S: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="50" r="16" fill="#0B3C5D" />
      <path d="M 50 34 L 50 22" strokeLinecap="round" strokeWidth="3" />
      <circle cx="50" cy="22" r="3" fill="#0B3C5D" />
    </svg>
  ),
  T: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <circle cx="50" cy="55" r="16" fill="#0B3C5D" />
      <path d="M 50 39 L 50 25" strokeLinecap="round" strokeWidth="3.5" />
      <circle cx="42" cy="45" r="3" fill="#0B3C5D" />
    </svg>
  ),
  U: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 45 25 L 45 70" strokeLinecap="round" strokeWidth="3" />
      <path d="M 52 25 L 52 70" strokeLinecap="round" strokeWidth="3" />
      <circle cx="40" cy="50" r="5" fill="#0B3C5D" />
      <circle cx="58" cy="50" r="5" fill="#0B3C5D" />
    </svg>
  ),
  V: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 42 25 L 42 70" strokeLinecap="round" strokeWidth="3" />
      <path d="M 50 25 L 50 70" strokeLinecap="round" strokeWidth="3" />
      <circle cx="36" cy="50" r="5" fill="#0B3C5D" />
      <circle cx="56" cy="50" r="5" fill="#0B3C5D" />
    </svg>
  ),
  W: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 40 25 L 40 70" strokeLinecap="round" strokeWidth="3" />
      <path d="M 47 25 L 47 70" strokeLinecap="round" strokeWidth="3" />
      <path d="M 54 25 L 54 70" strokeLinecap="round" strokeWidth="3" />
      <circle cx="34" cy="50" r="5" fill="#0B3C5D" />
      <circle cx="60" cy="50" r="5" fill="#0B3C5D" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 50 30 Q 45 35, 45 45" strokeLinecap="round" strokeWidth="3" />
      <circle cx="45" cy="45" r="4" fill="#0B3C5D" />
      <circle cx="38" cy="50" r="5" fill="#0B3C5D" />
      <circle cx="54" cy="52" r="5" fill="#0B3C5D" />
      <circle cx="60" cy="55" r="5" fill="#0B3C5D" />
    </svg>
  ),
  Y: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 35 40 L 35 25" strokeLinecap="round" strokeWidth="3.5" />
      <path d="M 55 40 L 55 25" strokeLinecap="round" strokeWidth="3.5" />
      <circle cx="45" cy="55" r="10" fill="#0B3C5D" />
    </svg>
  ),
  Z: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="2.5">
      <path d="M 50 25 L 50 45 L 40 55 L 50 65" strokeLinecap="round" strokeWidth="3" />
      <circle cx="42" cy="48" r="4" fill="#0B3C5D" />
      <circle cx="56" cy="52" r="5" fill="#0B3C5D" />
      <circle cx="62" cy="58" r="5" fill="#0B3C5D" />
    </svg>
  ),
};

interface SignLanguageKeyboardProps {
  onLetterClick: (letter: string) => void;
  onClose: () => void;
}

export function SignLanguageKeyboard({ onLetterClick, onClose }: SignLanguageKeyboardProps) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  // Keyboard layout: QWERTY style
  const rows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split(""),
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white border-t-4 border-accent shadow-2xl z-50 animate-slide-up">
      <div className="flex items-center justify-between px-4 py-2 bg-accent/10 border-b border-accent/20">
        <h3 className="text-lg font-bold font-heading text-accent">🤟 Sign Language Keyboard</h3>
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="text-accent hover:bg-accent/20"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4 space-y-2 max-h-[50vh] overflow-y-auto">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="flex justify-center gap-1"
            style={{ paddingLeft: rowIdx === 1 ? "2rem" : rowIdx === 2 ? "4rem" : "0" }}
          >
            {row.map((letter) => {
              const GestureIcon = ASLHandGestures[letter as keyof typeof ASLHandGestures];
              return (
                <button
                  key={letter}
                  onClick={() => onLetterClick(letter)}
                  className="relative w-16 h-20 md:w-20 md:h-24 bg-slate-50 border-2 border-slate-300 rounded-lg hover:bg-blue-50 hover:border-accent active:scale-95 transition-all duration-150 shadow-md hover:shadow-lg"
                >
                  {/* Sign Language Hand Gesture */}
                  <div className="w-full h-full p-2 flex items-center justify-center">
                    <GestureIcon />
                  </div>
                  
                  {/* Small Letter Index (top-right corner) */}
                  <div className="absolute top-1 right-1 text-[10px] font-bold text-slate-600 bg-white/80 rounded px-1">
                    {letter}
                  </div>
                </button>
              );
            })}
          </div>
        ))}
        
        {/* Space and Backspace Row */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => onLetterClick("BACKSPACE")}
            className="px-6 py-3 bg-destructive/90 text-white font-bold rounded-lg hover:bg-destructive active:scale-95 transition-all duration-150 shadow-md"
          >
            ← Backspace
          </button>
          <button
            onClick={() => onLetterClick(" ")}
            className="px-16 py-3 bg-slate-200 text-slate-800 font-bold rounded-lg hover:bg-slate-300 active:scale-95 transition-all duration-150 shadow-md"
          >
            Space
          </button>
        </div>
      </div>
    </div>
  );
}