"use client";

import { useEffect } from "react";
import { Letter } from "@/components/LetterCard";
import { formatDistanceToNow } from "date-fns";

interface LetterModalProps {
  letter: Letter;
  onClose: () => void;
}

export default function LetterModal({ letter, onClose }: LetterModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[2.4rem]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-mahogany/60 backdrop-blur-sm" />

      <div
        className="relative bg-cream rounded-2xl shadow-2xl w-full max-w-240 max-h-[85vh] overflow-y-auto p-[3.2rem] md:p-[4.8rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-[3.2rem] h-[3.2rem] rounded-full bg-mahogany/10 hover:bg-mahogany/20 text-mahogany flex items-center justify-center text-[1.8rem] transition-colors duration-200 cursor-pointer"
        >
          ×
        </button>

        <p
          className="text-mahogany text-[1.8rem] font-bold mb-[0.4rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {letter.name}
        </p>
        <p className="text-mahogany/50 text-[1.3rem] mb-[2.4rem]">
          {formatDistanceToNow(new Date(letter.createdAt), { addSuffix: true })}
        </p>

        <div className="h-px bg-gold/30 mb-[2.4rem]" />

        <h2
          className="text-mahogany text-[2.2rem] font-bold mb-[1.6rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {letter.title}
        </h2>

        <p
          className="text-mahogany/80 text-[1.6rem] leading-[1.9] whitespace-pre-wrap mb-[2.4rem]"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          {letter.message}
        </p>

        <p
          className="text-mahogany/60 text-[1.5rem] italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          — {letter.name}
        </p>
      </div>
    </div>
  );
}
