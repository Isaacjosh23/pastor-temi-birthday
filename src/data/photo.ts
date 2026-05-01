export interface Photo {
  id: number;
  src: string;
  alt: string;
  category?: "featured" | "gallery" | "throwback" | "current";
}

export interface HeroSlides {
  src: string;
  alt: string;
}

export const heroSlides: HeroSlides[] = [
  {
    src: "https://placehold.co/1920x1080/2C1A0A/F5E6C8?text=Photo+1",
    alt: "Pastor photo 1",
  },
  {
    src: "https://placehold.co/1920x1080/1A0E05/D4A84B?text=Photo+2",
    alt: "Pastor photo 2",
  },
  {
    src: "https://placehold.co/1920x1080/3C2415/F5E6C8?text=Photo+3",
    alt: "Pastor photo 3",
  },
  {
    src: "https://placehold.co/1920x1080/2C1A0A/D4A84B?text=Photo+4",
    alt: "Pastor photo 4",
  },
];

// Featured photos for home page preview
export const featuredPhotos: Photo[] = [
  {
    id: 1,
    src: "https://placehold.co/500x500/2C1A0A/F5E6C8?text=Photo+1",
    alt: "Pastor photo 1",
    category: "featured",
  },
  {
    id: 2,
    src: "https://placehold.co/500x500/1A0E05/D4A84B?text=Photo+2",
    alt: "Pastor photo 2",
    category: "featured",
  },
  {
    id: 3,
    src: "https://placehold.co/500x500/3C2415/F5E6C8?text=Photo+3",
    alt: "Pastor photo 3",
    category: "featured",
  },
  {
    id: 4,
    src: "https://placehold.co/500x500/2C1A0A/D4A84B?text=Photo+4",
    alt: "Pastor photo 4",
    category: "featured",
  },
];

// All gallery photos (can be populated later)
export const allPhotos: Photo[] = [...featuredPhotos];
