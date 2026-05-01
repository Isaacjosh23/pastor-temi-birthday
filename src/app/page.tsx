import Hero from "@/components/Hero";
import GalleryPreview from "@/components/GalleryPreview";
import VideoSection from "@/components/VideoSection";
import LettersCTA from "@/components/LettersCTA";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <GalleryPreview />
      <VideoSection />
      <LettersCTA />
    </main>
  );
}
