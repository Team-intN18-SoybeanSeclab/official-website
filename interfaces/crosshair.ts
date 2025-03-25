import { RefObject } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

export interface CrosshairProps {
  color?: string;
  containerRef?: RefObject<HTMLElement>;
}
