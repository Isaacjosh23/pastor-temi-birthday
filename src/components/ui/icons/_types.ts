import { ArrowRight } from "lucide-react";

export interface IconProps {
  className?: string;
}

export const Icons = {
  ArrowRight: "ArrowRight",
  Envelope: "Envelope",
  Play: "play",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
