import { useEffect, useState } from "react";
import LettersHeader from "./components/LettersHeader";
import { Letter } from "../LetterCard";
import { LetterFormData } from "../LetterForm";
import LettersGrid from "./components/LettersGrid";

function LettersPage() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load letters from localStorage on mount
  useEffect(() => {
    const savedLetters = localStorage.getItem("letters");
    if (savedLetters) {
      try {
        const parsed = JSON.parse(savedLetters);
        setLetters(
          parsed.map((letter: any) => ({
            ...letter,
            createdAt: new Date(letter.createdAt),
          })),
        );
      } catch (error) {
        console.error("Error loading letters:", error);
      }
    }
  }, []);

  const handleSubmitLetter = async (data: LetterFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newLetter: Letter = {
        id: Date.now().toString(),
        name: data.name,
        message: data.message,
        createdAt: new Date(),
        approved: true, // In production, this would be false until moderated
      };

      const updatedLetters = [newLetter, ...letters];
      setLetters(updatedLetters);

      // Save to localStorage
      localStorage.setItem("letters", JSON.stringify(updatedLetters));
    } catch (error) {
      console.error("Error submitting letter:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col flex-1 pt-28">
      <LettersHeader />

      <LettersGrid
        onSubmitLetter={handleSubmitLetter}
        letters={letters}
        isLoading={isLoading}
      />
    </main>
  );
}

export default LettersPage;
