"use client";

import { allPhotos } from "@/data/photo";
import Image from "next/image";

interface GalleryLightModalProps {
  selectedPhoto: number | null;
  onSelectedPhoto: (id: number | null) => void;
}

function GalleryLightModal({
  selectedPhoto,
  onSelectedPhoto,
}: GalleryLightModalProps) {
  return (
    <>
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-[2.4rem] bg-black/80 backdrop-blur-sm"
          onClick={() => onSelectedPhoto(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allPhotos[selectedPhoto - 1]?.src || ""}
              alt={allPhotos[selectedPhoto - 1]?.alt || ""}
              width={1200}
              height={800}
              className="w-full h-full object-contain rounded-lg"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />

            <button
              onClick={() => onSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-cream hover:text-gold transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg
                className="w-[3.2rem] h-[3.2rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex justify-between items-center mt-[2.4rem]">
              <button
                onClick={() =>
                  onSelectedPhoto(
                    selectedPhoto === 1
                      ? allPhotos.length
                      : (selectedPhoto || 1) - 1,
                  )
                }
                className="px-[2.4rem] py-4 rounded-full bg-gold/20 text-cream hover:bg-gold/40 transition-colors duration-300 font-semibold"
              >
                ← Previous
              </button>
              <span className="text-cream/70 text-[1.4rem]">
                {selectedPhoto} / {allPhotos.length}
              </span>
              <button
                onClick={() =>
                  onSelectedPhoto(
                    selectedPhoto === allPhotos.length
                      ? 1
                      : (selectedPhoto || 1) + 1,
                  )
                }
                className="px-[2.4rem] py-4 rounded-full bg-gold/20 text-cream hover:bg-gold/40 transition-colors duration-300 font-semibold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryLightModal;
