"use client";

import { allPhotos } from "@/data/photo";
import Image from "next/image";

interface GalleryGridProps {
  onSelectedPhoto: (id: number | null) => void;
}

function GalleryGrid({ onSelectedPhoto }: GalleryGridProps) {
  return (
    <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-cream">
      <div className="max-w-480 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.6rem]">
          {allPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative h-112 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => onSelectedPhoto(photo.id)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryGrid;
