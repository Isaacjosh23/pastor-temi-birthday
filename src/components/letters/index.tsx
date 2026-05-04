"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import LetterForm from "@/components/LetterForm";
import LettersGrid from "./components/LettersGrid";
import LetterModal from "./components/LetterModal";
import LettersHeader from "./components/LettersHeader";
import { useLettersLogic } from "@/hooks/useLettersLogic";

export default function LettersPage() {
  const {
    activeTab,
    setActiveTab,
    sortOrder,
    setSortOrder,
    setSelectedLetter,
    currentPage,
    totalPages,
    handlePageChange,
    isFetching,
    handleSubmit,
    isLoading,
    selectedLetter,
    paginatedLetters,
    setCurrentPage,
  } = useLettersLogic();

  return (
    <main className="flex flex-col flex-1 pt-28 min-h-screen bg-cream">
      <LettersHeader />

      <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem]">
        <div className="max-w-512 mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
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
                isFetching={isFetching}
              />
            </TabsContent>

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

      {selectedLetter && (
        <LetterModal
          letter={selectedLetter}
          onClose={() => setSelectedLetter(null)}
        />
      )}
    </main>
  );
}
