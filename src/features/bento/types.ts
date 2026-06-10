import type React from "react";

export interface CardProps {
  className?: string;
}

export interface BentoCell {
  id: string;
  component?: React.ComponentType<CardProps>;
  colSpan?: 1 | 2 | 3;
  children?: Array<{ id: string; component: React.ComponentType<CardProps> }>;
}

export interface BentoRowConfig {
  cols?: 2 | 3;
  cells: BentoCell[];
}

export type GridLayout = BentoRowConfig[];
