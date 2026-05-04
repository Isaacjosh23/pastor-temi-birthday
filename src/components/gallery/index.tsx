"use client";

import GalleryGrid from "@/components/gallery/components/GalleryGrid";
import GalleryHeader from "@/components/gallery/components/GalleryHeader";

function GalleryPage() {
  return (
    <main className="flex flex-col flex-1 pt-28">
      <GalleryHeader />

      <GalleryGrid />
    </main>
  );
}

export default GalleryPage;
