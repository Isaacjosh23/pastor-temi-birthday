export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  provider: "vimeo" | "cloudinary";
  category?: "tribute" | "message" | "service";
}

// Featured videos for home page preview
export const featuredVideos: Video[] = [
  {
    id: "1",
    title: "A Message of Faith",
    description:
      "A heartfelt tribute celebrating the pastor's inspiring messages and spiritual guidance.",
    thumbnailUrl:
      "https://placehold.co/600x400/2C1A0A/D4A84B?text=Video+Tribute+1",
    embedUrl: "https://vimeo.com/placeholder",
    provider: "vimeo",
    category: "tribute",
  },
  {
    id: "2",
    title: "Years of Service",
    description:
      "A reflection on decades of dedicated service to the church community.",
    thumbnailUrl:
      "https://placehold.co/600x400/1A0E05/F5E6C8?text=Video+Tribute+2",
    embedUrl: "https://vimeo.com/placeholder",
    provider: "vimeo",
    category: "service",
  },
  {
    id: "3",
    title: "Community Impact",
    description:
      "Stories from those whose lives have been touched by the pastor's ministry.",
    thumbnailUrl:
      "https://placehold.co/600x400/3C2415/D4A84B?text=Video+Tribute+3",
    embedUrl: "https://vimeo.com/placeholder",
    provider: "vimeo",
    category: "tribute",
  },
];

// All videos (can be populated later with more tributes)
export const allVideos: Video[] = [...featuredVideos];
