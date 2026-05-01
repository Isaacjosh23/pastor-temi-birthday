"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import LetterForm, { LetterFormData } from "@/components/LetterForm";
import LettersGrid from "./components/LettersGrid";
import { Letter } from "@/components/LetterCard";
import LetterModal from "./components/LetterModal";
import LettersHeader from "./components/LettersHeader";

const LETTERS_PER_PAGE = 8;

export default function LettersPage() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [activeTab, setActiveTab] = useState("read");

  useEffect(() => {
    const saved = localStorage.getItem("letters");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setLetters(
          parsed.map((l: any) => ({ ...l, createdAt: new Date(l.createdAt) })),
        );
      } catch (e) {
        console.error("Error loading letters:", e);
      }
    }
  }, []);

  const handleSubmit = async (data: LetterFormData) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const newLetter: Letter = {
        id: Date.now().toString(),
        name: data.name,
        title: data.title,
        message: data.message,
        createdAt: new Date(),
        approved: true,
      };
      const updated = [newLetter, ...letters];
      setLetters(updated);
      localStorage.setItem("letters", JSON.stringify(updated));
      setActiveTab("read");
      setCurrentPage(1);
    } catch (e) {
      console.error("Error submitting letter:", e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const approvedLetters = letters.filter((l) => l.approved);

  const sortedLetters = [...approvedLetters].sort((a, b) => {
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

  return (
    <main className="flex flex-col flex-1 pt-28 min-h-screen bg-cream">
      <LettersHeader />

      <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem]">
        <div className="max-w-512 mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Tab Triggers */}
            <TabsList className="bg-transparent border-b border-gold/30 rounded-none w-[20rem] md:w-200 lg:w-280 justify-start gap-[3.2rem] mb-16 h-auto p-0 mx-auto">
              <TabsTrigger
                value="read"
                className="bg-transparent text-[1.6rem] font-medium px-0 rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-mahogany data-[state=active]:bg-transparent data-[state=active]:shadow-none text-mahogany/50 transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Read Letters
              </TabsTrigger>
              <TabsTrigger
                value="write"
                className="bg-transparent text-[1.6rem] font-medium px-0 rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-mahogany data-[state=active]:bg-transparent data-[state=active]:shadow-none text-mahogany/50 transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Write a Letter
              </TabsTrigger>
            </TabsList>

            {/* Read Letters Tab */}
            <TabsContent value="read">
              <LettersGrid
                letters={paginatedLetters}
                sortOrder={sortOrder}
                onSortChange={(val) => {
                  setSortOrder(val);
                  setCurrentPage(1);
                }}
                onReadMore={(letter) => setSelectedLetter(letter)}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </TabsContent>

            {/* Write a Letter Tab */}
            <TabsContent value="write">
              <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gold/30 p-8 md:p-12 shadow-sm">
                <h2
                  className="text-mahogany text-[2rem] md:text-[2.4rem] font-bold mb-[3.2rem]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ✉ Write a Letter
                </h2>
                <LetterForm onSubmit={handleSubmit} isLoading={isLoading} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Letter Modal */}
      {selectedLetter && (
        <LetterModal
          letter={selectedLetter}
          onClose={() => setSelectedLetter(null)}
        />
      )}
    </main>
  );
}
