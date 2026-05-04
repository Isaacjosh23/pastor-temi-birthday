import { useCallback, useEffect, useState } from "react";
import { Letter } from "@/components/LetterCard";
import { LetterFormData } from "@/components/LetterForm";

const LETTERS_PER_PAGE = 8;

export function useLettersLogic() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [activeTab, setActiveTab] = useState("read");

  const fetchLetters = useCallback(async (sort: "newest" | "oldest") => {
    setIsFetching(true);
    try {
      const res = await fetch(`/api/letters?sort=${sort}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setLetters(
        data.map((l: any) => ({ ...l, createdAt: new Date(l.created_at) })),
      );
    } catch (e) {
      console.error("Error fetching letters:", e);
      setLetters([]);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchLetters(sortOrder);
  }, [sortOrder, fetchLetters]);

  const handleSubmit = async (data: LetterFormData) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/letters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit letter");
      setActiveTab("read");
      setCurrentPage(1);
      await fetchLetters(sortOrder);
    } catch (e) {
      console.error("Error submitting letter:", e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const sortedLetters = [...letters].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedLetters.length / LETTERS_PER_PAGE);
  const paginatedLetters = sortedLetters.slice(
    (currentPage - 1) * LETTERS_PER_PAGE,
    currentPage * LETTERS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    paginatedLetters,
    allLetters: letters,
    isLoading,
    isFetching,
    selectedLetter,
    setSelectedLetter,
    currentPage,
    sortOrder,
    setSortOrder,
    activeTab,
    setActiveTab,
    handleSubmit,
    totalPages,
    setCurrentPage,
    handlePageChange,
  };
}
