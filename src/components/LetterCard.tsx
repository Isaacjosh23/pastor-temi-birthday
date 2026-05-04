import { formatDistanceToNow } from "date-fns";

export interface Letter {
  id: string;
  name: string;
  title: string;
  message: string;
  createdAt: Date;
  approved: boolean;
}

interface LetterCardProps {
  letter: Letter;
  onReadMore: (letter: Letter) => void;
}

export default function LetterCard({ letter, onReadMore }: LetterCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gold/25 p-[2.4rem] flex flex-col gap-[1.2rem] hover:shadow-md hover:border-gold/50 transition-all duration-300">
      <div>
        <p
          className="text-mahogany text-[1.5rem] font-bold leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {letter.name}
        </p>
        <p className="text-mahogany/45 text-[1.2rem] mt-[0.2rem]">
          {formatDistanceToNow(new Date(letter.createdAt), { addSuffix: true })}
        </p>
      </div>

      <div className="h-px bg-gold/20" />

      <h3
        className="text-mahogany text-[1.6rem] font-bold leading-snug"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {letter.title}
      </h3>

      <p
        className="text-mahogany/70 text-[1.4rem] leading-relaxed line-clamp-4 flex-1"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {letter.message}
      </p>

      <p
        className="text-mahogany/50 text-[1.3rem] italic"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        — {letter.name}
      </p>

      <button
        onClick={() => onReadMore(letter)}
        className="text-gold-dark text-[1.3rem] font-medium text-left hover:text-gold transition-colors duration-200 cursor-pointer w-fit"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        Read More →
      </button>
    </div>
  );
}
