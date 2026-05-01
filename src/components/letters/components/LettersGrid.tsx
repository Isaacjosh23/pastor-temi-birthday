import LetterCard, { Letter } from "@/components/LetterCard";
import Pagination from "./Pagination";

interface LettersGridProps {
  letters: Letter[];
  sortOrder: "newest" | "oldest";
  onSortChange: (val: "newest" | "oldest") => void;
  onReadMore: (letter: Letter) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function LettersGrid({
  letters,
  sortOrder,
  onSortChange,
  onReadMore,
  currentPage,
  totalPages,
  onPageChange,
}: LettersGridProps) {
  return (
    <div>
      {/* Sort Dropdown */}
      <div className="flex justify-end mb-[3.2rem]">
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as "newest" | "oldest")}
          className="text-[1.4rem] text-mahogany bg-white border border-gold/40 rounded-lg px-[1.6rem] py-[0.8rem] cursor-pointer outline-none focus:border-gold transition-colors duration-200"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          <option value="newest">Most Recent</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Empty State */}
      {letters.length === 0 ? (
        <div className="text-center py-[9.6rem]">
          <p
            className="text-mahogany/50 text-[1.8rem] mb-[0.8rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            No letters yet
          </p>
          <p className="text-mahogany/40 text-[1.4rem]">
            Be the first to write one!
          </p>
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[2.4rem]">
            {letters.map((letter) => (
              <LetterCard
                key={letter.id}
                letter={letter}
                onReadMore={onReadMore}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          )}
        </>
      )}
    </div>
  );
}
