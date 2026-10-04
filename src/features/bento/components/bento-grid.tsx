import { Reveal } from "@/shared/components/ui/reveal";
import { SectionHeading } from "@/shared/components/ui/section-heading";
import { cn } from "@/shared/lib/utils";
import { BENTO_LAYOUT } from "../data/bento-layout.data";
import type { BentoCell } from "../types";

const COLS_CLASS: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

const SPAN_CLASS: Record<number, string> = {
  2: "sm:col-span-2",
  3: "sm:col-span-3",
};

function renderCell(cell: BentoCell) {
  if (cell.children) {
    return (
      <div key={cell.id} className="flex h-full flex-col gap-3">
        {cell.children.map(({ id, component: Card }) => (
          <div key={id} className="flex-1">
            <Card />
          </div>
        ))}
      </div>
    );
  }

  if (!cell.component) return null;
  const Card = cell.component;

  return (
    <div
      key={cell.id}
      className={cn("h-full", cell.colSpan && SPAN_CLASS[cell.colSpan])}
    >
      <Card />
    </div>
  );
}

/**
 * Server-rendered grid. Only the `Reveal` wrapper is a client island, so cards
 * stay server components unless they opt in to `"use client"` themselves.
 */
export function BentoGrid() {
  return (
    <section
      aria-labelledby="overview-heading"
      id="overview"
      className="mt-16 scroll-mt-24"
    >
      <SectionHeading id="overview-heading" index="01" title="Overview" />
      <div className="space-y-3">
        {BENTO_LAYOUT.map((row, rowIndex) => (
          <Reveal
            key={row.cells[0]?.id ?? rowIndex}
            delay={rowIndex * 0.07}
            className={cn("grid grid-cols-1 gap-3", COLS_CLASS[row.cols ?? 3])}
          >
            {row.cells.map(renderCell)}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
