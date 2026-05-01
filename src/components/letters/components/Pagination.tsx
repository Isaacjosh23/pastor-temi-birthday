interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-[0.8rem] mt-[6.4rem]">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-[3.6rem] h-[3.6rem] rounded-full border border-gold/40 text-mahogany text-[1.4rem] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold/10 transition-colors duration-200 cursor-pointer"
      >
        ‹
      </button>

      {/* Page Numbers */}
      {getPages().map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="text-mahogany/40 text-[1.4rem] px-[0.4rem]"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`w-[3.6rem] h-[3.6rem] rounded-full text-[1.4rem] font-medium transition-all duration-200 cursor-pointer ${
              currentPage === page
                ? "bg-gold text-mahogany border border-gold"
                : "border border-gold/40 text-mahogany hover:bg-gold/10"
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-[3.6rem] h-[3.6rem] rounded-full border border-gold/40 text-mahogany text-[1.4rem] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold/10 transition-colors duration-200 cursor-pointer"
      >
        ›
      </button>
    </div>
  );
}
