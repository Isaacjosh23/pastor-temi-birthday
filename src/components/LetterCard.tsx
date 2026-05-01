"use client";

export interface Letter {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
  approved: boolean;
}

interface LetterCardProps {
  letter: Letter;
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return date.toLocaleDateString();
}

export default function LetterCard({ letter }: LetterCardProps) {
  return (
    <div className="bg-cream rounded-lg border-2 border-gold/30 p-[2.4rem] shadow-md hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="mb-[1.6rem]">
        <h3
          className="text-mahogany text-[1.6rem] font-bold mb-[0.4rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {letter.name}
        </h3>
        <p className="text-mahogany/60 text-[1.2rem]">
          {formatRelativeTime(letter.createdAt)}
        </p>
      </div>

      {/* Message */}
      <p className="text-mahogany/80 text-[1.4rem] leading-relaxed whitespace-pre-wrap">
        {letter.message}
      </p>

      {/* Decorative Line */}
      <div className="mt-[1.6rem] pt-[1.6rem] border-t border-gold/20" />
    </div>
  );
}
