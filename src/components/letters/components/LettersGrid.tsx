import LetterCard, { Letter } from "@/components/LetterCard";
import LetterForm, { LetterFormData } from "@/components/LetterForm";

interface LettersGridProps {
  onSubmitLetter: (data: LetterFormData) => Promise<void>;
  isLoading: boolean;
  letters: Letter[];
}

function LettersGrid({ onSubmitLetter, isLoading, letters }: LettersGridProps) {
  return (
    <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-cream">
      <div className="max-w-480 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[4.8rem]">
        <div className="lg:col-span-1">
          <div className="sticky top-36 bg-white rounded-lg border-2 border-gold/30 p-[2.4rem] shadow-lg">
            <h2
              className="text-mahogany text-[2rem] font-bold mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ✉ Write a Letter
            </h2>
            <LetterForm onSubmit={onSubmitLetter} isLoading={isLoading} />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div>
            <h2
              className="text-mahogany text-[2.4rem] font-bold mb-[2.4rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Messages ({letters.length})
            </h2>

            {letters.length === 0 ? (
              <div className="text-center py-[6.4rem] bg-white rounded-lg border-2 border-gold/20">
                <p className="text-mahogany/60 text-[1.6rem] mb-[1.6rem]">
                  No messages yet. Be the first to share your thoughts!
                </p>
                <p className="text-mahogany/40 text-[1.4rem]">
                  Use the form to the left to write your letter.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {letters
                  .filter((letter) => letter.approved)
                  .map((letter) => (
                    <LetterCard key={letter.id} letter={letter} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LettersGrid;
