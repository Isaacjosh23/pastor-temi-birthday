"use client";

import GalleryGrid from "@/components/gallery/components/GalleryGrid";
import GalleryHeader from "@/components/gallery/components/GalleryHeader";
import GalleryLightModal from "@/components/gallery/components/GalleryLightModal";
import { useState } from "react";

function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <main className="flex flex-col flex-1 pt-28">
      <GalleryHeader />

      <GalleryGrid onSelectedPhoto={setSelectedPhoto} />

      <GalleryLightModal
        selectedPhoto={selectedPhoto}
        onSelectedPhoto={setSelectedPhoto}
      />
    </main>
  );
}

export default GalleryPage;
